<template>
  <div class="w-full min-w-0">
    <h2 class="md:hidden xl:block text-[28px] md:text-4xl text-center md:text-left font-medium leading-loose mb-8 lg:mb-12">
      Layanan Terpopuler
    </h2>
    <!-- Content Swiper (Mobile & Tablet Only) -->
    <MostPopularServicesSwiper
      :menus="menus"
      class="md:hidden"
      @gtag="gtagClickPopularService"
    />

    <!-- Content Grid (Dekstop Only) -->
    <MostPopularServicesGrid
      :menus="menus"
      class="hidden md:block"
      @gtag="gtagClickPopularService"
    />
  </div>
</template>

<script>
import { mostPopularServicesMenu } from '~/static/data'

export default {
  data () {
    return {
      menus: mostPopularServicesMenu
    }
  },
  methods: {
    gtagClickPopularService (value) {
      this.$gtag.event('click', {
        event_category: 'click_popular_service',
        event_label: `Click popular service ${value.title}`,
        value: value.title
      })
    }
  }
}
</script>
