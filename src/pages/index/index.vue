<!--
 * @Author: 邱狮杰
 * @Date: 2023-02-09 21:17:58
 * @LastEditTime: 2023-10-12 14:56:17
 * @Description: 
 * @FilePath: /v3-uni-temp/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area"> </view>
  </view>
</template>

<script setup lang="ts">
import Service from '@/service/index'
Service({
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
