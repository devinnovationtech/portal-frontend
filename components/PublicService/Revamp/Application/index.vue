<template>
  <section class="py-8 flex flex-col items-center gap-8 bg-[#F9FAFB] rounded-2xl bg-[url('/images/public-service/supergraphics.webp')] bg-no-repeat bg-right">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ title }}
    </h2>
    <ul class="grid grid-cols-1 justify-items-center gap-4 w-full sm:grid-cols-2">
      <li
        v-for="(item, index) in features"
        :key="index"
        class="p-4 border border-solid bg-white border-[#DFE6F0] rounded-xl w-full"
      >
        <PublicServiceRevampList :item="item" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    features: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
