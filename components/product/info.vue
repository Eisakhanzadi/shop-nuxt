<script setup lang="ts">
const collapseHeader = ref(null)
const contentContainer = ref(null)
const collapseTitles = [
  {
    name: "توضیحات"
  },
  {
    name: "ویژگی ها"
  },
]
const features = [
  {
    name:"جنس",
    text:"نخ"
  },
  {
    name:"طرح",
    text:"ساده"
  },
  {
    name:"قد",
    text:"روی کمر"
  },
  {
    name:"نوع",
    text:"جذب"
  },
  {
    name:"یقه",
    text:"انگلیسی"
  },
]
const content = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dicta error esse libero, molestiae
    pariatur quia quidem ratione recusandae, tempore vero voluptas? Eligendi id illum labore nihil recusandae voluptas.

  Et hic in quas sequi sit? Aliquid dolorum ea eligendi ipsum nesciunt obcaecati praesentium reiciendis temporibus?
    Cum dolore ex exercitationem, expedita illo ipsa nihil quae quibusdam recusandae, soluta suscipit veritatis.
   ad asperiores beatae blanditiis consequatur earum eius eos est facere fugit ipsum iure laboriosam mollitia nemo
    perferendis placeat quas quisquam quo repellendus reprehenderit sapiente sed tempore, tenetur veritatis
    voluptatibus.
  dipisci aliquid dolor minus officia, quia veritatis voluptates! Ab ad consectetur cum dignissimos dolores ea
    facere facilis illo laboriosam laborum nemo nesciunt quisquam reiciendis rem sint, ut vel voluptate! Perferendis.
  Aspernatur dicta illum labore modi porro? Culpa dolores est fu
  Et hic in quas sequi sit? Aliquid dolorum ea eligendi ipsum nesciunt obcaecati praesentium reiciendis temporibus?
    Cum dolore ex exercitationem, expedita illo ipsa nihil quae quibusdam recusandae, soluta suscipit veritatis.
   ad asperiores beatae blanditiis consequatur earum eius eos est facere fugit ipsum iure laboriosam mollitia nemo
    perferendis placeat quas quisquam quo repellendus reprehenderit sapiente sed tempore, tenetur veritatis
    voluptatibus.
  dipisci aliquid dolor minus officia, quia veritatis voluptates! Ab ad consectetur cum dignissimos dolores ea
    facere facilis illo laboriosam laborum nemo nesciunt quisquam reiciendis rem sint, ut vel voluptate! Perferendis.
  Aspernatur dicta illum labore modi porro? Culpa dolores est fu
  Et hic in quas sequi sit? Aliquid dolorum ea eligendi ipsum nesciunt obcaecati praesentium reiciendis temporibus?
    Cum dolore ex exercitationem, expedita illo ipsa nihil quae quibusdam recusandae, soluta suscipit veritatis.
   ad asperiores beatae blanditiis consequatur earum eius eos est facere fugit ipsum iure laboriosam mollitia nemo
    perferendis placeat quas quisquam quo repellendus reprehenderit sapiente sed tempore, tenetur veritatis
    voluptatibus.
  dipisci aliquid dolor minus officia, quia veritatis voluptates! Ab ad consectetur cum dignissimos dolores ea
    facere facilis illo laboriosam laborum nemo nesciunt quisquam reiciendis rem sint, ut vel voluptate! Perferendis.
  Aspernatur dicta illum labore modi porro? Culpa dolores est fugiat iure sed ullam voluptatibus. At, nam, numquam?
    Dignissimos eaque, illum in iste iusto, numquam odit repellat saepe similique velit voluptatum.
`

function showInfo(index) {
  collapseHeader.value.forEach(item => item.classList.remove('active-header'))
   const contentChildes = Array.from(contentContainer.value.children)
  contentChildes.forEach(item => item.classList.remove('showInfo'))
  collapseHeader.value[index].classList.add('active-header')
  contentContainer.value.children[index].classList.add('showInfo')
}
</script>

<template>
  <div >
    <div class="info my-10">
      <div class=" collapse-container flex  gap-5 border-b py-2 pb-2">
        <div class=" collapse-header hover:cursor-pointer"  v-for="(item, index) in collapseTitles" :key="index"
             ref="collapseHeader" @click="showInfo(index)">
          <h3>
            {{ item.name }}
          </h3>
        </div>
      </div>
      <div class="content-container pt-4 "  ref="contentContainer">
        <div class="description-content content-description showInfo">
          <div>
            <p  class="text-justify ">{{ content }}</p>
          </div>
        </div>
        <div class="features-content content-description ">
          <div class="flex flex-col gap-y-5">
            <div class="grid grid-cols-12 gap-20 " v-for="(item , index) in features" :key="index">
              <div class="name col-span-1 pb-1.5 text-gray-400"><span>{{ item.name }} </span></div>
              <div class="text col-span-11 pb-1.5  border-b px-2.5 ms-5 flex justify-start"><span>{{item.text}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.collapse-header {
  h3 {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      background: orangered;
      display: none;
    }
  }
}
.content-description{
  display: none;
}
.active-header {
  color: orangered;

  h3:after {
    display: block;
  }
}

.showInfo {
  display: block;
}
</style>