<template>
  <section>
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
          class="!w-[fit-content]"
        >
          <div class="w-[250px] h-[250px] md:w-[353px] md:h-[353px] rounded-xl overflow-hidden">
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
        <div class="flex w-[fit-content] overflow-x-hidden gap-6">
          <div v-for="i in 4" :key="i" class="w-[250px] h-[250px] md:w-[353px] md:h-[353px] rounded-xl bg-gray-300 animate-pulse" />
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
