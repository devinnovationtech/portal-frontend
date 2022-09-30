<template>
  <section class="grid grid-cols-1 lg:grid-cols-[85px,1fr] gap-4">
    <LazyImg
      :src="'https://dvgddkosknh6r.cloudfront.net/staging/featured-program/logo/kolecer.svg'"
      alt="Logo Layanan"
      :width="imageSize"
      :height="imageSize"
    />
    <div class="flex flex-col items-start justify-center gap-1">
      <h1 class="font-bold text-blue-gray-800 text-2xl sm:text-[32px] leading-7 sm:leading-10">
        {{ name }}
      </h1>
      <div class="flex flex-row gap-2">
        <Icon src="/icons/history.svg" size="16px" />
        <p class="font-lato text-xs text-blue-gray-800 leading-5">
          Terakhir diupdate {{ date }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { format } from '~/utils/date'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    lastUpdate: {
      type: String,
      required: true
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    },
    imageSize () {
      return this.device.isMobile ? '62' : '85'
    },
    date () {
      const options = { day: 'numeric', month: 'long', year: 'numeric' }

      if (this.lastUpdate) {
        return format(new Date(this.lastUpdate), options)
      }
      return format(new Date(), options)
    }
  }
}
</script>
