<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" :capitalize="false" class="mb-6" />
      </template>
    </Jumbotron>
    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white grid grid-cols-1 gap-6">
          <InputSearch
            v-model="searchValue"
            placeholder="Cari layanan"
            small
            :clear="false"
          />
          <BaseListCounter
            :title="'Total Layanan di kategori ini'"
            :unit="'Layanan'"
            :counter="meta.total_count || '-'"
            :loading="loading"
            :last-update="meta.last_updated || '-'"
            class="!w-full sm:!w-[294px]"
          />
          <PublicServiceList
            :service-list="serviceList"
            :loading="loading"
            :search-value="searchValue"
          />
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      searchValue: '',
      serviceList: [],
      meta: {},
      loading: false,
      jumbotron: {
        title: `Daftar Layanan ${this.$route.query.nama}`,
        subtitle: `Lihat berbagai layanan untuk kebutuhan seputar ${this.$route.query.nama.toLowerCase()}`,
        backgroundImageUrl: '/images/jumbotron/default.webp'
      }
    }
  },
  async fetch () {
    const params = {
      cat: this.$route.query.kategori
    }
    await this.getServices(params)
  },
  computed: {
    breadcrumbItems () {
      return [
        {
          path: '/',
          label: 'Beranda'
        },
        {
          path: this.$route.path,
          label: this.$route.query.nama
        }
      ]
    },
    serviceLength () {
      return this.meta?.totalCount || 0
    },
    /**
     * Check whether search should be active or not
     * based on `searchValue` value
     * @returns {Boolean}
     */
    isSearchActive () {
      return this.searchValue.length >= 3 || this.searchValue.length === 0
    }
  },
  watch: {
    searchValue: {
      handler: debounce(async function () {
        if (this.isSearchActive) {
          const params = {
            q: this.searchValue,
            cat: this.$route.query.kategori
          }

          await this.getServices(params)
        }
      }, 1000)
    }
  },
  methods: {
    async getServices (params) {
      try {
        this.loading = true
        const response = await this.$axios.get('v1/public/public-service', { params })

        const { data, meta } = response.data
        this.serviceList = data
        this.meta = meta
      } catch (error) {
        this.serviceList = []
        this.meta = {}
        // silent error
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
