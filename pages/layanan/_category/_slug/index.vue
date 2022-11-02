<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" :capitalize="false" class="mb-6" />
      </template>

      <template #suffix>
        <PublicServiceType :type="type" />
      </template>
    </Jumbotron>

    <section class="w-full bg-gray-200">
      <BaseContainer class="min-h-screen relative -top-24 z-20">
        <div v-if="!$fetchState.pending" class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <PublicServiceHeader
            :logo="logo"
            :name="name"
            :last-update="service.updated_at"
          />
          <PublicServiceMedia
            :data="service.general_information"
            class="mt-6"
            @show-preview="showImagePreview"
          />
          <PublicServicePurpose
            v-if="hasSection('purpose')"
            :purpose="service.purpose"
            class="mt-[80px]"
          />
          <PublicServiceFacility
            v-if="hasSection('facility')"
            :facility="service.facility"
            class="mt-[80px]"
          />
          <PublicServiceRequirement
            v-if="hasSection('requirement')"
            :requirement="service.requirement"
            class="mt-[80px]"
          />
          <PublicServiceTerm
            v-if="hasSection('terms_of_service')"
            :term="service.terms_of_service"
            class="mt-[80px]"
            @show-preview="showImagePreview"
          />
          <PublicServiceInfographic
            v-if="hasSection('infographic')"
            :images="infographics"
            class="mt-[80px]"
            @show-preview="showImagePreview"
          />
          <PublicServiceFAQ
            v-if="hasSection('faq')"
            :items="faq"
            class="mt-[80px]"
          />
          <PublicServiceNews
            :service-name="alias"
            :news="newsList"
            :loading="$fetchState.pending"
            class="mt-[80px]"
          />
        </div>

        <!-- Skeleton -->
        <PublicServiceSkeleton v-else />
      </BaseContainer>
    </section>

    <!-- Image Preview -->
    <BaseImagePreview
      :show="showPreview"
      :images="imagePreviewList"
      :index="imagePreviewIndex"
      @close="showPreview = false"
    />
  </main>
</template>

<script>
export default {
  data () {
    return {
      jumbotron: {},
      searchValue: null,
      service: {},
      newsList: [],
      imagePreviewList: [],
      showPreview: false,
      imagePreviewIndex: 0
    }
  },
  async fetch () {
    const slug = this.$route.params.slug

    try {
      // get detail service data
      const response = await this.$axios.get(`/v1/public/service-public/slug/${slug}`)
      this.service = response.data.data

      // get related news data
      const params = {
        q: this.alias,
        per_page: 3,
        sort_order: 'desc',
        domain: ['news'],
        fuzziness: false
      }
      const responseNews = await this.$axios.$get('/v1/search', { params })
      this.newsList = responseNews.data

      this.jumbotron = {
        title: this.name,
        subtitle: this.description,
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
          label: this.category.name || '-'
        },
        {
          path: this.$route.path,
          label: this.name
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
    type () {
      return this.service.general_information
        ? this.service.general_information.type
        : '-'
    },
    logo () {
      return this.service.general_information
        ? this.service.general_information.logo
        : '-'
    },
    name () {
      return this.service.general_information
        ? this.service.general_information.name
        : '-'
    },
    description () {
      return this.service.general_information
        ? this.service.general_information.description
        : '-'
    },
    alias () {
      return this.service.general_information
        ? this.service.general_information.alias
        : '-'
    },
    infographics () {
      return this.service.infographic
        ? this.service.infographic.images
        : []
    },
    faq () {
      return this.service.faq
        ? this.service.faq.items
        : []
    }
  },
  activated () {
    this.$fetch()
  },
  methods: {
    showImagePreview (image) {
      this.imagePreviewList = image.images
      this.imagePreviewIndex = image.index
      this.showPreview = true
    },
    hasSection (sectionName) {
      return this.service && Object.keys(this.service[sectionName]).length !== 0
    }
  }
}
</script>
