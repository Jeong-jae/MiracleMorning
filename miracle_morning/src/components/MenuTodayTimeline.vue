<template>
  <div>
    <Button label="Primary" class="p-button-outlined" />
    <div>{{ selectMonth }}월 {{ selectDay }}일 인증</div>
    <!-- <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.name }}
      </el-timeline-item>
    </el-timeline> -->
  </div>
</template>

<script>
import { ref } from "vue";
import data from "../data/year.json";
export default {
  setup() {
    let activities = ref([
      {
        name: "Custom icon",
        timestamp: "2018-04-12 20:46",
        type: "primary",
        hollow: true,
      },
      {
        name: "Custom color",
        timestamp: "2018-04-03 20:46",
        type: "primary",
        hollow: true,
      },
      {
        name: "Custom size",
        timestamp: "2018-04-03 20:46",
        type: "primary",
        hollow: true,
      },
      {
        name: "Custom hollow",
        timestamp: "2018-04-03 20:46",
        type: "primary",
        hollow: true,
      },
      {
        name: "Default node",
        timestamp: "2018-04-03 20:46",
        type: "primary",
        hollow: true,
      },
    ]);
    activities = ref([]);
    let selectMonth = ref("");
    let selectDay = ref("");

    for (var month in data) {
      // console.log(month + "월");
      for (var day in data[month]) {
        // console.log(day + "일");
        // console.log(data[month][day]);
        // console.log(data[month][day].data);
        if (data[month][day].data) {
          for (var i = 0; i < data[month][day].data.length; i++) {
            if (!data[month][day].data.length) return;
            selectMonth.value = month;
            selectDay.value = day;
            let hour = 0;
            let min = 0;
            // console.log(data[month][day].data[i]);
            data[month][day].data[i].type = "primary";
            data[month][day].data[i].hollow = true;
            if (data[month][day].data[i].timestamp.length == 3) {
              hour = data[month][day].data[i].timestamp.substring(0, 1);
              min = data[month][day].data[i].timestamp.substring(1, 3);
            } else if (data[month][day].data[i].timestamp.length == 4) {
              hour = data[month][day].data[i].timestamp.substring(0, 2);
              min = data[month][day].data[i].timestamp.substring(2, 4);
            }
            data[month][day].data[
              i
            ].timestamp = `2022년 ${month}월 ${day}일 ${hour}시 ${min}분`;
            activities.value.push(data[month][day].data[i]);
          }
        }
      }
    }
    return {
      activities,
      selectMonth,
      selectDay,
    };
  },
};
</script>

<style></style>
