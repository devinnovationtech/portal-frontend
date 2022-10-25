<template>
  <section class="grid grid-flow-row sm:grid-cols-[auto,262px] lg:grid-cols-2 xl:grid-cols-[816px,auto] gap-4 xl:gap-6">
    <!-- Youtube Video -->
    <section class="flex justify-center bg-gray-900 rounded-xl h-[156px] sm:h-[383px] sm:col-span-2 xl:col-span-1">
      <lite-youtube
        :videoid="videoId"
        class="w-full h-full rounded-xl"
      />
    </section>

    <!-- Thumbnail Pictures -->
    <section class="flex flex-row sm:grid sm:grid-cols-1 xl:flex xl:flex-row gap-4 md:gap-6 sm:h-[557px] lg:h-[597px] xl:h-auto sm:order-last overflow-auto xl:overflow-hidden">
      <PublicServiceMediaImageSwiper
        :images="imageList"
        class="hidden xl:block w-full"
        @show-preview="(index) => $emit('show-preview', { index, images: imageList })"
      />
      <PublicServiceMediaImage
        v-for="(image, index) in imageList"
        :key="index"
        :image="image"
        class="xl:hidden"
        @show-preview="$emit('show-preview', { index, images: imageList })"
      />
    </section>

    <!-- Card -->
    <PublicServiceMediaCard :data="data" />
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      show: false,
      imageIndex: 0
    }
  },
  computed: {
    hasVideo () {
      return this.data && this.data.media?.video
    },
    videoId () {
      if (this.hasVideo) {
        const queryString = this.data.media.video.split('?')[1]
        const urlParams = new URLSearchParams(queryString)

        return urlParams.get('v')
      } else {
        return '-'
      }
    },
    imageList () {
      return this.data && this.data.media ? this.data.media.images : []
    }
  },
  methods: {
    showImage (index) {
      this.imageIndex = index
      this.show = true
    }
  }
}
</script>
