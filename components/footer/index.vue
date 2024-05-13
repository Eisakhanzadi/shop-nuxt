<script setup lang="ts">

</script>

<template>
<div class="footer">
  <div class="parallax">
    <div class="container mx-auto flex flex-row-reverse justify-between py-16">
      <div class="form-group w-1/2 lg:w-1/3 ">
        <form action="" class=" flex w-full overflow-hidden rounded">
          <button class="btn py-1.5 text-center px-5 text-stone-100 bg-black hover:text-black hover:bg-amber-500">ارسال</button>
          <input type="text" class=" w-full border-0 outline-0 px-2 py-1.5 ">
        </form>
      </div>
      <div class="title text-stone-100 font-bold flex gap-2">
        <span><i class="fa-solid fa-mail-bulk fa-xl"/></span>
        <p>برای دریافت جدیدترین اخبار و تخفیف ایمیل خود را وارد کنید .</p>
      </div>
    </div>
  </div>
  <div class="bg-gray-800">
    <div class="container mx-auto p-5 py-10 flex justify-between flex-row-reverse text-stone-100">
      <div class="footer-brand flex justify-center items-center flex-col gap-y-3 w-1/3">
        <div class="footer-image"><img src="@/assets/image/brand/logo-white.png" alt=""></div>
        <div class="footer-text text-gray-400"> شرکتشرکت ویکتوریا با سرمایه در ایران شروع به کار کردشرکت ویکتوریا با سرمایه در ایران شروع به کار کردشرکت ویکتوریا با سرمایه در ایران شروع به کار کرد ویکتوریا با سرمایه در ایران شروع به کار کرد</div>
      </div>
      <div class="contact-us">
        <h3 class="mb-5">تماس با ما </h3>
        <ul class="flex flex-col gap-3 pr-2">
          <li>
            <p class="flex gap-2">
              <span class="icon"><i class="fa-solid fa-location-dot fa-sm"/></span>
              <span class="text"> گرگان بلوار گلشهر خیابان پارتیا مجتمع امین واحد 4</span>
            </p>
          </li>
          <li>
            <p class="flex gap-2">
              <span class="icon"><i class="fa-solid fa-phone fa-sm"/></span>
              <a class="text" href="tel:09118738301">09118738301</a>
            </p>
          </li>
          <li>
            <p class="flex gap-2">
              <span class="icon"><i class="fa-solid fa-mail-bulk fa-sm"/></span>
              <a class="text" href="mailto:esakhanzadi@gmail.com">esakhanzadi@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
.parallax{
  background: url("@/assets/image/swiper/parellex-bg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: top;

}
</style>