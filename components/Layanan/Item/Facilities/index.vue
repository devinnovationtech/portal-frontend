<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-8">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ sectionTitle }}
    </h2>
    <div class="flex flex-row flex-wrap gap-4 xl:w-[800px] justify-center">
      <div
        v-for="(facility, index) in facilities"
        :key="index"
        :class="{
          'flex flex-col border border-solid border-[#DFE6F0] rounded-xl': true,
          'sm:w-[320px] lg:w-[392px]': facilities.length <= 2,
          'sm:w-[208px] lg:w-[256px]': facilities.length > 2
        }"
      >
        <LazyImg
          :src="facility.image"
          alt="Ilustrasi Fasilitas"
          class="object-cover rounded-t-xl h-[108px]"
        />
        <p class="font-medium leading-6 text-sm text-blue-gray-600 text-center line-clamp-4 px-3 pt-3 pb-1">
          {{ facility.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '-'
    },
    facilities: {
      type: Array,
      default: () => []
    }
  }
}
</script>
