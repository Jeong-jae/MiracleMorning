<template>
  <div class="container">
    <MenuBar></MenuBar>
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";

export default {
  components: {
    MenuBar,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.body {
  /* background-color: #F2F2F2; */
  color: black;
  padding: 25px 25px 25px 25px;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
