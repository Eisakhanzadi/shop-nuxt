<script setup >
const props = defineProps(['data'])
</script>

<template>
<div class="bread-crumb py-16">
  <nav class="flex justify-center">
    <ul class="flex items-center  gap-1" >
      <li>
        <nuxtLink to="/">صفحه اصلی</nuxtLink>
      </li>
      <li v-for="(item , index ) in data" class="flex items-center gap-2" :key="index" >
        <div class="divider"></div>
        <nuxtLink :class="{disabled:data.length-1 == index}"  :to="data.length-1 == index ? '' :item.url">{{item.name}}</nuxtLink>
      </li>
    </ul>
  </nav>
</div>
</template>

<style scoped lang="scss">
.bread-crumb{
  background: url("@/assets/image/swiper/parellex-bg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
a{
  font-family: IranianSans;
  font-weight: 900;
  color: white;
}
.disabled{
  font-weight: 500;
  font-family: IranianSans;
}
.divider{
  width: 9px;
  height: 9px;
  border:1px solid #8DD4DA;
  border-top: 0;
  border-right: 0;
  transform: rotate(45deg);
}
</style>