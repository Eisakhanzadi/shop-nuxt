<script setup lang="ts">

const nav = [
  {
    name: "سبد خرید ",
    url: "/dashboard"
  },
  {
    name: "پروفایل کاربری ",
    url: "/dashboard/profile"
  },
  {
    name: "آدرس ها ",
    url: "/dashboard/address"
  },
  {
    name: "مدیریت سفارش ها ",
    url: "dashboard/order"
  },
]
</script>

<template>
  <div class="container mx-auto   h-full">
    <div class="main grid grid-cols-12 gap-10  p-5">
      <div class="navbar col-span-3 border p-5 h-fit rounded-lg">
        <ul class="nav flex flex-col gap-3">
          <li class="nav-list" v-for="(item , index) in nav" :key="index">
            <nuxt-link :to="item.url" class="nav-item">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="content col-span-9 border p-5 rounded-lg">
        <nuxt-page/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>