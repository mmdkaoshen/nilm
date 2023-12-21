<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="radius">
          <DeviceLabel />
        </div>
      </el-header>
      <el-container>
        <el-main class="graph">
          <el-scrollbar height="650px">
            <el-row :gutter="gutter">
              <el-col :span="span">
                <Graph :dataF="data1" graphId="a" />,
              </el-col>
              <el-col :span="span">
                <Graph :dataF="data2" graphId="b" />,
              </el-col>
            </el-row>
            <el-row :gutter="gutter">
              <el-col :span="span">
                <Graph :dataF="data3" graphId="c" />,
              </el-col>
              <el-col :span="span">
                <Graph :dataF="data4" graphId="d" />,
              </el-col>
            </el-row>
          </el-scrollbar>
        </el-main>
        <el-aside class="inquery" width="400px">
          <Test />
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DeviceLabel from "./components/DeviceLabel.vue";
import Test from "./components/Test.vue";
import Graph from "./components/Graph.vue";

const data1 = [5, 20, 56, 10, 10, 20];

const data2 = [5, 30, 16, 10, 70, 10];

const data3 = [5, 25, 46, 10, 40, 20];

const data4 = [75, 25, 46, 40, 40, 20];

const span = ref(12);
const gutter = ref(15);

const radiusGroup = ref([
  {
    name: "No Radius",
    type: "",
  },
  {
    name: "Small Radius",
    type: "small",
  },
  {
    name: "Large Radius",
    type: "base",
  },
  {
    name: "Round Radius",
    type: "round",
  },
]);

const getValue = (type) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    );
  return getCssVarValue("border-radius", type);
};
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
