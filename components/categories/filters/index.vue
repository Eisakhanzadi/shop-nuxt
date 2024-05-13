<script setup lang="ts">
const statusIcon = reactive({
  size: true,
  color: true,
  price: true,
  category: true,
})
const data = {
  colors: [
    {
      color: "red",
      counter: 2
    },
    {
      color: "blue",
      counter: 7
    },
    {
      color: "orange",
      counter: 5
    },
    {
      color: "green",
      counter: 10
    },
  ],
  sizes: [
    {
      size: "xs",
      counter: 2
    },
    {
      size: "s",
      counter: 7
    },
    {
      size: "l",
      counter: 5
    },
    {
      size: "m",
      counter: 10
    },
    {
      size: "xl",
      counter: 9
    },
    {
      size: "2xl",
      counter: 18
    },
  ],
  filter: [
    {
      name: "زنانه",
      link: "womens",
      sub: [
        {
          name: "ورزشی",
          link: ""
        },
        {
          name: "خانگی",
          link: ""
        },
        {
          name: "رسمی",
          link: ""
        },
        {
          name: "اکسسوری",
          link: ""
        },
      ]
    },
    {
      name: "مردانه",
      link: "mens",
      sub: [
        {
          name: "ورزشی",
          link: "",
          sub: [
            {
              name: "مایو",
              link: ""
            },
            {
              name: "عینک",
              link: ""
            },
          ]
        },
        {
          name: "رسمی",
          link: ""
        },
        {
          name: "راحتی",
          link: ""
        },
        {
          name: "اکسسوری",
          link: ""
        },
      ]
    },
    {
      name: "بچگانه",
      link: "mens",
    }
  ]
}
onMounted(() => {
  const collapseTitle = document.querySelectorAll('.collapse-title')
  const collapseContent = document.querySelectorAll('.collapse-accordion')
  collapseTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
      if (item.nextElementSibling.style.maxHeight) {
        item.nextElementSibling.style.maxHeight = null
      } else {
        // item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
         item.nextElementSibling.style.maxHeight = 'fit-content'
      }
    })
  })

})
</script>

<template>
  <div class="accordion flex flex-col gap-y-4 border rounded p-5">
    <div class="collapse-container">
      <div class="collapse-title relative flex justify-between flex-row-reverse">
        <span class="icon"></span>
        <h3>دسته بندی ها </h3>
      </div>
      <div class="color-container my-4 collapse-accordion">
        <ul class=" flex flex-col gap-2">
          <categories-categoryItems v-for="(item,index) in data.filter" :key="index" :data="item"/>
        </ul>
      </div>
    </div>
    <div class="collapse-container">
      <div class="collapse-title relative flex justify-between flex-row-reverse">
        <span class="icon"></span>
        <h3>قیمت </h3>
      </div>
    </div>
    <div class="collapse-container">
      <div class="collapse-title relative flex justify-between flex-row-reverse">
        <span class="icon"></span>
        <h3>رنگ </h3>
      </div>
      <div class="color-container my-4 collapse-accordion">
        <ul class=" flex flex-col gap-2">
          <li v-for="(item , index) in data.colors" :key="index">
            <nuxtLink :to="{query:{color:item.color}}" class="flex justify-between items-center ">
              <span class="p-3 rounded" :style="{background:item.color}"></span><span>( {{ item.counter }} )</span>
            </nuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="collapse-container">
      <div class="collapse-title relative flex justify-between flex-row-reverse">
        <span class="icon">
        </span>
        <h3>سایز </h3>
      </div>
      <div class="size-container my-4 collapse-accordion">
        <ul class=" flex flex-col gap-2">
          <li v-for="(item , index) in data.sizes" :key="index">
            <nuxtLink :to="{query:{size:item.size}}" class="flex justify-between items-center ">
              <span class="p-2 rounded">{{ item.size }}</span><span>( {{ item.counter }} )</span>
            </nuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.collapse-title h3 {
  font-weight: bold;
  font-size: 1.1rem;
}

.collapse-accordion {
  max-height: 0;
  overflow: hidden;
  transition: ease 0.5s;
}

.icon {
  &:after {
    position: absolute;
    content: "+";
    top: 0;
    left: 0;
    font-size: 20px;
    font-weight: bolder;
  }
}
.active{
  .icon {
    &:after {
      content: "-";
    }
  }
}
</style>