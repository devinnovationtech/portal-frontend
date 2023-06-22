<template>
  <main>
    <PublicServiceRevampJumbotron v-bind="jumbotron" />

    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <div class="items-baseline grid grid-cols-1 lg:grid-cols-[220px,1fr] lg:gap-x-6">
            <!-- Mobile Top Menu Slider -->
            <!-- @todo add Mobile Top Menu Slider component -->
            <div class="w-full h-[42px] bg-gray-200 lg:hidden" />

            <!-- Dekstop Sidebar Menu -->
            <!-- @todo add Dekstop Sidebar Menu component -->
            <aside class="hidden lg:block sticky top-[96px] bg-gray-200">
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </aside>

            <!-- Main Container -->
            <div class="h-screen overflow-auto">
              <div class="h-[9999px] bg-blue-400">
                <p>lorem</p>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PublicServiceDetail',
  data () {
    return {
      serviceData: {}
    }
  },
  computed: {
    // @todo: Change jumbotron data using real data from API
    jumbotron () {
      return {
        breadcrumbItems: [
          {
            path: '/',
            label: 'Beranda'
          },
          {
            path: '/layanan/sosial-dan-keluarga',
            label: 'Sosial dan Keluarga'
          },
          {
            path: this.$route.path,
            label: 'Rumah Singgah Humanis (Rengganis)'
          }
        ],
        logo: 'https://placehold.co/80x80',
        title: 'Rumah Singgah Humanis (Rengganis)',
        subtitle: `Pada suatu pagi yang cerah, di sebuah kota kecil yang damai,
        terdapat seorang pemuda yang berjalan menyusuri jalan raya yang sepi.
        Ia memperhatikan pohon-pohon yang berderetan di pinggir jalan, menikmati angin yang sejuk menyapu wajahnya.`,
        portalCategory: 'Dinas Sosial dan Keluarga',
        updatedAt: '22 Juli 2022',
        category: 'Perpajakan',
        serviceType: 'online'
      }
    }
  }

}
</script>
