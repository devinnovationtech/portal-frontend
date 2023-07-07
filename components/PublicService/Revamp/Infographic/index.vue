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
