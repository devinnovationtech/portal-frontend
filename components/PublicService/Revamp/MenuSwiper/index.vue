<template>
  <div class="sticky z-10 top-[48px] bg-white w-full h-[42px] mb-4 md:h-[48px] md:top-[64px] lg:top-[80px] xl:hidden">
    <swiper
      v-show="isSwiperReady"
      ref="publicServiceMenuSwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
      class="w-full h-full"
      @ready="isSwiperReady = true"
    >
      <swiper-slide
        v-for="(menu) in menus"
        :key="menu.label"
        class="!w-fit h-full"
      >
        <NuxtLink
          :to="menu.link"
          class="py-2 px-[14px] flex items-center justify-center text-sm leading-6
          whitespace-nowrap line-clamp-1 text-gray-500 border-b-2 border-transparent md:h-[48px]"
        >
          {{ menu.label }}
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isSwiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 'auto',
        spaceBetween: 8,
        passiveListeners: true
      })
    }
  }

}
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
  @apply font-bold text-green-700 border-green-700;
}
</style>
