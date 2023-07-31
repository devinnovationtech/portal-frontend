<template>
  <div>
    <JdsPopover :value="isDropdownOpen" :options="popoverOptions">
      <!-- Dropdown Button -->
      <template #activator>
        <div
          :class="{
            'flex flex-row justify-between items-center w-full py-2 px-3 rounded-lg text-blue-gray-600 cursor-pointer': true,
            'bg-red-50': openStatus.IS_NOT_OPEN_YET || openStatus.IS_ALREADY_CLOSED,
            'bg-green-50': openStatus.IS_OPEN
          }"
          @click="toggleDropdown"
        >
          <div class="flex">
            <!-- Today is open but not open yet -->
            <div v-if="openStatus.IS_NOT_OPEN_YET" class="whitespace-nowrap text-sm">
              <span class="text-red-400 font-bold">
                Tutup
              </span>
              - Buka
            </div>

            <!-- Currently open -->
            <div v-else-if="openStatus.IS_OPEN" class="whitespace-nowrap text-sm">
              <span class="text-green-600 font-bold">
                Buka
              </span>
              - Tutup
            </div>

            <!-- Closed -->
            <div v-else class="whitespace-nowrap text-sm">
              <span class="text-red-400 font-bold">Tutup</span>

              <!-- Today has schedule to open but already closed -->
              <span v-if="openStatus.IS_ALREADY_CLOSED"> -</span>
            </div>

            <!-- Today has schedule to open -->
            <span v-if="isOpenThisDay(currentDayData)" class="ml-1 text-sm">
              Pukul
              {{
                openStatus.IS_NOT_OPEN_YET
                  ? currentDayData.start
                  : currentDayData.end
              }}
            </span>
          </div>
          <Icon
            name="chevron-right"
            :class="{
              'text-green-600 transition-all ease-in duration-150': true,
              'rotate-90': isDropdownOpen
            }"
            size="14px"
          />
        </div>
      </template>

      <!-- Dropdown List -->
      <JdsPopoverDropdown class="flex flex-col w-full p-4">
        <div v-for="(day, index) in operationalTimes" :key="index">
          <div
            :class="{
              'grid grid-cols-[60px,auto] font-lato leading-6 text-sm': true,
              'mb-2': index !== operationalTimes.length - 1
            }"
          >
            <p :class="{ 'text-green-700 font-bold': currentDayIndex === index }">
              {{ getDay(index) }}
            </p>
            <p :class="{ 'font-bold': currentDayIndex === index }">
              {{ day.start }} - {{ day.end }}
            </p>
          </div>
        </div>
      </JdsPopoverDropdown>
    </JdsPopover>
    <!-- transparent overlay to close dropdown when click outside -->
    <div
      v-if="isDropdownOpen"
      class="absolute inset-0"
      @click="toggleDropdown"
    />
  </div>
</template>

<script>
export default {
  props: {
    operationalTimes: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isDropdownOpen: false,
      popoverOptions: {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: { offset: [0, 8] }
          }
        ]
      }
    }
  },
  computed: {
    currentDayIndex () {
      const today = new Date()

      return today.getDay() - 1
    },
    currentDayData () {
      return this.operationalTimes[this.currentDayIndex] || {}
    },
    /**
     * compare current hour
     * with current day operational hour data
     * to define open status
     * @return {Object}
     */
    openStatus () {
      if (!this.isOpenThisDay(this.currentDayData)) {
        return { IS_NOT_OPEN_YET: false, IS_OPEN: false, IS_ALREADY_CLOSED: false }
      }

      const openingData = this.currentDayData.start.split(':')
      const openingHour = openingData[0]
      const openingMinute = openingData[1]

      const closingData = this.currentDayData.end.split(':')
      const closingHour = closingData[0]
      const closingMinute = closingData[1]

      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()

      const openHourDifference = currentHour - openingHour
      const openMinuteDifference = currentMinute - openingMinute

      const closeHourDifference = currentHour - closingHour
      const closeMinuteDifference = currentMinute - closingMinute

      const pastOpenHour = openHourDifference > 0 || (openHourDifference === 0 && openMinuteDifference >= 0)
      const pastCloseHour = closeHourDifference > 0 || (closeHourDifference === 0 && closeMinuteDifference >= 0)

      const IS_NOT_OPEN_YET = !pastOpenHour && !pastCloseHour
      const IS_OPEN = pastOpenHour && !pastCloseHour
      const IS_ALREADY_CLOSED = pastOpenHour && pastCloseHour

      return { IS_NOT_OPEN_YET, IS_OPEN, IS_ALREADY_CLOSED }
    }
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    getDay (index) {
      switch (index) {
        case 0:
          return 'Senin'
        case 1:
          return 'Selasa'
        case 2:
          return 'Rabu'
        case 3:
          return 'Kamis'
        case 4:
          return 'Jumat'
        case 5:
          return 'Sabtu'
        case 6:
          return 'Minggu'
        default:
          return '-'
      }
    },
    isOpenThisDay (day) {
      return !!day.start
    }
  }
}
</script>
<style lang="scss" scoped>
.jds-popover::v-deep {
  width: 100%;
  position: relative;

  .jds-popover__activator,
  .jds-popover__content {
    width: 100%;
    z-index: 1;
  }
}
</style>
