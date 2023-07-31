<template>
  <div
    :class="{
      'flex w-full md:max-w-[260px] px-4 py-3 rounded-xl items-center justify-center gap-[14px] font-lato font-medium text-sm text-white': true,
      'h-12 bg-gray-500 animate-pulse opacity-25': loading,
      'h-fit bg-green-primary': !loading && type === 'ONLINE',
      'h-fit bg-blue-500': !loading && type === 'OFFLINE',
      'h-fit bg-red-400': !loading && type === 'NOT-ACTIVE',
    }"
  >
    <Icon v-show="!loading" src="/icons/layanan-publik/cloud-check.svg" size="24px" alt="" />
    <p v-show="!loading">
      {{ label }}
    </p>
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
    },
    loading: {
      type: Boolean,
      default: true
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
