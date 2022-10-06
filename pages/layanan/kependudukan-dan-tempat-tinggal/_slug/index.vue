<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" :capitalize="false" class="mb-6" />
      </template>

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
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <LayananItemHeader
            :logo="service.logo"
            :name="service.name"
            :last-update="service.updated_at"
          />
          <LayananItemMedia
            :video="service.video"
            :category="service.category"
            :website="service.website"
            :social-media="service.social_media"
            :images="service.images"
            class="mt-4 md:mt-6 lg:mt-12 xl:mt-6"
          />
          <LayananItemPurposes
            section-title="Mengapa SIDATUK Hadir"
            :purposes="service.purposes"
            class="mt-4 sm:mt-6 lg:mt-12"
          />
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios, error }) {
    const slug = await params.slug

    try {
      const response = await $axios.get(`/v1/public/public-service/slug/${slug}`)

      const { data: service } = response.data

      const jumbotron = {
        title: service.name,
        subtitle: service.description,
        backgroundImageUrl: '/images/jumbotron/default.webp'
      }

      return { service, jumbotron }
    } catch (e) {
      // silent error
      error({ statusCode: e.response.status, message: e.response?.data?.message })
    }
  },
  data () {
    return {
      jumbotron: {},
      searchValue: null,
      service: {}
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
          path: '/layanan/kependudukan-dan-tempat-tinggal',
          label: 'Kependudukan dan Tempat Tinggal'
        },
        {
          path: this.$route.path,
          label: this.service.name || '-'
        }
      ]
    },
    isOnline () {
      return this.service.service_type === 'online'
    }
  }
}
</script>
