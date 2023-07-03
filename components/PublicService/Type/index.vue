<template>
  <div
    :class="{
      'flex w-full h-fit md:max-w-[260px] px-4 py-3 rounded-xl items-center justify-center gap-[14px] font-lato font-medium text-sm text-white': true,
      'bg-green-primary': type === 'ONLINE',
      'bg-blue-500': type === 'OFFLINE',
      'bg-red-400': type === 'NOT-ACTIVE'
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
      default: 'NOT-ACTIVE',
      validator (value) {
        return ['ONLINE', 'OFFLINE', 'NOT-ACTIVE'].includes(value)
      }
    }
  },
  computed: {
    label () {
      switch (this.type) {
        case 'ONLINE':
          return 'Layanan tersedia secara online'
        case 'OFFLINE':
          return 'Layanan tersedia secara offline'
        default:
          return 'Layanan tidak beroperasi'
      }
    }
  }
}
</script>
