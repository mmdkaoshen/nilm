<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="radius">
          <DeviceLabel />
        </div>
        <el-button type="primary" @click="submit">Primary</el-button>
      </el-header>
      <el-container>
        <el-main class="graph">
          <el-scrollbar height="650px">
            <el-row :gutter="gutter">
              <el-col :span="span">
                <Graph :dataY="data1" :dataX="dataX" graphId="a" />,
              </el-col>
              <el-col :span="span">
                <Graph :dataY="data2" :dataX="dataX" graphId="b" />,
              </el-col>
            </el-row>
            <el-row :gutter="gutter">
              <el-col :span="span">
                <Graph :dataY="data3" :dataX="dataX" graphId="c" />,
              </el-col>
              <el-col :span="span">
                <Graph :dataY="data4" :dataX="dataX" graphId="d" />,
              </el-col>
            </el-row>
          </el-scrollbar>
        </el-main>
        <el-aside class="inquery" width="500px">
          <Inquery />
          <Inquery />
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";

import DeviceLabel from "./components/DeviceLabel.vue";
import Inquery from "./components/Inquery.vue";
import Graph from "./components/Graph.vue";
import Test from "./components/Test.vue";

import { sendGetRealStatus } from "./api/data.js";

const data1 = reactive([]);

const data2 = ref([5, 30, 16, 10, 70, 10]);

const data3 = ref([5, 25, 46, 10, 40, 20]);

const data4 = ref([75, 25, 46, 40, 40, 20]);

const dataX = reactive([]);

const span = ref(12);
const gutter = ref(15);

function submit() {
  console.log("11111");
  sendGetRealStatus()
    .then((res) => {
      ElMessage({
        message: res.message,
        type: "success",
      });
      res = res.data.disaggregation;
      res = res[0];
      let i = 0;
      res.forEach((element) => {
        data1.push(element);
        dataX.push(i);
        i++;
      });
      console.log(data1);
      console.log(dataX);
    })
    .catch((err) => {
      ElMessage({
        message: err.message,
        type: "error",
      });
    });
}
</script>

<style>
.el-header {
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
}

.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}
</style>
