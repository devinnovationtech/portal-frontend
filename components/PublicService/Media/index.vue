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
        v-for="(image, index) in data.media.images"
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

    <!-- @todo: refactor Social Media Section -->
    <!-- Social Media -->
    <section class="flex flex-col rounded-xl p-4 border border-solid border-gray-300 xl:row-span-2 sm:max-h-[557px] lg:max-h-[597px] xl:max-h-[557px] overflow-auto">
      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400">
        <Icon src="/icons/layanan-publik/category.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <p>Kategori</p>
          <p class="text-blue-gray-600 capitalize">
            {{ data.category }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
        <Icon src="/icons/layanan-publik/location.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <p>Alamat</p>
          <p class="text-blue-gray-600">
            {{ data.address }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
        <Icon src="/icons/layanan-publik/phone.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center">
          <p class="mb-2">
            Telepon
          </p>
          <p v-for="phone in data.phone" :key="phone" class="text-blue-gray-600">
            {{ phone }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
        <Icon src="/icons/layanan-publik/gmail.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <p>Email</p>
          <a :href="`mailto:${data.email}`" class="text-blue-gray-600">
            {{ data.email }}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
        <Icon src="/icons/layanan-publik/clock.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <p>Jam Operasional ({{ currentDate }})</p>
          <div class="flex flex-row justify-between items-center w-full py-2 px-3 rounded-lg bg-[#F6FBFB] text-blue-gray-600">
            <div>
              <!-- @todo: dynamic open hours -->
              <span class="text-green-600 font-bold">Buka</span> - Tutup Pukul 16.00
            </div>
            <Icon
              name="chevron-right"
              class="text-green-600"
              size="16px"
            />
          </div>
        </div>
      </div>

      <!-- @todo: refactor button list section -->
      <Link v-if="data.website" :link="data.website" class="mt-4 sm:mt-8">
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

      <Link v-if="data.google_play" :link="data.google_play" class="mt-3">
        <Button
          class="flex flex-row justify-between !px-5 !py-2 !rounded-xl w-full"
          variant="secondary"
        >
          <div class="flex flex-col items-start">
            <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
              Unduh Aplikasinya di
            </p>
            <p class="font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800">
              Google Play
            </p>
          </div>
          <Icon src="/icons/layanan-publik/google-play.svg" size="24px" />
        </Button>
      </Link>

      <Link v-if="data.app_store" :link="data.app_store" class="mt-3">
        <Button
          class="flex flex-row justify-between !px-5 !py-2 !rounded-xl w-full"
          variant="secondary"
        >
          <div class="flex flex-col items-start">
            <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
              Dapatkan di
            </p>
            <p class="font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800">
              App Store
            </p>
          </div>
          <Icon src="/icons/layanan-publik/app-store.svg" size="24px" />
        </Button>
      </Link>

      <Link v-if="data.google_form" :link="data.google_form" class="mt-3">
        <Button
          class="flex flex-row justify-between !px-5 !py-2 !rounded-xl w-full"
          variant="secondary"
        >
          <div class="flex flex-col items-start">
            <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
              Akses formulir
            </p>
            <p class="font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800">
              Google Forms
            </p>
          </div>
          <Icon src="/icons/layanan-publik/google-form.svg" size="24px" />
        </Button>
      </Link>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
        <Icon src="/icons/share.svg" size="16px" class="my-[5px] mr-[5px]" />
        <div class="flex flex-col justify-center gap-2">
          <p>Sosial Media</p>
          <section class="grid grid-cols-3 md:grid-cols-5 items-end justify-items-start sm:justify-items-center sm:justify-start gap-2 w-full">
            <Link
              v-if="data.social_media.facebook"
              :link="data.social_media.facebook"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/facebook-logo.svg" size="12px" />
              Facebook
            </Link>
            <Link
              v-if="data.social_media.instagram"
              :link="data.social_media.instagram"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/instagram-logo.svg" size="18px" />
              Instagram
            </Link>
            <Link
              v-if="data.social_media.twitter"
              :link="data.social_media.twitter"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/twitter-logo.svg" size="18px" />
              Twitter
            </Link>
            <Link
              v-if="data.social_media.youtube"
              :link="data.social_media.youtube"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/youtube-logo.svg" size="18px" />
              Youtube
            </Link>
            <Link
              v-if="data.social_media.tiktok"
              :link="data.social_media.tiktok"
              class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer"
            >
              <Icon src="/icons/social-media/tiktok-logo.svg" size="18px" />
              Tiktok
            </Link>
          </section>
        </div>
      </div>
    </section>
    <BaseImagePreview
      :show="show"
      :images="data.media.images"
      :index="imageIndex"
      @close="show = false"
    />
  </section>
</template>

<script>
import { format } from '~/utils/date'

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
    videoId () {
      if (this.data.media.video) {
        const queryString = this.data.media.video.split('?')[1]
        const urlParams = new URLSearchParams(queryString)

        return urlParams.get('v')
      } else {
        return '-'
      }
    },
    currentDate () {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

      return format(Date.now(), options)
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
