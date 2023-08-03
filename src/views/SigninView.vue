<script setup>
import FormBox from '../components/FormBox.vue'
</script>

<template>
  <form-box page="signin">
    <div class="anime relative h-full">
      <h1 class="text-2xl Bpey mt-4">ورود</h1>
      <div class="py-8 w-full flex flex-col items-center mb-8">
        <div class="flex flex-col-reverse items-center w-full my-2">
          <input
            type="email"
            id="email"
            required
            v-model="email"
            class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
            placeholder="ایمیل خود را وارد کنید"
          />
          <label for="email" class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
            >ایمیل</label
          >
        </div>
        <div class="flex flex-col-reverse items-center w-full my-2">
          <input
            type="password"
            id="password"
            required
            class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
            placeholder="رمزعبور خود را وارد کنید"
          />
          <label for="password" class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
            >رمز عبور</label
          >
        </div>
      </div>
      <router-link
        :to="{name:'dashboard'}"
        class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 mt-16"
      >
        <p>ورود</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
    </div>
  </form-box>
</template>

<style scoped></style>
