<template>
  <Portal to="modal">
    <div
      v-if="show"
      id="modal"
      class="fixed flex justify-center items-center w-full h-full z-[100] inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <video
        :src="src"
        class="modal__body bg-black rounded-lg w-full h-full sm:mx-6 lg:w-[1200px] max-h-[275px] sm:max-h-[330px] md:max-h-[450px] lg:max-h-[600px]"
        controls
        autoplay
      />
    </div>
  </Portal>
</template>

<script>
import { lockScroll } from '~/utils/browser'
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    /**
     * example format video from google drive
     * https://drive.google.com/uc?export=preview&id=YOUR_VIDEO_ID
     */
    src: {
      type: String,
      required: true
    }
  },
  watch: {
    show () {
      lockScroll(this.show)
    }
  }
}
</script>
