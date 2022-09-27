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
          <!-- TODO: Ganti Title di Counter Component -->
          <!-- TODO: add :loading="$fetchState.pending" -->
          <FeaturedProgramCounter
            :counter="serviceLength"
            :loading="false"
            :last-update="meta.lastUpdate"
          />
          <div v-for="service in serviceList" :key="service.id" class="grid grid-cols-3 gap-6">
            <NuxtLink
              :to="`/layanan/kependudukan-dan-tempat-tinggal/${service.slug}`"
              class="w-full flex flex-col gap-1 group bg-white px-4 py-3 rounded-lg
              hover:bg-green-50 hover:cursor-pointer transition-colors ease-brand duration-250"
            >
              <LazyImg :src="service.logo" :alt="service.name" width="42" height="42" />
              <h3 class="font-lato font-bold text-base text-blue-gray-700 leading-normal group-hover:text-green-700">
                {{ service.name }}
              </h3>
              <p class="text-xs leading-6 text-blue-gray-400 group-hover:text-blue-gray-900 line-clamp-2">
                {{ service.excerpt }}
              </p>
              <Button type="button" variant="tertiary-paddingless" class="font-lato self-start" tabindex="-1">
                Selengkapnya
                <Icon name="arrow-right" size="20px" />
              </Button>
            </NuxtLink>
          </div>
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
  computed: {
    serviceLength () {
      return this.meta?.totalCount || 0
    }
  }
}
</script>
