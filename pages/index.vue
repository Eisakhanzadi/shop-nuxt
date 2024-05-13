<script setup lang="ts">
import men from "~/assets/image/swiper/sit-men.jpg"
import women from "~/assets/image/swiper/sit-women.jpg"
import womenUp from "~/assets/image/swiper/women-up.jpg"
import menUp from "~/assets/image/swiper/men-up.jpg"

const data = {
  card: {
    men: {
      img: men,
      name: "men",
      title: "MEN'S",
      collection: 'COLLECTION',
      text: 'Et harum quidem rerum facilis est et expedita m libero tempore, cum solut'
    },
    women: {
      img: women,
      name: "women",
      title: "WOMEN'S",
      collection: 'COLLECTION',
      text: 'Et harum quidem rerum facilis est et expedita m libero tempore, cum solut'
    },
  }
}
const trending = {
  title: "محصولات پر طرفدار",
  categories: [
    {
      name: "ویژه ها"
    },
    {
      name: "بهترین ها"
    },
    {
      name: "جدیدترین ها"
    },
  ],
  img: [
    {
      name: "men",
      img: men
    },
    {
      name: "women",
      img: women
    },
    {
      name: "men",
      img: men
    },
    {
      name: "women",
      img: women
    },
    {
      name: "men",
      img: men
    },
    {
      name: "women",
      img: women
    },
  ]
}
const special = {
  title: "محصولات خاص",
  img: [
    {
      name: "men",
      img: menUp
    },
    {
      name: "women",
      img: women
    },
    {
      name: "menup",
      img: menUp
    },
    {
      name: "women",
      img: womenUp
    },
    {
      name: "men",
      img: men
    },
    {
      name: "women",
      img: womenUp
    },
  ]
}
const latestNews = {
  title:"آخرین اخبار" ,
  image:[
    {
      title:"lorem ipsum dolor",
      text:"lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      more:"Read More",
      img:womenUp
    },
    {
      title:"lorem ipsum dolor",
      text:"lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      more:"Read More",
      img:menUp
    },
    {
      title:"lorem ipsum dolor",
      text:"lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      more:"Read More",
      img:men
    },
  ]
}
</script>

<template>
  <div class=" ">
    <section>
      <div class=" container mx-auto">
        <home-swiper/>
      </div>
    </section>
    <section>
      <div class="flex gap-10 justify-center mt-20  items-center container mx-auto">
        <home-card v-for="(item , index) in data.card" :key="index" :theme="index" :data="item"/>
      </div>
    </section>
    <section>
      <div class=" container mx-auto my-10">
        <home-product-swiper :data="trending"/>
      </div>
    </section>
    <section>
      <div class="my-10">
        <homeParalexFixImage/>
      </div>
    </section>
    <section>
      <div class="flex gap-10 justify-between mt-20  items-center container mx-auto">
        <home-card-offer v-for="(item , index) in data.card" :key="index" :theme="item.name" :data="item"/>
      </div>
    </section>
    <section>
      <div class=" container mx-auto my-10">
        <home-product-swiper :data="special" theme="noneCategory"/>
      </div>
    </section>
    <section>
      <div class=" container mx-auto my-10">
        <home-product-swiper :data="latestNews" theme="noneCategory and latestNews"/>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>