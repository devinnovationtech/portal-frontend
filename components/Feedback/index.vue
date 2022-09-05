<template>
  <div>
    <!-- Feedback Form -->
    <BaseModal :show="show" :full-screen="true" @close="closeFeedbackForm">
      <!-- Form Header -->
      <template #header>
        <h1 class="font-roboto font-medium text-[21px] leading-[34px] text-green-700 px-6 py-2 max-w-[568px]">
          Berikan Masukan untuk Perbaikan Portal Jabarprov
        </h1>
      </template>
      <!-- Form Body -->
      <div class="p-6 overflow-y-auto max-w-[568px]">
        <section class="flex flex-col mb-5">
          <label class="text-sm leading-6 text-gray-800 mb-4">
            Seberapa Puas Anda dengan Portal Jabarprov
          </label>
          <div class="feedback__emoticon w-full grid grid-cols-5 h-[65px] gap-3 mb-4">
            <label
              v-for="rating in ratingOptions"
              :key="rating.label"
              class="feedback__emoticon__container min-h-full cursor-pointer"
            >
              <input
                v-model="form.rating"
                type="radio"
                :name="rating.label"
                :value="rating.value"
                class="feedback__emoticon__input absolute left-[-9999px]"
              >
              <div
                class="feedback__emoticon__icon min-w-0 h-full bg-gray-50
                flex flex-grow-0 rounded-lg items-center justify-center p-2 hover:bg-gray-200
                transition-colors ease-brand duration-250"
              >
                <p class="text-xl md:text-4xl leading-none text-center">{{ rating.icon }}</p>
              </div>
            </label>
          </div>
          <p v-if="!selectedRatingLabel" class="text-sm text-gray-700 text-center">
            Pilih kepuasan Anda terlebih dahulu
          </p>
          <p v-else class="text-sm text-gray-700 text-center font-bold">
            {{ selectedRatingLabel }}
          </p>
        </section>

        <section class="flex flex-col mb-5">
          <label class="text-sm leading-6 text-gray-800 mb-4">
            Sektor apa yang paling mewakili Anda?
          </label>
          <JdsSelect
            placeholder="Pilih Sektor"
            :options="sectorOptions"
            :value="form.sector"
            class="feedback__sector__select"
            @change="setFormSector"
          />
          <div v-if="form.sector === 'lainnya'" class="mt-4">
            <textarea
              id="sector"
              v-model="userSector"
              name="sector"
              cols="30"
              rows="3"
              class="w-full bg-gray-50 rounded-lg p-2 text-sm mb-1 border border-gray-500"
              placeholder="Masukkan sektor Anda berasal"
              maxlength="1500"
            />
            <small class="text-gray-600 block">
              {{ userSectorRemainingCharacters }} karakter tersisa
            </small>
          </div>
        </section>

        <section class="flex flex-col mb-5">
          <label for="compliments" class="text-sm leading-6 text-gray-800 mb-4">
            Apa yang bermanfaat bagi Anda dari Portal Jabarprov?
          </label>
          <textarea
            id="compliments"
            v-model="form.compliments"
            name="compliments"
            cols="30"
            rows="3"
            class="bg-gray-50 rounded-lg p-2 text-sm mb-1 border border-gray-500"
            placeholder="Masukkan jawaban Anda di sini"
            maxlength="1500"
          />
          <small class="text-gray-600">
            {{ getRemainingCharacters('compliments') }} karakter tersisa
          </small>
        </section>

        <section class="flex flex-col mb-5">
          <label for="criticism" class="text-sm leading-6 text-gray-800 mb-4">
            Apakah yang perlu diperbaiki dari Portal Jabarprov?
          </label>
          <textarea
            id="criticism"
            v-model="form.criticism"
            name="criticism"
            cols="30"
            rows="3"
            class="bg-gray-50 rounded-lg p-2 text-sm mb-1 border border-gray-500"
            placeholder="Masukkan jawaban Anda di sini"
            maxlength="1500"
          />
          <small class="text-gray-600">
            {{ getRemainingCharacters('criticism') }} karakter tersisa
          </small>
        </section>

        <section class="flex flex-col mb-5">
          <label for="suggestions" class="text-sm leading-6 text-gray-800 mb-4">
            Menurut Anda apa yang perlu disediakan dari Portal Jabarprov?
          </label>
          <textarea
            id="suggestions"
            v-model="form.suggestions"
            name="suggestions"
            cols="30"
            rows="3"
            class="bg-gray-50 rounded-lg p-2 text-sm mb-1 border border-gray-500"
            placeholder="Masukkan jawaban Anda di sini"
            maxlength="1500"
          />
          <small class="text-gray-600">
            {{ getRemainingCharacters('suggestions') }} karakter tersisa
          </small>
        </section>
      </div>
      <!-- Form Footer -->
      <template #footer>
        <div class="bg-gray-50 py-4 px-6 flex justify-end items-center gap-4">
          <Button
            variant="secondary"
            @click="closeFeedbackForm"
          >
            Tutup
          </Button>
          <Button
            :disabled="!isValid"
            :style="[ !isValid && { backgroundColor: '#E0E0E0', color: '#FFFFFF' } ]"
            :loading="isLoading"
            @click="submitHandler"
          >
            Kirim Masukan
          </Button>
        </div>
      </template>
    </BaseModal>

    <!-- Dialog -->
    <BaseModal
      :show="dialog.open"
      :button-label="dialog.buttonLabel"
      @close="closeModal"
    >
      <template #header>
        <h1 class="font-roboto font-medium text-[21px] leading-[34px] text-green-700 px-6 py-2">
          {{ dialog.title }}
        </h1>
      </template>
      <div class="max-w-[500px] py-4 px-6">
        <p class="text-sm text-gray-800">
          {{ dialog.body }}
        </p>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import { hoursDifference } from '~/utils/date'

