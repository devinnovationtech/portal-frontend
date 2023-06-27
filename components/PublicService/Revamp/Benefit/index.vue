<template>
  <section class="px-4 py-8 flex flex-col items-center gap-4 2xl:w-[964px]">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ benefit.title }}
    </h2>
    <ul class="grid grid-cols-1 justify-items-center gap-4 w-full sm:grid-cols-2">
      <li
        v-for="(item, index) in benefit.items"
        :key="index"
        :class="{
          'bg-[#F9FAFB] px-3 py-4 rounded-xl md:w-[316px] 2xl:w-[450px]': true,
          'xl:w-[425px] ': isItemHasImage,
          'xl:w-[400px] p-3': !isItemHasImage
        }"
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
