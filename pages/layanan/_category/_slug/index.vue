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
      // @todo: remove dummy data if API ready
      serviceData: {
        id: 190,
        opd_name: 'Inspektorat',
        logo: {
          file_name: '1686816808-1.-Logo-Layanan.png',
          file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686816808-1.-Logo-Layanan.png',
          size: 5229
        },
        portal_category: 'Kesehatan',
        service_name: 'ECIS (Environmental Complaints Information System)',
        program_name: 'ECIS (Environmental Complaints Information System)',
        description: 'Melalui aplikasi ini kami mengajak warga masyarakat Jawa Barat khususnya untuk ikut serta dan berperan aktif dalam rangka melaporkan berbagai tindak pelanggaran lingkungan yang ditemui di sekitarnya.',
        service_form: 'JASA',
        service_user: 'UMUM',
        operator_status: 'ACTIVE',
        technical: 'ONLINE',
        cover: {
          video: 'https://www.youtube.com/watch?v=KNMbDIKJ6T0',
          image: {
            file_name: '1686817255-4.-Cover-Layanan.jpg',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817255-4.-Cover-Layanan.jpg',
            size: 415221
          }
        },
        content_images: [
          {
            file_name: '1686817277-5.-Cover-Tambahan.png',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817277-5.-Cover-Tambahan.png',
            size: 247573
          },
          {
            file_name: '1686817277-5.-Cover-Tambahan.png',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817277-5.-Cover-Tambahan.png',
            size: 247573
          },
          {
            file_name: '1686817277-5.-Cover-Tambahan.png',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817277-5.-Cover-Tambahan.png',
            size: 247573
          }
        ],
        hotline_number: '08112230606',
        hotline_mail: 'pengaduanlingkunganhidup@jabarprov.go.id',
        operational_times: [
          {
            day: 'MONDAY',
            start: '07:30',
            end: '20:00'
          },
          {
            day: 'TUESDAY',
            start: '07:30',
            end: '16:00'
          },
          {
            day: 'WEDNESDAY',
            start: '07:30',
            end: '16:00'
          },
          {
            day: 'THURSDAY',
            start: '07:30',
            end: '16:00'
          },
          {
            day: 'FRIDAY',
            start: '07:30',
            end: '16:00'
          }
        ],
        service_fee: {
          has_range: 1,
          minimum_fee: 1000,
          maximum_fee: 5000,
          has_description: 0,
          description: ''
        },
        website: 'https://ecisdlh.jabarprov.go.id/',
        locations: [
          {
            type: 'KHUSUS',
            organization: 'DINAS',
            name: 'Dinas Lingkungan Hidup Provinsi Jawa Barat',
            address: 'Jl. Kawaluyaan Indah Raya No 6 Soekarno Hatta Bandung 40286',
            phone_number: '08112230606'
          },
          {
            type: 'KHUSUS',
            organization: 'DINAS',
            name: 'Dinas Lingkungan Hidup Provinsi Jawa Barat',
            address: 'Jl. Kawaluyaan Indah Raya No 6 Soekarno Hatta Bandung 40286',
            phone_number: '08112230606'
          },
          {
            type: 'KHUSUS',
            organization: 'DINAS',
            name: 'Dinas Lingkungan Hidup Provinsi Jawa Barat',
            address: 'Jl. Kawaluyaan Indah Raya No 6 Soekarno Hatta Bandung 40286',
            phone_number: '08112230606'
          }
        ],
        links: [
          {
            tautan: 'https://ecisdlh.jabarprov.go.id/',
            type: 'WEBSITE',
            label: 'ENVIRONMENTAL COMPLAINTS INFORMATION SYSTEM'
          },
          {
            tautan: 'https://ecisdlh.jabarprov.go.id/',
            type: 'GOOGLE_PLAYSTORE',
            label: 'ENVIRONMENTAL COMPLAINTS INFORMATION SYSTEM'
          },
          {
            tautan: 'https://ecisdlh.jabarprov.go.id/',
            type: 'APP_STORE',
            label: 'ENVIRONMENTAL COMPLAINTS INFORMATION SYSTEM'
          },
          {
            tautan: 'https://ecisdlh.jabarprov.go.id/',
            type: 'GOOGLE_FORM',
            label: 'ENVIRONMENTAL COMPLAINTS INFORMATION SYSTEM'
          }
        ],
        social_media: [
          {
            name: 'Facebook Dinas Lingkungan Hidup Provinsi Jawa Barat',
            type: 'FACEBOOK',
            link: 'https://www.instagram.com/dlhjabar/'
          },
          {
            name: 'Instagram Dinas Lingkungan Hidup Provinsi Jawa Barat',
            type: 'INSTAGRAM',
            link: 'https://www.instagram.com/dlhjabar/'
          },
          {
            name: 'Youtube Dinas Lingkungan Hidup Provinsi Jawa Barat',
            type: 'YOUTUBE',
            link: 'https://www.instagram.com/dlhjabar/'
          },
          {
            name: 'Twitter Dinas Lingkungan Hidup Provinsi Jawa Barat',
            type: 'TWITTER',
            link: 'https://www.instagram.com/dlhjabar/'
          },
          {
            name: 'Tiktok Dinas Lingkungan Hidup Provinsi Jawa Barat',
            type: 'TIKTOK',
            link: 'https://www.instagram.com/dlhjabar/'
          }
        ],
        benefits: {
          title: 'Manfaat Layanan',
          is_active: 1,
          items: [
            {
              name: 'Masyarakat bisa lebih cepat dan mudah dalam mengadukan permasalahan terkait pencemaran atau perusakan lingkungan',
              image: {
                file_name: '1686816990-2.-Manfaat-Layanan.jpg',
                file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686816990-2.-Manfaat-Layanan.jpg',
                size: 123470
              }
            },
            {
              name: 'Masyarakat bisa lebih cepat dan mudah dalam mengadukan permasalahan terkait pencemaran atau perusakan lingkungan',
              image: {
                file_name: '1686816990-2.-Manfaat-Layanan.jpg',
                file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686816990-2.-Manfaat-Layanan.jpg',
                size: 123470
              }
            }
          ]
        },
        facilities: {
          title: 'Fitur Yang Tersedia',
          is_active: 1,
          items: [
            {
              name: 'Masyarakat bisa lebih cepat dan mudah dalam mengadukan permasalahan terkait pencemaran atau perusakan lingkungan',
              image: {
                file_name: '1686816990-2.-Manfaat-Layanan.jpg',
                file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686816990-2.-Manfaat-Layanan.jpg',
                size: 123470
              }
            },
            {
              name: 'Masyarakat bisa lebih cepat dan mudah dalam mengadukan permasalahan terkait pencemaran atau perusakan lingkungan',
              image: {
                file_name: '1686816990-2.-Manfaat-Layanan.jpg',
                file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686816990-2.-Manfaat-Layanan.jpg',
                size: 123470
              }
            }
          ]
        },
        terms_and_conditions: {
          cover: {
            file_name: '1686817321-6.-Syarat-_-Ketentuan-Layanan.jpg',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817321-6.-Syarat-_-Ketentuan-Layanan.jpg',
            size: 121308
          },
          title: 'Syarat dan Ketentuan',
          is_active: 1,
          items: [
            {
              name: 'Masyarakat melakukan registrasi pada web',
              link: 'https://www.facebook.com/dlhjabar/posts/kepada-wargijabar-kini-jika-wargi-menemukan-dugaan-pelanggaran-lingkungan-diseki/1731737283668689/'
            },
            {
              name: 'Masyarakat melakukan registrasi pada web',
              link: 'https://www.facebook.com/dlhjabar/posts/kepada-wargijabar-kini-jika-wargi-menemukan-dugaan-pelanggaran-lingkungan-diseki/1731737283668689/'
            }
          ]
        },
        service_procedures: {
          cover: {
            file_name: '1686817354-7.-Alur-_-Prosedur-Layanan.jpg',
            file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817354-7.-Alur-_-Prosedur-Layanan.jpg',
            size: 192725
          },
          title: 'Alur Proses Layanan',
          is_active: 1,
          items: [
            {
              name: 'Masyarakat melakukan registrasi pada web',
              link: 'https://www.facebook.com/dlhjabar/posts/kepada-wargijabar-kini-jika-wargi-menemukan-dugaan-pelanggaran-lingkungan-diseki/1731737283668689/'
            },
            {
              name: 'Mengisi detail aduan sesuai kejadian, waktu dan tempat',
              link: 'https://www.facebook.com/dlhjabar/posts/kepada-wargijabar-kini-jika-wargi-menemukan-dugaan-pelanggaran-lingkungan-diseki/1731737283668689/'
            }
          ]
        },
        infographics: {
          is_active: 1,
          images: [
            {
              file_name: '1686817377-8.-Infografis-Layanan.png',
              file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817377-8.-Infografis-Layanan.png',
              size: 77174
            },
            {
              file_name: '1686817377-8.-Infografis-Layanan.png',
              file_download_uri: 'https://dvgddkosknh6r.cloudfront.net/staging/media/img/1686817377-8.-Infografis-Layanan.png',
              size: 77174
            }
          ]
        },
        faq: {
          is_active: 1,
          Items: [
            {
              question: 'Bagaimana prosedur untuk mendapatkan layanan?',
              answer: '1. '
            },
            {
              question: '',
              answer: ''
            }
          ]
        },
        application: {
          id: 27,
          name: 'ENVIRONMENTAL COMPLAINTS INFORMATION SYSTEM',
          status: 'AVAILABLE',
          title: 'Fitur Aplikasi',
          features: [
            {
              name: 'Menerima Pengaduan dari Masyarakat terkait lingkungan yang ada di Jawa Barat',
              description: 'Melalui aplikasi ini kami mengajak warga masyarakat Jawa Barat khususnya untuk ikut serta dan berperan aktif dalam rangka melaporkan berbagai tindak pelanggaran lingkungan yang ditemui di sekitarnya.'
            },
            {
              name: 'Menerima Pengaduan dari Masyarakat terkait lingkungan yang ada di Jawa Barat',
              description: 'Melalui aplikasi ini kami mengajak warga masyarakat Jawa Barat khususnya untuk ikut serta dan berperan aktif dalam rangka melaporkan berbagai tindak pelanggaran lingkungan yang ditemui di sekitarnya.'
            }
          ]
        },
        keywords: [
          'lingkungan',
          'ecis',
          'dlh'
        ],
        updated_at: '2023-06-15T08:28:49Z'
      },
      imagePreviewList: [],
      showPreview: false,
      imagePreviewIndex: 0
    }
  },
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
