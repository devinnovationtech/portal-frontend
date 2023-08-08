<template>
  <main>
    <PublicServiceRevampPreviewJumbotron
      v-bind="jumbotron"
      :loading="isLoading"
    />

    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white min-h-screen">
          <div class="items-start grid grid-cols-1 xl:grid-cols-[220px,1fr] xl:gap-x-6">
            <!-- Mobile Top Menu Slider -->
            <PublicServiceRevampMenuSwiper :menus="activeSections" />

            <!-- Desktop Sidebar Menu -->
            <PublicServiceRevampSidebar :menus="activeSections" />

            <div class="px-[18px] py-3 min-h-screen rounded-2xl border border-gray-300 xl:min-w-0">
              <transition name="fade" mode="out-in">
                <!-- Main Container Skeleton-->
                <div v-if="isLoading" key="skeleton">
                  <PublicServiceRevampSkeleton />
                </div>

                <!-- Main Container -->
                <div v-else key="public-service-content">
                  <PublicServiceRevampMediaInformation
                    id="media-dan-informasi"
                    v-bind="mediaInfomation"
                    @show-preview="showImagePreview"
                  />
                  <PublicServiceRevampBenefit
                    v-if="isBenefitSectionActive"
                    id="manfaat-layanan"
                    v-bind="benefit"
                  />
                  <PublicServiceRevampFacility
                    v-if="isFacilitySectionActive"
                    id="fasilitas-layanan"
                    v-bind="facility"
                  />
                  <PublicServiceRevampApplication
                    v-if="isApplicationSectionActive"
                    id="fitur-layanan"
                    v-bind="application"
                  />
                  <PublicServiceRevampTermAndCondition
                    v-if="isTermAndConditionSectionActive"
                    id="syarat-dan-ketentuan-layanan"
                    v-bind="termAndCondition"
                    @show-preview="showImagePreview"
                  />
                  <PublicServiceRevampProcedure
                    v-if="isServiceProcedureSectionActive"
                    id="prosedur-layanan"
                    v-bind="procedure"
                    @show-preview="showImagePreview"
                  />
                  <PublicServiceRevampInfographic
                    v-if="isInfographicSectionActive"
                    id="infografis-layanan"
                    v-bind="infographic"
                    @show-preview="showImagePreview"
                  />
                  <PublicServiceRevampFAQ
                    v-if="isFAQSectionActive"
                    id="faq"
                    v-bind="frequentlyAskedQuestion"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section v-if="hasNews" class="w-full bg-white">
      <BaseContainer class="p-4 lg:p-6 xl:py-8 xl:px-10">
        <PublicServiceRevampNews
          :service-name="jumbotron.title"
          :news="newsList"
          :keyword="keyword"
          :loading="isLoading"
        />
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
  name: 'PublicServiceDetailPreview',
  layout: 'preview',
  data () {
    return {
      serviceData: {},
      newsList: [],
      imagePreviewList: [],
      showPreview: false,
      imagePreviewIndex: 0,
      activeSections: [],
      isLoading: true
    }
  },
  computed: {
    currentDate () {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

      return format(Date.now(), options)
    },
    jumbotron () {
      const category = this.serviceData.portal_category || ''

      return {
        logo: this.serviceData.logo?.file_download_uri || '',
        organizationName: this.serviceData?.opd_name || '',
        title: this.serviceData.service_name || '',
        subtitle: this.serviceData.description || '',
        portalCategory: category,
        updatedAt: this.formatDate(this.serviceData.updated_at),
        category,
        serviceType: this.getServiceType(this.serviceData.technical, this.serviceData.operator_status)
      }
    },
    mediaInfomation () {
      return {
        videoUrl: this.serviceData.cover?.video || '',
        coverImage: this.serviceData.cover?.image?.file_download_uri || '',
        contentImages: Array.isArray(this.serviceData.content_images) ? this.serviceData.content_images : [],
        telephone: this.serviceData?.hotline_number || '',
        currentDate: this.currentDate,
        operationalTimes: Array.isArray(this.serviceData?.operational_times) ? this.serviceData?.operational_times : [],
        serviceFee: this.serviceData?.service_fee || {},
        website: this.serviceData?.website || '',
        locations: Array.isArray(this.serviceData.locations) ? this.serviceData.locations : [],
        email: this.serviceData?.hotline_mail || '',
        links: Array.isArray(this.serviceData.links) ? this.serviceData.links : [],
        socialMedia: Array.isArray(this.serviceData.social_media) ? this.serviceData.social_media : []
      }
    },
    benefit () {
      return {
        items: Array.isArray(this.serviceData.benefits.items) ? this.serviceData.benefits.items : [],
        title: this.serviceData.benefits?.title || ''
      }
    },
    facility () {
      return {
        items: Array.isArray(this.serviceData.facilities.items) ? this.serviceData.facilities.items : [],
        title: this.serviceData.facilities?.title || ''
      }
    },
    application () {
      return {
        features: Array.isArray(this.serviceData.application.features) ? this.serviceData.application.features : [],
        name: this.serviceData.application?.name || '',
        title: this.serviceData.application?.title || ''
      }
    },
    termAndCondition () {
      return {
        coverImage: this.serviceData.terms_and_conditions?.cover?.file_download_uri || '',
        items: Array.isArray(this.serviceData.terms_and_conditions.items) ? this.serviceData.terms_and_conditions.items : [],
        title: this.serviceData.terms_and_conditions?.title || ''
      }
    },
    procedure () {
      return {
        coverImage: this.serviceData.service_procedures?.cover?.file_download_uri || '',
        items: Array.isArray(this.serviceData.service_procedures.items) ? this.serviceData.service_procedures.items : [],
        title: this.serviceData.service_procedures?.title || ''
      }
    },
    infographic () {
      return {
        images: Array.isArray(this.serviceData.infographics.images) ? this.serviceData.infographics.images : []
      }
    },
    frequentlyAskedQuestion () {
      return {
        items: Array.isArray(this.serviceData.faq.Items) ? this.serviceData.faq.Items : []
      }
    },
    isBenefitSectionActive () {
      return this.serviceData.benefits?.is_active === 1
    },
    isApplicationSectionActive () {
      return this.serviceData.technical === 'ONLINE' && this.serviceData.application?.status === 'AVAILABLE'
    },
    isFacilitySectionActive () {
      return this.serviceData.facilities?.is_active === 1 && this.serviceData.technical === 'OFFLINE'
    },
    isTermAndConditionSectionActive () {
      return this.serviceData.terms_and_conditions?.is_active === 1
    },
    isServiceProcedureSectionActive () {
      return this.serviceData.service_procedures?.is_active === 1
    },
    isInfographicSectionActive () {
      return this.serviceData.infographics?.is_active === 1
    },
    isFAQSectionActive () {
      return this.serviceData.faq?.is_active === 1
    },
    keyword () {
      if (Array.isArray(this.serviceData.keywords) && this.serviceData.keywords.length > 0) {
        return this.serviceData.keywords.join(' ')
      }

      return ''
    },
    hasNews () {
      return Array.isArray(this.newsList) && this.newsList.length > 0
    }
  },
  mounted () {
    window.addEventListener('message', this.setServiceData)
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
    },
    getActiveSections () {
      const sections = []

      sections.push({
        link: '#media-dan-informasi',
        label: 'Media dan Informasi'
      })

      if (this.isBenefitSectionActive) {
        sections.push({
          link: '#manfaat-layanan',
          label: this.serviceData.benefits?.title
        })
      }

      if (this.isApplicationSectionActive) {
        sections.push({
          link: '#fitur-layanan',
          label: this.serviceData.application?.title
        })
      }

      if (this.isFacilitySectionActive) {
        sections.push({
          link: '#fasilitas-layanan',
          label: this.serviceData.facilities?.title
        })
      }

      if (this.isTermAndConditionSectionActive) {
        sections.push({
          link: '#syarat-dan-ketentuan-layanan',
          label: this.serviceData.terms_and_conditions?.title
        })
      }

      if (this.isServiceProcedureSectionActive) {
        sections.push({
          link: '#prosedur-layanan',
          label: this.serviceData.service_procedures?.title
        })
      }

      if (this.isInfographicSectionActive) {
        sections.push({
          link: '#infografis-layanan',
          label: 'Infografis'
        })
      }

      if (this.isFAQSectionActive) {
        sections.push({
          link: '#faq',
          label: 'Frequently Asked Questions'
        })
      }

      this.activeSections = [...sections]
    },
    setServiceData (event) {
      this.serviceData = { ...event.data }
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity ease-brand duration-300 opacity-100;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
