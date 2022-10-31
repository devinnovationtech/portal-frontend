<template>
  <div>
    <JdsPopover :value="isDropdownOpen" :options="popoverOptions">
      <!-- Dropdown Button -->
      <template #activator>
        <div
          class="flex flex-row justify-between items-center w-full py-2 px-3 rounded-lg bg-[#F6FBFB] text-blue-gray-600 cursor-pointer"
          @click="toggleDropdown"
        >
          <div class="flex">
            <!-- Today is open but not open yet -->
            <div v-if="openStatus.IS_NOT_OPEN_YET">
              <span class="text-red-400 font-bold">
                Tutup
              </span>
              - Buka
            </div>

            <!-- Currently open -->
            <div v-else-if="openStatus.IS_OPEN">
              <span class="text-green-600 font-bold">
                Buka
              </span>
              - Tutup
            </div>

            <!-- Closed -->
            <div v-else>
              <span class="text-red-400 font-bold">Tutup</span>

              <!-- Today has schedule to open but already closed -->
              <span v-if="openStatus.IS_ALREADY_CLOSED"> -</span>
            </div>

            <!-- Today has schedule to open -->
            <span v-if="isOpenThisDay(currentDayData)" class="ml-1">
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
            size="16px"
          />
        </div>
      </template>

      <!-- Dropdown List -->
      <JdsPopoverDropdown class="flex flex-col w-full p-4">
        <div v-for="(day, index) in operationalHours" :key="index">
          <div
            v-if="isOpenThisDay(day)"
            :class="{
              'grid grid-cols-[60px,auto] font-lato leading-6 text-sm': true,
              'mb-2': index !== operationalHours.length - 1
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
    operationalHours: {
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
      return this.operationalHours[this.currentDayIndex] || {}
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
      return Object.keys(day).length !== 0
    }
  }
}
</script>
<style scoped>
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
