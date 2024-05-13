<script setup lang="ts">
 const props = defineProps(['data'])
 const {data}=props
 const emit = defineEmits(['editeAddress' , 'delete'])
</script>

<template>
<div class="card flex flex-col gap-5 ">
  <div class="card-header flex justify-between items-center">
    <div>
      <p class="address">{{data.address}}</p>
    </div>
    <div>
      <button class="p-2" @click="emit('editeAddress' , data)"><i class="fa-solid fa-pen" /></button>
      <button class="p-2" @click="emit('delete')" ><i class="fa-solid fa-trash-alt" /></button>
    </div>
  </div>
  <div class="card-body">
    <ul class="address grid grid-cols-12 gap-4">
      <li class="flex text-gray-500 col-span-6 gap-2"><span><i class="fa-solid  fa-city"></i></span> <span>{{data.city}}</span></li>
      <li class="flex text-gray-500 col-span-6 gap-2"><span><i class="fa-solid  fa-message"></i></span> <span>{{data.postalCode}}</span></li>
      <li class="flex text-gray-500 col-span-6 gap-2"><span><i class="fa-solid  fa-phone"></i></span> <span>{{data.phone}}</span></li>
      <li class="flex text-gray-500 col-span-6 gap-2"><span><i class="fa-solid  fa-user"></i></span> <span>{{data.name}}</span></li>
    </ul>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>