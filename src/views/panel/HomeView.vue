<template>
  <div class="p-4">
    <div class="flex justify-center w-full">
      <div
        class="anime w-1/2 shadow-md mx-2 rounded-xl bg-slate-100 group p-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-400"
      >
        <h1 class="text-xl Bes group-hover:text-white">
          <b class="text-7xl text-main Bpey group-hover:text-white">10 </b>
          نفر عضو تیم
        </h1>
      </div>
      <div
        class="anime w-1/2 shadow-md mx-2 rounded-xl bg-slate-100 group p-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-400"
      >
        <h1 class="text-xl Bes group-hover:text-white">
          <b class="text-7xl text-main Bpey group-hover:text-white">10 </b>
          پروژه تمام شده
        </h1>
      </div>
    </div>
    <div class="flex flex-col my-8 p-2">
      <div class="my-4">
        <h1
          class="underline decoration-dashed decoration-main decoration-4 underline-offset-8 text-2xl Bpey"
        >
          فعالیت های بدون توسعه دهنده
        </h1>
        <div class="flex flex-col items-center lg:flex-row lg:justify-center my-8 flex-wrap">
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>دریافت وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>دریافت وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>دریافت وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>دریافت وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>دریافت وظیفه</p>
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
          
        </div>
      </div>
      <div class="my-4">
        <h1
          class="underline decoration-dashed decoration-main decoration-4 underline-offset-8 text-2xl Bpey"
        >
          فعالیت های در حال انجام
        </h1>
        <div class="flex flex-col items-center lg:flex-row lg:justify-center my-8 flex-wrap">
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-1/4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-1/4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-1/4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده وظیفه</p>
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
          <div class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-1/4 w-full lg:w-1/4">
            <h1 class="Des text-main text-xl group-hover:text-white">کدنویسی یک صفحه خانه</h1>
            <p class="mt-2 text-gray-600 Mes text-md">لورم ایپسوم</p>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهارت های مورد نیاز:</p>
              <div class="flex flex-wrap p-1">
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  html
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  js
                </div>
                <div
                  class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
                >
                  css
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-2">
              <p class="text-main STpey text-md group-hover:text-white">مهلت پروژه:</p>
              <div
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                25 تیر 1402
              </div>
            </div>
            <div class="flex flex-col mt-2 mb-16">
              <p class="text-main STpey text-md group-hover:text-white">مربوط به پروزه:</p>
              <router-link
                :to="`/dashboard/${teamid}/projects/1234`"
                class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300"
              >
                وبسایت صرافی
              </router-link>
            </div>
            <router-link
            :to="`/dashboard/${teamid}/projects/1234/2344`"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده وظیفه</p>
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
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style></style>
