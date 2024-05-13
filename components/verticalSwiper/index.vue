<template>
  <swiper
      :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[FreeMode, Navigation, Thumbs]"
      class="mySwiper2 w-full mb-5"
  >
    <swiper-slide>
      <img :src="image"/>
    </swiper-slide>
  </swiper>
  <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[FreeMode, Navigation, Thumbs]"
      class="mySwiper"
  >
    <swiper-slide class="border p-3 mx-2 rounded hover:cursor-pointer">
      <img :src="image"/>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
const props = defineProps(['image'])
const {image} = props
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
}
</script>
<style scoped>
img{
  object-fit: contain;
}
</style>

