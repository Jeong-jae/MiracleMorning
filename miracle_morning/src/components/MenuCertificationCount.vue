<template>
  <div>
    <div class="card">
      <h2>2022년 인증 횟수</h2>
      <DataTable :value="certificationData" responsiveLayout="scroll">
        <Column field="name" header="닉네임"></Column>
        <Column field="jan" header="1월" :sortable="true"></Column>
        <Column field="feb" header="2월" :sortable="true"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let certificationData = [
      { name: "이정재", jan: "1", feb: "8" },
      { name: "정우성", jan: "3", feb: "6" },
      { name: "홍길동", jan: "9", feb: "2" },
    ];
    return {
      certificationData,
    };
  },
};
</script>

<style></style>
