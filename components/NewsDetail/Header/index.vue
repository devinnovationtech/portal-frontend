<template>
  <section
    class="relative w-full bg-blue-800 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url('${news.image}')` }"
  >
    <div
      class="absolute inset-0"
      style="background: linear-gradient(90deg, rgba(0,35,25,0.9) 5%, rgba(0,11,14,0.5) 50%, rgba(0,23,28,0) 100%);"
    />
    <BaseContainer class="relative pt-24 pb-9 z-10 ">
      <Breadcrumb :items="breadcrumbItems" class="mb-6" />
      <div class="flex flex-col text-blue-gray-100 gap-6">
        <!-- Title skeleton -->
        <div
          v-show="loading"
          class="w-full h-[96px] flex flex-col gap-4 justify-center mb-2"
        >
          <div class="w-3/5 h-[28px] bg-gray-500 opacity-25 rounded-lg animate-pulse" />
          <div class="w-2/5 h-[28px] bg-gray-500 opacity-25 rounded-lg animate-pulse" />
        </div>
        <!-- end of skeleton -->
        <h1 v-show="!loading" class="font-lora font-bold text-[34px] leading-[48px] text-white mb-2 max-w-3xl">
          {{ news.title }}
        </h1>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Icon src="/icons/calendar.svg" size="16px" alt="Diterbitkan" />
            <!-- Date skeleton -->
            <div
              v-show="loading"
              class="w-[132px] h-5 flex items-center"
            >
              <div class="w-full h-[14px] bg-gray-500 opacity-25 rounded-md animate-pulse " />
            </div>
            <!-- end of skeleton -->
            <p v-show="!loading">
              {{ published }}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 capitalize">
              <Icon src="/icons/pen.svg" size="16px" alt="Penulis" />
              <p class="flex items-center">
                Penulis:
                <!-- Author skeleton -->
                <span
                  v-if="loading"
                  class="ml-3 w-[132px] h-5 flex items-center"
                >
                  <div class="w-full h-[14px] bg-gray-500 opacity-25 rounded-md animate-pulse" />
                </span>
                <!-- end of skeleton -->
                <span
                  v-else
                  class="ml-1"
                >
                  {{ author }}
                </span>
              </p>
            </div>
            <div>|</div>
            <div class="flex items-center gap-2 capitalize">
              <p class="flex items-center">
                Peliput:
                <!-- Reporter skeleton -->
                <span
                  v-if="loading"
                  class="ml-3 w-[132px] h-5 flex items-center"
                >
                  <div class="w-full h-[14px] bg-gray-500 opacity-25 rounded-md animate-pulse" />
                </span>
                <!-- end of skeleton -->
                <span
                  v-else
                  class="ml-1"
                >
                  {{ reporter }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between text-white">
          <div class="flex gap-4">
            <div class="flex flex-row gap-3 items-start">
              <div class="border rounded-full border-white w-7 h-7 flex justify-center items-center border-opacity-25">
                <Icon name="eye" size="12px" />
              </div>
              <div>
                <p>{{ getViewsText(news.views) }} kali</p>
                <p class="text-xs text-blue-gray-100">
                  Berita ini dilihat
                </p>
              </div>
            </div>
            <div class="flex flex-row gap-3 items-start">
              <div class="border rounded-full border-white w-7 h-7 flex justify-center items-center border-opacity-25">
                <Icon name="share" size="12px" />
              </div>
              <div>
                <p>{{ news.shared }} kali</p>
                <p class="text-xs text-blue-gray-100">
                  Berita ini dibagikan
                </p>
              </div>
            </div>
          </div>
          <div @click="setOpenShareModal(true)">
            <Button>
              Bagikan Berita
              <Icon name="share" size="16px" />
            </Button>
          </div>
        </div>
      </div>
    </BaseContainer>
    <Modal :show="openShareModal">
      <div class="grid grid-cols-2 w-full px-6 gap-y-5">
        <h1 class="font-medium text-2xl text-green-700 leading-relaxed">
          Bagikan Berita
        </h1>

        <section class="col-span-2 flex gap-4">
          <Icon src="/icons/info-circle-outline.svg" size="16px" class="self-start text-green-600" />
          <div>
            <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
              Judul Berita
            </h2>
            <p class="text-gray-800 font-bold leading-relaxed">
              {{ news.title }}
            </p>
          </div>
        </section>

        <section class="col-span-2 flex gap-4">
          <Icon src="/icons/share.svg" size="16px" class="self-start text-green-600" />
          <div>
            <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
              Bagikan Via
            </h2>
            <NewsDetailShare v-bind="shareButtons" />
          </div>
        </section>

        <section
          class="col-span-2 flex justify-center mb-4"
          @click="setOpenShareModal(false)"
        >
          <Button>Tutup</Button>
        </section>
      </div>
    </Modal>
  </section>
</template>

<script>
import { format } from '~/utils/date'

export default {
  props: {
    news: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      openShareModal: false
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
          path: '/berita',
          label: 'Berita'
        },
        {
          path: this.$route.path,
          label: this.news.category
        }
      ]
    },
    published () {
      return format(this.news.published_at, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    },
    author () {
      return this.news.author || ''
    },
    reporter () {
      return this.news.reporter || ''
    },
    articleUrl () {
      const publicUrl = process.env.NUXT_ENV_PUBLIC_URL
      const fullPath = `berita/${this.news.slug}`

      if (publicUrl && fullPath) {
        return `${publicUrl}/${fullPath}`
      }
      return ''
    },
    shareButtons () {
      return {
        networks: ['facebook', 'twitter', 'whatsapp', 'email'],
        url: this.articleUrl,
        title: this.news?.title || '',
        description: this.news?.excerpt || ''
      }
    }
  },
  methods: {
    getViewsText (number) {
      return new Intl.NumberFormat('id-ID', {
        notation: 'compact',
        compactDisplay: 'short'
      }).format(number)
    },
    setOpenShareModal (value) {
      this.openShareModal = value
    }
  }
}
</script>