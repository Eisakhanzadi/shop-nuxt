<script setup lang="ts">
const props = defineProps(["data", "theme"])
const parent = ref(null)
const child = ref(null)
const showList = ref(false)

function show() {
  parent.value.classList.add('show')
  showList.value = true
}

function hide() {
  parent.value.classList.remove('show')
  showList.value = false
}
</script>

<template>
  <li class=" father p-1 hover:cursor-pointer "
      :class="{ theme:props.theme===true ,}"
      ref="parent"
      >
    <div class=" w-full ">
      <nuxtLink :to="props.data.link" class="flex gap-2 justify-center" >
        <span>{{ props.data.name }}</span>
        <span v-if="props.data.sub" class="icon"><i class="fa-solid fa-angle-down fa-xs "/></span>
      </nuxtLink>
    </div>
    <div class="sub-menu overflow-hidden" v-if="props.data.sub " ref="child">
      <ul class="nav w-full overflow-hidden border ">
        <transition-group name="transition">
          <header-navbar v-if="props.data.sub && showList"  v-for="(item , index) in props.data.sub" :key="index"
                         :data="item"
                         :theme="props.data.sub.length ? true : false"/>
        </transition-group>
      </ul>
    </div>
  </li>
</template>

<style scoped lang="scss">
.border{
  margin-top: 20px;
  position: relative;
  border: 0;
  &:after{
    content: "";
    position: absolute;
    background: black;
    width: 100%;
    height: 2px;
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


.sub-menu {
  transition: 0.5s;
}


.transition-enter-active {
  transition: 0.3s ease;
}

.transition-leave-active {
  transition: 0.3s ease;
}

.transition-enter-from, .transition-leave-to {
  transform: translatey(-20%);
  opacity: 0;
}
</style>