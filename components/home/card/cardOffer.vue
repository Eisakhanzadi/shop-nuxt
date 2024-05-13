<script setup lang="ts">
const props = defineProps(['data', 'theme'])
</script>

<template>
  <div class="card relative flex flex-col items-center" :class="{womenOffer:props.theme=='women',menOffer:props.theme=='men',}" >
    <div class="card-header">
      <figure>
        <img :src="props.data.img" :alt="props.data.name">
      </figure>
    </div>
    <div class="card-body mx-auto border-gray-200 border-[12px] flex flex-col text-black items-center ">
      <div class="card-title">
        <h3 class="flex flex-col items-center justify-center ">
          <span class="font-bold text-2xl">{{ props.data.title }}</span>
          <span class=" text-xl">{{ props.data.collection }}</span>
        </h3>
      </div>
      <div class="card-tex text-center mt-3">
        <p class="font-light text-lg">{{ props.data.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  width: 600px;
  height: 600px;

  &:hover .card-header:after {
    height: 100%;
  }


  .card-header {
    position: relative;
    height: 100%;
    width: 100%;
    transition: 0.5s;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0;
      transition: ease 0.4s;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.0));
    }

    &:hover:after {
      height: 100%;
    }

    figure {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        transform-origin: center;
        object-position: center;
        object-fit: cover;
      }
    }
  }

  .card-body {
    background: white;
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    right: 50%;
    padding: 70px ;
    z-index: 1;
    transition: .4s;
    transform: translate(0 , -50%);

  }

}
.menOffer{
  width: 500px;
  .card-body{
    position: absolute;
    top: 50% !important;
    left: -50% !important;
  }
  &:hover  .card-body{
    transform: translate(10% , -50%);
  }
}
.womenOffer{
  width: 500px;
  .card-body{
    position: absolute;
    top: 50% !important;
    right: -50% !important;

  }
  &:hover  .card-body{
    transform: translate(-10% , -50%);
  }
}

</style>