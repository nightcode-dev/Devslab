<template>
  <div class="p-4">
    <div class="w-full flex justify-end">
      <router-link :to="{name:'dashboard-projects-new',params:{id:$route.params.id}}" class="anime rounded-xl w-fit bg-main opacity-50 flex Bes p-2 text-white hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            fill-rule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        ساخت پروژه جدید
      </router-link>
    </div>
    <div class="flex flex-col">
      <h1
        class="underline decoration-dashed decoration-main decoration-4 underline-offset-8 text-2xl Bpey"
      >
        پروژه های فعال
      </h1>
      <div class="flex flex-col items-center lg:flex-row lg:justify-center my-8 flex-wrap">
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4 border-4 border-main border-dashed"
        >
          <div class="anime bg-main text-white Bes flex p-2 mb-4 rounded-xl w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                clip-rule="evenodd"
              />
            </svg>
            سنجاق شده
          </div>
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 1000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 2000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 3000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 4000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
    <div class="flex flex-col">
      <h1
        class="underline decoration-dashed decoration-main decoration-4 underline-offset-8 text-2xl Bpey"
      >
        پروژه های پایان یافته
      </h1>
      <div class="flex flex-col items-center lg:flex-row lg:justify-center my-8 flex-wrap">
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 5000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 6000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 7000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
        <div
          class="anime relative mx-2 my-2 bg-slate-100 group hover:bg-main rounded-xl p-4 w-full lg:w-1/4"
        >
          <h1 class="Des text-main text-xl group-hover:text-white">پروژه وبسایت صرافی</h1>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ شروع پروژه:</p>
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
            <p class="text-main STpey text-md group-hover:text-white">تاریخ پایان پروژه:</p>
            <div
              class="mx-1 rounded-xl text-blue-600 bg-blue-400 p-2 Bes shadow-md bg-opacity-50 group-hover:text-500 group-hover:bg-blue-300 flex items-stertech"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              25 تیر 1402
            </div>
          </div>
          <router-link
            :to="{
              name: 'dashboard-projects-project',
              params: { id: $route.params.id, project_id: 8000 }
            }"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>مشاهده پروژه</p>
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
</template>
<script setup></script>
<style></style>
