<template>
  <section class="w-full flex flex-col items-center justify-center bg-white p-6 min-h-[400px]">
    <img
      src="/icons/empty-data.svg"
      alt="Pencarian tidak ditemukan"
      width="120px"
      height="120px"
      class="mb-4"
    >
    <p class="font-roboto text-[21px] leading-[34px] font-bold text-gray-900 text-center mb-0.5 max-w-[617px]">
      {{ title }}
    </p>
    <p class="font-lato text-center text-[12px] leading-[19px] text-gray-700 max-w-[483px]">
      {{ errorMessage }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'BaseEmptyStateData',
  props: {
    title: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>
