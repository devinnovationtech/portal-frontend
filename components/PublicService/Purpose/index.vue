<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ purpose.title }}
    </h2>
    <PublicServiceList :items="purpose.items" />
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
