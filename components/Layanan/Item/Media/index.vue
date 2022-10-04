<template>
  <section class="flex flex-col sm:flex-row xl:flex-col flex-wrap gap-4 xl:gap-6 mt-4 md:mt-6 lg:mt-12 xl:mt-6 sm:h-[964px] lg:h-[1004px] xl:h-[557px]">
    <!-- Youtube Video -->
    <section class="bg-gray-900 w-full xl:w-[816px] h-[156px] sm:h-[383px] rounded-xl flex items-center justify-center">
      <lite-youtube
        :videoid="videoId"
        class="w-full h-full bg-gray-900 rounded-xl"
      />
    </section>

    <!-- Thumbnail Pictures -->
    <section
      class="flex flex-row sm:grid sm:grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 w-full
      sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[816px] sm:order-last xl:order-none overflow-auto"
    >
      <LazyImg
        v-for="index in 3"
        :key="index"
        src="https://file.jabarprov.go.id/staging/public-service/images/sosialisasi%20sidatuk%2014.jpeg"
        alt="thumbnail"
        class="min-w-[224px] sm:min-w-0 sm:w-[212px] md:w-[252px] lg:w-[456px] xl:w-[256px]
        rounded-xl h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px] object-cover"
      />
    </section>

    <!-- Social Media -->
    <section
      class="w-full sm:w-[320px] md:w-[416px] lg:w-[456px] xl:w-[310px] 2xl:w-[360px] sm:h-[557px] lg:h-[597px] xl:h-full
      border border-solid border-gray-300 rounded-xl p-6 flex flex-col"
    >
      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400">
        <Icon src="/icons/category-blue.svg" size="16px" class="text-blue-700 my-[5px] mr-[5px] " />
        <div class="flex flex-col items-start justify-center gap-2">
          <span>Kategori</span>
          <span class="text-blue-gray-600">Kependudukan</span>
        </div>
      </div>

      <div class="flex flex-row gap-5 justify-between px-5 py-2 border border-solid border-green-600 rounded-xl mt-8">
        <div class="flex flex-col">
          <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
            Link Akses
          </p>
          <!-- @TODO: change this font to SEGOE UI -->
          <p class="font-semibold text-base leading-[21px] text-blue-gray-800">
            SIDATUK
          </p>
        </div>
        <Icon src="/icons/world.svg" size="24px" />
      </div>

      <div class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-8">
        <Icon src="/icons/share.svg" size="16px" class="my-[5px] mr-[5px]" />
        <div class="flex flex-col justify-center gap-2">
          <p>Sosial Media</p>
          <section class="grid grid-cols-3 sm:grid-cols-4 items-end justify-items-start sm:justify-items-center sm:justify-start gap-2 w-full">
            <div class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer">
              <Icon src="/icons/social-media/facebook-logo.svg" size="12px" />
              Facebook
            </div>
            <div class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer">
              <Icon src="/icons/social-media/instagram-logo.svg" size="18px" />
              Instagram
            </div>
            <div class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer">
              <Icon src="/icons/social-media/twitter-logo.svg" size="18px" />
              Twitter
            </div>
            <div class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer">
              <Icon src="/icons/social-media/youtube-logo.svg" size="18px" />
              Youtube
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    videoId () {
      const queryString = 'https://www.youtube.com/watch?v=eBf3j6v0ih0'.split('?')[1]
      const urlParams = new URLSearchParams(queryString)

      return urlParams.get('v')
    }
  }
}
</script>
