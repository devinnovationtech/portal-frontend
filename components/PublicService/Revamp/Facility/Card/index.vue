<template>
  <div class="flex flex-col w-full gap-2">
    <figure class="w-full h-[108px] flex items-center justify-center rounded-t-xl overflow-hidden">
      <LazyImg
        :src="item.image.file_download_uri"
        :alt="item.image.file_name"
        width="265"
        height="115"
        class="w-full h-full object-cover object-center"
      />
    </figure>
    <p class="w-full px-2 pb-1 font-lato font-normal leading-[23px] text-sm text-blue-gray-900 text-center line-clamp-3">
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
