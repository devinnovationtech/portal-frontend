<template>
  <div>
    <slot name="header" />
    <div class="bg-white flex flex-col overflow-hidden h-[354px] sm:h-[390px] lg:h-[900px] xl:h-[350px]">
      <!--
        TODO: Show a placeholder if an error occur
      -->
      <template v-if="fetchState.pending">
        <AgendaWidgetListSkeleton v-for="index in 3" :key="index" />
      </template>
      <div v-else-if="!hasEvents && !fetchState.pending" class="h-full px-4 pb-12">
        <AgendaWidgetEmptyState />
      </div>
      <div v-else class="flex flex-col flex-grow overflow-y-auto pt-1 pr-2 md:pr-4">
        <InfiniteScroll :items="events" @refetch="getEvents">
          <template #default="{ item }">
            <AgendaWidgetListItem
              :id="item.id"
              :key="item.id"
              :title="item.title"
              :date="item.date"
              :category="item.category"
              :type="item.type"
              :url="item.url"
              :address="item.address"
              :start-hour="item.start_hour"
              :end-hour="item.end_hour"
            />
          </template>
        </InfiniteScroll>
      </div>
      <Link v-if="hasEvents" link="/agenda-jawa-barat" class="flex justify-center py-5 border-t border-gray-100">
        <Button type="button" variant="tertiary-paddingless" tabindex="-1">
          Lihat Semua Agenda
          <Icon name="open-new-tab" size="12px" />
        </Button>
      </Link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      events: [],
      fetchState: {
        pending: false,
        error: false
      },
      page: 1,
      perPage: 10
    }
  },
  computed: {
    hasEvents () {
      return this.events.length
    }
  },
  watch: {
    startDate () {
      this.events = []
      this.page = 1
      this.getEvents()
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      if (this.page > this.totalPage) { return }

      if (!this.events.length) {
        this.fetchState.pending = true
      }

      const params = {
        start_date: this.startDate,
        end_date: this.endDate,
        per_page: this.perPage,
        page: this.page
      }

      try {
        const response = await this.$axios.$get('/v1/public/events', { params })

        this.events.push(...response.data)
        this.totalPage = response.meta.total_page || 1
        this.page++
        this.fetchState.pending = false
      } catch (error) {
        this.fetchState.error = true
        this.fetchState.pending = false
      }
    }
  }
}
</script>
