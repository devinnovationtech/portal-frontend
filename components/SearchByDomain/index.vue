<template>
  <BaseContainer class="relative -top-24 z-20">
    <div class="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white min-h-[600px] shadow">
      <SearchBar class="mb-6" />

      <!-- Search Empty State -->
      <template v-if="noResult">
        <SearchEmptyState :keyword="searchKeyword" />
      </template>

      <!-- Search Results -->
      <template v-else>
        <section class="min-w-0 grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center md:gap-6 mb-8">
          <div class="min-w-0 w-full flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            <Button
              type="button"
              variant="secondary"
              @click="$router.back()"
            >
              <Icon name="arrow-left" size="14px" />
              Kembali
            </Button>
            <h2 class="font-roboto text-xl font-medium text-blue-gray-700">
              {{ domainLabel }} terkait <br class="md:hidden"> <strong class="text-green-700">{{ searchKeyword }}</strong>
            </h2>
          </div>
          <div class="w-full">
            <SearchToolbar
              :list-view.sync="listView"
              :total-count="pagination.totalRows"
              :sort-value="sortOrder"
              @change:sort="onChangeSort($event)"
            >
              <!-- Remove component's default search result text -->
              <template #resultText>
                <span class="hidden" />
              </template>
            </SearchToolbar>
          </div>
        </section>

        <section>
          <SearchList
            :list-view="device.isMobile ? 'grid' : listView"
            :loading="$fetchState.pending"
            :items="searchData"
            :max-length="pagination.itemsPerPage"
            class="mb-6"
          />
          <Pagination
            class="mt-auto"
            v-bind="pagination"
            @previous-page="onPaginationChange('prev-page', $event)"
            @next-page="onPaginationChange('next-page', $event)"
            @page-change="onPaginationChange('page-change', $event)"
            @per-page-change="onPaginationChange('per-page-change', $event)"
          />
        </section>
      </template>
    </div>
  </BaseContainer>
</template>

<script>
const DOMAIN_LABEL = {
  layanan: 'Layanan Publik',
  berita: 'Berita Jawa Barat',
  lainnya: 'Hasil pencarian lainnya'
}

export default {
  name: 'SearchByDomain',
  props: {
    domain: {
      type: String,
      required: true
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      listView: 'list',
      searchKeyword: this.keyword,
      sortOrder: 'DESC',
      pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        totalRows: 0,
        itemsPerPageOptions: [10, 20, 30]
      },
      searchData: [],
      searchMeta: {}
    }
  },
  async fetch () {
    const params = {
      q: this.searchKeyword,
      page: this.pagination.currentPage,
      per_page: this.pagination.itemsPerPage,
      sort_order: this.sortOrder,
      domain: []
    }

    switch (this.domain) {
      case 'layanan':
        params.domain = ['public_service', 'featured_program']
        break
      case 'berita':
        params.domain = ['news']
        break
      case 'lainnya':
        params.domain = []
        break
      default:
        params.domain = []
        break
    }

    try {
      const response = await this.$axios.$get('/v1/search', { params })

      this.searchData = response.data
      this.searchMeta = response.meta

      this.pagination = {
        ...this.pagination,
        currentPage: this.searchMeta.current_page,
        itemsPerPage: this.searchMeta.per_page,
        totalRows: this.searchMeta.total_count
      }
    } catch (error) {
      // silent error
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    },
    domainLabel () {
      return DOMAIN_LABEL[this.domain]
    },
    noResult () {
      return !this.$fetchState.pending && this.pagination.totalRows === 0
    }
  },
  watch: {
    // watch `q` query param changes on the address bar
    '$route.query.q': {
      handler () {
        if (this.$route.query.q) {
          this.searchKeyword = this.$route.query.q
        }
      },
      immediate: true
    },

    searchKeyword: {
      handler () {
        this.pagination = {
          ...this.pagination,
          currentPage: 1
        }
        this.$fetch()
      }
    }
  },
  methods: {
    onPaginationChange (action, value) {
      this.scrollToTop()

      const paginationObj = { ...this.pagination }

      switch (action) {
        case 'prev-page':
          paginationObj.currentPage = this.pagination.currentPage - 1
          break
        case 'next-page':
          paginationObj.currentPage = this.pagination.currentPage + 1
          break
        case 'page-change':
          paginationObj.currentPage = value
          break
        case 'per-page-change':
          paginationObj.itemsPerPage = value
          break
        default:
          break
      }

      this.pagination = JSON.parse(JSON.stringify(paginationObj))

      /**
       *  NOTE:
       *  `jds-pagination` emits `page-change` and `per-page-change` events
       *  whenever user changes per page value.
       *
       *  To avoid double fetch, we immediately stop this function on
       *  `per-page-change` event and let `page-change` event to
       *  fetch data from API
       */
      if (action === 'per-page-change') {
        return
      }

      this.$fetch()
    },

    onChangeSort (sortOrder) {
      if (!sortOrder || sortOrder === this.sortOrder) { return }
      this.sortOrder = sortOrder
      this.$fetch()
    },

    scrollToTop () {
      window.scrollTo({ top: 200 })
    }
  }
}
</script>
