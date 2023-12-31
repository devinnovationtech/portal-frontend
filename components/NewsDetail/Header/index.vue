<template>
  <section
    class="relative w-full min-h-[422px] md:min-h-[400px] bg-gray-800 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url('${news.image}')` }"
  >
    <div
      class="absolute inset-0"
      style="background: linear-gradient(270.04deg, rgba(0, 23, 28, 0.5) 0.04%, rgba(0, 11, 14, 0.75) 39.38%, rgba(0, 35, 25, 0.98) 99.96%);"
    />
    <BaseContainer class="relative pt-24 py-6 lg:pb-9 z-10">
      <Breadcrumb :items="breadcrumbItems" class="mb-6" />
      <div class="flex flex-col text-white md:text-blue-gray-100 gap-6">
        <!-- Title skeleton -->
        <div
          v-show="loading"
          class="w-full h-[24px] lg:h-[96px] flex flex-col gap-4 justify-center mb-2"
        >
          <div class="w-3/5 h-[14px] lg:h-[28px] bg-gray-500 opacity-25 rounded-lg animate-pulse" />
          <div class="w-2/5 h-[14px] lg:h-[28px] bg-gray-500 opacity-25 rounded-lg animate-pulse" />
        </div>
        <!-- end of skeleton -->
        <h1 v-show="!loading" class="font-lora font-bold text-2xl leading-9 md:text-[32px] md:leading-[48px] text-white max-w-3xl">
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
            <p v-show="!loading" class="text-sm">
              {{ published }}
            </p>
          </div>
          <div class="flex items-start gap-2">
            <Icon
              src="/icons/pen.svg"
              size="16px"
              alt="Penulis"
              class="mt-[2px]"
            />
            <div class="flex w-full flex-wrap items-center gap-2 capitalize text-sm">
              <p class="flex line-clamp-1 md:line-clamp-none items-center">
                <span class="hidden md:inline-block">
                  Penulis:
                </span>
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
                  class="capitalize"
                >
                  {{ author }}
                </span>
              </p>
              <div>|</div>
              <p class="flex line-clamp-1 md:line-clamp-none items-center text-sm">
                <span class="hidden md:inline-block">
                  Peliput:
                </span>
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
                  class="capitalize text-sm"
                >
                  {{ reporter }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 md:flex-row justify-between text-white">
          <div class="flex gap-4 justify-between md:justify-start">
            <div class="flex flex-row gap-3 items-start">
              <div class="border rounded-full border-white w-7 h-7 flex justify-center items-center border-opacity-25">
                <Icon name="eye" size="12px" />
              </div>
              <div>
                <p>{{ getViewsText(views) }} kali</p>
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
                <p>{{ shared }} kali</p>
                <p class="text-xs text-blue-gray-100">
                  Berita ini dibagikan
                </p>
              </div>
            </div>
          </div>
          <div @click="setOpenShareModal(true)">
            <Button class="w-full md:w-[fit-content]">
              Bagikan Berita
              <Icon name="share" size="16px" />
            </Button>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- News Share Modal -->
    <BaseModal
      :show="openShareModal"
      button-label="Tutup"
      @close="setOpenShareModal(false)"
    >
      <template #header>
        <h1 class="px-6 py-2 font-medium text-2xl text-green-700 leading-relaxed">
          Bagikan Berita
        </h1>
      </template>
      <div class="py-4 px-6 max-w-[510px]">
        <section class="flex gap-4 mb-4">
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
        <section class="flex gap-4">
          <Icon src="/icons/share.svg" size="16px" class="self-start text-green-600" />
          <div class="w-full">
            <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
              Bagikan Via
            </h2>
            <NewsDetailShare v-bind="shareButtons" @share="onShareNews($event)" />
          </div>
        </section>
      </div>
    </BaseModal>
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
    views: {
      type: [String, Number],
      default: 0
    },
    shared: {
      type: [String, Number],
      default: 0
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
        id: this.news.id,
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
    },
    async onShareNews (id) {
      try {
        await this.$axios.patch(`/v1/news/${id}/share`)
      } catch (error) {
        // silent error
      }
    }
  }
}
</script>
