<template>
  <section class="py-8 px-6 xl:px-[64px] flex flex-col items-center gap-8">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ title }}
    </h2>
    <div
      :class="{
        'grid grid-cols-1 min-w-0 w-full': true,
        'gap-y-4 gap-3 sm:gap-6 lg:grid-cols-[1fr,392px]': coverImage,
      }"
    >
      <div class="md:justify-self-center lg:order-last">
        <div
          v-if="coverImage"
          class="relative w-full h-full md:w-[392px] md:h-[501px] group overflow-hidden rounded-xl"
        >
          <!-- Image Overlay -->
          <div
            class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080] group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
            @click="$emit('show-preview', { index: 0, images: [coverImage] })"
          >
            <Icon src="/icons/zoom.svg" size="50px" />
          </div>
          <LazyImg
            width="392"
            height="501"
            :src="coverImage"
            alt="Gambar Alur dan Prosedur"
            class="w-full h-full md:w-[392px] md:h-[501px] object-cover"
          />
        </div>
      </div>
      <ul
        :class="{
          'grid grid-cols-1 gap-4 w-full': true,
          'h-fit': coverImage,
        }"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="bg-[#F9FAFB] p-4 rounded-xl w-full"
        >
          <PublicServiceRevampList :item="item" :is-detail-text-button="isDetailText" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    coverImage: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isDetailText: true
    }
  }
}
</script>
