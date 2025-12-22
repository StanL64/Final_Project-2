<template>
  <AuthHeader/>
  <div class="container">
    <div class="card" style="width: 30rem;padding: 1rem;margin-left: 23rem;">
  <div class="card-body">
    <h5 class="card-title">Login to Vintage</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Enter your details below</h6>
    <br></br>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" id="" aria-describedby="emailHelp" v-model="loginData.email">
    </div>

    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="loginData.password">
    </div>
    <br></br>
  <div class="d-grid gap-2">
    <button style="background-color: teal;" class="btn btn-primary" type="submit" >Login</button>
  </div>
</form>
  </div>
  <p v-if="loginData.errorMessage" class="text-danger small mt-2">
        {{ loginData.errorMessage }}
      </p>
</div>
</div>
  

</template>
<script setup>
  import AuthHeader from '../sections/AuthHeader.vue';
  import { reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  const store = useStore()
  const router = useRouter()
  const loginData = reactive({
    email: "",
    password: "",
    isLogin: true,
    errorMessage: '',
  })
  const login = async () => {
    try {
      await store.dispatch("auth/getLoginData", loginData)
      console.log("Login berhasil")
    router.push("/")
    } catch (error) {
        loginData.errorMessage =
      error.response?.data?.error?.message || 'Failed to login.'
    }
    
  }
  
</script>
