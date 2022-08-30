<template>
  <section class="w-full flex flex-col items-center justify-center bg-white pb-8" style="height: 400px">
    <img
      src="/icons/empty-search.svg"
      alt="No result found"
      width="120px"
      height="120px"
      class="mb-4"
    >
    <section v-if="keyword" class="text-center">
      <p class="font-lato text-sm leading-relaxed text-gray-700 text-center mb-0.5">
        Mohon maaf kami tidak dapat menemukan<br> nama laporan yang cocok dengan
      </p>
      <strong class="font-roboto font-bold text-2xl leading-relaxed text-blue-gray-800 mb-4">
        "{{ keyword }}"
      </strong>
      <p class="font-lato text-xs leading-2 text-gray-500">
        Cobalah untuk menggunakan kata kunci yang berbeda
      </p>
    </section>
    <section v-else class="text-center">
      <p class="font-lora font-bold text-base leading-relaxed text-gray-800 text-center mb-4">
        Belum ada laporan untuk kategori ini
      </p>
      <p class="font-lato text-sm leading-6 text-gray-700 max-w-[40ch]">
        Saat ini belum ada laporan yang ada pada kategori ini,
        silakan menjelajahi kategori lainya.
      </p>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      keyword: this.searchKeyword
    }
  }
}
</script>
