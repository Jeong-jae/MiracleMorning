<template>
  <div>
    <Calendar v-model="calendarValue" dateFormat="yy-mm-dd" />
    <Button label="검색" class="p-button-outlined" @click="SearchData" />
    <div>
      <Timeline :value="timelineData">
        <template #content="slotProps">
          <small class="p-text-secondary">{{ slotProps.item.timestamp }}</small>
          {{ slotProps.item.name }}
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import year from "../data/year.json";

export default {
  setup() {
    let timelineData = ref([]);
    let selectYear = ref("");
    let month = ref("");
    let day = ref("");
    let calendarValue = ref(new Date());

    const SearchData = () => {
      timelineData.value = [];
      selectYear.value = calendarValue.value.getFullYear();
      month.value = calendarValue.value.getMonth() + 1;
      day.value = calendarValue.value.getDate();
      console.log(calendarValue.value.getFullYear() + "년");
      console.log(calendarValue.value.getMonth() + 1 + "월");
      console.log(calendarValue.value.getDate() + "일");

      if (year[month.value][day.value]) {
        console.log("값이 있다");
      } else {
        console.log("값이 없다");
      }
      for (var i = 0; i < year[month.value][day.value].auth.length; i++) {
        if (!year[month.value][day.value].auth.length) return;
        let hour = 0;
        let min = 0;
        if (year[month.value][day.value].auth[i].timestamp.length == 3) {
          hour = year[month.value][day.value].auth[i].timestamp.substring(0, 1);
          min = year[month.value][day.value].auth[i].timestamp.substring(1, 3);
        } else if (year[month.value][day.value].auth[i].timestamp.length == 4) {
          hour = year[month.value][day.value].auth[i].timestamp.substring(0, 2);
          min = year[month.value][day.value].auth[i].timestamp.substring(2, 4);
        }
        // year[month.value][day.value].auth[i].timestamp = `2022년 ${month.value}월 ${day.value}일 ${hour}시 ${min}분`;
        year[month.value][day.value].auth[i].timestamp = `${hour}시 ${min}분`;
        timelineData.value.push(year[month.value][day.value].auth[i]);
      }
    };

    return {
      timelineData,
      selectYear,
      month,
      day,
      calendarValue,
      SearchData,
    };
  },
};
</script>

<style></style>
