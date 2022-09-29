<template>
  <section
    class="relative justify-self-center w-full max-w-[500px] h-[600px] md:h-[975px] lg:h-[608px]
    bg-[#262879] rounded-lg flex justify-center items-center overflow-hidden"
  >
    <div
      id="gpr-kominfo-widget-container"
      class="h-full overflow-y-auto"
    />
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center bg-[#262879] bg-opacity-70 z-10"
    >
      <JdsSpinner
        foreground="#1565C0"
        backgound="#FFFFFF"
        size="40"
      />
    </div>
    <div v-if="!loading && timeout" class="absolute inset-0 flex items-center justify-center px-0 md:px-5 z-10">
      <div class="flex flex-col items-center justify-center">
        <img
          src="/images/gpr/gpr-error.png"
          alt="Ilustrasi Gagal memuat GPR Widget"
          width="356"
          height="186"
          class="mb-[60px]"
        >
        <h2 class="font-roboto font-bold text-white text-2xl text-center leading-[45px] mb-3">
          Widget gagal dimuat
        </h2>
        <p class="font-roboto text-white text-center text-sm mb-12 leading-7">
          GPR Widget gagal dimuat, silakan klik untuk muat kembali
        </p>
        <Button
          class="!bg-white !text-[#262879] hover:!bg-gray-300"
          @click.stop="$emit('reload')"
        >
          Muat kembali GPR Widget
        </Button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Boolean,
      default: false
    }
  }
}
</script>
