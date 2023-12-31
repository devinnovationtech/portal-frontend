<template>
  <section class="w-full bg-gray-200">
    <BaseContainer class="relative -top-24 z-20">
      <div class="p-3 md:py-8 md:px-10 rounded-xl bg-white min-h-screen">
        <div>
          <!-- Search and Filter -->
          <section class="flex flex-col gap-4 md:flex-row w-full justify-between mb-4 md:mb-8">
            <FeaturedProgramFilter @change:filter="setFilter" />
            <!--
              TODO: replace this component with JdsSearch small variant
              -->
            <InputSearch
              v-model="searchValue"
              placeholder="Cari Program"
              small
              :clear="false"
            />
          </section>

          <!-- Featured Program Counter -->
          <section class="flex w-full justify-start mb-8">
            <FeaturedProgramCounter
              :counter="programLength"
              :loading="$fetchState.pending"
              :last-update="meta.last_updated"
            />
          </section>

          <!-- Featured Program Card -->
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeaturedProgramSkeleton
              v-for="i in 9"
              v-show="$fetchState.pending"
              :key="`skeleton-${i}`"
            />
            <FeaturedProgramItem
              v-for="item in programList"
              v-show="!$fetchState.pending"
              :key="item.id"
              :title="item.title"
              :description="item.excerpt || '-'"
              :icon="item.logo || '/icons/program-unggulan/logo-placeholder.svg'"
              :categories="item.categories"
              @click="showDetail(item)"
            />
            <FeaturedProgramEmptyState v-show="isSearchEmpty" class="col-span-3" :search-value="searchValue" />
          </section>

          <FeaturedProgramDetail
            :program-detail="programDetail"
            :open="openModal"
            @close="closeDetail"
          />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>

export default {
  data () {
    return {
      data: [],
      meta: {},
      programList: [],
      searchValue: '',
      programDetail: {},
      openModal: false,
      filter: null
    }
  },
  async fetch () {
    const id = this.$route.query.id
    const params = {
      cat: this.filter
    }
    try {
      const response = await this.$axios.get('v1/featured-programs', { params })
      const { data, meta } = response.data
      this.data = data
      this.meta = meta
      this.programList = this.data

      if (id) {
        const programDetail = this.filterProgramById(id)
        if (programDetail.length > 0) {
          this.showDetail(programDetail[0])
        }
      }
    } catch (error) {
      this.programList = []
      this.meta = {}
      // silent error
    }
  },
  computed: {
    /**
     * Check whether search result is empty
     * @returns {Boolean}
     */
    isSearchEmpty () {
      return this.isSearchActive && this.programList.length === 0
    },
    /**
     * Check whether search should be active or not
     * based on `searchValue` value
     * @returns {Boolean}
     */
    isSearchActive () {
      return !!this.searchValue
    },
    programLength () {
      return this.meta?.total_count || 0
    }
  },
  watch: {
    searchValue: {
      handler () {
        if (this.isSearchActive) {
          this.programList = this.data.filter(
            item => item.title.toLowerCase().includes(this.searchValue.toLowerCase())
          )
        } else {
          this.programList = this.data
        }
      }
    },
    filter () {
      this.$fetch()
    }
  },
  methods: {
    /**
     * Open a Modal containing featured program details
     * @params {Object} item
     */
    showDetail (item) {
      this.programDetail = { ...item }
      this.openModal = true
    },

    /**
     * Close current Modal
     * @params {Object} item
     */
    closeDetail () {
      this.openModal = false
      this.programDetail = {}
    },

    /**
     * Set filter data props
     * @params {Array | null} filter
     */
    setFilter (filter) {
      this.filter = filter
    },

    filterProgramById (id) {
      const programDetail = this.programList.filter(program => program.id === parseInt(id))
      return programDetail
    }
  }
}
</script>
