<template>
  <section
    class="locations p-3 bg-gray-100 rounded-xl border border-gray-100
    sm:col-start-1 sm:row-start-3"
  >
    <address
      :class="{
        'not-italic pb-5 border-b': true,
        'border-b-transparent': isCollapse,
        'border-b-gray-300': !isCollapse
      }"
    >
      <div class="flex items-center">
        <BaseIcon
          icon="/icons/layanan-publik/location.svg"
          :size="16"
          fill-color="#EF5350"
        />
        <p class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
          Alamat
        </p>
      </div>
      <p class="pl-6 pr-3 font-lato text-sm font-normal leading-6 text-blue-gray-400 mb-5">
        {{ firstLocation.address }}
      </p>

      <div class="flex items-center">
        <BaseIcon
          icon="/icons/layanan-publik/phone.svg"
          :size="16"
          fill-color="#16A75C"
        />
        <p class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
          Telepon
        </p>
      </div>
      <p class="pl-6 pr-3 font-lato text-sm font-normal leading-6 text-blue-gray-400">
        {{ firstLocation.phone_number }}
      </p>
    </address>

    <template v-if="hasMultipleLocations">
      <div
        :class="{
          'locations__collapse-wrapper': true,
          'open': !isCollapse
        }"
      >
        <ul class="locations__collapse-expendable">
          <li
            v-for="(location, index) in restOfLocations"
            :key="`location-${index+1}`"
            class="border-b border-gray-300 last:border-transparent py-5"
          >
            <address class="not-italic">
              <div class="flex items-center">
                <BaseIcon
                  icon="/icons/layanan-publik/location.svg"
                  :size="16"
                  fill-color="#EF5350"
                />
                <p class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
                  Alamat
                </p>
              </div>
              <p class="pl-6 pr-3 font-lato text-sm font-normal leading-6 text-blue-gray-400 mb-5">
                {{ location.address }}
              </p>
              <div class="flex items-center">
                <BaseIcon
                  icon="/icons/layanan-publik/phone.svg"
                  :size="16"
                  fill-color="#16A75C"
                />
                <p class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
                  Telepon
                </p>
              </div>
              <p class="pl-6 pr-3 font-lato text-sm font-normal leading-6 text-blue-gray-400">
                {{ location.phone_number }}
              </p>
            </address>
          </li>
        </ul>
      </div>

      <Button
        variant="tertiary"
        type="button"
        class="w-full h-[38px]"
        @click="toggleCollapse"
      >
        <p v-show="isCollapse">
          Lihat {{ restOfLocations.length }} lokasi lainnya
        </p>
        <p v-show="!isCollapse">
          Lihat lebih sedikit
        </p>
        <Icon
          name="chevron-right"
          size="16px"
          :class="{
            'transition-all ease-brand': true,
            '-rotate-90': !isCollapse
          }"
        />
      </Button>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    hasMultipleLocations: {
      type: Boolean,
      default: false
    },
    firstLocation: {
      type: Object,
      default: () => ({
        address: '',
        phone_number: ''
      })
    },
    restOfLocations: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
  .locations__collapse-wrapper {
    display: grid;
    grid-template-rows: 0fr !important;
    overflow: hidden !important;
    transition: grid-template-rows 300ms;
  }

  .locations__collapse-wrapper.open {
    grid-template-rows: 1fr !important;
  }

  .locations__collapse-expendable {
    min-height: 0px !important;
  }
</style>
