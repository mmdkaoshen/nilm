<template>
  <div class="deviceLabel">
    <el-row :gutter="bb">
      <el-col class="labelCol" v-for="path in paths" :span="aa">
        <el-image
          class="img"
          style="width: 100px; height: 100px"
          :src="path"
          fit="cover"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const aa = ref(2);
const bb = ref(1);
const paths = ref([
  "./src/assets/icon/iPad1.png",
  "./src/assets/icon/手机0.png",
  "./src/assets/icon/暖风机1.png",
]);
</script>

<style></style>
