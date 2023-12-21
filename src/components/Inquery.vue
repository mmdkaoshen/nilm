<template>
  <div class="m-4">
    <el-cascader :options="options" :props="props" clearable />
  </div>
  <div class="demo-datetime-picker">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
  </div>
  <div>
    <Result />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Result from "./Result.vue";

const value2 = ref("");

const props = { multiple: true };

const options = [
  {
    value: 1,
    label: "iPad",
  },
  {
    value: 2,
    label: "手机",
  },
  {
    value: 3,
    label: "显示器",
  },
  {
    value: 4,
    label: "暖风机",
  },
  {
    value: 5,
    label: "电锅",
  },
];
</script>

<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker {
  padding: 30px 0;
  text-align: center;
}

.inquery {
  text-align: center;
}
</style>
