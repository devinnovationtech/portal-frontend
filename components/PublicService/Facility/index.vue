<template>
  <section class="flex flex-col items-center gap-8 py-8 bg-[#F9FAFB] rounded-2xl">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800">
      {{ facility.title }}
    </h2>
    <ul class="flex flex-col sm:flex-row flex-wrap gap-4 w-full xl:w-[800px] justify-center">
      <li
        v-for="(item, index) in facility.items"
        :key="index"
        :class="{
          'flex flex-col border border-solid border-[#DFE6F0] rounded-xl': true,
          'sm:w-[320px] lg:w-[392px]': !hasMoreThanTwo,
          'sm:w-[208px] lg:w-[256px]': hasMoreThanTwo
        }"
      >
        <figure class="w-full h-[108px] bg-gray-200 flex items-center justify-center rounded-t-xl overflow-hidden">
          <!-- @TODO: move logo placeholder to somewhere general -->
          <LazyImg
            :src="item.image || '/icons/program-unggulan/logo-placeholder.svg'"
            alt="Ilustrasi Fasilitas"
            :class="{
              'w-full h-full object-cover' : item.image,
              'w-12 h-12' : !item.image
            }"
          />
        </figure>
        <p class="font-medium leading-6 text-sm text-blue-gray-600 text-center line-clamp-4 px-3 pt-3 pb-1">
          {{ item.title }}
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
