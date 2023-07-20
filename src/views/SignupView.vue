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
              'bg-slate-300': !verification_email,
              'bg-main text-white': verification_email
            }"
          >
            2
          </div>
          <div
            class="w-12 h-12 Bpey mx-4 rounded-full flex items-center justify-center text-3xl text-center"
            :class="{ 'bg-slate-300': !team_form, 'bg-main text-white': team_form }"
          >
            3
          </div>
          <div
            class="w-12 h-12 Bpey mx-4 rounded-full flex items-center justify-center text-3xl text-center"
            :class="{ 'bg-slate-300': !pricing_form, 'bg-main text-white': pricing_form }"
          >
            4
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
              @click="switchBox('email')"
              class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
            >
              <p>تایید ایمیل</p>
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
        <div
          class="anime relative h-56"
          :class="{ hidden: !verification_email, block: verification_email }"
        >
          <h1 class="text-2xl Bpey mt-4">تایید ایمیل</h1>
          <p class="mikh text-gray-400 text-md text-center mb-4 mx-2">
            کد تایید ارسال شده به ایمیل <b class="text-main">{{ email }}</b> را وارد کنید
          </p>
          <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @keydown="goNext('num1', 'num2', $event)"
                id="num1"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @keydown="goNext('num2', 'num3', $event, 'num1')"
                id="num2"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center justify-center Bes text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @keydown="goNext('num3', 'num4', $event, 'num2')"
                id="num3"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                @keydown="goNext('num4', undefined, $event, 'num3')"
                name=""
                id="num4"
              />
            </div>
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
          <div
            @click="switchBox('signup')"
            class="anime absolute bottom-4 right-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <p>ویرایش اطلاعات</p>
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
              @click="switchBox('pricing')"
              class="anime absolute bottom-4 left-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
            >
              <p>انتخاب پنل</p>
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
        <div
          class="anime my-8 px-8 flex flex-col items-center w-full relative"
          :class="{ hidden: !pricing_form, block: pricing_form }"
        >
          <form action="/signup" method="post" class="w-full mb-20">
            <input type="radio" name="pricing" id="small" class="hidden peer/small" value="small"/>
            <label
              for="small"
              class="peer-checked/small:border-2 peer-checked/small:border-main my-4  bg-white shadow-xl w-full flex flex-col items-start rounded-xl p-4 group"
            >
              <h1 class="text-xl Bes">
                <b class="text-5xl text-main Bpey">0</b> تومان
                <b class="text-main">ماهیانه </b>
              </h1>
              <ul
                role="list"
                class=" anime marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-6 my-8 hidden group-hover:block"
              >
                <li class="text-gray-600 Mes text-right">
                  1 گیگ فضای ذخیره سازی پروژه ها
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن عضو تا 5 عضو
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن/ویرایش/حذف پروژه
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن تسک های مختلف برای پروژه
                </li>
              </ul>
            </label>

            <input type="radio" name="pricing" id="medium" class="hidden peer/medium" value="medium"/>
            <label
              for="medium"
              class=" peer-checked/medium:border-2 peer-checked/medium:border-main my-4 bg-white shadow-xl w-full flex flex-col items-start rounded-xl p-4 group"
            >
              <h1 class="text-xl Bes">
                <b class="text-5xl text-main Bpey">50</b>  هزار تومان
                <b class="text-main">ماهیانه </b>
              </h1>
              <ul
                role="list"
                class=" anime marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-6 my-8 hidden group-hover:block"
              >
                <li class="text-gray-600 Mes text-right">
                  2 گیگ فضای ذخیره سازی پروژه ها
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن عضو تا 10 عضو
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن/ویرایش/حذف پروژه
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن تسک های مختلف برای پروژه
                </li>
                <li class="text-gray-600 Mes text-right">
                  آنالیز فعالیت ها و پروژه ها و تسک ها
                </li>
              </ul>
            </label>

            <input type="radio" name="pricing" id="larg" class="hidden peer/larg" value="larg" />
            <label
              for="larg"
              class=" peer-checked/larg:border-2 peer-checked/larg:border-main my-4 bg-white shadow-xl w-full flex flex-col items-start rounded-xl p-4 group"
            >
              <h1 class="text-xl Bes">
                <b class="text-5xl text-main Bpey">100</b> هزار تومان
                <b class="text-main">ماهیانه </b>
              </h1>
              <ul
                role="list"
                class=" anime marker:text-main list-disc pl-5 space-y-3 text-gray-600 px-6 my-8 hidden group-hover:block"
              >
                <li class="text-gray-600 Mes text-right">
                  3 گیگ فضای ذخیره سازی پروژه ها
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن بیشتر از 10 عضو
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن/ویرایش/حذف پروژه
                </li>
                <li class="text-gray-600 Mes text-right">
                  توانایی افزودن تسک های مختلف برای پروژه
                </li>
                <li class="text-gray-600 Mes text-right">
                  آنالیز فعالیت ها و پروژه ها و تسک ها
                </li>
              </ul>
            </label>
          </form>
         
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
            @click="switchBox('team')"
            class="anime absolute bottom-4 right-4 flex text-main Mes hover:text-main hover:bg-blue-300 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <p>ویرایش تیم</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const signup = ref(true)
const verification_email = ref(false)
const team_form = ref(false)
const pricing_form = ref(false)
const email = ref('')

function switchBox(to) {
  if (to === 'signup') {
    signup.value = true
    verification_email.value = false
    team_form.value = false
    pricing_form.value = false
  } else if (to === 'email') {
    signup.value = false
    verification_email.value = true
    team_form.value = false
    pricing_form.value = false
  } else if (to === 'team') {
    signup.value = false
    verification_email.value = false
    team_form.value = true
    pricing_form.value = false
  } else if (to === 'pricing') {
    signup.value = false
    verification_email.value = false
    team_form.value = false
    pricing_form.value = true
  }
}
function goNext(fromid, nextid, event, beforeid) {
  console.log(event)
  const currentEl = document.getElementById(fromid)
  if (event.key == 'Backspace' && beforeid && fromid !== 'num1') {
    currentEl.value = ''
    document.getElementById(beforeid).focus()
  } else {
    if (+currentEl.value || +currentEl.value === 0) {
      console.log(currentEl.value)
      switch (currentEl.value || event.key) {
        case '0':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۰'
          break

        case '1':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۱'
          break

        case '2':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۲'
          break

        case '3':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۳'
          break

        case '4':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۴'
          break

        case '5':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۵'
          break

        case '6':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۶'
          break

        case '7':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۷'
          break

        case '8':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۸'
          break

        case '9':
          event.preventDefault()
          event.stopPropagation()
          currentEl.value = '۹'
          break
      }
      if (currentEl.value.length === 1) {
        if (nextid) {
          document.getElementById(nextid).focus()
        }
      }
    } else {
      currentEl.value = ''
    }
  }
}
</script>

<style></style>
