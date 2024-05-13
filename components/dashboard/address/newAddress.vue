<script setup lang="ts">
const emit = defineEmits(['close'])
const order = ref(true)
const receiverName = ref(null)
const receiverLName = ref(null)
const receiverPhone = ref(null)

onMounted(() => {
  const inputs = document.querySelectorAll('.disabled')
})

function disabled() {
  if (order.value) {
    receiverName.value.disabled = false
    receiverLName.value.disabled = false
    receiverPhone.value.disabled = false
  } else {
    receiverName.value.disabled = true
    receiverLName.value.disabled = true
    receiverPhone.value.disabled = true
  }
}
</script>

<template>
  <div class="backdrop fixed inset-0 z-10 " @click.self="emit('close')">
    <div class="modal-content w-1/3 mx-auto mt-[10vh]">
      <div class="title border-b pb-4 mb-5 font-bold text-lg text-center">
        <h4>جزئیات آدرس</h4>
      </div>
      <div class="form">
        <form action="">
          <div class="input-group border-b pb-4 flex flex-col gap-5">
            <label for="address">نشانی پستی </label>
            <textarea name="" id="address" cols="30" rows="10"></textarea>
          </div>
          <div class="input-group grid grid-cols-12 border-b pb-4 gap-4 mt-4">
            <div class="input-group-item flex flex-col col-span-6 gap-4">
              <label for="province"> استان</label>
              <input type="text" name="" id="province">
            </div>
            <div class="input-group-item col-span-6 flex flex-col gap-4">
              <label for="city"> شهرستان</label>
              <input type="text" name="" id="city">
            </div>
            <div class="input-group-item col-span-3 flex flex-col gap-4">
              <label for="plaque"> پلاک</label>
              <input type="text" name="" id="plaque">
            </div>
            <div class="input-group-item col-span-3 flex flex-col gap-4">
              <label for="unit"> واحد</label>
              <input type="text" name="" id="unit">
            </div>
            <div class="input-group-item col-span-6 flex flex-col gap-4">
              <label for="postal-code"> کد پستی</label>
              <input type="text" name="" id="postal-code" placeholder="کدپستی باید 10 رقمی و بدون خط تیره باشد.">
            </div>
          </div>
          <div class="input-group grid grid-cols-12 gap-4">
            <div class="input-group-item flex col-span-12 gap-2 mt-4 items-center ">
              <input id="order" type="checkbox" class="w-4 h-4 " v-model="order" @click="disabled">
              <label for="order">گیرنده سفارش خودم هستم </label>
            </div>
            <div class="input-group-item flex flex-col col-span-6 gap-3">
              <label for="name-receiver"> نام گیرنده </label>
              <input id="name-receiver" ref="receiverName" class="disabled" type="text" disabled>
            </div>
            <div class="input-group-item flex flex-col col-span-6 gap-3">
              <label for="last-name-receiver"> نام خانوادگی گیرنده</label>
              <input id="last-name-receiver" ref="receiverLName" class="disabled" type="text" disabled>
            </div>
            <div class="input-group-item flex flex-col col-span-6 gap-3">
              <label for="phone-receiver">شماره موبایل </label>
              <input id="phone-receiver" ref="receiverPhone" type="text" class="disabled" disabled>
            </div>
          </div>
          <div class="border-t pt-4 mt-5 ">
            <button
                class="w-full text-center border border-red-600 rounded py-1 hover:bg-red-500 hover:text-white font-bold">
              ثبت آدرس
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
}

input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px 15px;
  outline: 0;

  &:focus {
    border: 1px solid cornflowerblue;
    box-shadow: 0 0 3px rgba(100, 149, 237, 0.75);
  }

  &::placeholder {
    font-size: 11px;
  }
}

textarea {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px 15px;
  outline: 0;
  max-height: 100px;
  resize: none;
  overflow: auto;

  &:focus {
    border: 1px solid cornflowerblue;
    box-shadow: 0 0 8px rgba(100, 149, 237, 0.72);
  }
}

.modal-content {
  background: #FFFFFF;
  padding: 20px;
  border-radius: 5px;
  max-height: 80vh;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
  overflow: hidden;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: orange;
}

label {
  position: relative;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    content: "*";
    padding: 0 5px;
    color: orangered;
  }
}
</style>