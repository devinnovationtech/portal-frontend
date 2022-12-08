<template>
  <section class="min-h-[1452px] md:pb-10 md:min-h-[1230px] lg:min-h-[1241px] xl:pb-0 xl:min-h-[780px]">
    <h2 class="font-roboto text-center text-blue-gray-800 text-[28px] leading-[45px] font-semibold pb-[44px] md:pb-[56px] md:text-[40px] md:leading-[64px] lg:text-[44px] lg:leading-[70px] xl:text-[48px] xl:leading-[77px]">
      Satu <span class="text-green-600">Solusi,</span> Satu <span class="text-green-600">Aplikasi</span>
    </h2>
    <div class="flex flex-col items-center xl:flex-row-reverse">
      <div class="self-start grid grid-cols-1 md:grid-cols-2 md:gap-8 xl:w-[706px]">
        <div
          v-for="item in publicServices"
          :key="item.id"
          class="pb-[45px] md:px-4 md:pt-[25px] lg:px-[50px] lg:pt-[45px] lg:pb-[38px] xl:pt-[50px] xl:pl-[25px] xl:pr-0"
        >
          <div class="pb-[30px]">
            <Icon :src="item.img" size="46" alt="" />
          </div>
          <div>
            <h2 class="pb-2.5 font-roboto text-blue-gray-800 text-[21px] leading-[34px] font-medium">
              {{ item.title }}
            </h2>
            <p class="font-lato text-blue-gray-500 text-[16px] leading-[26px] font-normal">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <picture class="pt-[25px] pb-[41px] md:py-[35px] lg:pb-0 lg:pt-[38px] xl:pt-0">
        <source width="413" height="532" srcset="/images/sapawarga/sapawarga-app-background.webp">
        <img class="max-w-full max-h-full" src="/images/sapawarga/sapawarga-app-background.png" width="413" height="532" alt="Aplikasi sapawarga menu layanan publik">
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      publicServices: [
        {
          id: 1,
          img: require('~/static/images/sapawarga/sapawarga-icon-electric.svg'),
          title: 'Semua terhubung jadi satu',
          description: 'Akses berbagai layanan publik di Jawa Barat dalam satu aplikasi'
        },
        {
          id: 2,
          img: require('~/static/images/sapawarga/sapawarga-icon-handphone.svg'),
          title: 'Lebih sederhana, lebih praktis',
          description: 'Sistem terintegrasi yang ramah pengguna bikin mudah urus berbagai kebutuhan'
        },
        {
          id: 3,
          img: require('~/static/images/sapawarga/sapawarga-icon-document.svg'),
          title: 'Sumber informasi andalan',
          description: 'Sajikan informasi lengkap dan terpercaya di Jawa Barat'
        },
        {
          id: 4,
          img: require('~/static/images/sapawarga/sapawarga-icon-people.svg'),
          title: 'Suara wargi adalah prioritas kami',
          description: 'Terdepan dalam menyediakan layanan aspirasi yang responsif'
        }
      ]
    }
  }
}
</script>
