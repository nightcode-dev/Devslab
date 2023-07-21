<template>
  <div
    class="bg-gradient-to-br from-blue-400 to-blue-300 h-full py-12 flex items-center justify-center"
  >
    <div
      class="bg-slate-100 shadow-xl flex flex-col-reverse md:flex-row w-full mx-4 lg:w-2/3 md:w-4/5 p-2"
    >
      <div class="w-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-gray-300 p-4">
        <p class="text-lg Bes text-gray-600 text-center md:text-right">
          اکانت داری؟همین الان
          <router-link
            to="/signin"
            class="anime text-main hover:underline hover:decoration-main hover:decoration-2 hover:underline-offset-8"
            >وارد شو</router-link
          >
        </p>
      </div>
      <div class="w-full text-center">
        <div class="flex w-full justify-center mt-4">
          <div
            class="w-12 h-12 Bpey mx-4 rounded-full flex items-center justify-center text-3xl text-center"
            :class="{ 'bg-slate-300': !signup, 'bg-main text-white': signup }"
          >
            1
          </div>
          <div
            class="w-12 h-12 Bpey mx-4 rounded-full flex items-center justify-center text-3xl text-center"
            :class="{
              'bg-slate-300': !team_form,
              'bg-main text-white': team_form
            }"
          >
            2
          </div>
        </div>
        <div class="anime" :class="{ hidden: !signup, block: signup }">
          <h1 class="text-2xl Bpey mt-4">ثبت نام</h1>
          <div class="py-4 w-full flex flex-col items-center relative">
            <div class="flex flex-col-reverse items-center w-full my-2">
              <input
                type="text"
                id="first_name"
                required
                class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
                placeholder="نام خود را وارد کنید"
              />
              <label
                for="first_name"
                class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
                >نام</label
              >
            </div>
            <div class="flex flex-col-reverse items-center w-full my-2">
              <input
                type="text"
                id="last_name"
                required
                class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
              <label
                for="last_name"
                class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
                >نام خانوادگی</label
              >
            </div>
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
              <label
                for="password"
                class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
                >رمز عبور</label
              >
            </div>
            <div class="flex flex-col-reverse items-center w-full my-2">
              <input
                type="password"
                id="repass"
                required
                class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
                placeholder="رمزعبور خود را دوباره وارد کنید"
              />
              <label for="repass" class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main">
                تکرار رمز عبور</label
              >
            </div>
            <div class="flex items-center mt-2 mb-12">
              <input type="checkbox" class="accent-main ml-1" id="rules" />
              <label for="rules" class="Bes text-gray-600 text-lg"
                >قوانین را خوانده و می پذیرم</label
              >
            </div>
            <div
              @click="switchBox('team')"
              class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
            >
              <p>ایجاد تیم</p>
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
            </div>
          </div>
        </div>
        <div class="anime" :class="{ hidden: !team_form, block: team_form }">
          <h1 class="text-2xl Bpey mt-4">ایجاد تیم</h1>
          <div class="py-4 w-full flex flex-col items-center relative">
            <div class="flex flex-col-reverse items-center w-full my-2">
              <input
                type="text"
                id="team_name"
                required
                class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
                placeholder="نام انتخابی تیم خود را وارد کنید"
              />
              <label
                for="team_name"
                class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
                >نام تیم</label
              >
            </div>
            <div class="flex flex-col-reverse items-center w-full my-2">
              <textarea
                id="description"
                required
                class="anime peer bg-transparent outline-none p-2 rounded-lg Mes border-2 border-gray-300 w-3/4 hover:border-main hover:bg-white hover:shadow-xl"
                placeholder="توضیحات تیم خود را وارد کنید"
              ></textarea>
              <label
                for="last_name"
                class="anime text-lg mb-1 text-gray-400 Bes peer-hover:text-main"
                >توضیحات تیم</label
              >
            </div>
            <div class="flex items-center mt-2 mb-12">
              <input type="checkbox" class="accent-main ml-1" id="rules" />
              <label for="rules" class="Bes text-gray-600 text-lg"
                >قوانین و شرایط ایجاد تیم را خوانده و می پذیرم</label
              >
            </div>
            <div
              class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
            >
              <p>ثبت نهایی</p>
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
            </div>
            <div
              class="anime absolute bottom-4 right-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>ویرایش اطلاعات</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const signup = ref(true)
const team_form = ref(false)
const email = ref('')

function switchBox(to) {
  if (to === 'signup') {
    signup.value = true
    team_form.value = false
  } else if (to === 'team') {
    signup.value = false
    team_form.value = true
  }
}
</script>

<style></style>
