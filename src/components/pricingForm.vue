<template>
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
</template>

<script setup></script>

<style>
</style>
