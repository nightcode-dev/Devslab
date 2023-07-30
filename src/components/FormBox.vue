<template>
  <div
    class="bg-gradient-to-br from-blue-400 to-blue-300 h-full py-12 flex items-center justify-center"
  >
    <div
      class="bg-slate-100 shadow-xl flex flex-col-reverse md:flex-row w-full mx-4 lg:w-2/3 md:w-4/5 p-2"
    >
      <div class="w-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-gray-300 p-4">
        <div v-show="page === 'signup'">
          <p class="text-lg Bes text-gray-600 text-center md:text-right">
          اکانت داری؟همین الان
          <router-link
            to="/signin"
            class="anime text-main hover:underline hover:decoration-main hover:decoration-2 hover:underline-offset-8"
            >وارد شو</router-link
          >
        </p>
        </div>
        <div v-show="page === 'signin'">
          <p class="text-lg Bes text-gray-600 text-center md:text-right">
          اکانت نداری؟همین الان
          <router-link
            to="/signup"
            class="anime text-main hover:underline hover:decoration-main hover:decoration-2 hover:underline-offset-8"
            >ثبت نام کن</router-link
          >
        </p>
        </div>
      </div>
      <div class="w-full text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['page'])
</script>

<style></style>
