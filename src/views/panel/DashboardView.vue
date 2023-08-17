<template>
  <div class="h-screen bg-gradient-to-r from-blue-400 to-blue-300 w-full">
    <div class="flex justify-between items-center p-4">
      <div class="flex w-full">
        <router-link
          :to="`/dashboard/${teamid}/stting/profile`"
          class="anime flex shadow-inner bg-blue-400 rounded-full p-2 items-center hover:bg-blue-200 hover:shadow-xl"
        >
          <img src="../../assets/bg1.jpg" alt="" class="w-8 h-8 rounded-full ring-4 ring-main" />
          <p class="mr-2 Bes hidden md:block">امیرحسین آخوندزاده</p>
        </router-link>
        <div
          class="anime shadow-inner hidden md:inline-flex flex bg-blue-400 rounded-full p-2 items-center hover:bg-blue-200 hover:shadow-xl mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="mr-2 Bes">{{ time }}</p>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex mx-2 text-white w-full">
          <router-link
            :to="`/dashboard/${teamid}`"
            exact-active-class="bg-white bg-opacity-60 text-main"
            class="anime p-2 rounded-lg w-12 h-12 hover:bg-blue-200 hover:text-main flex items-center justify-center mx-2"
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-projects', params: { id: teamid } }"
            active-class="bg-white bg-opacity-60 text-main"
            class="anime p-2 rounded-lg w-12 h-12 hover:bg-blue-200 hover:text-main flex items-center justify-center mx-2"
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
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
              />
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-users', params: { id: teamid } }"
            active-class="bg-white bg-opacity-60 text-main"
            class="anime p-2 rounded-lg hover:bg-blue-200 hover:text-main w-12 h-12 flex items-center justify-center mx-2"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-setting', params: { id: teamid } }"
            active-class="bg-white bg-opacity-60 text-main"
            class="anime p-2 rounded-lg hover:bg-blue-200 hover:text-main w-12 h-12 flex items-center justify-center mx-2"
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </router-link>
        </div>
        <div class="flex justify-end w-full hidden md:block">
          <img src="../../assets/light_logo.png" alt="" class="h-12" />
        </div>
      </div>
    </div>
    <div class="bg-white rounded-t-3xl h-fit flex">
      <div class="w-min lg:w-1/5 bg-slate-100 rounded-tr-3xl p-2 ">
        <div class="group hover:bg-main hover:text-white bg-white shadow-xl my-4 w-3/4 mx-auto p-1 px-2 rounded-full Bes flex justify-center">
          <select name="" @change="changeTeam($event)" id="" v-model="teamid" class="Bes p-2  bg-transparent outline-none w-full">
            <option value="local" class="text-black">بدون تیم</option>
            <option value="devslab" class="text-black">دوزلب</option>
            <option value="team1" class="text-black">تیم 1</option>
            <option value="team2" class="text-black">تیم2</option>

          </select>
        </div>
        <div v-show="$route.path === `/dashboard/${teamid}`">
          <router-link
            :to="{ name: 'dashboard-home', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">خانه</h1>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-projects', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">پروژه ها</h1>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-users', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">اعضا</h1>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-setting', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">تنظیمات</h1>
          </router-link>
        </div>
        <div v-show="$route.path.includes(`/dashboard/${teamid}/projects`)">
          <router-link
            :to="{ name: 'dashboard-projects', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">لیست پروژه ها</h1>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-projects-new', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
          >
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

            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">ایجاد پروژه جدید</h1>
          </router-link>
        </div>
        <div v-show="$route.path.includes(`/dashboard/${teamid}/users`)">
          <router-link
            :to="{ name: 'dashboard-users', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">لیست کاربر ها</h1>
          </router-link>
          <router-link
            :to="{ name: 'dashboard-users-statistics', params: { id: teamid } }"
            class="anime group p-2 rounded-lg hover:bg-blue-200 hover:text-main flex flex-col lg:flex-row items-center my-2"
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
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <h1 class="Bes text-lg mr-1 hidden group-hover:block lg:block">آمار کاربر ها</h1>
          </router-link>
        </div>
        <div v-show="$route.path.includes(`/dashboard/${teamid}/setting`)">setting sidebar</div>
      </div>
      <div class="lg:w-3/4 w-2/3">
        <router-view class="w-full"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const teamid = ref(route.params.id)
var time = new Date()
time = time.toLocaleDateString('fa-IR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

function changeTeam(e){
  teamid.value = e.target.value
  router.push({
    params:{
      id:teamid.value
    }
  })
}
</script>

<style></style>
