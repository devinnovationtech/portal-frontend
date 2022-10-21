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
    <section class="flex flex-row sm:grid sm:grid-cols-1 xl:flex xl:flex-row gap-4 md:gap-6 sm:h-[557px] lg:h-[597px] xl:h-auto sm:order-last overflow-auto sm:overflow-x-hidden xl:overflow-x-auto xl:overflow-y-hidden">
      <div
        v-for="(image, index) in imageList"
        :key="index"
        class="media__image relative group overflow-hidden"
      >
        <div
          class="media__image opacity-0 absolute flex items-center justify-center bg-[#00000080] group-hover:opacity-100 z-10"
          @click="showImage(index)"
        >
          <Icon src="/icons/zoom.svg" size="50px" />
        </div>
        <LazyImg
          :src="image"
          alt="Dokumentasi Kegiatan"
          class="media__image object-cover group-hover:scale-110"
        />
      </div>
    </section>

    <!-- Card -->
    <PublicServiceMediaCard :data="data" />

    <BaseImagePreview
      :show="show"
      :images="imageList"
      :index="imageIndex"
      @close="show = false"
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
<style lang="scss" scoped>
.media {
  &__image {
    @apply min-w-[224px] xl:min-w-[256px] sm:w-full xl:w-[256px]
    h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px] rounded-xl transition-all ease-brand duration-250;

    &:hover {
      @apply cursor-pointer;
    }
  }
}
</style>
