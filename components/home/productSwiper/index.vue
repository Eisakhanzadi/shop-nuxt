<script setup lang="ts">
const itemActive = ref(null)
const props = defineProps(['data', 'theme'])

function active(index) {
  itemActive.value.forEach(item => {
    item.classList.remove('active')
  })
  itemActive.value[index].classList.add('active')
}
</script>

<template>
  <div class=" flex flex-col items-center  mt-16 one" >
    <div class="trending-title p-3 mb-5"><h3>{{ props.data.title }}</h3></div>
    <div class="categories" v-if="props.theme === 'noneCategory' || 'noneCategory and latestNews'">
      <ul class="nav flex gap-10">
        <li @click="active(index)" :class="{active:index === 0}" v-for="(item , index) in props.data.categories"
            ref="itemActive" :key="index" class=" px-5 py-2 my-5 border border-gray-300 hover:cursor-pointer">
          <button>{{ item.name }}</button>
        </li>
      </ul>
    </div>
    <div class="w-full mt-7 flex flex-col overflow-hidden">
      <div v-if="data.img">
        <swiper-breakpoint :data="data.img" v-if="data.img"/>
      </div>
      <div v-if="data.image" class="md:w-2/3 md:mx-auto">
        <home-swiper-latest-news :data="props.data.image" :theme="true"/>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

.active {
  background: black;
  color: #f4f4f4;
  font-weight: bold;
}

.trending-title {
  color: black;
  font-size: 30px;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: black;
    height: 3px;
    width: 7%;
    bottom: -15%;
    right: 50%;
    transform: translate(50%, 100%);
  }
}

ul {
  position: relative;

  li {
    color: rgb(140, 140, 140);
    box-shadow: 0 0 10px  rgba(0, 0, 0, 0.1);
  }

  &:after {
    position: absolute;
    content: "";
    width: 30%;
    height: 1px;
    background: rgb(209 213 219);
    top: 50%;
    right: 0;
    transform: translate(100%, 50%);

  }

  &:before {
    position: absolute;
    content: "";
    width: 30%;
    height: 1px;
    background: rgb(209 213 219);
    top: 50%;
    left: 0;
    transform: translate(-100%, 50%);

  }
}
</style>