<template>
  <BaseModal :show="show" button-label="Tutup" @close="$emit('close')">
    <template #header>
      <h1 class="font-roboto font-medium text-[21px] leading-[34px] capitalize text-green-700 px-6 py-2">
        Profil {{ profile[selectedProfile].title }} Jawa Barat
      </h1>
    </template>
    <section class="flex flex-col overflow-y-auto md:overflow-hidden md:flex-row md:max-h-[443px] md:max-w-[640px]">
      <img :src="profile[selectedProfile].image" alt="" width="255" height="443" class="hidden md:block flex-shrink-0 ml-5">
      <div class="overflow-y-auto px-5 flex flex-col">
        <h3 class="font-lato text-gray-800 text-sm leading-6 mb-6">
          {{ profile[selectedProfile].about }}
        </h3>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          Nama Lengkap
        </h4>
        <p class="font-lato text-sm text-gray-800 leading-6 mb-6">
          {{ profile[selectedProfile].name }}
        </p>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          Tempat Tanggal Lahir
        </h4>
        <p class="font-lato text-sm text-gray-800 leading-6 mb-6">
          {{ profile[selectedProfile].dateOfBirth }}
        </p>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          Riwayat Pendidikan
        </h4>
        <ul class="mb-6 list-disc">
          <li v-for="education in profile[selectedProfile].educations" :key="education.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
            {{ education.description }}
          </li>
        </ul>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          Karier
        </h4>
        <ul class="mb-6 list-disc">
          <li v-for="career in profile[selectedProfile].careers" :key="career.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
            {{ career.description }}
          </li>
        </ul>
        <h4 v-if="hasAwards" class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          Penghargaan
        </h4>
        <ul v-if="hasAwards" class="mb-6 list-disc">
          <li v-for="award in profile[selectedProfile].awards" :key="award.id" class="font-lato text-sm text-gray-800 leading-6 ml-6">
            {{ award.description }}
          </li>
        </ul>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px]">
          LHKPN (Laporan Harta Kekayaan Penyelenggara Negara)
        </h4>
        <Link :link="profile[selectedProfile].lhkpn" tabindex="-1" class="mb-6 mt-3">
          <Button
            variant="secondary"
            type="button"
            class="w-full !justify-center"
          >
            <Icon name="cloud-download" size="18px" />
            Unduh Dokumen LHKPN
          </Button>
        </Link>
        <h4 class="font-roboto font-medium text-base text-gray-800 leading-[26px] mb-3">
          Akun Media Sosial
        </h4>
        <div class="flex flex-row">
          <Icon
            src="/icons/social-media/instagram-logo.svg"
            size="18px"
            alt="Instagram"
          />
          <p class="font-lato text-[11px] text-gray-600 ml-3">
            Instagram
          </p>
        </div>
        <Link :link="`https://www.instagram.com/${profile[selectedProfile].instagram}`" tabindex="-1">
          <p class="font-lato text-sm font-bold text-[#1E88E5] ml-7 mb-4">
            @{{ profile[selectedProfile].instagram }}
          </p>
        </Link>
      </div>
    </section>
  </BaseModal>
</template>

<script>
import { GOVERNOR_PROFILE } from '~/static/data'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    selected: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      selectedProfile: 'gubernur',
      profile: GOVERNOR_PROFILE
    }
  },
  computed: {
    hasAwards () {
      return Array.isArray(this.profile[this.selectedProfile].awards) && this.profile[this.selectedProfile].awards.length > 0
    }
  },
  watch: {
    selected (val) {
      this.selectedProfile = val
    }
  }
}
</script>
