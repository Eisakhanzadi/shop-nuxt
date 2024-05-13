<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperAutoplay]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :navigation="true"
      :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
      :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="(item , index) in swiper.img" :key="index">
      <div class="swiper-imag">
        <figure class="w-full h-2/3 rounded-sm overflow-hidden ">
          <img class="w-full h-full" :src="item.img" :alt="item.name">
        </figure>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import men from "~/assets/image/swiper/sit-men.jpg"
import women from "~/assets/image/swiper/sit-women.jpg"
const swiper = {
  img:[
    {
      img:men,
      name:"men swiper"
    },
    {
      img:women,
      name:"women swiper"
    },
  ]
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>