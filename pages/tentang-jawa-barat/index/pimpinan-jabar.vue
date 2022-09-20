<template>
  <section class="overflow-hidden">
    <div class="mb-12">
      <h2 class="font-lora font-bold text-green-700 text-[28px] md:text-4xl text-center md:text-left leading-9 md:leading-[56px] mb-4">
        Pimpinan Jawa Barat
      </h2>
      <p class="text-sm leading-6 text-blue-gray-800 mb-8">
        Gubernur Jawa Barat adalah kepala daerah tingkat I yang memegang pemerintahan di Jawa Barat bersama dengan Wakil Gubernur dan 120 anggota Dewan Perwakilan Rakyat Daerah Jawa Barat. Gubernur dan Wakil Gubernur Jawa Barat dipilih melalui pemilihan umum yang dilaksanakan 5 tahun sekali.
      </p>
      <div class="grid grid:cols-1 gap-8 items-center bg-green-primary rounded-[18px] py-4 px-7 md:p-6 relative">
        <div class="relative z-10">
          <h3 class="mb-3 font-lora font-bold text-2xl leading-9 text-white text-center md:mx-auto">
            Struktur Pimpinan Provinsi Jawa Barat
          </h3>
          <p class="font-lora font-bold text-green-100 text-center">
            Periode 2018-2023
          </p>
        </div>
        <div class="grid grid-cols-2 min-w-0 md:grid-cols-4 w-full gap-4">
          <div class="col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]">
            <p class="font-lato font-bold text-sm leading-6 text-green-300">
              Gubernur
            </p>
            <p class="font-lato font-bold text-sm leading-6 text-white mb-3">
              Dr. (H.C.) H. Mochamad Ridwan Kamil, ST., MUD.
            </p>
            <img class="mb-3" src="/images/about/pimpinan/ridwan-kamil.png" alt="Ridwan Kamil" width="103" height="125">
            <button class="bg-green-primary py-[10px] text-sm rounded-lg text-white w-full hover:bg-green-800 transition-colors ease-brand duration-250" @click="setSelectedProfile('gubernur')">
              Lihat Profil
            </button>
          </div>
          <div class="col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]">
            <p class="font-lato font-bold text-sm leading-6 text-green-300">
              Wakil Gubernur
            </p>
            <p class="font-lato font-bold text-sm leading-6 text-white mb-3">
              H. Uu Ruzhanul Ulum, SE.
            </p>
            <img class="mb-3" src="/images/about/pimpinan/ruzhanul-ulum.png" alt="Ruzhanul Ulum" width="103" height="125">
            <button class="bg-green-primary py-[10px] text-sm rounded-lg text-white w-full hover:bg-green-800 transition-colors ease-brand duration-250" @click="setSelectedProfile('wakil gubernur')">
              Lihat Profil
            </button>
          </div>
          <div class="md:col-start-2 col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]">
            <p class="font-lato font-bold text-sm leading-6 text-green-300">
              Sekretaris Daerah
            </p>
            <p class="font-lato font-bold text-sm leading-6 text-white mb-3">
              Dr. Ir. Setiawan Wangsaatmaja, Dipl., S.E., M.Eng.
            </p>
            <img class="mb-3" src="/images/about/pimpinan/setiawan-wangsaatmaja.png" alt="Setiawan Wangsaatmaja" width="103" height="125">
            <button class="bg-green-primary py-[10px] text-sm rounded-lg text-white w-full hover:bg-green-800 transition-colors ease-brand duration-250" @click="setSelectedProfile('sekretaris daerah')">
              Lihat Profil
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <h3 class="font-lora font-bold text-2xl md:text-4xl text-center md:text-left text-blue-gray-700 mb-7">
        Masa Jabatan Gubernur Sebelumnya
      </h3>
      <swiper
        v-show="swiperReady"
        ref="jabarLeaderSwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        @ready="swiperReady = true"
        @slide-change="setCurrentSlide"
      >
        <swiper-slide
          v-for="(item, index) in items"
          :key="item.id"
          class="md:!w-[fit-content]"
        >
          <div class="min-w-[328px]">
            <div class="flex items-center">
              <p class="px-4 py-2 bg-green-700 rounded-[42px] font-lato font-bold text-xs text-white whitespace-nowrap">
                {{ item.period }}
              </p>
              <div :class="{'w-full h-0.5 bg-green-700': index !== items.length - 1}" />
            </div>
            <div class="p-6 rounded-2xl mt-4 flex items-center gap-4 hover:bg-green-50 transition-all ease-out duration-300">
              <img :src="item.image" :alt="item.name" width="50" height="50">
              <div>
                <p class="font-lato text-xs text-blue-gray-300">
                  Gubernur
                </p>
                <p class="font-lato font-bold text-sm text-blue-gray-700">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <template #pagination>
          <div class="flex w-full justify-between mt-4 md:hidden">
            <!-- Next Button -->
            <button
              id="custom-button-prev"
              :disabled="isFirstSlide"
              class="flex-shrink-0 w-[42px] h-[42px] bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center disabled:bg-gray-100"
            >
              <Icon
                name="chevron-left"
                :class="isFirstSlide ? 'text-gray-500' : 'text-white'"
                size="16px"
              />
            </button>
            <!-- Pagination -->
            <div id="custom-pagination" class="!w-[fit-content] flex items-center align-center" />
            <!-- Prev Button -->
            <button
              id="custom-button-next"
              :disabled="isLastSlide"
              class="flex-shrink-0 w-[42px] h-[42px] bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center disabled:bg-gray-100"
            >
              <Icon
                name="chevron-right"
                :class="isLastSlide ? 'text-gray-500' : 'text-white'"
                size="16px"
              />
            </button>
          </div>
        </template>
      </swiper>

      <!-- Swiper Skeleton -->
      <div v-show="!swiperReady" class="w-full h-[146px] flex overflow-hidden gap-8">
        <div v-for="index in 9" :key="index" class="min-w-[328px] h-full bg-gray-200 animate-pulse rounded-xl" />
      </div>
    </div>

    <!-- Jabar Leader ModaL -->
    <BaseModal :show="isModalOpen" button-label="Tutup" @close="closeModal">
      <template #header>
        <h1 class="font-roboto font-medium text-[21px] leading-[34px] capitalize text-green-700 px-6 py-2">
          Profil {{ selectedProfile }} Jawa Barat
        </h1>
      </template>
      <section class="flex flex-col overflow-y-auto md:overflow-hidden md:flex-row md:max-h-[443px] md:max-w-[640px]">
        <img :src="profile[selectedProfile].image" alt="" width="255" height="443" class="hidden md:block flex-shrink-0 ml-5">
        <div class="overflow-y-auto px-5 flex flex-col">
          <h3 class="font-lato text-gray-800 text-sm leading-6 mb-6">
            {{ profile[selectedProfile].about }}
          </h3>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            Nama Lengkap
          </h4>
          <p class="font-lato text-sm text-gray-800 leading-6 mb-6">
            {{ profile[selectedProfile].name }}
          </p>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            Tempat Tanggal Lahir
          </h4>
          <p class="font-lato text-sm text-gray-800 leading-6 mb-6">
            {{ profile[selectedProfile].dateOfBirth }}
          </p>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            Riwayat Pendidikan
          </h4>
          <ul class="mb-6 list-disc">
            <li v-for="education in profile[selectedProfile].educations" :key="education.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
              {{ education.description }}
            </li>
          </ul>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            Karier
          </h4>
          <ul class="mb-6 list-disc">
            <li v-for="career in profile[selectedProfile].careers" :key="career.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
              {{ career.description }}
            </li>
          </ul>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            Penghargaan
          </h4>
          <ul class="mb-6 list-disc">
            <li v-for="award in profile[selectedProfile].awards" :key="award.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
              {{ award.description }}
            </li>
          </ul>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
            LHKPN (Laporan Harta Kekayaan Penyelenggara Negara)
          </h4>
          <Link :link="profile[selectedProfile].lhkpn" tabindex="-1" class="mb-6 mt-3">
            <Button
              variant="secondary"
              type="button"
              class="w-full !justify-center"
            >
              <Icon name="cloud-download" size="18px" />
              Unduh Dokumen LHKPN
            </Button>
          </Link>
          <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px] mb-3">
            Akun Media Sosial
          </h4>
          <div class="flex flex-row">
            <Icon
              src="/icons/social-media/instagram-logo.svg"
              size="18px"
              alt="Instagram"
            />
            <p class="font-lato text-[11px] text-gray-600 ml-3">
              Instagram
            </p>
          </div>
          <Link :link="`https://www.instagram.com/${profile[selectedProfile].instagram}`" tabindex="-1">
            <p class="font-lato text-sm font-bold text-[#1E88E5] ml-7 mb-4">
              @{{ profile[selectedProfile].instagram }}
            </p>
          </Link>
        </div>
      </section>
    </BaseModal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      profile: Object.freeze({
        gubernur: {
          name: 'Dr. (H.C.) H. Mochamad Ridwan Kamil, ST., MUD.',
          dateOfBirth: 'Bandung, 4 Oktober 1971',
          educations: [
            {
              id: 1,
              description: 'Program Magister (S2), Master of Urban Design, UC Berkeley, USA (1999-2001)'
            },
            {
              id: 2,
              description: 'Program Sarjana (S1), Sarjana Teknik Arsitektur, Institut Teknologi Bandung (1990-1995)'
            },
            {
              id: 3,
              description: 'SMAN 3 Bandung (1984-1987)'
            }
          ],
          careers: [
            {
              id: 1,
              description: 'Gubernur Provinsi Jawa Barat (2018-sekarang)'
            },
            {
              id: 2,
              description: 'Walikota Bandung (2013-2018)'
            },
            {
              id: 3,
              description: 'Dosen'
            },
            {
              id: 4,
              description: 'Profesional Arsitek'
            }
          ],
          awards: [
            {
              id: 1,
              description: 'Penghargaan Nirwasita Tantra dari Kementerian Lingkungan Hidup dan Kehutanan RI (2022)'
            },
            {
              id: 2,
              description: 'Best Governor for Healthcare and Action Against Pandemi dari Indonesia Awards (2021)'
            },
            {
              id: 3,
              description: 'Kepala Daerah Inovatif 2021 untuk penghargaan Inovasi Pikobar sebagai Layanan Publik terbaik dalam penanganan pandemi Covid-19 (2021)'
            },
            {
              id: 4,
              description: 'Penghargaan Anugerah Media Humas Indonesia sebagai Gubernur Terpopuler di media digital (2021)'
            },
            {
              id: 5,
              description: 'The Best 7 Asia Governor dari Asia Business Info (2020)'
            },
            {
              id: 6,
              description: 'Dr. (H.C) in Public Administration (Gelar Doktor Kehormatan Bidang Administrasi Publik) dari Dong-A University, South Korea (2019)'
            }
          ],
          about: 'Berlatar belakang sebagai seorang arsitek, dosen, aktivis sosial dan pernah memimpin Pemerintah Kota Bandung sebagai Walikota, Ridwan Kamil kini menjabat sebagai Gubernur Provinsi Jawa Barat periode 2018-2023 dengan mengusung visi mewujudkan Jawa Barat Juara Lahir Batin dengan Inovasi dan Kolaborasi.',
          image: '/images/about/profil/ridwan-kamil.png',
          lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/LHKPN%20Gubernur%20Jabar%20-%20Ridwan%20Kamil.pdf',
          instagram: 'ridwankamil'
        },
        'wakil gubernur': {
          name: 'H. Uu Ruzhanul Ulum, SE.',
          dateOfBirth: 'Tasikmalaya, 10 Mei 1969',
          educations: [
            {
              id: 1,
              description: 'Program Sarjana (S1), Fakultas Ekonomi Manajemen, Universitas Siliwangi (1997)'
            },
            {
              id: 2,
              description: 'SMA Pasundan Tasikmalaya (1988)'
            }
          ],
          careers: [
            {
              id: 1,
              description: 'Wakil Gubernur Provinsi Jawa Barat (2018-sekarang)'
            },
            {
              id: 2,
              description: 'Bupati Kabupaten Tasikmalaya (2011-2018)'
            },
            {
              id: 3,
              description: 'Anggota DPRD Kabupaten Tasikmalaya (2009-2011)'
            },
            {
              id: 4,
              description: 'Ketua DPRD Kabupaten Tasikmalaya (2004-2009)'
            },
            {
              id: 5,
              description: 'Anggota DPRD Kabupaten Tasikmalaya (1999-2004)'
            }
          ],
          awards: [
            {
              id: 1,
              description: 'Peduli Jurnalis dari Persatuan Wartawan Indonesia (2021)'
            },
            {
              id: 2,
              description: 'Lencana Adhitya Karya Mahatva Yodha Kategori Pembina Umum Karang Taruna Terbaik (2018)'
            },
            {
              id: 3,
              description: 'Satya Lencana Jasa Bhakti Koperasi dari Kementrian Koperasi dan Usaha Kecil Menengah Republik Indonesia (2017)'
            },
            {
              id: 4,
              description: 'Penghargaan Adhikarya Pangan Nusantara  Tahun 2016 Kategori Pembina Ketahanan Pangan Kabupaten/Kota Tingkat Provinsi Jawa Barat, Gubernur Jawa Barat (2016)'
            },
            {
              id: 5,
              description: 'Penghargaan Peningkatan Pembangunan di Bidang Pertanian serta Peningkatan Produksi Gabah, Gubernur Jawa Barat (2014)'
            }
          ],
          about: 'Berlatar belakang seorang politisi yang pernah menjabat sebagai Ketua DPRD dan Bupati di Kabupaten Tasikmalaya, kini Uu Ruzhanul Ulum resmi memimpin Jawa Barat bersama Ridwan Kamil.',
          image: '/images/about/profil/uu-ruzhanul-ulum.png',
          lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/LHKPN%20Wagub%20Jabar%20-%20UU%20Ruzhanul%20Ulum.pdf',
          instagram: 'ruzhanul'
        },
        'sekretaris daerah': {
          name: 'Dr. Ir. Setiawan Wangsaatmaja, Dipl., S.E., M.Eng.',
          dateOfBirth: 'Bandung, 26 Agustus 1963',
          educations: [
            {
              id: 1,
              description: 'Program Doktoral (S3), Doktor Teknik Lingkungan, Institut Teknologi Bandung (2004)'
            },
            {
              id: 2,
              description: 'Program Magister (S2), Master of Engineering in Environmental Engineering, Asian Insititute of Technology, Thailand (1996-1997)'
            },
            {
              id: 3,
              description: 'Program Magister (S2), Dipl. SE in Sanitary Engineering, IHE Delft, Netherlands (1993-1994)'
            },
            {
              id: 4,
              description: 'Program Sarjana (S1), Insinyur Teknik Lingkungan, Institut Teknologi Bandung (1989)'
            }
          ],
          careers: [
            {
              id: 1,
              description: 'Sekretaris Daerah Provinsi Jawa Barat (2020-sekarang)'
            },
            {
              id: 2,
              description: 'Komisaris PT Perusahaan Perdagangan Indonesia (2018-sekarang)'
            },
            {
              id: 3,
              description: 'Komisaris PT Bhanda Ghara Reksa (2017-2021)'
            },
            {
              id: 4,
              description: 'Deputi Bidang SDM Aparatur, Kementerian PANRB (2013-2020)'
            },
            {
              id: 5,
              description: 'Kepala Badan Pengendalian Lingkungan Hidup Provinsi Jawa Barat (2008-2013)'
            }
          ],
          awards: [
            {
              id: 1,
              description: 'Satyalancana Karya Satya 30 Tahun, Presiden RI (2021)'
            },
            {
              id: 2,
              description: 'Wibawa Seroja Nugraha, Gubernur LEMHANAS RI (2012)'
            },
            {
              id: 3,
              description: 'Makarti Bhakti Nagari, Kepala LAN RI (2006)'
            },
            {
              id: 4,
              description: '3rd Mens Softball Championship, Atlet Nasional RI (1985)'
            },
            {
              id: 5,
              description: 'Medali Perunggu Kontingen PON XI Jawa Barat (1985)'
            }
          ],
          about: 'Memulai karir politiknya sebagai Aparatur Sipil Negara di Badan Pengendalian Lingkungan Hidup Daerah (BPLHD) Provinsi Jawa Barat beserta pengalaman kepemimpinannya sebagai Deputi Bidang SDM di Kementerian PAN RB selama 7 tahun, kini Setiawan Wangsaatmaja yang menjabat sebagai Sekretaris Daerah Provinsi Jawa Barat bersama dengan Gubernur dan Wakil Gubernur terpilih memiliki visi untuk mewujudkan Jawa Barat Juara Lahir Batin dengan inovasi dan kolaborasi di tahun 2018-2023.',
          image: '/images/about/profil/setiawan-wangsaatmaja.png',
          lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/LHKPN%20Sekda%20Jabar%20-%20Setiawan.pdf',
          instagram: 'swangsaatmaja'
        }
      }),
      items: [
        {
          id: 1,
          name: 'Ahmad Heryawan',
          period: 'Juni 2008 - Juni 2018',
          image: '/images/about/pimpinan/ahmad-heryawan.png'
        },
        {
          id: 2,
          name: 'Danny Setiawan',
          period: 'Juni 2003 - Juni 2008',
          image: '/images/about/pimpinan/danny-setiawan.png'
        },
        {
          id: 3,
          name: 'HR. Nuriana',
          period: '1993 - Juni 2003',
          image: '/images/about/pimpinan/nuriana.png'
        },
        {
          id: 4,
          name: 'Yogie Suardi Memet',
          period: '1985 - 1993',
          image: '/images/about/pimpinan/yogie.png'
        },
        {
          id: 5,
          name: 'Aang Kunaefi',
          period: '1975 - 1985',
          image: '/images/about/pimpinan/aang.png'
        },
        {
          id: 6,
          name: 'Solihin GP',
          period: '1970 - 1974',
          image: '/images/about/pimpinan/solihin.png'
        },
        {
          id: 7,
          name: 'Mashudi',
          period: '1960 - 1970',
          image: '/images/about/pimpinan/mashudi.png'
        },
        {
          id: 8,
          name: 'Ipik Gandamana',
          period: '1956 - 1959',
          image: '/images/about/pimpinan/ipik.png'
        },
        {
          id: 9,
          name: 'Sanusi Hardjadinata',
          period: '1951 - 1956',
          image: '/images/about/pimpinan/sanusi.png'
        },
        {
          id: 10,
          name: 'R. Mas Sewaka',
          period: '1950 - 1956',
          image: '/images/about/pimpinan/sewaka.png'
        },
        {
          id: 11,
          name: 'Ukar Bratakusumah',
          period: '1948 - 1950',
          image: '/images/about/pimpinan/ukar.png'
        },
        {
          id: 12,
          name: 'R. Mas Sewaka',
          period: '1946 - 1948',
          image: '/images/about/pimpinan/sewaka.png'
        },
        {
          id: 13,
          name: 'Murdjani',
          period: '1946 - 1946',
          image: '/images/about/pimpinan/murdjani.png'
        },
        {
          id: 14,
          name: 'Datuk Djamin',
          period: '1945 - 1945',
          image: '/images/about/pimpinan/datuk.png'
        },
        {
          id: 15,
          name: 'Mas Sutardjo Kertohadikusumo',
          period: '1945 - 1945',
          image: '/images/about/pimpinan/sutardjo.png'
        }
      ],
      currentSlide: 0,
      isModalOpen: false,
      selectedProfile: 'gubernur',
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        mousewheel: true,
        passiveListeners: true,
        pagination: {
          el: '#custom-pagination',
          type: 'custom',
          renderCustom (swiper, current, total) {
            return `<p>${current} dari ${total}</p>`
          }
        },
        navigation: {
          nextEl: '#custom-button-next',
          prevEl: '#custom-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto'
          }
        }
      })
    }
  },
  computed: {
    swiper () {
      return this.$refs.jabarLeaderSwiper.$swiper
    },
    isFirstSlide () {
      return this.currentSlide === 0
    },
    isLastSlide () {
      return this.currentSlide === this.items.length - 1
    }
  },
  methods: {
    showModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    },
    setSelectedProfile (selectedProfile) {
      if (!['gubernur', 'wakil gubernur', 'sekretaris daerah'].includes(selectedProfile)) { return }

      // record click profile gubernur by gtag
      this.gtagClickProfileGubernur(selectedProfile)

      this.selectedProfile = selectedProfile
      this.showModal()
    },
    setCurrentSlide () {
      this.currentSlide = this.swiper.activeIndex
    },
    gtagClickProfileGubernur (value) {
      const profile = value === 'gubernur' ? 'Gubernur' : 'Wakil Gubernur' // TODO: add regional secretary analytic value
      this.$gtag.event('click', {
        event_category: 'click_profile_gubernur',
        event_label: `click profile ${value}`,
        value: profile
      })
    }
  }
}
</script>
