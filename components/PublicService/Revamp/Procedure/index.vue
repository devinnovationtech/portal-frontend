<template>
  <section class="flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ title }}
    </h2>
    <div
      :class="{
        'grid grid-cols-1 min-w-0 w-full': true,
        'lg:grid-cols-[468px,auto] xl:grid-cols-2 gap-3 sm:gap-6 xl:gap-3 sm:max-w-[525px] lg:max-w-full xl:max-w-5xl': coverImage,
        'sm:max-w-[525px] md:max-w-[656px] lg:max-w-[800px]': !coverImage
      }"
    >
      <div class="lg:order-last">
        <div
          v-if="coverImage"
          class="relative w-full group overflow-hidden rounded-xl"
        >
          <!-- Image Overlay -->
          <div
            class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080] group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
            @click="$emit('show-preview', { index: 0, images: [coverImage] })"
          >
            <Icon src="/icons/zoom.svg" size="50px" />
          </div>
          <LazyImg
            :src="coverImage"
            alt="Gambar Alur dan Prosedur"
            class="w-full object-cover"
          />
        </div>
      </div>
      <ul class="grid grid-cols-1 justify-items-center gap-4 w-full lg:h-fit">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="bg-[#F9FAFB] px-3 py-4 rounded-xl md:w-full 2xl:w-[450px]"
        >
          <PublicServiceRevampList :item="item" />
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
  }
}
</script>
