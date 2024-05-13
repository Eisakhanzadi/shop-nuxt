<script setup lang="ts">
import imgOne from "@/assets/image/swiper/user3.jpg"
import imgTwo from "@/assets/image/swiper/user3.jpg"
import imgThree from "@/assets/image/swiper/user3.jpg"
const data = [
  {
    img:imgOne,
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque fugit illo inventore modi molestiae nostrum optio rem sapiente vero! A at consequatur distinctio facere fugiat hic, laboriosam nemo voluptatem?",
    name:"Eisa khanzadi",
  },
  {
    img:imgTwo,
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque fugit illo inventore modi molestiae nostrum optio rem sapiente vero! A at consequatur distinctio facere fugiat hic, laboriosam nemo voluptatem?",
    name:"sadegh khanzadi",
  },
  {
    img:imgThree,
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque fugit illo inventore modi molestiae nostrum optio rem sapiente vero! A at consequatur distinctio facere fugiat hic, laboriosam nemo voluptatem?",
    name:"mahdi khanzadi",
  },
]
</script>

<template>
<div>
  <div class="parallax flex items-center">
   <home-swiper-simple :data="data"/>
  </div>
</div>
</template>

<style scoped lang="scss">
  .parallax{
    background-image: url("@/assets/image/swiper/parellex-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    height: 555px;
  }
</style>