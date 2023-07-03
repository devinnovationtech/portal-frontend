<template>
  <main>
    <PublicServiceRevampJumbotron v-bind="jumbotron" />

    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <div class="items-baseline grid grid-cols-1 xl:grid-cols-[220px,1fr] xl:gap-x-6">
            <!-- Mobile Top Menu Slider -->
            <PublicServiceRevampMenuSwiper :menus="menus" />

            <!-- Desktop Sidebar Menu -->
            <PublicServiceRevampSidebar :menus="menus" />

            <!-- Main Container -->
            <div class="px-[18px] py-3 rounded-2xl border border-gray-300">
              <PublicServiceRevampMediaInformation
                v-bind="mediaInfomation"
                @show-preview="showImagePreview"
              />
            </div>
          </div>
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
import { format } from '~/utils/date'

export default {
  name: 'PublicServiceDetail',
  data () {
    return {
      serviceData: {},
      imagePreviewList: [],
      showPreview: false,
      imagePreviewIndex: 0
    }
  },
  async fetch () {
    try {
      const slug = this.$route.params.slug

      const response = await this.$axios.get(`/v1/public/master-data-publications/slug/${slug}`)
      const { data } = response.data

      this.serviceData = { ...data }
    } catch (error) {
      if (error.response.status === 404) {
        this.$nuxt.error({ statusCode: 404, message: 'Halaman tidak ditemukan' })
      }
    }
  },
  fetchDelay: 500,
  computed: {
    currentDate () {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

      return format(Date.now(), options)
    },
    // @todo: Change jumbotron data using real data from API
    jumbotron () {
      const category = this.serviceData.portal_category || ''
      const categoryPath = category.toLowerCase().split(' ').join('-')

      return {
        breadcrumbItems: [
          {
            path: '/',
            label: 'Beranda'
          },
          {
            path: `/layanan/${categoryPath}`,
            label: category
          },
          {
            path: this.$route.path,
            label: this.serviceData.service_name
          }
        ],
        logo: this.serviceData.logo?.file_download_uri || '',
        title: this.serviceData.service_name || '',
        subtitle: this.serviceData.description || '',
        portalCategory: category,
        updatedAt: this.formatDate(this.serviceData.updated_at),
        category,
        serviceType: this.getServiceType(this.serviceData.technical, this.serviceData.operator_status)
      }
    },
    // @todo: Generate sub-menu dinamically based on API data
    menus () {
      return [
        {
          label: 'Section One',
          link: '#section-one'
        },
        {
          label: 'Section Two',
          link: '#section-two'
        },
        {
          label: 'Section Three',
          link: '#section-three'
        },
        {
          label: 'Section Four',
          link: '#section-four'
        }
      ]
    },
    mediaInfomation () {
      return {
        videoUrl: this.serviceData.cover?.video || '',
        coverImage: this.serviceData.cover?.image?.file_download_uri || '',
        contentImages: Array.isArray(this.serviceData.content_images) ? this.serviceData.content_images : [],
        telephone: this.serviceData?.hotline_number || '',
        currentDate: this.currentDate,
        operationalTimes: Array.isArray(this.serviceData?.operational_times) ? this.serviceData?.operational_times : [],
        serviceFee: this.serviceData.service_fee,
        website: this.serviceData?.website || '',
        locations: Array.isArray(this.serviceData.locations) ? this.serviceData.locations : [],
        email: this.serviceData?.hotline_mail || '',
        links: Array.isArray(this.serviceData.links) ? this.serviceData.links : [],
        socialMedia: Array.isArray(this.serviceData.social_media) ? this.serviceData.social_media : []
      }
    }
  },
  methods: {
    formatDate (date) {
      return format(date, { day: 'numeric', month: 'long', year: 'numeric' })
    },
    getServiceType (type, status) {
      if (status === 'NOT-ACTIVE') {
        return 'NOT-ACTIVE'
      }

      if (status === 'ACTIVE' && type === 'ONLINE') {
        return 'ONLINE'
      }

      return 'OFFLINE'
    },
    /**
     * Handle image preview
     * @param {Number} index - index of image to preview
     * @param {Array} images - images array
     */
    showImagePreview ({ index, images }) {
      this.imagePreviewList = images
      this.imagePreviewIndex = index
      this.showPreview = true
    }
  }
}
</script>
