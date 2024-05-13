<script setup lang="ts">

</script>

<template>
<div>
  <Header></Header>
    <div class="main">
      <slot></slot>
    </div>
  <Footer></Footer>
</div>
</template>

<style scoped>
.main{
  min-height: calc(100vh - 510px);
}
</style>