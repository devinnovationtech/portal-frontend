<template>
  <div class="w-full max-w-xl">
    <div
      class="flex flex-col mt-6 md:grid md:grid-rows-[184px] md:gap-4 md:mt-0 md:absolute md:top-0 md:bottom-0 md:left-0 content-center"
    >
      <div class="group cursor-pointer md:relative md:transform md:-rotate-90">
        <button
          class="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm flex justify-center items-center gap-4 pl-3 pr-4 py-3 rounded-lg border-l border-b border-transparent
          md:rounded-tr-none md:rounded-tl-none hover:bg-opacity-10 hover:border-white hover:border-opacity-10 transition-all ease-brand duration-250"
          @click="onClickFeedback"
        >
          <BaseIcon
            icon="/icons/feedback.svg"
            :size="20"
            fill-color="white"
            class="transform md:rotate-90"
          />
          <p class="whitespace-nowrap text-white text-opacity-80 tracking-wide">
            Kritik dan Saran
          </p>
        </button>
      </div>
    </div>
    <Feedback :show="isFeedbackFormOpen" @close="toggleFeedbackForm" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFeedbackFormOpen: false
    }
  },
  methods: {
    onClickFeedback () {
      this.toggleFeedbackForm()
      this.gtagFeedbackForm()
    },
    toggleFeedbackForm () {
      this.isFeedbackFormOpen = !this.isFeedbackFormOpen
    },
    gtagFeedbackForm () {
      this.$gtag.event('click', {
        event_category: 'click_survey',
        value: 'Click Isi Survey'
      })
    }
  }
}
</script>
