<script setup lang="ts">
const links = [
  {
    name: "خانه",
    link: "",
  },
  {
    name: "دسته بندی ها ",
    link: "/categories",
    sub:[
      {
        name:"item-1",
        link:""
      },
      {
        name:"item-2",
        link:""
      },
      {
        name:"item-3",
        link:""
      },
    ]
  },
  {
    name: "فروشگاه",
    link: "",
    sub:[
      {
        name:"item-1",
        link:""
      },
      {
        name:"item-2",
        link:""
      },
      {
        name:"item-3",
        link:""
      },
    ]
  },
  {
    name: "وبلاگ",
    link: "",
    sub:[
      {
        name:"item-1",
        link:""
      },
      {
        name:"item-2",
        link:""
      },
      {
        name:"item-3",
        link:""
      },
    ]
  },
  {
    name: "ارتباط با ما",
    link: "",
    sub:[
      {
        name:"item-1",
        link:"",
        sub:[
          {
            name:'item',
            sub:[
              {
                name:'item'
              }
            ]
          }
        ]
      },
      {
        name:"item-2",
        link:""
      },
      {
        name:"item-3",
        link:""
      },
      ]
  },
]
const showPanel =ref(false)
const showAuthPanel =ref(false)
const showSearchPanel = ref(false)
</script>

<template>
  <div class="header">
    <div class="container mx-auto py-3">
      <div class="row flex justify-between items-center">
        <div class="contact-us flex gap-2 items-center">
          <span class="phone-number text-gray-400">09118738301</span>
          <span><i class="fa-solid fa-phone text-gray-500 p-2 border rounded-full border-gray-400 "/></span>
        </div>
        <div class="navbar-brand">
          <h1>
            <nuxt-link to="/">
              <figure>
                <img src="~/assets/image/brand/logo.png" alt="victoria">
              </figure>
            </nuxt-link>
          </h1>
        </div>
        <div class="flex flex-row-reverse gap-2">
          <div class="shop">
            <nuxt-link><i class="fa-solid fa-basket-shopping text-gray-500 p-2 border rounded-full border-gray-400 "/>
            </nuxt-link>
          </div>
          <div class="auth">
            <button @click="showAuthPanel=true"><i class="fa-solid fa-user text-gray-500 p-2 border rounded-full border-gray-400 "/></button>
          </div>
          <div class="search">
            <button @click="showSearchPanel = true"><i class="fa-solid fa-search text-gray-500 p-2 border rounded-full border-gray-400 "/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu flex justify-center border-t">
      <nav>
        <ul class="nav flex justify-center gap-10 capitalize py-3">
          <headerNavbar v-for="(item , index) in links" :key="index" :data="item" theme="parent" />
        </ul>
      </nav>
    </div>
    <div class="login-panel" v-if="showAuthPanel">
      <auth-signup @close-panel="showAuthPanel = false" @switch-login-panel="showPanel = !showPanel" v-if="showPanel"/>
      <auth-login @close-panel="showAuthPanel = false" @switch-login-panel="showPanel = !showPanel" v-else/>
    </div>
    <div class="search-panel">
      <search v-if="showSearchPanel" @close-search="showSearchPanel = !showSearchPanel"/>
    </div>
  </div>
</template>

<style scoped>

</style>