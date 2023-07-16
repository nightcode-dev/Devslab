<script setup>
import { onMounted } from 'vue'

var fadeInElements = []

const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top + 100 // 200 = buffer
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const handleScroll = (evt) => {
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
      fadeInElements.splice(i, 1) // only allow it to run once
    }
  }
}

onMounted(() => {
  fadeInElements = Array.from(document.getElementsByClassName('fadein'))
  document.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-center my-2 text-main text-2xl Bpey">تعرفه ها</h1>
    <p class="text-gray-600 text-center Mes w-3/4 mx-auto">
      <b class="Bpey text-main">دوزلب </b>همیشه در تلاش بوده تا خدمات مفید بیشری را به صورت رایگان
      به شما توسعه دهدگان گرامی عرضه کنداما تامین سرمایه و درآمد این پروژه باعث شده تا ما کمتر
      بتوانیم خدمات رایگان ارایه کنیم به همین دلیل در دوزلب ما سه پنل خدماتی داریم که شما با توجه به
      تیمتون پنل خودتان را انتخاب می کنید
    </p>
    <div class="flex flex-col items-center lg:flex-row lg:justify-center my-8 ">
      <div
        class="fadein my-4 lg:my-0 bg-slate-100 shadow-xl rounded-xl p-4 lg:w-1/3 w-full lg:mx-4 flex flex-col group hover:bg-main relative "
      >
        <h1 class="text-xl Bes">
          <b class="text-7xl text-main Bpey group-hover:text-white">0</b> هزار تومان
          <b class="text-main group-hover:text-white">ماهیانه </b>
        </h1>
        <ul
          role="list"
          class="marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-8 my-12 group-hover:marker:text-white"
        >
          <li class="text-gray-600 Mes group-hover:text-white">1 گیگ فضای ذخیره سازی پروژه ها</li>
          <li class="text-gray-600 Mes group-hover:text-white">توانایی افزودن عضو تا 5 عضو</li>
          <li class="text-gray-600 Mes group-hover:text-white">توانایی افزودن/ویرایش/حذف پروژه</li>
          <li class="text-gray-600 Mes group-hover:text-white">
            توانایی افزودن تسک های مختلف برای پروژه
          </li>
        </ul>
        <router-link
            to="/signup"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>راه اندازی پنل</p>
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
        class="fadein my-4 lg:my-0 bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/3 lg:mx-4 flex flex-col group hover:bg-main relative"
      >
        <h1 class="text-xl Bes">
          <b class="text-7xl text-main Bpey group-hover:text-white">50</b> هزار تومان
          <b class="text-main group-hover:text-white">ماهیانه </b>
        </h1>
        <ul
          role="list"
          class="marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-8 my-12 group-hover:marker:text-white"
        >
          <li class="text-gray-600 Mes group-hover:text-white">2 گیگ فضای ذخیره سازی پروژه ها</li>
          <li class="text-gray-600 Mes group-hover:text-white">توانایی افزودن عضو تا 10 عضو</li>
          <li class="text-gray-600 Mes group-hover:text-white">توانایی افزودن/ویرایش/حذف پروژه</li>
          <li class="text-gray-600 Mes group-hover:text-white">
            توانایی افزودن تسک های مختلف برای پروژه
          </li>
          <li class="text-gray-600 Mes group-hover:text-white">
            آنالیز فعالیت ها و پروژه ها و تسک ها
          </li>
        </ul>
        <router-link
            to="/signup"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>راه اندازی پنل</p>
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
        class="fadein bg-slate-100 my-4 lg:my-0 shadow-xl rounded-lg p-4 w-full lg:w-1/3 lg:mx-4 flex flex-col group hover:bg-main relative"
      >
        <h1 class="text-xl Bes">
          <b class="text-7xl text-main Bpey group-hover:text-white">100</b> هزار تومان
          <b class="text-main group-hover:text-white">ماهیانه </b>
        </h1>
        <ul
          role="list"
          class="marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-8 my-12 group-hover:marker:text-white"
        >
          <li class="text-gray-600 Mes group-hover:text-white">3 گیگ فضای ذخیره سازی پروژه ها</li>
          <li class="text-gray-600 Mes group-hover:text-white">
            توانایی افزودن عضو بیشتر از 10 عضو
          </li>
          <li class="text-gray-600 Mes group-hover:text-white">توانایی افزودن/ویرایش/حذف پروژه</li>
          <li class="text-gray-600 Mes group-hover:text-white">
            توانایی افزودن تسک های مختلف برای پروژه
          </li>
          <li class="text-gray-600 Mes group-hover:text-white">
            آنالیز فعالیت ها و پروژه ها و تسک ها
          </li>
        </ul>
          <router-link
            to="/signup"
            class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2 group-hover:text-white group-hover:hover:bg-blue-400"
          >
            <p>راه اندازی پنل</p>
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
</template>
