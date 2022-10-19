<template>
  <div>
    <client-only>
      <swiper
        v-show="swiperReady"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        class="image-swiper"
        @ready="swiperReady = true"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="`image-swiper-${index}`"
          class="!w-[fit-content]"
        >
          <div class="relative h-[150px] w-[186px] flex flex-col gap-4 group rounded-xl overflow-hidden group">
            <!-- Image Overlay -->
            <div
              class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
              group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
              @click="$emit('show-preview', index)"
            >
              <Icon src="/icons/zoom.svg" size="50px" />
            </div>
            <!-- Content Image -->
            <LazyImg
              :src="image"
              width="186"
              height="150"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform ease-brand duration-250"
            />
          </div>
        </swiper-slide>

        <!-- Navigation Buttons -->
        <button
          slot="button-prev"
          class="hidden md:flex image-swiper__navigation image-swiper__button-prev"
        >
          <Icon size="16px" name="chevron-left" />
        </button>
        <button
          slot="button-next"
          class="hidden md:flex image-swiper__navigation image-swiper__button-next"
        >
          <Icon size="16px" name="chevron-right" />
        </button>
      </swiper>

      <!-- Render Placeholder -->
      <template #placeholder>
        <div class="flex w-[fit-content] overflow-x-hidden gap-4">
          <div v-for="i in 4" :key="i" class="h-[150px] w-[186px] rounded-xl bg-gray-300 animate-pulse" />
        </div>
      </template>
    </client-only>
  </div>
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
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: true,
        passiveListeners: true,
        navigation: {
          nextEl: '.image-swiper__button-next',
          prevEl: '.image-swiper__button-prev'
        }
      })
    }
  }
}
</script>

<style scoped>
  .image-swiper__button-next,
  .image-swiper__button-prev {
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

  .image-swiper__button-next {
    right: 8px;
  }

  .image-swiper__button-prev {
    left: 8px;
  }

  .swiper-button-disabled::v-deep {
    color: #BDBDBD !important;
    background: #F5F5F5 !important;
    cursor: auto !important;
    pointer-events: none !important;
  }

  .image-swiper__navigation {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .image-swiper:hover .image-swiper__navigation {
    opacity: 1;
  }
</style>
