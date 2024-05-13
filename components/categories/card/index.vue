<template>
  <li class="flex justify-center overflow-hidden">
    <div class="card relative flex justify-center">
      <div class="card-header">
        <figure>
          <img class="w-full h-full object-cover" :src="data.image" :alt="data.name">
        </figure>
      </div>
      <div class="card-body absolute inset-0">
        <figure>
          <img class="w-full h-full object-cover" :src="data.image" :alt="data.name">
        </figure>
      </div>
      <div class="card-footer flex flex-col gap-y-3 bg-white absolute bottom-2 py-5 w-[96%] mx-auto">
        <nuxt-link :to="{path:`/product/${data.id}`}" class="product-title font-bold text-center"><h3>{{
            data.title
          }}</h3></nuxt-link>
        <div class="product-score">
          <ul class="flex text-xs justify-center">
            <li v-for="(item , index) in 5" :key="index"><span><i class="fa-solid fa-star"/></span></li>
          </ul>
        </div>
        <div class="price flex text-sm justify-center gap-4">
          <div class="new-price"> {{ data.price.toLocaleString() }} تومان</div>
          <div class="old-price line-through text-gray-400 hidden"> {{ }} تومان</div>
        </div>
        <ul class="nav flex justify-center items-center gap-3 flex-row-reverse">
          <li class="nav-item  ">
            <button @click="store(data)" class=" nav-link py-1.5 px-2 bg-black rounded-full text-white"><span><i
                class="fa-solid fa-basket-shopping "/></span>
            </button>
          </li>
          <li class="nav-item ">
            <nuxtLink class="nav-link py-1.5 px-2 bg-black rounded-full text-white"><span><i
                class="fa-solid fa-heart "/></span>
            </nuxtLink>
          </li>
          <li class="nav-item ">
            <nuxtLink class="nav-link py-1.5 px-2 bg-black rounded-full text-white"><span><i
                class="fa-solid fa-chart-simple"/></span>
            </nuxtLink>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link py-1.5 px-2 bg-black rounded-full text-white"><span><i
                class="fa-solid fa-eye"/></span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
<script setup>
// import {useStoreProduct} from "~/composables/basket.js";
const props = defineProps(['data'])
const emit = defineEmits('sendProduct')
function store(data){
  emit('sendProduct',data)
}
</script>
<style scoped lang="scss">

figure {
  height: 350px;

  img {
    object-fit: contain;
    mix-blend-mode: multiply;
  }
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

.card {
  &:hover .card-footer {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  &:hover .card-body > figure {
    opacity: 1;
    transform: scale(1);
    visibility: hidden;
  }
}

.divider-left,
.divider-right {
  width: 60px;
  height: 1px;
  background: darkgray;
  position: absolute;
}

.divider-right {
  right: 0;
  top: 40%;
  transform: translate(100%, -40%);

  &:after {
    content: "";
    width: 35px;
    height: 0.3px;
    position: absolute;
    background: darkgray;
    left: 0;
    bottom: -4px;
  }
}

.divider-left {
  left: 0;
  top: 40%;
  transform: translate(-100%, -40%);

  &:after {
    content: "";
    width: 35px;
    height: 0.3px;
    position: absolute;
    background: darkgray;
    right: 0;
    bottom: -4px;
  }
}

button {
  &:hover {
    cursor: pointer;
  }
}
</style>
