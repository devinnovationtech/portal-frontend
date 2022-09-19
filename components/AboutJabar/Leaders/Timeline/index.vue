<template>
  <div>
    <h3 class="font-lora font-bold text-2xl md:text-4xl text-center md:text-left text-blue-gray-700 mb-7">
      Masa Jabatan Gubernur Sebelumnya
    </h3>
    <swiper
      v-show="swiperReady"
      ref="jabarLeaderSwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
      @ready="swiperReady = true"
      @slide-change="setCurrentSlide"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="item.id"
        class="md:!w-[fit-content]"
      >
        <div class="min-w-[328px]">
          <div class="flex items-center">
            <p class="px-4 py-2 bg-green-700 rounded-[42px] font-lato font-bold text-xs text-white whitespace-nowrap">
              {{ item.period }}
            </p>
            <div :class="{'w-full h-0.5 bg-green-700': index !== items.length - 1}" />
          </div>
          <div class="p-6 rounded-2xl mt-4 flex items-center gap-4 hover:bg-green-50 transition-all ease-out duration-300">
            <img :src="item.image" :alt="item.name" width="50" height="50">
            <div>
              <p class="font-lato text-xs text-blue-gray-300">
                Gubernur
              </p>
              <p class="font-lato font-bold text-sm text-blue-gray-700">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <template #pagination>
        <div class="flex w-full justify-between mt-4 md:hidden">
          <!-- Next Button -->
          <button
            id="custom-button-prev"
            :disabled="isFirstSlide"
            class="flex-shrink-0 w-[42px] h-[42px] bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center disabled:bg-gray-100"
          >
            <Icon
              name="chevron-left"
              :class="isFirstSlide ? 'text-gray-500' : 'text-white'"
              size="16px"
            />
          </button>
          <!-- Pagination -->
          <div id="custom-pagination" class="!w-[fit-content] flex items-center align-center" />
          <!-- Prev Button -->
          <button
            id="custom-button-next"
            :disabled="isLastSlide"
            class="flex-shrink-0 w-[42px] h-[42px] bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center disabled:bg-gray-100"
          >
            <Icon
              name="chevron-right"
              :class="isLastSlide ? 'text-gray-500' : 'text-white'"
              size="16px"
            />
          </button>
        </div>
      </template>
    </swiper>

    <!-- Swiper Skeleton -->
    <div v-show="!swiperReady" class="w-full h-[146px] flex overflow-hidden gap-8">
      <div v-for="index in 9" :key="index" class="min-w-[328px] h-full bg-gray-200 animate-pulse rounded-xl" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentSlide: 0,
      swiperReady: false,
      items: [
        {
          id: 1,
          name: 'Ahmad Heryawan',
          period: 'Juni 2008 - Juni 2018',
          image: '/images/about/pimpinan/ahmad-heryawan.png'
        },
        {
          id: 2,
          name: 'Danny Setiawan',
          period: 'Juni 2003 - Juni 2008',
          image: '/images/about/pimpinan/danny-setiawan.png'
        },
        {
          id: 3,
          name: 'HR. Nuriana',
          period: '1993 - Juni 2003',
          image: '/images/about/pimpinan/nuriana.png'
        },
        {
          id: 4,
          name: 'Yogie Suardi Memet',
          period: '1985 - 1993',
          image: '/images/about/pimpinan/yogie.png'
        },
        {
          id: 5,
          name: 'Aang Kunaefi',
          period: '1975 - 1985',
          image: '/images/about/pimpinan/aang.png'
        },
        {
          id: 6,
          name: 'Solihin GP',
          period: '1970 - 1974',
          image: '/images/about/pimpinan/solihin.png'
        },
        {
          id: 7,
          name: 'Mashudi',
          period: '1960 - 1970',
          image: '/images/about/pimpinan/mashudi.png'
        },
        {
          id: 8,
          name: 'Ipik Gandamana',
          period: '1956 - 1959',
          image: '/images/about/pimpinan/ipik.png'
        },
        {
          id: 9,
          name: 'Sanusi Hardjadinata',
          period: '1951 - 1956',
          image: '/images/about/pimpinan/sanusi.png'
        },
        {
          id: 10,
          name: 'R. Mas Sewaka',
          period: '1950 - 1956',
          image: '/images/about/pimpinan/sewaka.png'
        },
        {
          id: 11,
          name: 'Ukar Bratakusumah',
          period: '1948 - 1950',
          image: '/images/about/pimpinan/ukar.png'
        },
        {
          id: 12,
          name: 'R. Mas Sewaka',
          period: '1946 - 1948',
          image: '/images/about/pimpinan/sewaka.png'
        },
        {
          id: 13,
          name: 'Murdjani',
          period: '1946 - 1946',
          image: '/images/about/pimpinan/murdjani.png'
        },
        {
          id: 14,
          name: 'Datuk Djamin',
          period: '1945 - 1945',
          image: '/images/about/pimpinan/datuk.png'
        },
        {
          id: 15,
          name: 'Mas Sutardjo Kertohadikusumo',
          period: '1945 - 1945',
          image: '/images/about/pimpinan/sutardjo.png'
        }
      ],
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        mousewheel: true,
        passiveListeners: true,
        pagination: {
          el: '#custom-pagination',
          type: 'custom',
          renderCustom (swiper, current, total) {
            return `<p>${current} dari ${total}</p>`
          }
        },
        navigation: {
          nextEl: '#custom-button-next',
          prevEl: '#custom-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto'
          }
        }
      })
    }
  },
  computed: {
    swiper () {
      return this.$refs.jabarLeaderSwiper.$swiper
    },
    isFirstSlide () {
      return this.currentSlide === 0
    },
    isLastSlide () {
      return this.currentSlide === this.items.length - 1
    }
  },
  methods: {
    setCurrentSlide () {
      this.currentSlide = this.swiper.activeIndex
    }
  }
}
</script>
