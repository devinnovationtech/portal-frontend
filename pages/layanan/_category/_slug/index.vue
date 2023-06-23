<template>
  <main>
    <PublicServiceRevampJumbotron v-bind="jumbotron" />

    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
          <div class="items-baseline grid grid-cols-1 lg:grid-cols-[220px,1fr] lg:gap-x-6">
            <!-- Mobile Top Menu Slider -->
            <PublicServiceRevampMenuSwiper :menus="menus" />

            <!-- Desktop Sidebar Menu -->
            <PublicServiceRevampSidebar :menus="menus" />

            <!-- Main Container -->
            <div>
              <!-- @todo: remove this dummy section with content -->
              <div id="section-one" class="h-[500px] bg-green-300">
                Section A
              </div>
              <div id="section-two" class="h-[500px] bg-blue-300">
                Section B
              </div>
              <div id="section-three" class="h-[500px] bg-red-300">
                Section C
              </div>
              <div id="section-four" class="h-[500px] bg-yellow-300">
                Section D
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
    }
  }
}
</script>
