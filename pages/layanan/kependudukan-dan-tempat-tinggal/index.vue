<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :hide-items="['/layanan']" class="mb-6" />
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
          <!-- TODO: add :loading="$fetchState.pending" -->
          <BaseListCounter
            :title="'Total Layanan di OPD ini'"
            :unit="'Layanan'"
            :counter="serviceLength"
            :loading="false"
            :last-update="meta.lastUpdate"
            class="!w-full sm:!w-[294px]"
          />
          <!-- TODO: add :loading="$fetchState.pending" -->
          <LayananList
            :service-list="serviceList"
            :loading="false"
          />
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',
      serviceList: [
        {
          id: 1,
          name: 'Sistem Informasi Data Kependudukan (SIDATUK)',
          logo: 'https://dvgddkosknh6r.cloudfront.net/staging/featured-program/logo/kolecer.svg',
          excerpt: 'Layanan publik berbasis website untuk pengecekan data kependudukan berbasis Nomor Induk Kependudukan (NIK) dan melakukan pengaduan terkait data kependudukan.',
          slug: 'sekdis-ganteng-123'
        }
      ],
      meta: {
        currentPage: 1,
        perPage: 30,
        totalCount: 300,
        totalPage: 10,
        lastUpdate: '2021-10-04T04:20:38Z'
      },
      jumbotron: {
        title: 'Daftar Layanan Kependudukan dan Tempat Tinggal',
        subtitle: 'Lihat berbagai layanan untuk kebutuhan seputar kependudukan dan tempat tinggal',
        backgroundImageUrl: '/images/jumbotron/default.webp'
      }
    }
  },
  computed: {
    serviceLength () {
      return this.meta?.totalCount || 0
    },
    /**
     * Check whether search should be active or not
     * based on `searchValue` value
     * @returns {Boolean}
     */
    isSearchActive () {
      return this.searchValue.length > 3
    }
  },
  // @TODO: get real data from backend
  // async fetch () {
  //   const params = {
  //     cat: 'disdukcapil'
  //   }
  //   try {
  //     const response = await this.$axios.get('v1/public/public-service', { params })
  //     const { data, meta } = response.data
  //     this.data = data
  //     this.meta = meta
  //     this.serviceList = this.data.services
  //   } catch (error) {
  //     this.serviceList = []
  //     this.meta = {}
  //     // silent error
  //   }
  // },
  watch: {
    searchValue: {
      handler () {
        if (this.isSearchActive) {
          // @TODO: implement search
        }
      }
    }
  }
}
</script>
