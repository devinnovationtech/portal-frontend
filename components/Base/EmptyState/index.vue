<template>
  <section class="w-full flex flex-col items-center justify-center bg-white p-6 min-h-[400px]">
    <img
      src="/icons/empty-search.svg"
      alt="Pencarian tidak ditemukan"
      width="120px"
      height="120px"
      class="mb-4"
    >
    <p class="font-lato text-sm leading-relaxed text-gray-700 text-center mb-0.5 max-w-[270px]">
      {{ errorMessage }}
    </p>
    <strong class="font-roboto font-bold text-2xl leading-relaxed text-blue-gray-800 mb-4">
      "{{ searchValue }}"
    </strong>
    <p class="font-lato text-center text-xs leading-2 text-gray-500">
      Cobalah untuk menggunakan kata kunci yang berbeda
    </p>
  </section>
</template>

<script>
export default {
  name: 'BaseEmptyState',
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    searchValue: {
      type: String,
      default: null
    }
  }
}
</script>
