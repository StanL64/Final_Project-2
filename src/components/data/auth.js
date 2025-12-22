import axios from "axios";
import Cookies from "js-cookie";
export default {
    namespaced: true,
    state() {
        return {
            token: null,
            tokenExpirationDate: null,
            userLogin: {},
            isLogin: false,
        }
    },
    mutations: {
        setToken(state, {idToken, expiresIn}) {
            state.token = idToken
            state.tokenExpirationDate = expiresIn
            Cookies.set("tokenExpirationDate", expiresIn)
            Cookies.set("jwt", idToken)
        },
        setUserLogin(state, {userData, loginStatus}) {
            state.userLogin = userData;
            state.isLogin = loginStatus
        }
    },
    actions: {
        async getRegisterData({commit, dispatch}, payload) {
            const APIkey = "AIzaSyD1swU8mgAxN47sEhPIBiFq0SZJOB4z7No"
            const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            try {
                const {data} = await axios.post(authUrl + APIkey, {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            } catch (err) {
                console.log(err)
            }
        },
        async addNewUser({commit, state}, payload) {
            try {
                const {data} = await axios.post(`https://vintage-project-41597-default-rtdb.firebaseio.com/user.json?auth=${state.token}`, payload)
                commit("setUserLogin", {userData: payload, loginStatus: true})
            } catch (err) {
                console.log(err)
            }
        },
        async getLoginData({commit, dispatch}, payload) {
            const APIkey = "AIzaSyD1swU8mgAxN47sEhPIBiFq0SZJOB4z7No"
            const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            try {
                const {data} = await axios.post(authUrl + APIkey, {
                    email: payload.email, password: payload.password, returnSecureToken: true,
                })
                commit("setToken", {
                    idToken: data.idToken,
                    expiresIn: new Date().getTime() + Number.parseInt(data.expiresIn) * 1000

                })
                await dispatch("getUser", data.localId)

            } catch (err) {
                console.log(err)
            }
        },
        async getUser({commit}, payload) {
            try {
                const {data} = await axios.get(
                    `https://vintage-project-41597-default-rtdb.firebaseio.com/user.json`
                )
                for (let key in data) {
                    if (data[key].userId === payload) {
                        Cookies.set("UID", data[key].userId)
                        commit("setUserLogin", {userData: data[key], loginStatus: true})
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}