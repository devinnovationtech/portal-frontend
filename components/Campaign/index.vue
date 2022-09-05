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
    <div class="flex min-w-0 w-full justify-center">
      <figure class="md:w-[550px] lg:w-[700px]">
        <img
          v-if="device.isMobile"
          src="/images/campaign/bian-mobile.jpg"
          alt="Informasi Bulan Imunisasi Anak Nasional 2022"
          width="328"
          height="576"
          class="w-full h-full"
        >
        <img
          v-else
          src="/images/campaign/bian-dekstop.jpg"
          alt="Informasi Bulan Imunisasi Anak Nasional 2022"
          width="700"
          height="453"
          class="w-full h-full"
        >
      </figure>
    </div>
    <template #footer>
      <div class="bg-gray-50 flex w-full items-center justify-center p-4 z-[100] mt-auto">
        <Link :link="contentLink">
          <Button type="button" class="w-full md:w-auto !justify-center">
            Lihat Info Lengkap
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
      contentLink: 'https://youtu.be/i6vnjBsJs2A?t=594'
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
