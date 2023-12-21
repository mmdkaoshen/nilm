<template>
  <div :id="graphId" class="graph" style="height: 50vh; width: 30vw"></div>
</template>

<script setup>
import { ref } from "vue";
import * as echarts from "echarts";
import { onMounted } from "vue";

const aa = defineProps({
  dataF: {
    type: Array,
    default: [5, 20, 56, 10, 10, 20],
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
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "line",
        data: aa.dataF,
      },
    ],
  };

  // 渲染图表
  myChart.setOption(options);
}
</script>
