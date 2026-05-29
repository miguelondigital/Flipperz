<script setup lang="ts">
import { onMounted, ref } from "vue"
const status = ref("Awaiting")

onMounted(async ()=>{
  const res = await fetch('http://localhost:3000/health')
  const data = await res.json()
  status.value = data.status
})

</script>

<template>
  <div class="flex items-center justify-center h-50 bg-blue-500">
    <h1 class="text-4xl font-bold text-red-600">Flipperz</h1>
  </div>
  <div class="bg-green-500 items-center justify-center flex h-50">
    <h1  type="button" class="text-red-600 text-4xl font-bold">
      {{status}}
    </h1>

  </div>
  

</template>
