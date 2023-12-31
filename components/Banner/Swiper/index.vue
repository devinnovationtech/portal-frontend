<template>
  <BaseContainer class="px-0 max-w-full xl:max-w-7xl xl:px-6">
    <div v-if="$fetchState.pending" class="flex h-[340px]">
      <div class="animate-pulse bg-gray-200 rounded-xl w-5/6 mr-8" />
      <div class="animate-pulse bg-gray-200 rounded-l-xl w-1/6" />
    </div>
    <client-only>
      <swiper
        v-show="swiperReady"
        ref="bannerSwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="false"
        class="banner__swiper"
        @ready="swiperReady = true"
        @mouseover.native="pauseSwiper"
        @mouseleave.native="resumeSwiper"
      >
        <swiper-slide
          v-for="banner in banners"
          :key="banner.id"
        >
          <div class="w-full aspect-w-3 aspect-h-1 rounded-lg overflow-hidden">
            <Link
              v-if="banner.link"
              :link="banner.link"
              target="_blank"
              rel="noopener"
              :title="banner.title"
            >
              <picture>
                <img
                  :src="device.isMobile ? banner.image.mobile : banner.image.desktop"
                  :alt="banner.title"
                  class="w-full h-full object-cover bg-gray-200"
                  width="360"
                  height="120"
                >
              </picture>
            </Link>
            <picture v-else>
              <img
                :src="device.isMobile ? banner.image.mobile : banner.image.desktop"
                :alt="banner.title"
                class="w-full h-full object-cover bg-gray-200"
                width="360"
                height="120"
              >
            </picture>
          </div>
        </swiper-slide>
        <!-- Pagination Bullet -->
        <div slot="pagination" class="banner__swiper-pagination mt-8" />

        <!-- Navigation Button -->
        <button slot="button-prev" class="hidden md:flex banner__navigation banner__button-prev">
          <Icon size="16px" name="chevron-left" />
        </button>
        <button slot="button-next" class="hidden md:flex banner__navigation banner__button-next">
          <Icon size="16px" name="chevron-right" />
        </button>
      </swiper>
    </client-only>
  </BaseContainer>
</template>

<script>
export default {
  data () {
    return {
      swiperReady: false,
      banners: [],
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        spaceBetween: 32,
        speed: 750,
        mousewheel: true,
        passiveListeners: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.banner__swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.banner__button-next',
          prevEl: '.banner__button-prev'
        },
        breakpoints: {
          1280: {
            slidesPerView: 1.2
          }
        }
      })
    }
  },
  fetchOnServer: false,
  async fetch () {
    const params = {
      is_active: 1,
      per_page: 15
    }

    try {
      const response = await this.$axios.get('/v1/public/infographic-banners', { params })
      if (response.status === 200) {
        this.banners = response.data.data
      }
    } catch {
      this.banners = []
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    },
    swiper () {
      return this.$refs.bannerSwiper.$swiper
    }
  },
  methods: {
    pauseSwiper () {
      if (this.swiper) {
        this.swiper.autoplay.stop()
      }
    },
    resumeSwiper () {
      if (this.swiper) {
        this.swiper.autoplay.start()
      }
    }
  }
}
</script>

<style lang="scss">
  .banner__swiper {
    &.swiper-container-horizontal > .swiper-pagination-bullets {
      position: relative !important;
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .swiper-pagination-bullet {
      width: 13px !important;
      height: 13px !important;
      border: #069550 2px solid !important;
      margin-left: 8px !important;
      background: none !important;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background: #069550 !important;
      width: 16px !important;
      height: 16px !important;
    }
  }

  .banner__button-prev,
  .banner__button-next {
    top: calc(50% - 45px);
    position: absolute;
    width: unset;
    opacity: 1;
    z-index: 10;

    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #E6F6EC;
    color: #16A75C;

    justify-content: center;
    align-items: center;
  }

  .banner__button-next {
    right: 16px;
  }

  .banner__button-prev {
    left: 16px;
  }

  .banner__navigation {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .banner__swiper:hover .banner__navigation {
    opacity: 1;
  }
</style>
