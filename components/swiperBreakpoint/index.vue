<template>
  <div class="container overflow-hidden">
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :loop="true"
        @slideChange="onSlideChange"
        :navigation=" {
        nextEl:'.button-next',
    prevEl: '.button-prev'
    }"
        :autoplay="{
          delay:5000,
                disableOnInteraction: false,

        }"
        :modules="[Autoplay, Navigation]"

        :pagination="{
      clickable: true,
    }"
        :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
        class="mySwiper1"
    >
      <swiper-slide v-for="(item , index) in props.data " :key="index">
        <div class="card relative flex justify-center">
          <div class="card-header">
            <figure>
              <img class="w-full h-full object-cover" :src="item.img" :alt="item.name">
            </figure>
          </div>
          <div class="card-body absolute inset-0">
            <figure>
              <img class="w-full h-full object-cover" :src="item.img" :alt="item.name">
            </figure>
          </div>
          <div class="card-footer flex flex-col gap-y-3 bg-white absolute bottom-2 py-5 w-[96%] mx-auto">
            <div class="product-title font-bold"><h3>پیراهن نخی ترک</h3></div>
            <div class="product-score">
              <ul class="flex text-xs justify-center">
                <li v-for="(item , index) in 5" :key="index"><span><i class="fa-solid fa-star"/></span></li>
              </ul>
            </div>
            <div class="price flex text-sm justify-center gap-4">
              <div class="new-price"> {{ 80000 }} تومان</div>
              <div class="old-price line-through text-gray-400"> {{ 100000 }} تومان</div>
            </div>
            <ul class="nav flex justify-center gap-3 flex-row-reverse">
              <li class="nav-item  " v-for="(item,index) in nav" :key="index">
                <nuxtLink class="nav-link py-1.5 px-2 bg-black rounded-full text-white"><span><i
                    :class="`fa-solid ${item.name}`"/></span></nuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </swiper-slide>
        <div class="control flex flex-row-reverse justify-center mt-4 gap-2" >
          <div class="hover:cursor-pointer relative custom-button button-prev px-2 py-1.5 border border-gray-400 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white " slot="button-prev">
            <i class="fa fa-angle-left"></i>
            <span class="divider-left"></span>
          </div>
          <div class="hover:cursor-pointer relative custom-button button-next px-2 py-1.5 border border-gray-400 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white " slot="button-next">
            <i class="fa fa-angle-right"></i>
            <span class="divider-right"></span>
          </div>
        </div>
    </swiper>
  </div>
</template>
<script setup>
const props = defineProps(['data'])
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const nav = [
  {
    name: "fa-basket-shopping"
  },
  {
    name: "fa-heart"
  },
  {
    name: "fa-chart-simple"
  },
  {
    name: "fa-eye"
  },

]

function onSlideChange() {
  console.log('slide change');
}

</script>
<style scoped lang="scss">
.mySwiper1 .swiper {
  width: 100% !important;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

figure {
  height: 500px;
}

.card {
  overflow: hidden;
  .card-body {
    figure {
      transform: scale(0.2);
      opacity: 0;
      transition: ease-out 0.5s;
    }
  }

  .card-footer {
    opacity: 0;
    transition: ease 0.5s 0.2s;
    transform: translateY(50px);
  }


}
.card{
  &:hover  .card-footer {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
  &:hover  .card-body > figure {
    opacity: 1;
    transform: scale(1);
    visibility: hidden;
  }
}
.divider-left,
.divider-right{
  width: 60px;
  height: 1px;
  background: darkgray;
  position: absolute;
}
.divider-right{
  right: 0;
  top: 40%;
  transform: translate(100% , -40%);
  &:after{
    content: "";
    width: 35px;
    height: 0.3px;
    position: absolute;
    background: darkgray;
    left: 0;
    bottom: -4px;
  }
}
.divider-left{
  left: 0;
  top: 40%;
  transform: translate(-100% , -40%);
  &:after{
    content: "";
    width: 35px;
    height: 0.3px;
    position: absolute;
    background: darkgray;
    right: 0;
    bottom: -4px;
  }
}
</style>
