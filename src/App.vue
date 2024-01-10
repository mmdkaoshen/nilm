<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="radius">
          <DeviceLabel />
        </div>
        <div>
          <Test />
        </div>
        <el-button type="primary" @click="submit">Primary</el-button>
      </el-header>
      <el-container>
        <el-main class="graph">
          <el-scrollbar height="650px">
            <el-row :gutter="gutter">
              <el-col :span="span">
                <CurrentGraph
                  ref="GraphDom1"
                  :dataY="data1"
                  title="iPad电流"
                  graphId="a"
                />,
              </el-col>
              <el-col :span="span">
                <CurrentGraph
                  ref="GraphDom2"
                  :dataY="data2"
                  title="电锅电流"
                  graphId="b"
                />,
              </el-col>
            </el-row>
            <el-row :gutter="gutter">
              <el-col :span="span">
                <CurrentGraph
                  ref="GraphDom3"
                  :dataY="data3"
                  title="显示器电流"
                  graphId="c"
                />,
              </el-col>
              <el-col :span="span">
                <CurrentGraph
                  ref="GraphDom4"
                  :dataY="data4"
                  title="暖风机电流"
                  graphId="d"
                />,
              </el-col>
            </el-row>
            <el-row :gutter="gutter">
              <el-col :span="span">
                <CurrentGraph
                  ref="GraphDom5"
                  :dataY="data5"
                  title="手机机电流"
                  graphId="e"
                />,
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
import CurrentGraph from "./components/CurrentGraph.vue";
import Test from "./components/Test.vue";

import { sendGetRealStatus } from "./api/data.js";

const data1 = ref([]);

const data2 = ref([]);

const data3 = ref([]);

const data4 = ref([]);

const data5 = ref([]);

const span = ref(12);
const gutter = ref(15);

const GraphDom1 = ref(null);
const GraphDom2 = ref(null);
const GraphDom3 = ref(null);
const GraphDom4 = ref(null);
const GraphDom5 = ref(null);

function submit() {
  sendGetRealStatus()
    .then((res) => {
      ElMessage({
        message: res.message,
        type: "success",
      });
      res = res.data.disaggregation;
      data1.value.length = 0;
      data2.value.length = 0;
      data3.value.length = 0;
      data4.value.length = 0;
      data5.value.length = 0;
      addData(res[0], data1.value);
      addData(res[1], data2.value);
      addData(res[2], data3.value);
      addData(res[3], data4.value);
      addData(res[4], data5.value);
      GraphDom1.value.init();
      GraphDom2.value.init();
      GraphDom3.value.init();
      GraphDom4.value.init();
      GraphDom5.value.init();
    })
    .catch((err) => {
      ElMessage({
        message: err.message,
        type: "error",
      });
    });
}

function addData(a, b) {
  a.forEach((item) => {
    b.push(item);
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
