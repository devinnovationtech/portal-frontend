<template>
  <div class="sticky z-10 top-[48px] bg-white w-full h-[42px] mb-4 md:top-[64px] xl:hidden">
    <swiper
      v-show="isSwiperReady"
      ref="publicServiceMenuSwiper"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
      class="w-full"
      @ready="isSwiperReady = true"
    >
      <swiper-slide
        v-for="(menu) in menus"
        :key="menu.label"
        class="!w-[fit-content]"
      >
        <NuxtLink
          :to="menu.link"
          class="h-[42px] flex items-center justify-center text-base font-normal leading-6 text-gray-500 border-b-2 border-transparent"
        >
          <span>
            {{ menu.label }}
          </span>
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
      isSwiperReady: false
    }
  }

}
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
  @apply font-bold text-green-700 border-green-700;
}
</style>
