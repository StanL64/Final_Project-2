import { createStore } from "vuex";
import auth from './auth'
import product from "./product";

export const store = createStore({
    modules: {
        auth,
        product
    }
})
export default store