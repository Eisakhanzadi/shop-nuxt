<script setup lang="ts">
const emit = defineEmits(['closeDelete'])
</script>

<template>
<div class="backdrop fixed inset-0 z-10" @click.self="emit('closeDelete')">
  <div class="alert p-5 flex flex-col mx-auto gap-5 overflow-hidden rounded bg-white w-1/3 mt-[15vh]">
    <div class="alert-title">
      آیا مطمئنید که میخواهید این آیتم را حذف کنید ؟
    </div>
    <div class="alert-body flex gap-x-3">
      <button class="rounded border border-red-600 hover:bg-red-600 hover:text-white py-1 px-3">بله حذفش کن </button>
      <button class="rounded border border-green-400 hover:bg-green-600 hover:text-white py-1 px-3" @click="emit('closeDelete')">نمیخوام حذف شه </button>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.backdrop{
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(3px);
}
</style>