<template>
  <BaseModal
    :show="isOpen"
    @close="closeModal"
  >
    <template #header>
      <div v-if="!device.isMobile" class="flex py-3 px-4 w-full items-center justify-end">
        <button
          class="h-10 w-10 bg-green-600 flex items-center justify-center rounded-full
        hover:bg-green-700 transition-colors ease-brand duration-250"
          @click="closeModal"
        >
          <Icon name="times" size="16px" class="text-white" />
        </button>
      </div>
    </template>
    <div class="flex min-w-0 w-full justify-center md:overflow-y-auto">
      <Link :link="contentLink">
        <picture class="md:max-w-[550px] xl:max-w-full">
          <source
            media="(min-width:1200px)"
            srcset="/images/campaign/donasi-cianjur-dekstop.jpg"
            width="800"
            height="470"
          >
          <source
            media="(min-width:465px)"
            srcset="/images/campaign/donasi-cianjur-tablet.jpg"
            width="550"
            height="976"
          >
          <img
            src="/images/campaign/donasi-cianjur-mobile.jpg"
            alt="donasi bencana cianjur"
            class="max-w-full h-auto"
            width="390"
            height="627"
          >
        </picture>
      </Link>
    </div>
    <template #footer>
      <div class="bg-gray-50 flex w-full items-center justify-center p-4 z-[100] mt-auto">
        <Link :link="contentLink">
          <Button type="button" class="w-full md:w-auto !justify-center">
            Kunjungi Link
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
      contentLink: 'https://kitabisa.com/campaign/jqruntukcianjur'
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    }
  },
  mounted () {
    setTimeout(() => {
      this.isOpen = true
    }, this.delay)
  },
  methods: {
    closeModal () {
      this.isOpen = false
    }
  }
}
</script>
