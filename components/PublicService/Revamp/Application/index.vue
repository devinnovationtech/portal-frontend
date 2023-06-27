<template>
  <section class="px-4 py-8 flex flex-col items-center gap-4 bg-[#F9FAFB] rounded-2xl bg-[url('/images/public-service/supergraphics.webp')] bg-no-repeat bg-right 2xl:w-[964px]">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ application.title }}
    </h2>
    <ul class="grid grid-cols-1 justify-items-center gap-4 w-full sm:grid-cols-2">
      <li
        v-for="(item, index) in application.features"
        :key="index"
        class="p-3 border border-solid bg-white border-[#DFE6F0] rounded-xl sm:w-[240px] md:w-[300px] lg:w-[304px] xl:w-[392px]"
      >
        <PublicServiceRevampList :item="item" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
