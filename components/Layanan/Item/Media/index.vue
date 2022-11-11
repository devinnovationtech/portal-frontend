<template>
  <section class="flex flex-col sm:flex-row xl:flex-col flex-wrap gap-4 xl:gap-6 sm:h-[964px] lg:h-[1004px] xl:h-[557px]">
    <!-- Youtube Video -->
    <section class="bg-gray-900 w-full xl:w-[816px] h-[156px] sm:h-[383px] rounded-xl flex items-center justify-center">
      <lite-youtube
        :videoid="videoId"
        class="w-full h-full bg-gray-900 rounded-xl"
      />
    </section>

    <!-- Thumbnail Pictures -->
    <section
      class="flex flex-row sm:grid sm:grid-cols-1 xl:flex xl:flex-row gap-4 md:gap-6 sm:h-[557px] lg:h-[597px] xl:h-[150px]
      w-full sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[816px] sm:order-last xl:order-none overflow-auto xl:overflow-y-hidden"
    >
      <LazyImg
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Dokumentasi Kegiatan"
        class="xl:min-w-[256px] sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[256px]
        rounded-xl h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px] object-cover"
      />
    </section>

    <!-- Social Media -->
    <section
      class="w-full sm:w-[320px] md:w-[416px] lg:w-[456px] xl:w-[310px] 2xl:w-[360px]
      sm:h-[557px] lg:h-[597px] xl:h-full border border-solid border-gray-300 rounded-xl p-6 flex flex-col"
    >
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
  }
}
</script>
