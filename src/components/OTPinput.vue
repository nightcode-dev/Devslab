<template>
    <div>
        <h1 class="text-2xl Bpey mt-4">تایید ایمیل</h1>
          <p class="mikh text-gray-400 text-md text-center mb-4 mx-2">
            کد تایید ارسال شده به ایمیل <b class="text-main">{{ props.email }}</b> را وارد کنید
          </p>
          <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @input="goNext('num1', 'num2', $event)"
                id="num1"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @input="goNext('num2', 'num3', $event, 'num1')"
                id="num2"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center justify-center Bes text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                name=""
                @input="goNext('num3', 'num4', $event, 'num2')"
                id="num3"
              />
            </div>
            <div class="w-16 h-16">
              <input
                class="w-full h-full flex flex-col items-center Bes justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-main"
                type="text"
                maxlength="1"
                @input="goNext('num4', undefined, $event, 'num3')"
                name=""
                id="num4"
              />
            </div>
          </div>
    </div>
</template>

<script setup>
const props = defineProps({
    email:String
})
function goNext(fromid, nextid, event, beforeid) {
  console.log(event)
  const currentEl = document.getElementById(fromid)
  if (event.key == 'Backspace' && beforeid && fromid !== 'num1') {
    currentEl.value = ''
    document.getElementById(beforeid).focus()
  } else {
    if (+currentEl.value || +currentEl.value === 0) {
      console.log(event.target.value)
      switch (event.target.value || event.key) {
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

<style>
</style>
