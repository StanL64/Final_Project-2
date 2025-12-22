<template>
    <AuthHeader/>
    <div class="card" style="width: 25rem;margin-top: 4rem;margin-left: 23rem;">
  <div class="card-body">
    <h5 class="card-title">Sign Up</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Enter your details below</h6>
    <br></br>
    <form @submit.prevent="register">

    <div class="mb-3">
        <label class="form-label">Full name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="signupData.fullname">
    </div>
    <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="signupData.username">
    </div>


  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" v-model="signupData.email">
  </div>

  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" id="password" v-model="signupData.password">
  </div>

  <div class="mb-3">
    <label class="form-label">Confirmation Password</label>
    <input type="password" class="form-control" id="confirmationPassword" v-model="signupData.confirmationPassword">
  </div>


  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="" v-model="signupData.checkbox">
    <label class="form-check-label" for="exampleCheck1">By clicking sign up, I hereby agree and consent to <a>Term & Conditions</a>; I confirm that I have read <a>Privacy Policy</a></label>
  </div>
  <div class="d-grid gap-2">
  <button style="background-color: teal;" class="btn btn-primary" type="submit">Sign Up</button>
</div>
</form>
  </div>
</div>
    
</template>
<script setup>
import {reactive, ref} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const confirmPasswordDoesNotMatch = ref("none");
const confirmPasswordMatch = ref("none")
const store = useStore()
const router = useRouter()

const register = async () => {
  if(signupData.password !== signupData.confirmationPassword){
    signupData.confirmationPassword = ""
    signupData.password = ""
    confirmPasswordDoesNotMatch.value = "none"
    confirmPasswordMatch.value = "none"
  } else {
    await store.dispatch("auth/getRegisterData", signupData)
    router.push("/")
  }
}

const confirmationPasswordCheck = () => {
  if (signupData.confirmationPassword === "") {
    confirmPasswordDoesNotMatch.value = "none";
    confirmPasswordMatch.value = "none"
    return
  }
  if (signupData.password !== signupData.confirmationPassword) {
    confirmPasswordDoesNotMatch.value = "block";
    confirmPasswordMatch.value = "none"
    return
  }

  confirmPasswordDoesNotMatch.value = "none";
  confirmPasswordMatch.value = "block";
}

const signupData = reactive({
  fullname: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
  checkbox: false,
})
</script>
