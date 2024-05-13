<script setup lang="ts">
const props = defineProps(['data'])
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Navigation,Pagination} from "swiper/modules";

</script>

<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
          delay:5000,
                disableOnInteraction: false,

        }"
      :modules="[Autoplay, Navigation ,Pagination ]"

      :pagination="{
      clickable: true,
    }"
      class="mySwiper"
  >
    <swiper-slide v-for="(item , index ) in props.data" :key="index">
      <div class="card flex flex-col justify-center items-center h-full">
        <figure class="mb-5">
          <img :src="item.img" :alt="item.name">
        </figure>
        <div class="card-body text-center text-gray-300 flex flex-col gap-y-3">
          <p class="card-text">{{item.text}}</p>
          <span class="card-name">{{item.name}}</span>
        </div>
      </div>
    </swiper-slide>

    </swiper>
</template>

<style scoped lang="scss">
.mySwiper{
  width: 700px;
  padding-bottom: 40px;
}
figure{
  width: 100px;
  height: 100px;
  padding: 3px;
  border: 1px solid #eee;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>