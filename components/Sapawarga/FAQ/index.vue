<template>
  <section class="mb-8 pt-4 min-h-[851px] md:min-h-[860px] lg:min-h-[628px] xl:min-h-[635px]">
    <div class="flex flex-col gap-6 justify-center">
      <h2 class="font-roboto text-center text-blue-gray-800 text-[28px] leading-[45px] font-semibold md:text-[40px] md:leading-[64px] lg:text-[44px] lg:leading-[70px] lg:px-[80px] lg:text-left lg:self-center xl:text-[48px] xl:leading-[77px] xl:px-10">
        Frequently Asked <span class="text-green-600">Question</span>
      </h2>
      <p class="max-w-[750px] font-lato text-center text-blue-gray-800 font-normal text-[16px] leading-[26px] md:pb-8 lg:self-center">
        Cari tahu semua hal terkait aplikasi Sapawarga dan juga berbagai layanannya yang akan membuat hidupmu <span class="text-[#1E88E5] font-bold">#LebihPraktis.</span>
      </p>
      <div class="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between">
        <div class="w-full bg-green-600 px-4 py-6 rounded-[16px] h-[320px] lg:max-w-[380px]">
          <div
            v-for="publicService in publicServices"
            :key="publicService.id"
          >
            <button
              class="w-full flex flex-row gap-4 items-center px-[30px] py-[22px] "
              :class="{ 'bg-white rounded-[16px]' : publicService.id === clicked }"
              @click="clickService(publicService.id)"
            >
              <Icon :src="publicService.id === clicked ? publicService.imageActive : publicService.image " :alt="publicService.alt" width="24" height="24" />
              <p
                class="font-roboto font-medium text-[14px] leading-[23px] "
                :class="publicService.id === clicked ? 'text-green-600' : 'text-green-100'"
              >
                {{ publicService.name }}
              </p>
            </button>
          </div>
        </div>
        <div class="lg:w-full">
          <div
            v-for="publicService in publicServices"
            :key="publicService.id"
          >
            <div v-show="publicService.id === clicked">
              <h2 class="font-roboto text-center text-blue-gray-800 text-[28px] leading-[45px] font-semibold lg:text-left pb-6">
                Layanan {{ publicService.name }}
              </h2>
              <SapawargaBaseAccordion
                v-for="(question, index) in publicService.questionAndAnswer"
                :key="index"
                class="pb-7"
                :title="question.question"
                :description="question.description"
                :lists="question.answers"
              />
            </div>
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
      clicked: null,
      publicServices: [
        {
          id: 1,
          name: 'SAPAWARGA',
          image: require('~/static/images/sapawarga/sapawarga-icon-person.svg'),
          imageActive: require('~/static/images/sapawarga/sapawarga-icon-person-green.svg'),
          alt: 'Sapawarga',
          questionAndAnswer: [
            {
              question: 'Apa saja layanan yang tersedia di aplikasi Sapawarga?',
              description: 'Saat ini, ada 4 layanan publik yang tersedia:',
              answers: [
                'Layanan pembayaran Pajak Kendaraan Bermotor (Sambara)',
                'Layanan pencarian lowongan kerja (Si Juara)',
                'Layanan informasi kesehatan',
                'Layanan Sapawarga RW'
              ]
            },
            {
              question: 'Apa saja informasi yang tersedia di Layanan Informasi Kesehatan?',
              description: 'Informasi yang tersedia meliputi:',
              answers: [
                'Layanan vaksin Covid-19',
                'Layanan telekonsultasi dokter & permohonan vitamin'
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'SAMBARA',
          image: require('~/static/images/sapawarga/sapawarga-icon-sambara.svg'),
          imageActive: require('~/static/images/sapawarga/sapawarga-icon-sambara-green.svg'),
          alt: 'Sambara',
          questionAndAnswer: [
            {
              question: 'Apa itu layanan pembayaran Pajak Kendaraan Bermotor (Sambara)?',
              description: null,
              answers: [
                'Sambara (Samsat Mobile Jawa Barat) merupakan inovasi layanan pembayaran Pajak Kendaraan Bermotor (PKB) bagi wajib pajak yang dapat diakses di mana saja dan kapan saja.'
              ]
            },
            {
              question: 'Apa saja yang dapat dilakukan di layanan pembayaran Pajak Kendaraan Bermotor (Sambara)?',
              description: 'Anda dapat mengakses fitur-fitur yang tersedia seperti:',
              answers: [
                'Cek pajak kendaraan pribadi maupun milik orang lain',
                'Pembayaran PKB (termasuk cek daftar kendaraan pribadi, informasi kendaraan pribadi, konfirmasi dan status pembayaran)',
                'Lepas kepemilikan kendaraan bermotor'
              ]
            },
            {
              question: 'Apa saja metode pembayaran yang mendukung pembayaran Pajak Kendaraan Bermotor (Sambara)?',
              description: 'Anda dapat melakukan pembayaran pajak bermotor melalui Sapawarga dengan menggunakan metode yang tersedia seperti:',
              answers: [
                'Gerai minimarket modern (Alfamart, Alfamidi, Indomaret)',
                'Marketplace  (Bukalapak, Tokopedia, Kaspro)',
                'Mesin ATM (BJB, BCA, BNI)',
                'Virtual Account (ATM BJB, BJB Mobile, BJB Net, dan bank lain yang mendukung pembayaran VA)',
                'QRIS (BJB Mobile, BJB DigiCash, dan aplikasi lain yang mendukung pembayaran QRIS)'
              ]
            },
            {
              question: 'Jika pembayaran sudah berhasil dan e-SKKP sudah terbit apakah masih perlu pengesahan STNK offline ke Samsat terdekat?',
              description: null,
              answers: [
                'Jika pembayaran sudah berhasil dan e-SKKP sudah terbit apakah masih perlu pengesahan STNK offline ke Samsat terdekat?',
                'Pengesahan online (e-Sah) maupun pengiriman STNK fisik yang sudah disahkan ke rumah warga dalam rangka uji coba untuk wilayah Kota Bandung masih dalam pengerjaan. Secepatnya fitur akan segera dirilis sehingga kedepannya warga tidak perlu lagi melakukan pengesahan offline ke kantor samsat terdekat.'
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'SIJUARA',
          image: require('~/static/images/sapawarga/sapawarga-icon-bag.svg'),
          imageActive: require('~/static/images/sapawarga/sapawarga-icon-bag-green.svg'),
          alt: 'Sijuara',
          questionAndAnswer: [
            {
              question: 'Apa itu layanan pencarian lowongan kerja (Si Juara)?',
              description: null,
              answers: [
                'Si Juara (Sistem Informasi Jaringan Warga Jabar Sejahtera) merupakan aplikasi ketenagakerjaan bagi warga Jawa Barat dalam memperoleh informasi lapangan pekerjaan.'
              ]
            },
            {
              question: 'Apa saja yang dapat dilakukan di layanan pencarian lowongan kerja (Si Juara)?',
              description: 'Anda dapat mengakses fitur-fitur yang tersedia seperti:',
              answers: [
                'Matchmaking - dapat memudahkan pencari kerja dalam menemukan lapangan pekerjaan sesuai dengan kompetensi yang dimiliki.',
                'Perlindungan Perekrutan - pencari kerja dan perusahaan diberikan perlindungan dalam proses rekrutasi.',
                'Perlindungan Selama Bekerja - fitur aduan dan laporan situasi darurat. Ketika pekerja mengalami masalah dan situasi darurat.',
                'Informasi Pekerjaan Dalam dan Luar negeri - pengguna sebagai pencari kerja dapat memilih pekerjaan berdasarkan lokasi (dalam/luar negeri).',
                'Informasi Pelatihan - tenaga kerja yang kurang memiliki skill dan kompetensi dapat mengikuti pelatihan yang sesuai dengan minat.'
              ]
            }
          ]
        },
        {
          id: 4,
          name: 'SAPAWARGA RW',
          image: require('~/static/images/sapawarga/sapawarga-icon-rw.svg'),
          imageActive: require('~/static/images/sapawarga/sapawarga-icon-rw-green.svg'),
          alt: 'Sapawarga RW',
          questionAndAnswer: [
            {
              question: 'Apa itu layanan Sapawarga RW?',
              description: null,
              answers: [
                'Layanan yang dikhususkan untuk Ketua RW di Jawa Barat agar bisa saling berbagi informasi dan kegiatan RW juga menyampaikan aspirasi dari warga sekitar.'
              ]
            },
            {
              question: 'Apakah akun RW yang saat ini digunakan masih berlaku di Sapawarga versi terbaru?',
              description: 'Tidak, akun RW yang saat ini sudah tidak berlaku dan tidak akan bisa digunakan. Sebagai catatan:',
              answers: [
                'Semua pengguna termasuk Ketua RW wajib melakukan registrasi akun secara mandiri.',
                'Data akun RW yang saat ini sudah ada akan digunakan sebagai landasan penerimaan klaim akun RW & pengajuan RW (selain SK).'
              ]
            },
            {
              question: 'Bagaimana cara masuk ke akun Sapawarga RW?',
              description: 'Jika sudah mempunyai akun, silakan ikuti langkah berikut :',
              answers: [
                'Buka aplikasi Sapawarga',
                'Masukkan username dan password.',
                'Pilih tombol Masuk'
              ]
            },
            {
              question: 'Apa yang harus dilakukan ketika sudah registrasi akun Sapawarga, tetapi gagal verifikasi?',
              description: null,
              answers: [
                'Silakan Anda buka kembali email verifikasi dalam 1x24 jam. Selanjutnya, copy link "Konfirmasi Akun Saya" dengan cara klik kanan, pilih menu “Copy Link Address”, dan buka di browser bawaan dari Google'
              ]
            },
            {
              question: 'Bagaimana cara klaim akun RW?',
              description: 'Segera login dan klaim akun RW dengan cara:',
              answers: [
                'Login menggunakan akun RW',
                'Klik menu Klaim Akun RW pada halaman aplikasi',
                'Upload SK ketua RW yang berlaku'
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.clicked = 1
  },
  methods: {
    clickService (id) {
      this.clicked = id
    }
  }
}
</script>
