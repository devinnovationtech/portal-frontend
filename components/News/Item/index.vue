<template>
  <article
    ref="news-item"
    class="min-h-[88px] flex overflow-hidden w-full gap-4 border-4 border-transparent rounded-xl group
    hover:bg-gray-100 hover:border-gray-100 p-1 transition-colors ease-brand duration-250"
    :class="{ '!min-h-[88px]' : small }"
  >
    <div
      ref="news-item-image-wrapper"
      class="flex-shrink-0 w-[72px] h-[72px] md:w-[200px] md:h-[130px] cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out"
      :class="{
        'bg-gray-200 animate-pulse' : loading,
        '!w-[72px] !h-[72px]': small
      }"
    >
      <Link :link="`/berita/${item.slug}`" @click.native="gtagClickNewsItem(item)">
        <LazyImg
          v-show="!loading"
          ref="news-item-image"
          width="72"
          height="72"
          :src="item.image"
          :alt="item.title"
          class="w-full h-full block transition-transform object-center object-cover duration-300 ease-in-out
          group-hover:transform group-hover:scale-125"
        />
      </Link>
    </div>
    <div class="w-full flex flex-col items-start justify-center">
      <!-- skeleton -->
      <div
        v-if="loading"
        ref="news-item-skeletons"
        class="w-full min-h-[72px] md:min-h-[130px]"
        :class="{ '!min-h-[88px]' : small }"
      >
        <div class="w-3/4 h-5 bg-gray-200 animate-pulse rounded-md mb-3" />
        <div class="w-1/2 h-4 bg-gray-200 animate-pulse rounded-md mb-2" />
      </div>
      <template v-else>
        <Link :link="`/berita/${item.slug}`" @click.native="gtagClickNewsItem(item)">
          <h2
            ref="news-item-title"
            class="text-base md:text-lg cursor-pointer font-lato font-medium text-blue-gray-800 mb-2
          group-hover:text-green-800 line-clamp-2"
            :class="{ '!text-base !leading-6' : small }"
          >
            {{ item.title }}
          </h2>
        </Link>
        <p ref="news-item-meta" class="font-normal text-xs leading-5 text-gray-700">
          <span class="group-hover:text-blue-gray-800 capitalize">{{ item.category }}</span> | {{ formatDate(item.published_at) }}
        </p>
      </template>
    </div>
  </article>
</template>

<script>
import { format, daysDifference, relativeTime } from '~/utils/date'

export default {

  props: {
    item: {
      type: Object,
      required: true
    },
    small: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    categoryNews: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    formatDate (date) {
      const differenceInDays = daysDifference(date)

      if (differenceInDays > 0) {
        return format(date, { day: 'numeric', month: 'long', year: 'numeric' })
      }

      return relativeTime(date)
    },
    gtagClickNewsItem (item) {
      let eventCategory
      let eventLabel

      if (this.categoryNews === 'terpopuler') {
        eventCategory = 'click_popular_news'
        eventLabel = 'click popular news'
      } else if (this.categoryNews === 'terbaru') {
        eventCategory = 'click_latest_news'
        eventLabel = 'click latest news'
      } else if (this.categoryNews === 'terhangat') {
        eventCategory = 'click_hot_news'
        eventLabel = 'click hot news'
      }

      this.$gtag.event('click', {
        event_category: eventCategory,
        event_label: `${eventLabel} ${item.title}`,
        value: item.title,
        url: `${document.location.origin}/berita/${item.slug}`
      })
    }
  }
}
</script>
