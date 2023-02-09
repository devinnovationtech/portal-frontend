<template>
  <BaseModal
    :show="isOpen"
    @close="closeModal"
  >
    <template #header>
      <div v-if="!device.isMobile" class="flex py-3 px-4 w-full items-center justify-end">
        <button
          ref="campaignModalCloseButton"
          class="h-10 w-10 bg-green-600 flex items-center justify-center rounded-full
        hover:bg-green-700 transition-colors ease-brand duration-250"
          tabindex="1"
          aria-label="Tutup Pop Up"
          @click="closeModal"
        >
          <Icon
            name="times"
            size="16px"
            class="text-white"
            aria-hidden="true"
          />
        </button>
      </div>
    </template>
    <div
      class="flex justify-center min-w-full sm:w-[550px] lg:w-[800px] max-h-full overflow-y-auto"
    >
      <Link :link="contentLink" tabindex="2">
        <picture>
          <source
            media="(min-width:1025px)"
            :srcset="imageDesktop"
            width="800"
            height="470"
          >
          <source
            media="(min-width:450px)"
            :srcset="imageDesktop"
            width="550"
            height="976"
          >
          <img
            :src="imageMobile"
            :alt="banner.title"
            class="w-auto h-auto object-contain image-banner"
            width="390"
            height="627"
            loading="eager"
          >
        </picture>
      </Link>
    </div>
    <template #footer>
      <div class="bg-gray-50 flex w-full items-center justify-center p-4 z-[100] mt-auto">
        <Link :link="contentLink" tabindex="3">
          <Button
            type="button"
            class="w-full md:w-auto !justify-center"
            tabindex="-1"
            @click="handleModal"
          >
            {{ textButton }}
          </Button>
        </Link>
      </div>
    </template>
  </BaseModal>
</template>

<script>
export default {
  props: {
    // Modal open delay in milliseconds
    delay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isOpen: false,
      banner: {}
    }
  },
  async fetch () {
    try {
      const response = await this.$axios.get('/v1/public/pop-up-banners/live')
      this.banner = response.data.data
      if (response.status === 200) {
        this.showPopup()
      }
    } catch (error) {
      this.banner = {}
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    },
    textButton () {
      return this.banner?.button_label || 'Tutup'
    },
    contentLink () {
      return this.banner?.link || ''
    },
    imageDesktop () {
      return this.banner.image?.desktop || ''
    },
    imageMobile () {
      return this.banner.image?.mobile || ''
    },
    alternateText () {
      return this.banner?.title || 'Tidak ada gambar'
    }
  },
  methods: {
    closeModal () {
      this.isOpen = false
    },
    showPopup () {
      setTimeout(() => {
        this.isOpen = true

        // wait modal transition to complete before set focus
        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.campaignModalCloseButton && this.$refs.campaignModalCloseButton.focus()
          })
        }, 500)
      }, this.delay)
    },
    handleModal () {
      if (this.contentLink === '') {
        this.closeModal()
      }
    }
  }
}
</script>
