<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" :capitalize="false" class="mb-6" />
      </template>

      <!-- @todo: dynamic service status (general_information.type) -->
      <template v-if="isOnline" #suffix>
        <div
          class="flex flex-row w-full sm:w-[258px] px-4 py-3 rounded-xl items-center justify-center
          gap-[14px] bg-green-primary font-lato font-medium text-sm text-white"
        >
          <Icon src="/icons/cloud-check.svg" size="24px" />
          <p>Layanan tersedia secara online</p>
        </div>
      </template>
    </Jumbotron>

    <section class="w-full bg-gray-200">
      <BaseContainer class="min-h-screen relative -top-24 z-20">
        <!-- @todo: add loading skeleton and change this temporary if conditional -->
        <div v-if="!$fetchState.pending" class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <!-- @todo: refactor all public service sections -->
          <PublicServiceHeader
            :logo="newService.general_information.logo"
            :name="newService.general_information.name"
            :last-update="newService.updated_at"
          />
          <PublicServiceMedia
            :data="newService.general_information"
            class="mt-4 md:mt-6 lg:mt-12 xl:mt-6"
          />
          <LayananItemPurposes
            section-title="Mengapa SIDATUK Hadir"
            :purposes="service.purposes"
            class="mt-4 sm:mt-6 lg:mt-12"
          />
          <LayananItemFacilities
            section-title="Fasilitas Yang Tersedia"
            :facilities="service.facilities"
          />
          <LayananItemRequirements
            section-title="Untuk menggunakan aplikasi ini anda perlu mempersiapkan"
            :requirements="service.info"
          />
          <LayananItemNews
            :service-name="service.name"
            :news="newsList"
            :loading="$fetchState.pending"
            class="mt-[58px]"
          />
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
import mockAPI from './api'
export default {
  data () {
    return {
      jumbotron: {},
      searchValue: null,
      service: {},
      newService: {},
      newsList: []
    }
  },
  async fetch () {
    const slug = this.$route.params.slug

    try {
      // @todo: fetch from new slug API
      // get detail service data
      const response = await this.$axios.get(`/v1/public/public-service/slug/${slug}`)
      this.newService = mockAPI.data
      this.service = response.data.data

      // @todo: get news from slug API
      // get related news data
      const params = {
        q: this.service.name,
        per_page: 3,
        sort_order: 'desc',
        domain: ['news']
      }
      const responseNews = await this.$axios.$get('/v1/search', { params })
      this.newsList = responseNews.data

      this.jumbotron = {
        title: this.service.name,
        subtitle: this.service.description,
        backgroundImageUrl: '/images/jumbotron/default.webp'
      }
    } catch (e) {
      // silent error
      this.$nuxt.error({ statusCode: e.response.status, message: e.response?.data?.message })
    }
  },
  computed: {
    breadcrumbItems () {
      return [
        {
          path: '/',
          label: 'Beranda'
        },
        {
          path: `/layanan/${this.category.path}?nama=${this.category.name}&kategori=${this.category.categoryValue}`,
          label: 'Kependudukan dan Tempat Tinggal'
        },
        {
          path: this.$route.path,
          label: this.service.name || '-'
        }
      ]
    },
    /**
     * get category path based on current route
     * @returns {String}
     */
    category () {
      const path = this.$route.path.split('/')
      const name = this.$route.query.nama
      const categoryValue = this.$route.query.kategori

      return {
        name,
        categoryValue,
        path: path.length > 2 ? path[2] : '-'
      }
    },
    isOnline () {
      return this.service.service_type === 'online'
    }
  }
}
</script>
