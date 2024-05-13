<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }"

      class="mySwiper"
  >
    <swiper-slide v-for="(item , index) in data" :key="index" class="flex justify-center">
      <div class="card rounded hover:cursor-pointer relative border">
        <nuxt-link to="">
          <div class="card-header relative ">
            <figure >
              <img class="w-full h-full" :src="item.img" :alt="item.title">
            </figure>
            <div class="icon absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-[-50%] py-2 px-2.5 border-[3px] rounded-full border-white hover:bg-amber-500 hover:text-black hover:border-0 transition duration-100 ease-in  text-white"><span><i class="fa-solid fa-search fa-lg"/></span></div>
          </div>
          <div class="card-body absolute flex flex-col items-center justify-center text-center gap-y-3 h-full bg-gray-100 px-2.5 top-0 right-0">
            <div class="card-title font-bold "><h1>{{ item.title }}</h1></div>
            <div class="card-text line-clamp-2 text-ellipsis text-gray-400 "><p>{{ item.text }}</p></div>
            <div class="more text-gray-400"><span>{{ item.more }}</span></div>
          </div>
        </nuxt-link>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
const props = defineProps(["data"])
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

</script>
<style scoped lang="scss">
.card  {
  width: 100%;
  height: 250px !important;
  overflow: hidden;

  figure{
    height: 250px;
  }
  .card-header{
    transition: 0.1s ease 0.7s; // وقتتی z زیاد میشه یه تاخیر کویچک بندازه تا تاثیر بزاره روش
  }
  .card-body{
    transition: .8s;
  }
  &:hover .card-body {
    opacity: 0;
  }
  &:hover .card-header{
    z-index: 1;
  }
}
</style>