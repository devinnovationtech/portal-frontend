<template>
  <section class="bg-[#F1FBFF] rounded-2xl flex flex-col justify-center items-center mb-8 pt-[72px] md:px-6 md:pt-6 lg:px-8 xl:flex-row xl:gap-x-8 min-h-[840px] md:min-h-[1012px] xl:min-h-[617px]">
    <div class="xl:max-w-[550px] xl:self-center text-center xl:text-left">
      <h1 class=" font-roboto text-[32px] leading-[42px] font-extrabold text-blu-gray-800 pb-4 md:text-[52px] md:leading-[70px]">
        Satu Aplikasi Untuk
        <span class="text-green-700 font-semibold">
          Beragam Kebutuhan
        </span>
        Warga Jawa Barat
      </h1>
      <p class="pb-12 font-roboto text-blue-gray-800 text-[22px] leading-[32px] font-normal md:text-[24px] md:leading-[26px]">
        Jadi
        <span class="font-bold text-[#1976D2]">
          #LebihPraktis,
        </span>
        urus layanan publik, tinggal klik.
      </p>
      <div class="flex flex-col justify-center items-center gap-4 mb-10 md:flex-row md:gap-6 xl:justify-start xl:items-start">
        <a
          v-for="item in operatingSystem"
          :key="item.id"
          :href="item.link"
          target="_blank"
          :aria-label="item.OSStore"
          rel="noreferrer"
        >
          <div
            v-if="item.show"
            class="w-[220px] h-[65px] grid grid-cols-[30px,1fr] gap-5 bg-gray-900 px-5 py-2 rounded-xl cursor-pointer"
          >
            <img
              class="self-center justify-self-center"
              :src="item.img"
              width="26"
              height="28"
              :alt="item.alt"
            >
            <div>
              <p class="font-lato font-medium text-[14px] leading-[18px] text-white pb-[2px] opacity-80">
                {{ item.callToActionText }}
              </p>
              <p class="font-segoeui font-semibold text-[20px] leading-[27px] text-white">
                {{ item.OSStore }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <img src="/images/sapawarga/sapawarga-app.svg" width="481" height="594" alt="sapawarga">
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      operatingSystem: [
        {
          id: 1,
          img: require('~/static/images/sapawarga/playstore.svg'),
          alt: 'Playstore',
          callToActionText: 'Unduh Aplikasinya di',
          OSStore: 'Google Play',
          show: true,
          link: 'https://play.google.com/store/apps/details?id=com.sapawarga.jds&amp;hl=id&amp;gl=US'
        },
        {
          id: 2,
          img: require('~/static/images/sapawarga/apple.svg'),
          alt: 'Apple',
          callToActionText: 'Dapatkan di',
          OSStore: 'App Store',
          show: false,
          link: ''
        }
      ]
    }
  },
  head () {
    return {
      link: [
        { rel: 'preload', as: 'image', href: '/images/sapawarga/sapawarga-app.svg' }
      ]
    }
  }
}
</script>
