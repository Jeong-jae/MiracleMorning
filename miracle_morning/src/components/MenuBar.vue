<template>
  <div class="header">
    <router-link to="/">메인 페이지</router-link> |
    <router-link to="/MenuTodayTimeline">금일 인증</router-link> |
    <router-link to="/MenucertificationCount">인증 횟수</router-link>
  </div>
</template>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
a {
  margin: 0 5px;
}
</style>