<template>
  <div class="flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col justify-center">
      <span class="text-2xl font-medium mb-2">王帅琪</span>
      <div>
        <label class="inline-block w-18 sm:hidden">博客:</label>
        <a href="https://wsq.cool" target="_blank">https://wsq.cool</a>
      </div>
    </div>
    <div>
      <div>
        <label class="inline-block w-18">Github:</label>
        <a href="https://github.com/myWsq" target="_blank">
          github.com/myWsq
        </a>
      </div>
      <div>
        <label class="inline-block w-18">电子邮件:</label>
        <a href="mailto:wsq961@outlook.com"> wsq961@outlook.com </a>
      </div>
      <div v-if="phone">
        <label class="inline-block w-18">手机号码:</label>
        {{ phone }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const phone = ref<string | null>(null);

onMounted(() => {
  phone.value = localStorage.getItem("phone");
});
</script>
