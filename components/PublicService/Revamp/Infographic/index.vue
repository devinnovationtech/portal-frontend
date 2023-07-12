<template>
  <section class="py-8">
    <client-only>
      <swiper
        v-show="swiperReady"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        class="infographic-swiper"
        @ready="swiperReady = true"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="`infographic-swiper-${index}`"
          class="sm:!w-[fit-content]"
        >
          <div class="relative rounded-xl overflow-hidden group">
            <!-- Image Overlay -->
            <div
              class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
              group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
              @click="handleImagePreview(index)"
            >
              <Icon src="/icons/zoom.svg" size="50px" />
            </div>
            <LazyImg
              :src="image.file_download_uri"
              width="250"
              height="250"
              class="object-cover w-full h-full md:w-[353px] md:h-[353px]"
              :alt="`Infografis ${index}`"
            />
          </div>
        </swiper-slide>

        <!-- Navigation Buttons -->
        <button
          slot="button-prev"
          class="hidden md:flex infographic-swiper__navigation  infographic-swiper__button-prev"
        >
          <Icon size="16px" name="chevron-left" />
        </button>
        <button
          slot="button-next"
          class="hidden md:flex infographic-swiper__navigation infographic-swiper__button-next"
        >
          <Icon size="16px" name="chevron-right" />
        </button>
      </swiper>

      <!-- Render Placeholder -->
      <template #placeholder>
        <div class="flex justify-center overflow-x-hidden gap-6">
          <div v-for="i in 3" :key="i" class="w-[250px] h-[250px] md:w-[353px] md:h-[353px] rounded-xl bg-gray-300 animate-pulse" />
        </div>
      </template>
    </client-only>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        spaceBetween: 24,
        mousewheel: true,
        passiveListeners: true,
        breakpoints: {
          375: {
            slidesPerView: 'auto',
            centerInsufficientSlides: true
          }
        },
        navigation: {
          nextEl: '.infographic-swiper__button-next',
          prevEl: '.infographic-swiper__button-prev'
        }
      })
    }
  },
  methods: {
    handleImagePreview (index) {
      const imageList = this.images.map(image => image.file_download_uri)
      this.$emit('show-preview', { index, images: imageList })
    }
  }
}
</script>

<style scoped>
  .infographic-swiper__button-next,
  .infographic-swiper__button-prev {
    top: calc(50% - 21px);
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

  .infographic-swiper__button-next {
    right: 8px;
  }

  .infographic-swiper__button-prev {
    left: 8px;
  }

  .swiper-button-disabled::v-deep {
    color: #BDBDBD !important;
    background: #F5F5F5 !important;
    cursor: auto !important;
    pointer-events: none !important;
  }

  .infographic-swiper__navigation {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .infographic-swiper:hover .infographic-swiper__navigation {
    opacity: 1;
  }
</style>
