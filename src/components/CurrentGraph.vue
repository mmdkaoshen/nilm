<template>
  <div :id="graphId" class="graph" style="height: 50vh; width: 35vw"></div>
</template>

<script setup>
import { ref } from "vue";
import * as echarts from "echarts";
import { onMounted } from "vue";

const props = defineProps({
  dataY: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "实时电流",
  },
  graphId: {
    type: String,
    default: "a",
  },
});

//声明周期函数，自动执行初始化
onMounted(() => {
  init();
});
//初始化函数
function init() {
  let myChart = echarts.getInstanceByDom(
    document.getElementById(props.graphId)
  ); //有的话就获取已有echarts实例的DOM节点。
  if (myChart == null) {
    // 如果不存在，就进行初始化。
    myChart = echarts.init(document.getElementById(props.graphId));
  }

  // 绘制图表
  let options = {
    title: {
      text: props.title,
      left: "center",
    },
    tooltip: {},
    xAxis: {
      data: [],
    },
    yAxis: {
      name: "电流",
      min: -1.5,
      max: 1.5,
      interval: 0.25,
    },
    series: [
      {
        name: "电流",
        type: "line",
        data: props.dataY,
      },
    ],
  };

  // 渲染图表
  myChart.setOption(options);
}

defineExpose({
  init,
});
</script>
