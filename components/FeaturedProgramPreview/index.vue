<template>
  <section class="py-14">
    <BaseContainer>
      <div class="flex flex-col md:flex-row items-center gap-1 md:gap-4 mb-8">
        <h2 class="font-medium text-2xl md:text-4xl leading-loose">
          Program Unggulan
        </h2>
        <div class="flex-1 flex justify-center flex-col text-center">
          <div class="border-b border-gray-300" />
        </div>
        <Link link="/tentang-jawa-barat/program-unggulan" tabindex="-1">
          <Button type="button" variant="secondary">
            Lihat Semua Program
            <Icon name="open-new-tab" size="14px" />
          </Button>
        </Link>
      </div>

      <!-- Content Swiper -->
      <div class="relative featured-program">
        <client-only>
          <swiper
            v-show="swiperReady"
            ref="featuredProgramPreview"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            class="featured-program__swiper"
            @ready="swiperReady = true"
          >
            <swiper-slide
              v-for="menu in menus"
              :key="menu.title"
            >
              <div
                class="h-[253px] md:h-[234px] flex flex-col gap-4 group
              bg-white p-6 rounded-xl border border-white hover:border-green-700 hover:shadow transition-colors ease-brand duration-250"
              >
                <LazyImg :src="menu.icon" :alt="menu.title" width="32" height="32" />
                <Link :link="menu.link" @click.native="gtagClickProgram(menu)">
                  <h3 class="font-bold text-xl md:text-2xl leading-normal group-hover:text-green-700">
                    {{ menu.title }}
                  </h3>
                </Link>
                <p class="text-sm leading-6 text-blue-gray-800 group-hover:text-blue-gray-900 line-clamp-3 md:line-clamp-2">
                  {{ menu.description }}
                </p>
                <Link :link="menu.link" class="self-start" @click.native="gtagClickProgram(menu)">
                  <Button type="button" variant="tertiary-paddingless" tabindex="-1">
                    Selengkapnya
                    <Icon name="arrow-right" size="14px" />
                  </Button>
                </Link>
              </div>
            </swiper-slide>

            <!-- Swiper Pagination -->
            <div slot="pagination" class="swiper-pagination navigation__wrapper mt-8" />
          </swiper>

          <!-- Swiper Navigation -->
          <div v-show="swiperReady">
            <button class="navigation navigation__wrapper swiper-button-next">
              <Icon class="navigation__button-right" size="16px" name="chevron-right" />
            </button>
            <button class="navigation navigation__wrapper swiper-button-prev">
              <Icon class="navigation__button-left" size="16px" name="chevron-left" />
            </button>
          </div>

          <!-- Render Placeholder -->
          <template #placeholder>
            <div class="flex w-[fit-content] overflow-x-hidden gap-4">
              <div v-for="i in 3" :key="i" class="w-[275px] h-[234px] md:w-[400px] rounded-xl bg-gray-300 animate-pulse" />
            </div>
          </template>
        </client-only>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import { featuredProgramMenu } from '~/static/data'

export default {
  data () {
    return {
      menus: featuredProgramMenu,
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        mousewheel: true,
        passiveListeners: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          640: {
            speed: 750,
            slidesPerView: 2.3,
            slidesPerGroup: 2.3,
            spaceBetween: 16
          },
          1280: {
            speed: 750,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16
          }
        }
      })
    }
  },
  methods: {
    gtagClickProgram (value) {
      this.$gtag.event('click', {
        event_category: 'click_program',
        event_label: `Click program ${value.title}`,
        value: value.title
      })
    }
  }
}
</script>

<style lang="scss">
  .featured-program__swiper {
    &.swiper-container-horizontal > .swiper-pagination-bullets {
      position: relative !important;
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .swiper-pagination-bullet {
      width: 13px !important;
      height: 13px !important;
      border: #069550 2px solid !important;
      margin-left: 8px !important;
      background: none !important;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background: #069550 !important;
      width: 16px !important;
      height: 16px !important;
    }
  }

  .featured-program {
    .navigation__button-right,
    .navigation__button-left{
      width: 42px !important;
      height: 42px !important;
      border-radius: 50% !important;
      background: #E6F6EC !important;
      color: #16A75C !important;
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: calc(50% - 24px) !important;
      position: absolute !important;
      width: unset !important;
    }

    .swiper-button-prev {
      left: -21px !important;
    }

    .swiper-button-next {
      right: -21px !important;
    }

    .swiper-button-prev.swiper-button-disabled .navigation__button-left,
    .swiper-button-next.swiper-button-disabled .navigation__button-right {
      color: #BDBDBD !important;
      background: #F5F5F5 !important;
      cursor: auto !important;
      pointer-events: none !important;
    }

    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 1 !important;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      display: none !important;
    }
  }
</style>
