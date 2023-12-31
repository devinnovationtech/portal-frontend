<template>
  <section class="grid grid-flow-row sm:grid-cols-[auto,262px] lg:grid-cols-2 xl:grid-cols-[816px,auto] gap-4 xl:gap-6">
    <!-- Youtube Video -->
    <section
      :class="{
        'flex justify-center bg-[#F5F5F5] rounded-xl h-[156px] sm:h-[383px] sm:col-span-2 xl:col-span-1': true,
        'bg-gray-900': hasYoutubeVideo
      }"
    >
      <lite-youtube
        v-if="hasYoutubeVideo"
        :videoid="videoId"
        class="w-full h-full rounded-xl"
      />
      <LazyImg v-else :src="videoCoverImage" />
    </section>

    <!-- Thumbnail Pictures -->
    <section v-if="hasImageList" class="flex sm:flex-col xl:flex-row gap-4 md:gap-6 sm:h-[557px] lg:h-[597px] xl:h-auto sm:order-last overflow-auto xl:overflow-hidden">
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
    <PublicServiceMediaCard
      :data="data"
      :class="{
        'flex flex-col rounded-xl p-4 border border-solid border-gray-300 xl:row-span-2 sm:max-h-[557px] lg:max-h-[597px] xl:max-h-[557px] overflow-auto': true,
        'xl:row-span-1 xl:max-h-[383px] sm:col-span-2 xl:col-span-1': !hasImageList
      }"
    />
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
        return ''
      }
    },
    imageList () {
      return this.data && this.data.media ? this.data.media.images : []
    },
    hasImageList () {
      return this.imageList.length > 0
    },
    videoUrlOrigin () {
      if (!this.hasVideo) {
        return ''
      }

      const pathArray = this.data.media.video.split('/')
      const origin = pathArray[2]

      return origin
    },
    hasVideoCover () {
      return this.hasVideo && this.videoUrlOrigin !== 'www.youtube.com'
    },
    hasYoutubeVideo () {
      return this.hasVideo && this.videoUrlOrigin === 'www.youtube.com'
    },
    videoCoverImage () {
      if (this.hasImageList) {
        return this.imageList[0]
      }

      if (this.hasVideoCover) {
        return this.data.media.video
      }

      return '/images/no-image.svg'
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
