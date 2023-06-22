<template>
  <div
    :class="{
      'flex w-full h-fit md:max-w-[260px] px-4 py-3 rounded-xl items-center justify-center gap-[14px] font-lato font-medium text-sm text-white': true,
      'bg-green-primary': type === 'online',
      'bg-blue-500': type === 'offline',
      'bg-red-400': type === 'non-active'
    }"
  >
    <Icon src="/icons/layanan-publik/cloud-check.svg" size="24px" alt="" />
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'non-active'
    }
  },
  computed: {
    label () {
      switch (this.type) {
        case 'online':
          return 'Layanan tersedia secara online'
        case 'offline':
          return 'Layanan tersedia secara offline'
        default:
          return 'Layanan tidak beroperasi'
      }
    }
  }
}
</script>
