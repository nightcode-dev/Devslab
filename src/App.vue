<script setup></script>

<template>
  <div class="">
    <div
      class="fixed top-0 h-min flex justify-between p-2 w-full z-50 bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-400"
    >
      <router-link to="/signin" class=" text-slate-400 anime flex items-center justify-center hover:text-main hover:opacity-75 hover:bg-blue-200 w-14 h-14 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
      <div class="flex items-center p-4 z-50">
        <router-link
          active-class="text-main underline decoration-main decoration-4 underline-offset-8"
          to="/"
          class="Bpey text-xl mx-2"
          >خانه</router-link
        >
        <router-link
          active-class="text-main underline decoration-main decoration-4 underline-offset-8"
          to="/pricing"
          class="Bpey text-xl mx-2"
          >تعرفه ها</router-link
        >
      </div>
      <div class="flex justify-end items-center">
        <img src="./assets/dark_logo.png" alt="logo" class="h-12" />
      </div>
    </div>
    <div class="">
      <router-view class="mt-20"></router-view>
    </div>
    <div>
      <div class="flex flex-col-reverse md:flex-row bg-slate-100">
        <div class="flex flex-col p-4 w-full lg:w-1/2">
          <div class="flex flex-col">
            <div class="text-main text-xl Bpey flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1>لینک های کاربردی</h1>
            </div>
            <router-link to="/" class="anime Bes text-lg mx-2 hover:text-main mt-4"
              >خانه</router-link
            >
            <router-link to="/pricing" class="anime Bes text-lg mx-2 hover:text-main mt-2"
              >تعرفه ها</router-link
            >
          </div>
          <div class="mt-8">
            <div class="text-main text-xl Bpey flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1>شبکه های اجتماعی</h1>
            </div>
            <div class="flex p-4">
              <div
                class="anime w-16 h-16 p-4 bg-slate-200 shadow-xl mx-2 hover:text-white hover:bg-main rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </svg>
              </div>
              <div
                class="anime w-16 h-16 p-4 bg-slate-200 shadow-xl mx-2 hover:text-white hover:bg-main rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </svg>
              </div>
              <div
                class="anime w-16 h-16 p-4 bg-slate-200 shadow-xl mx-2 hover:text-white hover:bg-main rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-4 flex items-center justify-center">
          <div
            class="group bg-white shadow-xl flex w-3/4 rounded-xl p-1 border-2 border-slate-400 hover:border-main"
          >
            <div class="grow p-1 px-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                class="outline-none border-none bg-transparent w-full h-full w-full input Bes text-lg placeholder:text-slate-400"
              />
            </div>
            <div>
              <div
                class="anime bg-slate-400 w-12 h-12 rounded-xl p-3 flex items-center justify-center text-white group-hover:bg-main"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-full h-full rotate-180"
                >
                  <path
                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-gradient-to-br from-blue-400 to-blue-300 p-4 flex items-center justify-center"
      >
        <h1 class="Bmikh text-md text-white text-center w-3/4">
          تمام حقوق مطلق به دوزلب می باشد و هرگونه کپی رایت پیگرد قانونی در پی خواهد داشت
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
