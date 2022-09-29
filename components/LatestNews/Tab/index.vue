<template>
  <div class="w-full h-[518px] grid grid-cols-1 grid-rows-[38px,1fr] gap-4">
    <div class="w-full h-full grid grid-cols-2 mb-4">
      <p
        v-for="(tab, index) in tabs"
        :key="index"
        class="text-sm uppercase text-center border-b-4 pb-3 cursor-pointer"
        :class="[selectedTab === tab ? 'font-bold border-green-700' : 'text-gray-700 border-blue-gray-50']"
        @click="setSelectedTab(tab)"
      >
        {{ tab }}
      </p>
    </div>
    <!--
      TODO: Show a placeholder if an error occur
    -->
    <ul class="w-full h-full flex flex-col gap-4">
      <LatestNewsTabItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :slug="item.slug"
        :published-at="item.published_at"
        :category="item.category"
        :fetch-state="$fetchState"
        :selected-tab="selectedTab"
      />
    </ul>
  </div>
</template>

<script>
import { format, formatISODate } from '~/utils/date'

export default {
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 4
    }
  },
  data () {
    return {
      items: [],
      tabs: ['terbaru', 'terpopuler'],
      selectedTab: 'terbaru'
    }
  },
  async fetch () {
    try {
      let params = {
        per_page: this.perPage,
        sort_by: 'published_at',
        sort_order: 'DESC'
      }

      if (this.selectedTab === 'terpopuler') {
        const aWeekAgo = formatISODate(new Date(new Date() - (7 * 24 * 60 * 60 * 1000)))
        const today = formatISODate(new Date())

        params = {
          ...params,
          sort_by: 'views',
          start_date: aWeekAgo,
          end_date: today
        }
      }

      const response = await this.$axios.$get('/v1/public/news', { params })
      this.items = response.data
    } catch (error) {
      this.$sentry.captureException(error)
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
    setSelectedTab (tab) {
      this.selectedTab = tab
      this.$fetch()
    },
    formatDate (date) {
      return format(date, { day: 'numeric', month: 'short', year: 'numeric' })
    }
  }
}
</script>
