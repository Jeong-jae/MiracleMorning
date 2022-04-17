<template>
  <div class="container">
    <TabMenu :model="items" />
    <router-view class="body"></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    let items = [
      { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
      {
        label: "MenuTodayTimeline",
        icon: "pi pi-fw pi-pencil",
        to: "/MenuTodayTimeline",
      },
      {
        label: "MenuCertificationCount",
        icon: "pi pi-fw pi-calendar",
        to: "/MenuCertificationCount",
      },
    ];
    return { items };
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
