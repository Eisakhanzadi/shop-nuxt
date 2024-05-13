<script setup lang="ts">
const props = defineProps(["data", "theme" , 'menu'])
const parent = ref(null)
const child = ref(null)

// const showList = ref(false)

</script>

<template>
  <li class=" father p-1 hover:cursor-pointer "
      :class="{ theme:props.theme===true ,}"
      ref="parent"
  >
    <div class=" w-full ">
      <nuxtLink :to="props.data.link" class="flex gap-2 justify-center">
        <span>{{ props.data.name }}</span>
        <span v-if="props.data.sub" class="icon">
          <i class="fa-solid fa-angle-left fa-xs " v-if="menu===true"/>
          <i class="fa-solid fa-angle-down fa-xs " v-else/>
        </span>
      </nuxtLink>
    </div>
    <div class="sub-menu border" :class="{angleList :menu===true}" v-if="props.data.sub " ref="child" >
      <ul class="nav w-full  " v-if="props.data.sub">
        <header-navbar
            v-if="props.data.sub"
            v-for="(item , index) in props.data.sub"
            :key="index"
            :data="item"
            :theme="props.data.sub.length ? true : false"
            :menu="props.data.sub.length ? true : false"

        />
      </ul>
    </div>
  </li>
</template>

<style scoped lang="scss">
.border {
  margin-top: 20px;
  position: relative;
  border: 0;

  &:after {
    content: "";
    position: absolute;
    background: black;
    width: 100%;
    height: 3px;
    top: 0;
    right: 0;
  }
}

.theme {
  color: #555555;
  padding: 16px 20px;
  margin-top: 10px;
}

.borderNone {
  border: none;
}

.father {
  position: relative;

  &:hover .sub-menu {
    transform: translateY(0) scale(1);
    opacity: 1;

  }
}

.sub-menu {
  height: auto;
  transition: ease 0.5s;
  position: absolute;
  top: 20px;
  right: 0;
  width: 150px;
  background: white;
  z-index: 5;
  transform: translateY(-80px) scale(0);
  opacity: 0;


}
.angleList{
  transform: translatex(80px)scale(0) !important;
  opacity: 0 !important;
  right: 101%;
  top: 0;
}
.father:hover > .angleList{
  transform: translatex(0)scale(1) !important;
  opacity: 1 !important;
}
</style>