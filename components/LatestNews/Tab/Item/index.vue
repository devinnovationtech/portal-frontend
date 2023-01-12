<template>
  <LatestNewsTabItemSkeleton v-if="fetchState.pending" />
  <li v-else class="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250">
    <Link
      :link="`/berita/${slug}`"
      @click.native="gtagClickLatestNews"
    >
      <div class="flex flex-col gap-3 w-full">
        <h2 class="line-clamp-2 font-medium leading-7 group-hover:text-green-900">
          {{ title }}
        </h2>
        <div class="flex justify-between items-center">
          <h3 class="text-xs text-gray-700 group-hover:text-blue-gray-800 capitalize">
            {{ category }}
            <span class="text-gray-700 group-hover:text-blue-gray-800 ml-1" aria-hidden="true">
              |
            </span>
            <span class="sr-only">Dipublikasikan tanggal</span>
            <span class="text-gray-700 group-hover:text-blue-gray-800 ml-1">
              {{ date }}
            </span>
          </h3>
          <Icon
            name="open-new-tab"
            size="16px"
            class="invisible text-green-800 group-hover:visible"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  </li>
</template>

<script>
import { daysDifference, format, relativeTime } from '~/utils/date'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    publishedAt: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    fetchState: {
      type: Object,
      required: true
    },
    selectedTab: {
      type: String,
      required: true
    }
  },
  computed: {
    date () {
      const differenceInDays = daysDifference(this.publishedAt)

      if (differenceInDays > 0) {
        return format(this.publishedAt, { day: 'numeric', month: 'long', year: 'numeric' })
      }

      return relativeTime(this.publishedAt)
    }
  },
  methods: {
    gtagClickLatestNews () {
      let eventCategory
      let eventLabel

      if (this.selectedTab === 'terbaru') {
        eventCategory = 'click_latest_news'
        eventLabel = 'click latest news'
      } else if (this.selectedTab === 'terpopuler') {
        eventCategory = 'click_popular_news'
        eventLabel = 'click popular news'
      }

      this.$gtag.event('click', {
        event_category: eventCategory,
        event_label: `${eventLabel} ${this.title}`,
        value: this.title,
        url: `${document.location.origin}/berita/${this.slug}`
      })
    }
  }
}
</script>
