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
  <div class="">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-center bg-slate-100">
      <div class="w-full flex flex-col items-center justify-center p-16">
        <h1 class="text-black STpey text-2xl"><b class="text-main Bpey">devslab</b> چیه؟</h1>
        <p class="text-gray-600 Mes text-md text-center">
          <b class="text-main Bpey">دِوزلب</b> یک پلتفرم ایرانیه که یک محیط خیلی خوب برای نگه داری
          ترتیب بندی و حتی ویرایش و نوشتن کد ها فراهم می کنه این محیط کاملا مناسب تیم ها طراحی شده
          تا بتونن پروژه هاشون رو خیلی سریعتر توسعه بدن
        </p>
        <router-link
          to="/signup"
          class="fadein py-2 px-4 rounded-md border-2 border-main text-main hover:bg-main STpey text-lg hover:text-white mt-4"
        >
          شروع کن
        </router-link>
      </div>
      <div class="w-full flex items-center justify-center p-16">
        <div class="w-60 h-60 flex items-center justify-center p-8 rounded-full bg-white shadow-xl">
          <img src="../assets//labeaker.png" alt="labratoar beaker" class="h-4/5" />
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-center p-4 py-8 w-full bg-gradient-to-br from-blue-400 to-blue-300">
      <div class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main">
        <div
          class="m-auto rounded-full p-4 h-24 w-24 bg-white shadow-lg flex justify-center items-center text-main  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4/5 h-4/5"
          >
            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
            <path
              fill-rule="evenodd"
              d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 class="text-lg Bpey text-main text-center mt-2 group-hover:text-white">خدمات رایگان</h1>
        <p class="text-gray-600 Mes text-md text-center mx-8 group-hover:text-white">
          این پلتفرم تلاش میکنه تا خدمات پایه را به شما رایگان عرضه کند یعنی شما برای استفاده از
          خدمات پایه این پلتفرم نیاز به پرداخت هیچ هزینه ای ندارید و فقط واسه امکانات پیشرفته تر
          نیاز به هزینه هست
        </p>
      </div>
      <div class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main">
        <div
          class="m-auto rounded-full p-4 h-24 w-24 bg-white shadow-lg flex justify-center items-center text-main"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4/5 h-4/5"
          >
            <path
              d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z"
            />
          </svg>
        </div>
        <h1 class="text-lg Bpey text-main text-center mt-2 group-hover:text-white">فضای ذخیره سازی رایگان</h1>
        <p class="text-gray-600 Mes text-md text-center mx-8 group-hover:text-white">
          این پلتفرم به شما یک گیگ فضای ذخیره سازی رایگان میده که میتونید از اون برای ذخیره فایل ها
          و پروژه هاتون استفاده کنید
        </p>
      </div>
      <div class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main">
        <div
          class="m-auto rounded-full p-4 h-24 w-24 bg-white shadow-lg flex justify-center items-center text-main"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4/5 h-4/5"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 class="text-lg Bpey text-main text-center mt-2 group-hover:text-white">استفاده آسان</h1>
        <p class="text-gray-600 Mes text-md text-center mx-8 group-hover:text-white">
          محیط این پلتفرم طوری طراحی شده که شمابتونید خیلی سریع به همه بخش ها دسترسی داشته باشید در
          عین حال به حدی ساده باشه کخ گیج نشید و بتونید به بهترین نحوه استفاده کنید
        </p>
      </div>
    </div>
  </div>
</template>
