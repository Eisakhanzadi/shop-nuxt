<script setup>
import men from "~/assets/image/swiper/sit-men.jpg"
import women from "~/assets/image/swiper/sit-women.jpg"
import womenUp from "~/assets/image/swiper/women-up.jpg"
import menUp from "~/assets/image/swiper/men-up.jpg"
const trending = {
  title: "پیشنهاد فروشندگان به شما",
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
      img: women
    },
  ]
}
const productSize = ref(null)
const productColor = ref(null)
const route = useRoute()
const counter = ref(1)
const data = [
  {
    name: "محصولات",
    url: "/"
  }, {
    name: "لباس زنانه",
    url: "/"
  },
]
const size = ["sm", "lg", 'xl', '2xl']
const color = ["red", "blue", 'green', 'yellow']
const price = 1500000
const newPrice = 1500000

function selectSize(index) {
  productSize.value.forEach(item => item.classList.remove('active-size'))
  productSize.value[index].classList.add('active-size')
}

function selectColor(index) {
  productColor.value.forEach(item => item.classList.remove('active-color'))
  productColor.value[index].classList.add('active-color')
}
const {data:product,status , error , pending} = await useAsyncData('productItem' , ()=>$fetch(`https://fakestoreapi.com/products/${route.params.id}`))
</script>

<template>
  <div>
    <section>
      <div>
        <breadcrumb :data="data"/>
      </div>
    </section>
    <section>
      <div class=" container mx-auto grid grid-cols-12 gap-5 my-10">
        <div class="col-span-4">
          <vertical-swiper :image="product.image"/>
        </div>
        <div class="product-info col-span-8 flex flex-col gap-5">
          <div class="content flex flex-col gap-4">
            <div class="content-title">
              <h1 class="font-bold">{{product.title}}</h1>
            </div>
            <div class="content text text-justify">
              <p>{{product.description}}</p>
            </div>
          </div>
          <div class="customer-score flex  ">
            <div class="view-feedback">(
              <nuxt-link to="">نظرات کاربران</nuxt-link>
              )
            </div>
            <div class=" flex " v-for="item in 5"><span><i class="fa-solid fa-star fa-xs"/></span></div>
          </div>
          <div class="product-price">
            <div class="price flex flex-col gap-2">
              <div class="price  flex gap-2 items-center">
<!--                <span class="line-through text-gray-400">{{product.price.toLocaleString() }}</span>-->
<!--                <span class="badge py-0.5 px-2.5 bg-red-400 text-stone-100 rounded-2xl text-sm">18%</span>-->
              </div>
              <span class="new-price">{{  product.price.toLocaleString() }} تومان </span>
            </div>
          </div>
          <div class="product-size">
            <ul class="nav flex gap-2">
              <li ref="productSize"
                  class="nav-list hover:cursor-pointer px-4 py-2 bg-gray-300 font-bold rounded-lg flex items-center justify-center  "
                  @click="selectSize(index)" v-for="(item,index) in size" :key="index">
                <nuxt-link class="nav item">{{ item }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="product-color flex items-center gap-2">
            <div class="color-title"><span>رنگ : </span></div>
            <ul class="nav flex gap-2">
              <li ref="productColor"
                  class="nav-list hover:cursor-pointer p-4  font-bold rounded-full flex items-center justify-center  relative "
                  @click="selectColor(index)" v-for="(item,index) in color" :key="index" :style="{background:item}">
                <nuxt-link class="nav item flex"><span class="active"></span></nuxt-link>
              </li>
            </ul>
          </div>
          <div class="product-count flex">
            <div class="input-group flex gap-5 items-center p-1 border rounded-lg">
              <button @click="counter++" class="text-red-500 font-bold text-center p-2">+</button>
              <span class="p-1">{{ counter }}</span>
              <button @click="counter !== 1 ? counter-- : '' " class="text-red-500 font-bold text-center p-2">-</button>
            </div>
          </div>
          <div class="buy-product">
            <button class="bg-red-600 text-white py-2 px-5 rounded"> افزودن به سبد خرید</button>
          </div>
        </div>

      </div>
    </section>
    <section>
      <div class="container mx-auto">
        <product-info/>
      </div>
    </section>
    <section>
      <div class=" container mx-auto my-10">
        <home-product-swiper :data="trending"/>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.active-size {
  background: black;
  color: white;
}

.product-color {
  li {
    .active {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 15px;
      height: 15px;
      background: #fff;
      border-radius: 100%;
      display: none;
    }
  }

}

.product-color {
  li.active-color {
    .active {
      display: block;
    }
  }
}

</style>