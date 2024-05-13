<script setup lang="ts">
const emit = defineEmits(['close-search'])
const search = ref(null)
const data = [
  {
    title: "titleOne",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleTwo",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleThree",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleFour",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleFive",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleSix",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
  {
    title: "titleSeven",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio illum incidunt magni molestias non quasi quia quibusdam, quidem quos, ratione vitae. Dolorum, sunt vel? Aperiam cumque ipsam qui.\n",
    link: "/"
  },
]
</script>

<template>
  lorem
  <div class="backdrop fixed inset-0 w-full h-full flex justify-center z-10" @click.self="emit('close-search')">
    <div class="form-search w-1/2 flex flex-col items-center">
      <form action="" class="w-full">
        <div class="input-group relative">
          <button class="absolute left-7 top-1/2"><i class="fa-solid fa-search fa-lg"/></button>
          <input type="text" class="w-full inline-block outline-0 rounded-full py-3 px-5" name="" v-model.trim="search"
                 placeholder="دنبال چی میگردی عزیزم ... ؟">
        </div>
      </form>
      <div class="search-result bg-white  mt-2 p-5 rounded">
        <ul>
          <li class="" v-for="(item,index) in data" :key="index">
            <nuxt-link :to="item.link">
              <h2 class="title">{{ item.title }}</h2>
              <p class="text">{{ item.text }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
  animation: show-search ease 0.5s 1 ;
  .form-search {
    margin-top: 15vh;

    button {
      transition: 0.2s;
      transform: translate(-50%, -50%);

      &:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }

    input {
      &::placeholder {
        font-size: 15px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.6);
        text-align: center;
      }

      &:focus {
        border: 2px solid cadetblue;
        box-shadow: 0 0 5px cadetblue;
      }
    }

    .search-result {
      overflow: auto;
      max-height: 300px;
      width: 95%;

      p {
        text-overflow: ellipsis;
        text-wrap: nowrap;
        white-space: nowrap;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.5);
      }

      li {
        position: relative;
        margin-top: 5px;

        &:first-child {
          margin-top: 0;
        }

        &:after {
          position: absolute;
          content: "";
          bottom: 0;
          right: -15px;
          width: 4px;
          height: 0;
          background: black;
          border-radius: 5px;
          transition: 0.3s;
        }

        &:hover::after {
          height: 100%;
        }
      }
    }
  }
}
::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
  overflow: hidden;
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: orangered;
}
::-webkit-scrollbar-thumb:hover {
  background: orange;
}
@keyframes show-search {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>