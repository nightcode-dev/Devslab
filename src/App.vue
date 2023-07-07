<script setup>

</script>

<template>
  <div class="">
    <div class="fixed top-0 h-min flex justify-between p-2 w-full z-50 bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-gray-400">
      <div class="flex items-center p-4 z-50 ">
        <router-link active-class="text-main" to="/" class="Bpey text-xl mx-2">خانه</router-link>
        <router-link active-class="text-main" to="/aboutUs" class="Bpey text-xl mx-2">درباره ما</router-link>
      </div>
      <div class="flex justify-end items-center ">
        <img src="./assets/dark_logo.png" alt="logo" class="w- h-12">
      </div>
    </div>
    <div class="">
      <router-view class="mt-20"></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
