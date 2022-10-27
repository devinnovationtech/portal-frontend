<template>
  <div class="inline-block px-3 py-2 rounded-lg bg-green-700 w-full md:w-[fit-content] min-h-[64px]">
    <p class="font-lato text-white font-normal text-xs leading-5">
      {{ title }}
    </p>
    <div
      v-if="loading"
      class="w-3/4 h-5 mt-1 rounded-sm animate-pulse bg-green-600 opacity-90"
    />
    <p v-else class="font-roboto text-white">
      <strong class="text-base leading-7">
        {{ counter }} {{ unit }}
      </strong>
      <span class="text-xs leading-4 italic">
        (Update per {{ date }})
      </span>
    </p>
  </div>
</template>

<script>
import { format } from '~/utils/date'

export default {
  props: {
    title: {
      type: String,
      default: '-'
    },
    counter: {
      type: [String, Number],
      default: 0
    },
    unit: {
      type: String,
      default: '-'
    },
    loading: {
      type: Boolean,
      required: false,
      default: true
    },
    lastUpdate: {
      type: String,
      default: ''
    }
  },
  computed: {
    date () {
      const options = { month: 'long', year: 'numeric' }

      if (this.lastUpdate) {
        return format(new Date(this.lastUpdate), options)
      }
      return format(new Date(), options)
    }
  }
}
</script>
