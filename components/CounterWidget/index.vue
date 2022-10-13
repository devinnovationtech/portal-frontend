<template>
  <div
    class="counter-widget inset-0 absolute z-[40] top-[740px] select-none"
    :class="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    @click.self="toggleOpen"
  >
    <section
      class="counter-widget__container sticky top-[64px] xl:top-[88px] grid grid-cols-[319px,auto] md:grid-cols-[418px,auto] items-start max-w-max mb-6
      transition-transform ease-in duration-150"
      :class="{ 'counter-widget__container--open' : isOpen }"
    >
      <div
        class="w-full h-[568px] md:h-[600px] py-[18px] px-[26px] rounded-lg overflow-y-scroll pointer-events-auto"
        :class="{
          'bg-[#1565C0]' : showData,
          'bg-[#0D47A1]' : !showData
        }"
      >
        <div v-if="showData">
          <!-- Counter Widget Title -->
          <section class="mb-6">
            <h1
              class="font-roboto text-white font-medium text-[28px] leading-[45px]"
            >
              Statistik kunjungan
            </h1>
            <p
              class="font-roboto font-normal text-[14px] leading-[23px] text-white"
            >
              Perhitungan jumlah kunjungan website
            </p>
          </section>

          <!-- Counter Widget Visitor Today -->
          <section class="bg-[#0D47A1] pl-[49px] pt-[36px] pb-[14px] mb-[15px] rounded-[10px]">
            <div class="flex flex-row gap-[15px] items-center pb-2.5">
              <div class="bg-[#1565C0] p-2 rounded-lg">
                <Icon
                  src="/icons/three-people.svg"
                  size="19px"
                  alt="people"
                />
              </div>
              <div class="flex flex-row gap-2">
                <JdsIcon name="arrow-up" class="text-green-500" size="14px" />
                <p class="text-green-500 font-roboto text-[14px] leading-[23px] font-medium">
                  {{ growthVisit }}
                </p>
              </div>
            </div>
            <p class="font-lato text-white text-[16px] leading-[26px] font-normal">
              Total visitor
            </p>
            <p class="font-roboto text-white text-[49px] leading-[79px] font-medium pb-2.5">
              {{ visitAll }}
            </p>
            <div class="flex flex-row bg-[#1565C0] w-fit rounded-lg">
              <div class="bg-green-500 w-2 h-2 rounded-[50%] m-2.5" />
              <p class="text-white font-lato text-[16px] leading-[26px] font-normal pr-2 rounded-lg">
                <span class="font-semibold">{{ onlineVisitor }}</span> Online
              </p>
            </div>
          </section>

          <!-- Counter Widget Visitor All Time -->
          <section class="bg-[#0D47A1] pl-[49px] pt-[36px] pb-[14px] rounded-[10px]">
            <div class="flex flex-row gap-[15px] items-center pb-2.5">
              <div class="bg-[#1565C0] p-2 rounded-lg">
                <Icon
                  src="/icons/chart.svg"
                  size="19px"
                  alt="people"
                />
              </div>
              <div class="flex flex-row gap-2">
                <JdsIcon name="arrow-down" class="text-[#DD5E5E]" size="14px" />
                <p class="text-[#DD5E5E] font-roboto text-[14px] leading-[23px] font-medium">
                  {{ growthVisitor }}
                </p>
              </div>
            </div>
            <p class="font-lato text-white text-[16px] leading-[26px] font-normal">
              Total visit
            </p>
            <p class="font-roboto text-white text-[49px] leading-[79px] font-medium pb-2.5">
              {{ totalVisit }}
            </p>
          </section>
        </div>

        <CounterWidgetError
          v-else
          :loading="isLoading"
          :error="isError"
          @reload="reloadCounterWidget"
        />
      </div>

      <!-- Counter Widget Button -->
      <div
        class="self-center relative left-[-55px] bg-[#1565C0] rounded-br-lg rounded-bl-lg
        text-white pointer-events-auto transform -rotate-90 cursor-pointer"
        @click="toggleOpen"
      >
        <div class="flex items-center gap-4 py-3 px-2">
          <div class="bg-[#0D47A1] flex rounded-full items-center justify-center p-1">
            <Icon
              name="chevron-down"
              class="transform ease-in duration-150"
              size="19px"
              fill="white"
              :class="isOpen ? 'rotate-180' : 'rotate-0'"
            />
          </div>
          <p class="text-sm font-medium whitespace-nowrap">
            Counter Widget
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  fetchOnServer: false,
  data () {
    return {
      isOpen: false,
      visitorData: {},
      isLoading: true,
      isError: false
    }
  },
  async fetch () {
    try {
      this.isLoading = true
      const response = await this.$axios.get('/v1/public/counter-widget')
      this.visitorData = response.data.data
    } catch (err) {
      this.isError = true
    } finally {
      this.isLoading = false
    }
  },
  computed: {
    growthVisit () {
      return this.visitorData?.growth_visit || '-'
    },
    visitAll () {
      return this.getViewsText(this.visitorData?.visitor_all) || '-'
    },
    onlineVisitor () {
      return this.visitorData?.online30mnt || '-'
    },
    growthVisitor () {
      return this.visitorData?.growth_visitor || '-'
    },
    totalVisit () {
      return this.getViewsText(this.visitorData?.visit_all) || '-'
    },
    showData () {
      return !this.isError && !this.loading
    }
  },
  mounted () {

  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
      this.gtagToggleCounterWidget()
    },
    gtagToggleCounterWidget () {
      this.$gtag.event('click', {
        event_category: 'click_counter_widget',
        event_label: 'click Counter widget',
        value: this.isOpen ? 'open' : 'close'
      })
    },
    reloadCounterWidget () {
      this.$fetch()
    },
    getViewsText (number = 0) {
      return new Intl.NumberFormat('id-ID').format(number)
    }
  }
}
</script>

<style scoped>
.counter-widget .counter-widget__container {
  transform: translateX(-418px);
}

.counter-widget .counter-widget__container--open  {
  transform: translateX(0);
}

@media screen and (max-width: 767px) {
  .counter-widget .counter-widget__container {
    transform: translateX(-319px);
  }

  .counter-widget .counter-widget__container--open  {
    transform: translateX(0);
  }
}
</style>
