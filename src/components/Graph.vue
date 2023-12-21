<template>
  <div :id="graphId" class="graph" style="height: 50vh; width: 30vw"></div>
</template>

<script setup>
import { ref } from "vue";
import * as echarts from "echarts";
import { onMounted } from "vue";

const aa = defineProps({
  dataY: {
    type: Array,
    default: [],
  },
  dataX: {
    type: Array,
    default: [],
  },
  graphId: {
    type: String,
    default: "aaa",
  },
});

//声明周期函数，自动执行初始化
onMounted(() => {
  init();
});
//初始化函数
function init() {
  let myChart = echarts.getInstanceByDom(document.getElementById(aa.graphId)); //有的话就获取已有echarts实例的DOM节点。
  if (myChart == null) {
    // 如果不存在，就进行初始化。
    myChart = echarts.init(document.getElementById(aa.graphId));
  }

  // 绘制图表
  let options = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: aa.dataX,
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "line",
        data: aa.dataY,
      },
    ],
  };

  // 渲染图表
  myChart.setOption(options);
}
</script>
