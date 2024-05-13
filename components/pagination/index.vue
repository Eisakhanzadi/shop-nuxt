<script setup lang="ts">
const props = defineProps(['data'])
const counter = ref(1)
const paginationItem = ref(null)
const router = useRoute()
const route = useRoute()
function selectPage(index){
  counter.value = index+1
  paginationItem.value.forEach(item =>item.classList.remove('active'))
  paginationItem.value[index+1].classList.add('active')
}
function handlePagination(operation){
if (operation === "+"){
  counter.value++
  paginationItem.value.forEach(item =>item.classList.remove('active'))
  paginationItem.value[counter.value-1].classList.add('active')
}
else {
  counter.value--
  paginationItem.value.forEach(item =>item.classList.remove('active'))
  paginationItem.value[counter.value-1].classList.add('active')
}
}
</script>

<template>
<nav>
  <ul class="nav flex flex-row-reverse gap-1.5">
    <li @click="handlePagination('-')" class="prev flex items-center justify-center hover:bg-black hover:text-stone-100 px-4 py-1 rounded-full"><button class="relative w-full"><i class=" absolute top-0 left-[50%] translate-x-[-50%] fa-solid fa-sort-up  fa-lg " /></button></li>
    <li @click="selectPage(index)" class="nav-item px-3 py-1 rounded" v-for="(item,index) in data.totalPage" ref="paginationItem" :key="index" :class="{active:data.currentPage == index+1}" >
      <nuxt-link class="nav-link" :to="{query:{page:index+1}}">{{index+1}}</nuxt-link>
    </li>
    <li @click="handlePagination('+')" class="next flex items-center justify-center hover:bg-black hover:text-stone-100 px-4 py-1 rounded-full"><button class="relative w-full"><i class=" absolute top-0 right-1/4 translate-x-1/4 fa-solid fa-sort-up transform rotate-90 fa-lg " /></button></li>
  </ul>
</nav>
</template>

<style scoped lang="scss">
  .active{
    background: black;
    color: white;
  }
  .prev{
    button{
      i{
      transform: rotate(-90deg);
      }
    }
  }
</style>