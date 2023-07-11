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
    <Link
      v-if="hasDescription && isExternalLink"
      :link="serviceFee"
      class="block w-full md:max-w-[132px]"
    >
      <Button
        type="button"
        class="w-full !justify-center"
      >
        Detail
      </Button>
    </Link>
    <p
      v-else-if="hasDescription && !isExternalLink"
      class="w-fit font-lato font-bold text-sm leading-6 bg-[#F3B8211A] bg-opacity-10 text-[#FF7500] p-2 ml-4 rounded-lg"
    >
      {{ serviceFee }}
    </p>
    <p
      v-else
      class="w-fit font-lato font-bold text-sm leading-6 bg-blue-100 text-blue-900 p-2 ml-4 rounded-lg"
    >
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
    },
    hasDescription: {
      type: Boolean,
      default: false
    },
    isExternalLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>
