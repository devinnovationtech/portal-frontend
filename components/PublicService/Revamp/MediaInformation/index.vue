<template>
  <section class="media-information mb-4">
    <h2 class="font-lora text-2xl text-center md:text-[28px] md:text-left font-bold leading-9 text-blue-gray-800 mb-4">
      Media dan Informasi
    </h2>

    <div class="media-information__container max-w-full grid grid-cols-1 gap-y-4">
      <!-- Cover Image -->
      <div
        :class="{
          'w-full p-4 bg-gray-100 rounded-2xl': true,
          'grid grid-cols-1 gap-y-4 min-h-[283px] sm:h-[420px] lg:grid-cols-[667px_1fr] lg:gap-x-4 lg:gap-y-0': hasContentImages,
        }"
      >
        <!-- Youtube Video -->
        <section
          :class="{
            'flex justify-center bg-[#F5F5F5] rounded-xl h-[170px] sm:h-[245px] lg:h-[388px] sm:col-span-2 lg:col-span-1': true,
            'bg-gray-900': hasYoutubeVideo
          }"
        >
          <lite-youtube
            v-if="hasYoutubeVideo"
            :videoid="videoId"
            class="w-full h-full rounded-xl"
          />
          <LazyImg
            v-else
            :src="coverImage"
            class="w-full h-full rounded-xl object-cover object-center"
          />
        </section>

        <section v-if="hasContentImages">
          <swiper
            v-show="isSwiperReady"
            ref="publicServiceContentImages"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            class="h-[65px] sm:h-[127px] lg:h-[388px]"
            @ready="isSwiperReady = true"
          >
            <swiper-slide
              v-for="(image, index) in contentImages"
              :key="`${image.file_name}-${index}`"
            >
              <div class="relative w-full h-full rounded-xl overflow-hidden border border-gray-300 group">
                <!-- Image Overlay -->
                <div
                  class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
                  group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
                  @click="handleImagePreview(index)"
                >
                  <BaseIcon
                    icon="/icons/zoom.svg"
                    :size="50"
                    mode="image"
                  />
                </div>

                <!-- Content Image -->
                <LazyImg
                  width="235"
                  height="136"
                  :src="image.file_download_uri"
                  alt="Cover gambar layanan"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform ease-brand duration-250"
                />
              </div>
            </swiper-slide>
          </swiper>
        </section>
      </div>

      <div class="p-2 sm:px-[14px] py-3">
        <HotlineBar :telephone="telephone" />
      </div>

      <div
        class="media-information__detail-container max-w-full h-full px-4 py-6 grid grid-cols-1 gap-y-6 gap-x-4 border border-gray-300 rounded-xl
        sm:grid-cols-[1fr_216px] sm:grid-rows-[auto_auto_1fr]
        lg:grid-cols-[1fr_345px] lg:grid-rows-[auto_48px_1fr]"
      >
        <OperationalTimeAndFee
          :current-date="currentDate"
          :operational-times="operationalTimes"
          :service-fee="serviceFeeLabel"
          :has-description="hasDescription"
          :is-external-link="isExternalLink"
        />

        <OfficialWebsite :website="website" />

        <Locations
          :has-multiple-locations="hasMultipleLocations"
          :first-location="firstLocation"
          :rest-of-locations="restOfLocations"
        />

        <SocialMediaAndLinks
          :email="email"
          :social-media="socialMediaData"
          :links="linkData"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HotlineBar from '@/components/PublicService/Revamp/MediaInformation/HotlineBar'
import OperationalTimeAndFee from '@/components/PublicService/Revamp/MediaInformation/OperationalTimeAndFee'
import OfficialWebsite from '@/components/PublicService/Revamp/MediaInformation/OfficialWebsite'
import Locations from '@/components/PublicService/Revamp/MediaInformation/Locations'
import SocialMediaAndLinks from '@/components/PublicService/Revamp/MediaInformation/SocialMediaAndLinks'

