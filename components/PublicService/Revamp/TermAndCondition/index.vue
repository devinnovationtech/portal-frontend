<template>
  <section class="py-8 flex flex-col items-center gap-8">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ title }}
    </h2>
    <div v-if="coverImage">
      <div class="relative w-full group overflow-hidden rounded-xl">
        <!-- Image Overlay -->
        <div
          class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080] group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
          @click="$emit('show-preview', { index: 0, images: [coverImage] })"
        >
          <Icon src="/icons/zoom.svg" size="50px" />
        </div>
        <LazyImg
          width="368"
          height="368"
          :src="coverImage"
          alt="Gambar Syarat dan Ketentuan"
          class="w-[368px] object-cover"
        />
      </div>
    </div>
    <ul class="grid grid-cols-1 justify-items-center items-start gap-4 w-full sm:grid-cols-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="bg-[#F9FAFB] p-4 rounded-xl w-full"
      >
        <PublicServiceRevampList :item="item" />
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
