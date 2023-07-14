<script setup>
import { onMounted, reactive } from 'vue'

var fadeInElements = []
const commentsObject = reactive({
  comments: [
    {
      text: 'عالیه',
      image: new URL('../assets/bg1.jpg', import.meta.url)
    },
    {
      text: 'بده',
      image: new URL('../assets/bg1.jpg', import.meta.url)
    },
    {
      text: 'متوسطه',
      image: new URL('../assets/bg1.jpg', import.meta.url)
    }
  ],
  currentIndex: 0,
  next() {
    if (this.currentIndex !== this.comments.length - 1) {
      console.log('next:current index not length')
      this.currentIndex++
    } else if (this.currentIndex === this.comments.length - 1) {
      console.log('next:current index is length')
      this.currentIndex = 0
    }
  },
  prev() {
    if (this.currentIndex !== 0) {
      console.log('prev:current index not 0')
      this.currentIndex -= 1
    } else if (this.currentIndex === 0) {
      console.log('prev:current index is length')
      this.currentIndex = this.comments.length - 1
    }
  }
})

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
          <b class="text-main Bpey">دِوزلب</b> یک پلتفرم ایرانیه که یک محیط خیلی خوب برای تیم ها
          فراهم می کنه تا بتونن خیلی منظم پروژه هاشون رو مدیریت کنن
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
    <div
      class="flex flex-col lg:flex-row justify-center p-4 py-8 w-full bg-gradient-to-br from-blue-400 to-blue-300"
    >
      <div
        class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main"
      >
        <div
          class="m-auto rounded-full p-4 h-24 w-24 bg-white shadow-lg flex justify-center items-center text-main"
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
      <div
        class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main"
      >
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
        <h1 class="text-lg Bpey text-main text-center mt-2 group-hover:text-white">
          فضای ذخیره سازی رایگان
        </h1>
        <p class="text-gray-600 Mes text-md text-center mx-8 group-hover:text-white">
          این پلتفرم به شما یک گیگ فضای ذخیره سازی رایگان میده که میتونید از اون برای ذخیره فایل ها
          و پروژه هاتون استفاده کنید
        </p>
      </div>
      <div
        class="fadein group bg-slate-100 shadow-xl rounded-lg p-4 w-full lg:w-1/4 my-4 lg:my-0 lg:mx-4 hover:bg-main"
      >
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
          عین حال به حدی ساده باشه که گیج نشید و بتونید به بهترین نحوه استفاده کنید
        </p>
      </div>
    </div>
    <div class="p-4 bg-slate-100">
      <h1 class="text-center text-2xl Bpey text-main mb-4">مشتری ها</h1>
      <div class="flex justify-center flex-wrap">
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
        <img src="../assets/dark_logo.png" alt="" class="w-1/5 h-min grayscale mx-8 my-4" />
      </div>
    </div>
    <div
      class="flex flex-row justify-between items-center p-4 py-8 w-full bg-gradient-to-br from-blue-400 to-blue-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-min h-40 text-white hover:text-main"
        @click="commentsObject.next"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <div class="flex flex-col w-full items-center">
        <div
          ref="imgbox"
          class="w-32 fadein h-32 overflow-hidden rounded-full border-4 border-white shadow-xl mb-8 flex items-center justify-center"
        >
          <img
            :src="commentsObject.comments[commentsObject.currentIndex].image"
            alt=""
            class="w-full h-full"
          />
        </div>

        <div
          ref="textbox"
          class="bg-white w-1/2 anime shadow-xl border border-gray-200 p-4 rounded-lg Bes text-center text-lg"
        >
          {{ commentsObject.comments[commentsObject.currentIndex].text }}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-min h-40 text-white hover:text-main"
        @click="commentsObject.prev"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
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
          <router-link to="/" class="anime Bes text-lg mx-2 hover:text-main mt-4">خانه</router-link>
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
        <div class="group bg-white shadow-xl flex w-3/4 rounded-xl p-1 border-2 border-slate-400 hover:border-main">
          <div class="grow p-1 px-2">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              class="outline-none border-none bg-transparent w-full h-full w-full input Bes text-lg placeholder:text-slate-400"
            />
          </div>
          <div >
            <div class="anime bg-slate-400 w-12 h-12 rounded-xl p-3 flex items-center justify-center text-white group-hover:bg-main">
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
    <div class="w-full bg-gradient-to-br from-blue-400 to-blue-300 p-4 flex items-center justify-center">
      <h1 class="Bmikh text-md text-white text-center w-3/4">تمام حقوق مطلق به دوزلب می باشد و هرگونه کپی رایت پیگرد قانونی در پی خواهد داشت</h1>
    </div>
  </div>
</template>
