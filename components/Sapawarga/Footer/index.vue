<template>
  <footer class="mt-[175px] min-h-[950px] md:min-h-[680px] xl:min-h-[600px]">
    <address class="not-italic footer--background-wave bg-[#F1FBFF] px-4 py-6 rounded-b-2xl md:py-8 md:px-6">
      <div class="bg-white p-6 mb-6 rounded-[32px] mx-auto max-w-[1030px] shadow-[0px_2px_32px_#0c4b8514] max-h-[422px] md:max-h-[308px] lg:flex lg:flex-row lg:justify-between lg:gap-4 lg:p-0 ">
        <div class="text-center flex flex-col gap-y-6 lg:w-full lg:text-left lg:py-10 lg:pl-[64px] xl:w-[631px]">
          <div>
            <h2 class="text-blue-gray-800 font-roboto font-bold text-[24px] leading-[38px] md:text-[32px] md:leading-[51px]">
              Ada pertanyaan seputar
              <span class="block text-green-600 font-roboto text-[24px] leading-[38px] font-bold md:text-[32px] md:leading-[51px]">
                Aplikasi Sapawarga?
              </span>
            </h2>
          </div>
          <div>
            <p class="text-blue-gray-800 font-roboto text-[16px] leading-[26px]">
              Hubungi Hotline kami untuk informasi lebih lanjut seputar aplikasi ini.
            </p>
          </div>
          <a
            href="http://s.id/ChatbotSW"
            class="self-center bg-green-primary hover:bg-green-800 py-4 px-6 rounded-lg text-sm text-white transition-colors ease-brand duration-250 lg:self-start"
            target="_blank"
          >
            Hubungi Kami
          </a>
        </div>
        <img class="hidden lg:block lg:w-[249px] lg:self-center xl:mx-auto xl:w-[294px]" width="294" height="210" src="/images/sapawarga/sapawarga-faq-women.svg" alt="">
      </div>
      <div class="pt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        <div>
          <div class="pb-4 flex flex-row gap-x-4 items-center md:pb-5">
            <img width="22" height="40" src="/images/sapawarga/sapawarga-logo.svg" alt="">
            <h2 class="text-blue-gray-800 font-roboto font-extrabold text-[20px] leading-[24px]">
              SAPAWARGA
            </h2>
          </div>
          <p class="font-roboto text-blue-gray-800 font-normal text-[16px] leading-[25px]">
            Jadi
            <span class="text-blue-700 font-bold">#LebihPraktis,</span>
            urus layanan publik, tinggal klik.
          </p>
        </div>
        <div v-for="item in publicServices" :key="item.id">
          <h2 class="text-blue-gray-800 font-roboto font-bold text-[22px] leading-[40px] pb-4 md:pb-5">
            {{ item.title }}
          </h2>
          <div class="grid grid-cols-1 gap-5">
            <a
              v-for="(feature, index) in item.features"
              :key="index"
              :href="feature.link"
              target="_blank"
              class="flex flex-row gap-x-3"
            >
              <Icon width="22" height="22" :src="feature.image" :alt="feature.alt" />
              <p class="text-blue-gray-800 font-lato text-[14px] leading-[23px] font-medium">
                {{ feature.description }}
              </p>
            </a>
          </div>
        </div>
        <div>
          <h2 class="text-blue-gray-800 font-roboto font-bold text-[22px] leading-[40px] pb-4 md:pb-5">
            Ikuti Kami
          </h2>
          <div class="grid grid-cols-2 gap-x-6 gap-y-5">
            <a
              v-for="socialMedia in socialMediaSapawarga"
              :key="socialMedia.name"
              :href="socialMedia.link"
              target="_blank"
              class="flex flex-row gap-x-3"
            >
              <Icon :src="socialMedia.image" alt="" width="22" height="22" />
              <p class="text-blue-gray-800 font-lato text-[14px] leading-[23px] font-medium">
                {{ socialMedia.name }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="md:hidden pt-6">
        <hr class="mx-4 border-[1px] border-blue-gray-50">
        <p class="text-blue-gray-800 font-lato text-sm font-medium leading-6 text-center py-6">
          Copyright © {{ year }}. All Right Reserved
        </p>
      </div>
    </address>
  </footer>
</template>

<script>
import { socialMediaSapawarga } from '~/static/data'
export default {
  data () {
    return {
      socialMediaSapawarga,
      publicServices: [
        {
          id: 1,
          title: 'Partisipasi Lebih Jauh',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-icon-chat.svg'),
              alt: '',
              link: 'https://form.jotform.com/223050549341045',
              description: 'Ajukan Layanan Publik Lain'
            }
          ]
        },
        {
          id: 2,
          title: 'Privasi dan Ketentuan',
          features: [
            {
              image: require('~/static/images/sapawarga/sapawarga-icon-privacy.svg'),
              alt: '',
              link: 'https://sapawarga.digitalservice.id/kebijakan-privasi-ketentuan-pengguna/kebijakan-privasi',
              description: 'Kebijakan Privasi'
            },
            {
              image: require('~/static/images/sapawarga/sapawarga-icon-terms.svg'),
              alt: '',
              link: 'https://sapawarga.digitalservice.id/kebijakan-privasi-ketentuan-pengguna/ketentuan-pengguna',
              description: 'Ketentuan Pengguna'
            }
          ]
        }
      ]
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer--background-wave {
  position: relative;
  width: 100%;
  height: 100%;
}

.footer--background-wave::before {
  position: absolute;
  top: -135px;
  left: 0;
  width: 100%;
  height: 140px;
  content: "";
  background-image: url('/images/sapawarga/sapawarga-faq-wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
