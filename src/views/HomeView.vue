<script setup>
import { onMounted } from 'vue';

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

onMounted(()=>{
  fadeInElements = Array.from(document.getElementsByClassName('fadein'))
  document.addEventListener('scroll',handleScroll)
  handleScroll()
})
</script>

<template>
  <div class="">
    <div class="flex items-center justify-center bg-slate-100">
      <div class="w-full flex flex-col items-center justify-center p-16">
        <h1 class="text-black STpey text-2xl "><b class="text-main Bpey">devslab</b> چیه؟</h1>
        <p class="text-gray-600 Mes text-md text-center">
          <b class="text-main Bpey">دِوزلب</b> یک پلتفرم ایرانیه که یک محیط خیلی خوب برای نگه داری
          ترتیب بندی و حتی ویرایش و نوشتن کد ها فراهم می کنه این محیط کاملا مناسب تیم ها طراحی شده
          تا بتونن پروژه هاشون رو خیلی سریعتر توسعه بدن
        </p>
        <router-link to="/signup" class="fadein py-2 px-4 rounded-md border-2 border-main text-main hover:bg-main STpey text-lg hover:text-white mt-4">
          شروع کن
        </router-link>
      </div>
      <div class="w-full flex items-center justify-center p-16">
        <div class="w-60 h-60 flex items-center justify-center p-8 rounded-full bg-white shadow-xl">
          <img src="../assets//labeaker.png" alt="labratoar beaker" class="h-4/5" />
        </div>
      </div>
    </div>
  </div>
</template>
