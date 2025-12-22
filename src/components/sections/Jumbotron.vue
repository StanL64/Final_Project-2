<template>
    <div class="hero-banner container-fluid" style="width: 99vw">
      <img src="@/assets/img/Jumbotron.jpg" alt="Banner" class="bg-image" />
  
      <div class="hero-overlay">
        <div class="hero-card card p-4 text-center">
          <h5 class="mb-3 text-dark">Ready to declutter your closet?</h5>
          <button class="btn btn-teal">Start Selling</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
.hero-banner {
  position: absolute;
  margin-left:0;
  width: 100vw;
  height: 400px; /* Sesuaikan tinggi jika diperlukan */
  margin-bottom: 80px;
  box-sizing: border-box;
  overflow: hidden;
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* Pastikan gambar memenuhi lebar */
  height: 100%; /* Pastikan gambar memenuhi tinggi */
  object-fit: cover;
}
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-card {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    max-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  
  .btn-teal {
    background-color: #009688;
    color: #fff;
  }
  .btn-teal:hover {
    background-color: #00796b;
  }
  </style>