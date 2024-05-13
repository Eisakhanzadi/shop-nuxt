<script setup lang="ts">
 import Dashboard from "~/pages/dashboard.vue";

 const address=[
   {
     name: "عیسی خانزادی",
     phone:"09118738301",
     address:"گرگان - بلوار گلشهر - خیابان پارتیا - پارتیا 16 - مجتمع امین واحد 4 ",
     city:"گزگان",
     postalCode:"4916985430"
   },
   {
     name: "عیسی خانزادی",
     phone:"09118738301",
     address:"گرگان - بلوار گلشهر - خیابان پارتیا - پارتیا 16 - مجتمع امین واحد 4 ",
     city:"گزگان",
     postalCode:"4916985430"
   },
   {
     name: "عیسی خانزادی",
     phone:"09118738301",
     address:"گرگان - بلوار گلشهر - خیابان پارتیا - پارتیا 16 - مجتمع امین واحد 4 ",
     city:"گزگان",
     postalCode:"4916985430"
   },
 ]
 const modalAddress = ref(false)
 const showDeleteAlert = ref(false)
 const newAddress = ref(false)
 const dataEditeCard = ref()
 function editCard(data){
   dataEditeCard.value = data
   modalAddress.value = true
 }
</script>

<template>
<div class="flex flex-col gap-4" >
    <div class="address-header mb-5 flex justify-between items-center">
      <div class="inline-block border-b-2 border-red-500 pb-2">
        <h3 class="title font-bold text-lg">
          آدرس ها
        </h3>
      </div>
      <div>
        <button @click="newAddress = true" class="font-bold flex gap-x-2 text-red-500 border py-2 px-5 rounded border-red-600 hover:bg-red-500 hover:text-white">
          <span><i class="fa-solid  fa-lg fa-location-dot"/></span>
          <span> افزودن ادرس جدید</span>
        </button>
      </div>
    </div>
    <div class="address" v-for="(item , index) in address" :key="index">
      <dashboard-address-card @edite-address="editCard" @delete="showDeleteAlert = true"  :data="item" />
    </div>
</div>
  <div>
    <dashboard-address-new-address @close="modalAddress=false" v-if="modalAddress" :data="dataEditeCard"/>
  </div>
  <div>
    <dashboard-address-new-address @close="newAddress=false" v-if="newAddress"/>
  </div>
  <div class="alert-card">
    <dashboard-alert v-if="showDeleteAlert" @closeDelete="showDeleteAlert = false"/>
  </div>
</template>

<style scoped lang="scss">
.address{
  position: relative;
  padding-bottom: 20px;
  &:after{
    content: "";
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.1);
    position: absolute;
    bottom: 0;
  }
  &:last-child::after{
    display: none;
  }
}
</style>