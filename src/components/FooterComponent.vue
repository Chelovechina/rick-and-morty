<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <img class="footer__img" src="./../assets/footer-img.png" alt="Rick" />
        <h3 class="footer__title">The goal of project</h3>
        <p class="footer__text">
          The web application was developed during an internship at Digitastic,
          focusing on utilizing Vue, Vuex, HTML, and CSS to achieve its
          objectives.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background: #202329;
}

.footer__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
  overflow: hidden;
}

.footer__img {
  position: absolute;
  top: 0;
  left: 0;
}

.footer__title {
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.footer__text {
  max-width: 280px;
  color: #fff;
  text-align: center;
  font-size: 16px;
}

@media (max-width: 992px) {
  .footer__img {
    display: none;
  }
}
</style>
