<template>
  <div
    class="relative h-[150px] sm:min-h-[170px] lg:min-h-[183px] xl:min-h-0 xl:h-[150px] min-w-[224px] xl:min-w-[256px] sm:w-full xl:w-[256px]
    flex flex-col gap-6 group rounded-xl overflow-hidden group"
  >
    <!-- Image Overlay -->
    <div
      class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
      group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
      @click="$emit('show-preview')"
    >
      <Icon src="/icons/zoom.svg" size="50px" alt="" />
    </div>

    <!-- Content Image -->
    <LazyImg
      :src="image"
      width="256"
      height="150"
      class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform ease-brand duration-250"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
