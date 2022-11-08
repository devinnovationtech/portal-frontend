<template>
  <section class="flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ purpose.title }}
    </h2>
    <PublicServiceList :items="purpose.items" :grid="purpose.items.length > 1" />
  </section>
</template>

<script>
export default {
  props: {
    purpose: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
