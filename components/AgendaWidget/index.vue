<template>
  <section class="rounded-md overflow-hidden">
    <div class="flex flex-col gap-1 bg-green-700 px-5 pt-3 pb-4 text-white">
      <h4 class="text-xl leading-8 font-bold">
        Agenda Jawa Barat
      </h4>
      <p class="text-xs leading-5">
        Dapatkan informasi terkait semua kegiatan yang dilakukan di Jawa Barat.
      </p>
    </div>
    <div class="rounded-br-md rounded-bl-md flex-grow bg-white border border-blue-gray-50 overflow-hidden">
      <div class="bg-white flex flex-col gap-6 pt-5">
        <div class="px-4">
          <p class="font-roboto font-medium mb-1">
            {{ currentMonth }}
          </p>
          <p class="text-xs text-gray-500">
            Minggu ke {{ currentWeek }}
          </p>
        </div>
        <AgendaWidgetSlider :items="eachDayOfWeek" @click="setSelectedDay" />
        <AgendaWidgetList
          :start-date="selectedDay"
          :end-date="selectedDay"
          class="ml-5 mr-4"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {
  format,
  formatISODate,
  getCurrentWeek,
  getEachDay,
  getFirstDayOfMonth,
  getFirstDayOfWeek,
  getLastDayOfMonth,
  getLastDayOfWeek,
  monthsDifference
} from '~/utils/date'

export default {
  data () {
    return {
      selectedDay: formatISODate(new Date())
    }
  },
  computed: {
    currentMonth () {
      return format(this.startDate, { month: 'long', year: 'numeric' })
    },
    currentWeek () {
      return getCurrentWeek()
    },
    startDate () {
      let firstDayOfWeek = getFirstDayOfWeek()

      if (monthsDifference(firstDayOfWeek)) {
        firstDayOfWeek = getFirstDayOfMonth()
      }

      return formatISODate(firstDayOfWeek)
    },
    endDate () {
      let lastDayOfWeek = getLastDayOfWeek()

      if (monthsDifference(lastDayOfWeek)) {
        lastDayOfWeek = getLastDayOfMonth()
      }

      return formatISODate(lastDayOfWeek)
    },
    eachDayOfWeek () {
      return getEachDay({ start: this.startDate, end: this.endDate })
    }
  },
  methods: {
    setSelectedDay (day) {
      this.selectedDay = formatISODate(day)
    }
  }
}
</script>
