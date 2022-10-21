<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-8">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ facility.title }}
    </h2>
    <ul class="flex flex-row flex-wrap gap-4 xl:w-[800px] justify-center">
      <li
        v-for="(item, index) in facility.items"
        :key="index"
        :class="{
          'flex flex-col border border-solid border-[#DFE6F0] rounded-xl': true,
          'sm:w-[320px] lg:w-[392px]': !hasMoreThanTwo,
          'sm:w-[208px] lg:w-[256px]': hasMoreThanTwo
        }"
      >
        <LazyImg
          :src="item.image"
          alt="Ilustrasi Fasilitas"
          class="object-cover rounded-t-xl h-[108px]"
        />
        <p class="font-medium leading-6 text-sm text-blue-gray-600 text-center line-clamp-4 px-3 pt-3 pb-1">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    facility: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    hasMoreThanTwo () {
      return this.facility && Array.isArray(this.facility.items) && this.facility.items.length > 2
    }
  }
}
</script>