export default {
  components: {
    HotlineBar,
    OperationalTimeAndFee,
    OfficialWebsite,
    Locations,
    SocialMediaAndLinks
  },
  props: {
    videoUrl: {
      type: String,
      default: ''
    },
    coverImage: {
      type: String,
      default: ''
    },
    contentImages: {
      type: Array,
      default: () => []
    },
    telephone: {
      type: String,
      default: ''
    },
    currentDate: {
      type: String,
      default: ''
    },
    operationalTimes: {
      type: Array,
      default: () => []
    },
    serviceFee: {
      type: Object,
      default: () => ({
        has_range: 0,
        minimum_fee: 0,
        maximum_fee: 0,
        has_description: 0,
        description: ''
      })
    },
    website: {
      type: String,
      default: ''
    },
    locations: {
      type: Array,
      default: () => []
    },
    email: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    },
    socialMedia: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isSwiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 3,
        spaceBetween: 10,
        mousewheel: true,
        passiveListeners: true,
        breakpoints: {
          1024: {
            direction: 'vertical',
            slidesPerView: 3
          }
        }
      })
    }
  },
  computed: {
    hasYoutubeVideo () {
      return !!this.videoUrl
    },
    videoId () {
      if (this.hasYoutubeVideo) {
        const queryString = this.videoUrl.split('?')[1]
        const urlParams = new URLSearchParams(queryString)

        return urlParams.get('v')
      } else {
        return ''
      }
    },
    hasContentImages () {
      return this.contentImages.length > 0 && this.contentImages.some(image => image.file_download_uri !== '')
    },
    serviceFeeLabel () {
      if (this.serviceFee.has_description) {
        return this.serviceFee.description
      }

      if (!this.serviceFee.has_range && this.serviceFee.minimum_fee === 0) {
        return 'Gratis'
      }

      if (this.serviceFee.has_range) {
        return `Rp. ${this.formatNumber(this.serviceFee.minimum_fee)} - ${this.formatNumber(this.serviceFee.maximum_fee)} `
      }

      return `Rp. ${this.formatNumber(this.serviceFee.minimum_fee)}`
    },
    hasDescription () {
      return this.serviceFee.has_description === 1
    },
    isExternalLink () {
      return this.hasDescription && this.serviceFeeLabel.startsWith('http')
    },
    hasMultipleLocations () {
      return this.locations.length > 1
    },
    firstLocation () {
      return this.locations[0] // first index of location for preview purposes
    },
    restOfLocations () {
      if (this.hasMultipleLocations) {
        return this.locations.filter((_, index) => index !== 0)
      }

      return []
    },
    linkData () {
      const LINK_LABEL_MAP = {
        WEBSITE: 'Link Akses/Unduh',
        GOOGLE_FORM: 'Link Google Form',
        GOOGLE_PLAYSTORE: 'Unduh Aplikasinya di',
        APP_STORE: 'Dapatkan di'
      }

      const LINK_ICON_MAP = {
        WEBSITE: '/icons/world.svg',
        GOOGLE_FORM: '/icons/layanan-publik/google-form.svg',
        GOOGLE_PLAYSTORE: '/icons/layanan-publik/google-play.svg',
        APP_STORE: '/icons/layanan-publik/app-store.svg'
      }

      return this.links.map(item => ({
        title: LINK_LABEL_MAP[item.type],
        label: item.label,
        link: item.tautan,
        icon: LINK_ICON_MAP[item.type]
      }))
    },
    socialMediaData () {
      const SOCIAL_MEDIA_ICON_MAP = {
        FACEBOOK: '/icons/social-media/facebook-logo.svg',
        INSTAGRAM: '/icons/social-media/instagram-logo.svg',
        TWITTER: '/icons/social-media/twitter-logo.svg',
        YOUTUBE: '/icons/social-media/youtube-logo.svg',
        TIKTOK: '/icons/social-media/tiktok-logo.svg'
      }

      const socialMedia = this.socialMedia.map(item => ({
        title: item.name,
        label: item.type.toLowerCase(),
        link: item.link,
        icon: SOCIAL_MEDIA_ICON_MAP[item.type]
      }))

      // filter social media with link property
      // because data from API doesn't always have link data
      return socialMedia.filter(item => item.link !== '')
    }
  },
  methods: {
    handleImagePreview (index) {
      const imageList = this.contentImages.map(image => image.file_download_uri)
      this.$emit('show-preview', { index, images: imageList })
    },
    formatNumber (number = 0) {
      return new Intl.NumberFormat('id-ID').format(number)
    }
  }
}
</script>

<style lang="scss" scoped>
.media-information__container > * {
  min-width: 0px;
}

.media-information__detail-container > * {
  min-width: 0px;
}
</style>
