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
        <!-- @todo: add loading skeleton and change this temporary if conditional -->
        <div v-if="!$fetchState.pending" class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <PublicServiceHeader
            :logo="logo"
            :name="name"
            :last-update="service.updated_at"
            class="mb-6"
          />
          <PublicServiceMedia
            :data="service.general_information"
            class="mb-[80px]"
            @show-preview="showImagePreview"
          />
          <PublicServicePurpose
            :purpose="service.purpose"
            class="mb-[80px]"
          />
          <PublicServiceFacility
            :facility="service.facility"
            class="mb-[80px]"
          />
          <PublicServiceRequirement
            :requirement="service.requirement"
            class="mb-[80px]"
          />
          <PublicServiceTerm
            :term="service.terms_of_service"
            class="mb-[80px]"
            @show-preview="showImagePreview"
          />
          <PublicServiceInfographic
            :images="infographics"
            class="mb-[80px]"
            @show-preview="showImagePreview"
          />
          <PublicServiceFAQ
            :items="faq"
            class="mb-[80px]"
          />
          <PublicServiceNews
            :service-name="alias"
            :news="newsList"
            :loading="$fetchState.pending"
          />
        </div>
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
        domain: ['news']
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
  methods: {
    showImagePreview (image) {
      this.imagePreviewList = image.images
      this.imagePreviewIndex = image.index
      this.showPreview = true
    }
  }
}
</script>
