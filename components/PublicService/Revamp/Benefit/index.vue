<template>
  <section class="py-8 flex flex-col items-center gap-8">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ title }}
    </h2>
    <ul
      :class="{
        'grid grid-cols-1 justify-items-center gap-4 w-full': true,
        'sm:grid-cols-2': items.length > 1,
      }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="bg-[#F9FAFB] p-4 rounded-xl w-full"
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
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    isItemHasImage () {
      return this.items.every(item => item.image.file_download_uri !== '')
    }
  }
}
</script>
