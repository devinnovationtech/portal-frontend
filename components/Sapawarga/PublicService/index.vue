<template>
  <section class="mb-8 pt-4 min-h-[1594px] md:min-h-[930px] xl:min-h-[573px]">
    <h2 class="font-roboto text-center text-blue-gray-800 text-[28px] leading-[45px] font-semibold md:text-[44px] md:leading-[70px] lg:px-[80px] xl:px-10">
      Bikin <span class="text-green-600">Ringan</span> Segala <span class="text-green-600">Urusan</span>
    </h2>
    <div class="pt-8 grid grid-cols-1 gap-[30px] justify-items-center md:grid-cols-2 lg:px-6 xl:px-0 xl:pb-[50px] xl:grid-cols-4">
      <div
        v-for="item in publicServices"
        :key="item.id"
        class="group"
      >
        <div class="group-hover:bg-green-600 p-6 border border-solid border-[#DDDDDD] rounded-[32px] w-[304px] h-[340px] lg:w-[424px] xl:w-[288px]">
          <div class="flex flex-row gap-x-3 pb-4">
            <Icon :src="item.img" size="48" />
            <h2
              class="self-center font-roboto text-[14px] leading-[34px] font-medium md:leading-[22px] text-blue-gray-800 group-hover:text-white"
            >
              {{ item.title }}
            </h2>
          </div>
          <div class="mb-6 h-[70px] w-full line-clamp-3">
            <p
              class="font-roboto  text-[14px] leading-[23px] font-normal text-blue-gray-500 group-hover:text-white"
            >
              {{ item.description }}
            </p>
          </div>
          <div
            v-for="(feature, index) in item.features"
            :key="index"
            class="flex flex-row gap-x-3 pb-2"
          >
            <Icon :src="feature.image" size="28" />
            <p
              class="font-roboto self-center text-[12px] leading-[23px] font-normal text-blue-gray-500 group-hover:text-white"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      publicServices: [
        {
          id: 1,
          img: require('~/static/images/sapawarga/sapawarga-layanan-publik-digital.svg'),
          title: 'Layanan Publik Digital',
          description: 'Satu pintu layanan publik yang ramah pengguna',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-dokter.svg'),
              description: 'Konsultasi Dokter'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-vitamin.svg'),
              description: 'Permohonan Vitamin'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-tas.svg'),
              description: 'Simajuara'
            }
          ]
        },
        {
          id: 2,
          img: require('~/static/images/sapawarga/sapawarga-informasi.svg'),
          title: 'Informasi Publik Terkini Pemprov Jabar',
          description: 'Berbagai informasi publik, program unggulan, dan berita aktual terpercaya seputar Jawa Barat.',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-vaksin.svg'),
              description: 'Jadwal Vaksinasi'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-informasi.svg'),
              description: 'Pusat Informasi Covid-19'
            }
          ]
        },
        {
          id: 3,
          img: require('~/static/images/sapawarga/sapawarga-pembangunan.svg'),
          title: 'Aspirasi Untuk Pembangunan Daerah Yang Lebih Baik',
          description: 'Berkontribusi dalam pembangunan Jawa Barat dengan libatkan diri dalam survei dan poling pemerintah.',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-kamera.svg'),
              description: 'Kegiatan RW'
            }
          ]
        },
        {
          id: 4,
          img: require('~/static/images/sapawarga/sapawarga-logo-sambara.svg'),
          title: 'Sambara - Samsat Mobile Jawa Barat',
          description: 'Sambara, Samsat Mobile Jawa Barat merupakan sebuah bentuk komitmen Pemerintah Provinsi Jawa Barat bekerja sama dengan Tim Pembina Samsat Jawa Barat.',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-mobil.svg'),
              description: 'Cek Pajak Kendaraan'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-dompet.svg'),
              description: 'Bayar Pajak Kendaraan'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-mobil-kuning.svg'),
              description: 'Lihat Daftar Kendaraan'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-mobil-kuning-info.svg'),
              description: 'Lihat Informasi Kendaraan'
            }
          ]
        }
      ]
    }
  }
}
</script>
