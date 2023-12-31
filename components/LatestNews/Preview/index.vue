<template>
  <div class="news__preview w-full h-[536px] rounded-lg overflow-hidden">
    <Carousel :items="items" hover pause-on-hover>
      <template #content="{ item, currentIndex, prev, next }">
        <div
          class="news__preview__content visible inline-block h-[67%] md:h-[50%] absolute bottom-0 w-full bg-black
          bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-70 backdrop-filter backdrop-blur-lg
          rounded-lg px-8 py-6 text-white"
        >
          <div class="flex flex-col h-full">
            <!-- Navigation (Mobile Only) -->
            <div class="md:hidden flex items-center justify-between py-2 px-3 rounded-full bg-white bg-opacity-20 mb-4">
              <button
                class="cursor-pointer"
                aria-label="Berita Sebelumnya"
                @click="prev"
              >
                <Icon
                  name="chevron-left"
                  size="10px"
                  aria-hidden="true"
                />
              </button>
              <p class="text-sm text-white">
                <span class="font-bold mr-1">{{ currentIndex + 1 }}</span>dari {{ items.length }}
              </p>
              <button
                class="cursor-pointer"
                aria-label="Berita Selanjutnya"
                @click="next"
              >
                <Icon
                  name="chevron-right"
                  size="10px"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div class="flex-grow">
              <p class="font-roboto text-sm uppercase leading-relaxed tracking-wider opacity-80 mb-1">
                {{ item.category }}
              </p>
              <Link :link="`/berita/${item.slug}`" @click.native="gtagClickLatestNews(item)">
                <h2 class="news__preview__title line-clamp-3 md:line-clamp-2 font-intro font-bold text-xl md:text-2xl leading-9 md:leading-10 max-h-[108px] md:max-h-[90px] mb-3">
                  {{ item.title }}
                </h2>
              </Link>
              <div class="flex flex-col md:flex-row gap-2 opacity-60 text-xs md:divide-x divide-white">
                <p class="flex items-center gap-2 md:pr-2">
                  <Icon
                    src="/icons/calendar.svg"
                    size="16px"
                    aria-hidden="true"
                  />
                  <span class="sr-only">Diterbitkan pada</span>
                  <span>{{ formatDate(item.published_at) }}</span>
                </p>
                <p class="md:pl-2 flex items-center gap-2 capitalize">
                  <Icon
                    src="/icons/pen.svg"
                    size="16px"
                    aria-hidden="true"
                  />
                  <span class="line-clamp-1">
                    Penulis: {{ item.author }}
                  </span>
                </p>
              </div>
            </div>

            <div class="md:flex justify-between items-center">
              <Link
                :link="`/berita/${item.slug}`"
                tabindex="-1"
                @click.native="gtagClickLatestNews(item)"
              >
                <button
                  type="button"
                  class="w-full text-sm border border-white border-opacity-30 px-4 py-2 rounded-lg"
                >
                  Baca Selengkapnya
                </button>
              </Link>

              <!-- Navigation (Tablet and Dekstop Only) -->
              <div class="hidden md:flex items-center gap-4">
                <button
                  class="cursor-pointer"
                  aria-label="Berita Sebelumnya"
                  @click="prev"
                >
                  <Icon
                    name="chevron-left"
                    size="10px"
                    aria-hidden="true"
                  />
                </button>
                <p class="text-sm text-gray-500">
                  <span class="font-bold text-white mr-1">{{ currentIndex + 1 }}</span>dari {{ items.length }}
                </p>
                <button
                  class="cursor-pointer"
                  aria-label="Berita Sebelumnya"
                  @click="next"
                >
                  <Icon
                    name="chevron-right"
                    size="10px"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { format, daysDifference, relativeTime } from '~/utils/date'

export default {
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 5
    }
  },
  data () {
    return {
      items: []
    }
  },
  async fetch () {
    try {
      const params = {
        per_page: this.perPage,
        highlight: true,
        sort_by: 'published_at',
        sort_order: 'DESC'
      }

      const response = await this.$axios.$get('/v1/public/news', { params })
      this.items = response.data
    } catch (error) {
    }
  },
  activated () {
    /**
     *  Call fetch again if last fetch more than a minute ago
     */
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  methods: {
    formatDate (date) {
      const differenceInDays = daysDifference(date)

      if (differenceInDays > 0) {
        return format(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      }

      return relativeTime(date)
    },
    getSlug (slider) {
      const index = slider?.details().relativeSlide || 0

      return this.items[index].slug
    },
    gtagClickLatestNews (item) {
      this.$gtag.event('click', {
        event_category: 'click_latest_news',
        event_label: `click latest news ${item.title}`,
        value: item.title,
        url: `${document.location.origin}/berita/${item.slug}`
      })
    }
  }
}
</script>

<style scoped>
/* Fallback style for Safari or browser that doesn't support line-clamp */
.news__preview .news__preview__title {
  overflow: hidden;
  line-break: after-white-space;
}
</style>
