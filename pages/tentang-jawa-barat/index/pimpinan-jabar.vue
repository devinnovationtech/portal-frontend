<template>
  <section class="overflow-hidden">
    <div class="mb-12">
      <h2 class="font-lora font-bold text-green-700 text-[28px] md:text-4xl text-center md:text-left leading-9 md:leading-[56px] mb-4">
        Pimpinan Jawa Barat
      </h2>
      <p class="text-sm leading-6 text-blue-gray-800 mb-8">
        Gubernur Jawa Barat adalah kepala daerah tingkat I yang memegang pemerintahan di Jawa Barat bersama dengan Wakil Gubernur dan 120 anggota Dewan Perwakilan Rakyat Daerah Jawa Barat. Gubernur dan Wakil Gubernur Jawa Barat dipilih melalui pemilihan umum yang dilaksanakan 5 tahun sekali.
      </p>
      <div class="grid grid:cols-1 gap-8 items-center bg-green-primary rounded-[18px] py-4 px-7 md:p-6 relative">
        <div class="relative z-10">
          <h3 class="mb-3 font-lora font-bold text-2xl leading-9 text-white text-center md:mx-auto">
            Struktur Pimpinan Provinsi Jawa Barat
          </h3>
          <p class="font-lora font-bold text-green-100 text-center">
            Periode 2018-2023
          </p>
        </div>
        <div class="grid grid-cols-2 min-w-0 md:grid-cols-4 w-full gap-4">
          <AboutJabarLeadersCard
            position="Gubernur"
            name="Dr. (H.C.) H. Mochamad Ridwan Kamil, ST., MUD."
            image="/images/about/pimpinan/ridwan-kamil.png"
            class="col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]"
            @click="setSelectedProfile('gubernur')"
          />
          <AboutJabarLeadersCard
            position="Wakil Gubernur"
            name="H. Uu Ruzhanul Ulum, SE."
            image="/images/about/pimpinan/ruzhanul-ulum.png"
            class="col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]"
            @click="setSelectedProfile('wakil gubernur')"
          />
          <AboutJabarLeadersCard
            position="Sekretaris Daerah"
            name="Dr. Ir. Setiawan Wangsaatmaja, Dipl., S.E., M.Eng."
            image="/images/about/pimpinan/setiawan-wangsaatmaja.png"
            class="md:col-start-2 col-span-2 p-4 bg-green-700 rounded-2xl flex flex-col justify-center items-center w-full min-w-[200px]"
            @click="setSelectedProfile('sekretaris daerah')"
          />
        </div>
      </div>
    </div>
    <AboutJabarLeadersTimeline class="relative" />

    <!-- Jabar Leader ModaL -->
    <AboutJabarLeadersProfile
      :show="isModalOpen"
      :selected="selectedProfile"
      @close="closeModal"
    />
  </section>
</template>

<script>
export default {
  data () {
    return {
      isModalOpen: false,
      selectedProfile: 'gubernur'
    }
  },
  methods: {
    showModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    },
    setSelectedProfile (selectedProfile) {
      if (!['gubernur', 'wakil gubernur', 'sekretaris daerah'].includes(selectedProfile)) { return }

      // record click profile gubernur by gtag
      this.gtagClickProfileGubernur(selectedProfile)

      this.selectedProfile = selectedProfile
      this.showModal()
    },
    gtagClickProfileGubernur (value) {
      const profile = value === 'gubernur' ? 'Gubernur' : 'Wakil Gubernur' // TODO: add regional secretary analytic value
      this.$gtag.event('click', {
        event_category: 'click_profile_gubernur',
        event_label: `click profile ${value}`,
        value: profile
      })
    }
  }
}
</script>
