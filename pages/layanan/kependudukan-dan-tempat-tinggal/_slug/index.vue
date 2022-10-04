<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" class="mb-6" />
      </template>

      <template #suffix>
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
            :name="'Sistem Informasi Data Kependudukan (SIDATUK)'"
            :last-update="'2022-07-22T04:20:38Z'"
          />
          <LayananItemMedia />
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      jumbotron: {
        title: 'Sistem Informasi Data Kependudukan (SIDATUK)',
        subtitle: 'Layanan publik berbasis website untuk pengecekan data kependudukan berbasis Nomor Induk Kependudukan (NIK) dan melakukan pengaduan terkait data kependudukan.',
        backgroundImageUrl: '/images/jumbotron/default.webp'
      },
      searchValue: null
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
          label: 'SIDATUK'
        }
      ]
    }
  }
}
</script>
