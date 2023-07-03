<template>
  <section
    class="relative overflow-hidden w-full h-[150px] px-[14px] py-6 rounded-xl
    bg-gradient-to-r from-[#20B46C] to-[#20A05B] sm:h-[64px] sm:px-5 sm:py-3"
  >
    <div class="absolute top-0 -left-2 w-[146px] h-[146px]">
      <img
        src="/images/public-sevice/hotline-pattern.png"
        alt=""
        width="146"
        height="146"
        class="w-full h-full"
      >
    </div>

    <div class="hidden sm:block sm:absolute -bottom-3 left-2 w-[80px] h-[70px]">
      <img
        src="/images/public-sevice/call-illustration.png"
        alt="Ilustrasi seseorang sedang melakukan panggilan telepon"
        width="80"
        height="70"
        class="w-full h-full object-contain"
      >
    </div>

    <div
      class="h-full grid grid-cols-1 grid-rows-[auto_38px]
      sm:grid-cols-[1fr_175px] sm:grid-rows-1 sm:ml-20"
    >
      <div class="flex flex-col">
        <h3 class="font-lato text-sm leading-4 text-white mb-1 sm:mb-0">
          Kontak Hotline
        </h3>
        <div class="flex items-center">
          <p class="font-roboto text-base leading-6 font-medium text-white">
            {{ telephone }}
          </p>
          <button
            class="px-2 py-1"
            @click="copyToClipboard"
          >
            <BaseIcon
              icon="/icons/copy.svg"
              :size="14"
              fill-color="white"
            />
          </button>
        </div>
      </div>

      <a
        :href="`tel:${telephone}`"
        class="w-full h-[38px] rounded-lg bg-white flex
        items-center justify-center hover:bg-green-100 ease-brand"
      >
        <p class="font-lato text-sm leading-4 font-bold text-green-800 mr-2">
          Hubungi Sekarang
        </p>
        <BaseIcon
          icon="/icons/telephone.svg"
          :size="20"
          fill-color="#008444"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    telephone: {
      type: String,
      default: ''
    }
  },
  methods: {
    copyToClipboard () {
      navigator.clipboard.writeText(this.telephone)
      this.$toast.success(`Copy ke Clipboard: ${this.telephone}`, {
        position: 'bottom-center',
        duration: 5000
      })
    }
  }
}
</script>
