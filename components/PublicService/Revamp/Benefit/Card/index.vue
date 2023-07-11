<template>
  <div class="flex flex-col w-full gap-4 sm:flex-row">
    <figure class="w-full h-full bg-gray-200 rounded-md overflow-hidden md:max-w-[125px]">
      <LazyImg
        :src="item.image.file_download_uri"
        :alt="item.image.file_name"
        width="265"
        height="115"
        class="w-full h-full object-cover object-center"
      />
    </figure>
    <p class="w-full font-lato font-normal leading-[23px] text-sm text-blue-gray-900 text-left">
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
