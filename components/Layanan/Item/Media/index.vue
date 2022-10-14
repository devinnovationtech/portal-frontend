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
        v-for="(image, index) in images"
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
    <!-- Social Media -->
    <section class="flex flex-col rounded-xl p-4 border border-solid border-gray-300 xl:row-span-2">
      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400">
        <Icon src="/icons/category-blue.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <p>Kategori</p>
          <p class="text-blue-gray-600">
            {{ category }}
          </p>
        </div>
      </div>

      <Link :link="website" class="mt-8">
        <Button
          class="flex flex-row justify-between !px-5 !py-2 !rounded-xl w-full"
          variant="secondary"
        >
          <div class="flex flex-col items-start">
            <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
              Link Akses
            </p>
            <p class="font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800">
              <!-- @TODO: dynamic button label -->
              SIDATUK
            </p>
          </div>
          <Icon src="/icons/world.svg" size="24px" />
        </Button>
      </Link>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-8">
        <Icon src="/icons/share.svg" size="16px" class="my-[5px] mr-[5px]" />
        <div class="flex flex-col justify-center gap-2">
          <p>Sosial Media</p>
          <section class="grid grid-cols-3 sm:grid-cols-4 items-end justify-items-start sm:justify-items-center sm:justify-start gap-2 w-full">
            <Link
              v-if="socialMedia.facebook"
              :link="socialMedia.facebook"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/facebook-logo.svg" size="12px" />
              Facebook
            </Link>
            <Link
              v-if="socialMedia.instagram"
              :link="socialMedia.instagram"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/instagram-logo.svg" size="18px" />
              Instagram
            </Link>
            <Link
              v-if="socialMedia.twitter"
              :link="socialMedia.twitter"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/twitter-logo.svg" size="18px" />
              Twitter
            </Link>
            <Link
              v-if="socialMedia.youtube"
              :link="socialMedia.youtube"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/youtube-logo.svg" size="18px" />
              Youtube
            </Link>
          </section>
        </div>
      </div>
    </section>
    <BaseImagePreview
      :show="show"
      :images="images"
      :index="imageIndex"
      @close="show = false"
    />
  </section>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: '-'
    },
    website: {
      type: String,
      default: '-'
    },
    socialMedia: {
      type: Object,
      default: () => ({})
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: false,
      imageIndex: 0
    }
  },
  computed: {
    videoId () {
      if (this.video) {
        const queryString = this.video.split('?')[1]
        const urlParams = new URLSearchParams(queryString)

        return urlParams.get('v')
      } else {
        return '-'
      }
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
