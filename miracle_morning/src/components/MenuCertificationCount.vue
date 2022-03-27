<template>
  <div>
    <el-timeline>
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
  </el-timeline>
  </div>
</template>

<script>
import data from '../data/year.json'
export default {
  
  setup(){
    console.log(data);
    let activities = [
      {
        name: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        type: 'primary',
        hollow: true,
      },
      {
        name: 'Custom color',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
      },
      {
        name: 'Custom size',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
      },
      {
        name: 'Custom hollow',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
      },
      {
        name: 'Default node',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
      },
    ]
    activities = [];

    for(var month in data){
      console.log(month+"월");
      for(var day in data[month]){
        console.log(day+"일");
        if(data[month][day].data){
          for(var i = 0; i<data[month][day].data.length; i++){
            if(!data[month][day].data[i].length) return;
            let hour = 0;
            let min = 0;
            console.log(data[month][day].data[i]);
            data[month][day].data[i].type = "primary";
            data[month][day].data[i].hollow = true;
            console.log(data[month][day].data[i].timestamp.length);
            if(data[month][day].data[i].timestamp.length == 3){
              hour = data[month][day].data[i].timestamp.substring(0,1);
              min = data[month][day].data[i].timestamp.substring(1,3);
            }else if(data[month][day].data[i].timestamp.length == 4){
              hour = data[month][day].data[i].timestamp.substring(0,2);
              min = data[month][day].data[i].timestamp.substring(2,4);
            }
            console.log("hour : " + hour);
            console.log("min : " + min);
            data[month][day].data[i].timestamp = `2022년 ${month}월 ${day}일 ${hour}시 ${min}분`;
          }
          activities = data[month][day];
        }
      }
    }
    return {
      activities
    }
  },
  
}
</script>

<style>

</style>