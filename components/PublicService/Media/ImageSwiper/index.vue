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
          <PublicServiceMediaImage
            :image="image"
            @show-preview="$emit('show-preview', index)"
          />
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
        <div class="flex w-[fit-content] overflow-x-hidden gap-6">
          <div v-for="i in 3" :key="i" class="h-[150px] w-[256px] rounded-xl bg-gray-300 animate-pulse" />
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
        slidesPerView: 3,
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
