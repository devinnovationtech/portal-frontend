<template>
  <section class="p-3 bg-gray-100 rounded-xl border border-gray-100">
    <div class="pb-6 border-b border-b-[#E1E1E1]">
      <div class="flex items-center mb-2">
        <BaseIcon
          icon="/icons/layanan-publik/clock.svg"
          :size="16"
          fill-color="#FF9500"
        />
        <h3 class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-600">
          Jam Operasional ({{ currentDate }})
        </h3>
      </div>
      <OperationalTimesDropdown :operational-times="operationalTimes" />
    </div>
    <div class="flex items-center pt-3 mb-2">
      <BaseIcon
        icon="/icons/layanan-publik/tag.svg"
        :size="16"
        fill-color="#2196F3"
      />
      <h3 class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-600">
        Tarif Layanan
      </h3>
    </div>
    <p class="w-fit font-lato font-bold text-sm leading-6 bg-blue-100 text-blue-900 p-2 rounded-lg">
      {{ serviceFee }}
    </p>
  </section>
</template>

<script>
import OperationalTimesDropdown from '@/components/PublicService/Revamp/MediaInformation/OperationalTimesDropdown'
export default {
  components: {
    OperationalTimesDropdown
  },
  props: {
    currentDate: {
      type: String,
      default: ''
    },
    operationalTimes: {
      type: Array,
      default: () => []
    },
    serviceFee: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
