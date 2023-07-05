<template>
  <section class="py-8 flex flex-col items-center gap-8 bg-[#F9FAFB] rounded-2xl bg-[url('/images/public-service/supergraphics.webp')] bg-no-repeat bg-right">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ title }}
    </h2>
    <ul
      :class="{
        'grid grid-cols-1 justify-items-center gap-4 w-full': true,
        'sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3': isItemHasImage,
        'sm:grid-cols-2': !isItemHasImage
      }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'border border-solid bg-white border-[#DFE6F0] rounded-xl': true,
          'sm:w-[162px] md:w-[197px] lg:w-[264px] xl:w-[256px]': isItemHasImage,
          'sm:w-[240px] md:w-[300px] lg:w-[304px] xl:w-[392px] p-3': !isItemHasImage
        }"
        class=""
      >
        <PublicServiceRevampFacilityCard v-if="isItemHasImage" :item="item" />
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
      return this.items.every(item => !!item.image?.file_download_uri)
    }
  }
}
</script>
