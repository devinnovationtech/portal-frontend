<template>
  <section class="w-full h-full flex items-center justify-center">
    <JdsSpinner
      v-if="loading"
      foreground="#0D47A1"
      backgound="#FFFFFF"
      size="40"
    />

    <div v-else-if="error" class="flex flex-col items-center justify-center">
      <img
        src="/images/gpr/gpr-error.png"
        alt="Ilustrasi Gagal memuat GPR Widget"
        width="356"
        height="186"
        class="mb-[60px]"
      >
      <h2 class="font-roboto font-bold text-white text-2xl text-center leading-[45px] mb-2.5">
        Widget gagal dimuat
      </h2>
      <p class="font-roboto text-[#D4D5E9] text-center text-sm mb-11 leading-7">
        Counter Widget gagal dimuat, silakan klik untuk muat kembali
      </p>
      <Button
        class="!bg-white !text-[#0D47A1]"
        @click.stop="$emit('reload')"
      >
        Muat kembali Counter Widget
      </Button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>