export default {
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      form: {
        rating: null,
        compliments: '',
        criticism: '',
        suggestions: '',
        sector: ''
      },
      isLoading: false,
      sectorOptions: [
        { value: 'pemerintahan', label: 'Pemerintahan' },
        { value: 'media', label: 'Media' },
        { value: 'organisasi non profit', label: 'Organisasi Non Profit' },
        { value: 'industri/bisnis', label: 'Industri/Bisnis' },
        { value: 'lainnya', label: 'Lainnya (Tulis secara spesifik)' }
      ],
      userSector: '', // Custom sector provided by User
      ratingOptions: [
        { label: 'Sangat Tidak Puas', value: 1, icon: '😩' },
        { label: 'Tidak Puas', value: 2, icon: '😐' },
        { label: 'Cukup Puas', value: 3, icon: '😃' },
        { label: 'Puas', value: 4, icon: '😍' },
        { label: 'Sangat Puas', value: 5, icon: '🥰' }
      ],
      dialog: {
        open: false,
        title: '',
        body: '',
        buttonLabel: ''
      }
    }
  },
  computed: {
    hasValue () {
      const rating = !!this.form.rating
      const compliments = !!this.form.compliments.trim()
      const criticism = !!this.form.criticism.trim()
      const suggestions = !!this.form.suggestions.trim()
      const sector = !!this.form.sector

      return rating && compliments && criticism && suggestions && sector
    },
    isValid () {
      return this.hasValue
    },
    selectedRatingLabel () {
      if (this.form.rating) {
        return this.ratingOptions.find(option => option.value === this.form.rating).label
      }

      return null
    },
    userSectorRemainingCharacters () {
      return 1500 - this.userSector.length
    }
  },
  methods: {
    getRemainingCharacters (label) {
      return 1500 - this.form[label].length
    },
    setFormSector (value) {
      this.form.sector = value
    },
    closeFeedbackForm () {
      this.$emit('close')
      this.resetFormInput()
    },
    closeModal () {
      this.closeFeedbackForm()
      this.resetFormInput()
      this.resetDialog()
      this.openedModal = ''
    },
    resetFormInput () {
      this.form = {
        rating: null,
        compliments: '',
        criticism: '',
        suggestions: '',
        sector: ''
      }
    },
    resetDialog () {
      this.dialog = {
        open: false,
        title: '',
        body: '',
        buttonLabel: ''
      }
    },
    isAllowed () {
      const lastSubmitted = this.getLocalStorage('feedback')

      if (lastSubmitted) {
        return hoursDifference(lastSubmitted) > 0
      }

      return true
    },
    getLocalStorage (key) {
      return localStorage.getItem(key)
    },
    setLocalStorage (key, value) {
      localStorage.setItem(key, value)
    },
    async submitHandler () {
      if (!this.isAllowed()) {
        this.dialog = {
          open: true,
          title: 'Mohon Maaf',
          body: 'Kami melihat bahwa Anda telah mengirimkan feedback baru-baru ini. Silakan kembali untuk mecoba mengirimkan feedback dalam kurun waktu 1 Jam (60 menit).',
          buttonLabel: 'OK, saya mengerti'
        }
      } else {
        const form = {
          rating: this.form.rating,
          compliments: this.form.compliments.trim(),
          criticism: this.form.criticism.trim(),
          suggestions: this.form.suggestions.trim(),
          sector: this.form.sector === 'lainnya' ? `lainnya - ${this.userSector}` : this.form.sector.trim()
        }
        try {
          this.isLoading = true
          await this.$axios.$post('/v1/feedback', form)
          this.isLoading = false
          this.dialog = {
            open: true,
            title: 'Terima kasih',
            body: 'Feedback Anda telah kami terima. Masukan Anda akan menjadi acuan kami untuk pengembangan Portal Jabar ke arah yang lebih baik.',
            buttonLabel: 'OK'
          }
          this.setLocalStorage('feedback', new Date())
        } catch (error) {
          this.isLoading = false
          this.dialog = {
            open: true,
            title: 'Mohon Maaf',
            body: 'Terjadi kesalahan pada sistem kami. Silakan coba kembali beberapa saat lagi.',
            buttonLabel: 'OK, saya mengerti'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
textarea:focus {
  border: 1px solid white;
  outline: none;
  box-shadow: inset 0px 0px 0px 1px #069550, inset 0px 0px 0px 2px #FFC800;
}

.feedback__emoticon__input[type=radio]:checked + .feedback__emoticon__icon {
  @apply bg-green-600
}
</style>

<style>
/**
  Override the default JDS Select styling
*/
.feedback__sector__select .jds-popover__activator,
.feedback__sector__select .jds-select,
.feedback__sector__select .jds-input-text {
  @apply w-full
}

.feedback__sector__select .jds-input-text input{
  @apply text-sm text-gray-700
}

.feedback__sector__select .jds-options__option-list {
  @apply text-gray-700
}
</style>
