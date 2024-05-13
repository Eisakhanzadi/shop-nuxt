<script setup>
import men from "~/assets/image/swiper/sit-men.jpg"
import women from "~/assets/image/swiper/sit-women.jpg"
import womenUp from "~/assets/image/swiper/women-up.jpg"
import menUp from "~/assets/image/swiper/men-up.jpg"
import {useCategories} from "~/store/categories.js";
import storeLocalStorage from '~/assets/tools/index.js'
const card = [
  {
    name: "men",
    img: men
  },
  {
    name: "women",
    img: women
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
    name: "women",
    img: women
  },
]
const data = [
  {
    name: "دسته بندی ",
    url: "/"
  },
  {
    name: "زنانه",
    url: "/"
  },
]
const orderItem = [
  {
    name: "پربازدیدترین"
  },
  {
    name: "جدید ترین"
  },
  {
    name: "ارزان ترین"
  },
  {
    name: "گران ترین"
  },
  {
    name: " پرفروش ترین"
  }
]
const orderItems = ref(null)
const store = useCategories()
store.fetchProductsCategory()
const product = computed(() => store.getProducts)

function selectOrder(index) {
  orderItems.value.forEach(item => item.classList.remove('active-order'))
  orderItems.value[index].classList.add('active-order')
}

const pagination = {
  totalPage: 10,
  currentPage: 1,
}
const route = useRoute()
watch(route.query.page, () => {
  store.fetchProductsCategory(route.query.page)
})

function getProduct(data) {
  storeLocalStorage(data)
}
</script>

<template>

  <div class="px-2.5">
    <div class="breadcrumb">
      <breadcrumb :data="data"/>
    </div>
    <div class=" container mx-auto flex flex-col lg:grid grid-cols-12 gap-7 mt-4">
      <aside class="col-span-3">
        <categories-filters/>
      </aside>
      <article class="col-span-9 flex flex-col w-full">
        <div class="header">
          <categories-header-card/>
        </div>
        <main>
          <div>
            <div class="result-category px-2.5 py-3 border rounded my-5 ">
              <div class="order-result flex flex-col sm:flex-row sm:items-center gap-5 ">
                <h6>
                  <span class="order-icon"><i class="fa-solid fa-chart-bar fa-sm"/></span>
                  <span class="order-title text-sm "> مرتب سازی :</span>
                </h6>
                <ul class="order-list flex gap-2 sm:gap-4">
                  <li class="order-item hover:cursor-pointer text-gray-400 text-xs sm:text-sm
" v-for="(item , index) in orderItem" ref="orderItems"
                      :key="index" @click="selectOrder(index)">
                    <nuxt-link to="">{{ item.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-card mb-5 ">
              <ul class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-7">
                <li v-for="(item , index) in product" :key="index" class="rounded overflow-hidden">
                  <categories-card :data="item" @sendProduct="getProduct"/>
                </li>
              </ul>
            </div>

          </div>
          <div class="pagination my-10 flex justify-center">
            <lazy-pagination :data="pagination"/>
          </div>
        </main>
      </article>

    </div>
  </div>
</template>

<style scoped lang="scss">
.active-order {
  font-weight: bold;
  color: black;
}

.order-item {
  &:hover {
    cursor: pointer;
  }
}

</style>