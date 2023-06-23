<template>
  <section class="px-4 py-8 flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ benefit.title }}
    </h2>
    <ul class="flex flex-col items-center justify-center flex-wrap gap-4 w-full md:flex-row xl:w-[1280px]">
      <li
        v-for="(item, index) in benefit.items"
        :key="index"
        class="bg-[#F9FAFB] w-[288px] max-h-[240px] md:w-[316px] md:h-[147px] lg:w-[452px] xl:w-[462px] px-3 py-4"
      >
        <PublicServiceRevampBenefitCard v-if="isItemHasImage" :item="item" />
        <PublicServiceRevampList v-else :item="item" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    benefit: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    isItemHasImage () {
      return this.benefit.items.every(item => item.image.file_download_uri !== '')
    }
  }
}
</script>
