<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="../../assets/img/Logo Horizontal.png" alt="Logo" class="navbar-brand me-4"></img>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="dropdown me-4" style="background-color: white;">
        <button style="border: 1px white solid; border-left: 2px solid grey;background-color: white;padding: 5px;" class="dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" >EN</a></li>
            <li><a class="dropdown-item" href="#">IN</a></li>
        </ul>
    </div>
    </div>
    </div>
</nav>
</template>
<script setup>
    const Authenticated = true;
    const ImageProfile = false;
    const Auth = false;
</script>
<style scoped>
  nav.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
</style>