<template>
  <section class="flex flex-col sm:flex-row xl:flex-col flex-wrap gap-4 xl:gap-6 mt-4 md:mt-6 lg:mt-12 xl:mt-6 h-[598px] sm:h-[964px] lg:h-[1004px] xl:h-[557px]">
    <!-- Youtube Video -->
    <div class="bg-gray-900 w-full xl:w-[816px] h-[156px] sm:h-[383px] rounded-xl flex items-center justify-center">
      <lite-youtube
        videoid="4owp_m0xx9I"
        class="w-full h-full bg-gray-900 rounded-xl"
      />
    </div>

    <!-- Thumbnail Pictures -->
    <div class="flex flex-row sm:grid sm:grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 sm:w-[212px] w-full md:w-[252px] lg:w-[456px] xl:w-[816px] sm:order-last xl:order-none overflow-auto">
      <span class="min-w-[224px] sm:min-w-0 sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[256px] bg-green-300 rounded-xl h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px]">
        Gambar
      </span>
      <span class="min-w-[224px] sm:min-w-0 sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[256px] bg-green-300 rounded-xl h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px]">
        Gambar
      </span>
      <span class="min-w-[224px] sm:min-w-0 sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[256px] bg-green-300 rounded-xl h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px]">
        Gambar
      </span>
    </div>

    <!-- Social Media -->
    <div class="w-full sm:w-[320px] md:w-[416px] lg:w-[456px] xl:w-[310px] 2xl:w-[360px] sm:h-[557px] lg:h-[597px] xl:h-full border border-solid border-gray-300 rounded-xl p-6">
      Sosmed
    </div>
  </section>
</template>

<script>
export default {

}
</script>
