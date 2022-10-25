<template>
  <section class="justify-center">
    <client-only>
      <swiper
        v-show="swiperReady"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        class="infographic-swiper max-w-[1106px]"
        @ready="swiperReady = true"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="`infographic-swiper-${index}`"
          class="!w-[fit-content]"
        >
          <div class="relative w-[250px] h-[250px] md:w-[353px] md:h-[353px] rounded-xl overflow-hidden group">
            <!-- Image Overlay -->
            <div
              class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
              group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
              @click="$emit('show-preview', { index, images })"
            >
              <Icon src="/icons/zoom.svg" size="50px" />
            </div>
            <LazyImg
              :src="image"
              width="250"
              height="250"
              class="object-cover w-full h-full"
              :alt="`Infografis ${index}`"
            />
          </div>
        </swiper-slide>
      </swiper>

      <!-- Render Placeholder -->
      <template #placeholder>
        <div class="flex justify-center w-[fit-content] overflow-x-hidden gap-6">
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
        slidesPerView: 'auto',
        spaceBetween: 24,
        mousewheel: true,
        passiveListeners: true
      })
    }
  }
}
</script>
