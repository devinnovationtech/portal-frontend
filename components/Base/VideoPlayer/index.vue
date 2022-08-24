<template>
  <Portal to="modal">
    <div
      v-if="show"
      id="modal"
      class="fixed flex justify-center items-center w-full h-full z-[100] inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"
      @click="$emit('close')"
    >
      <video
        :src="src"
        width="100%"
        height="100%"
        class="modal__body bg-black rounded-lg md:w-[550px] lg:w-[1200px] lg:h-[600px]"
        controls
        autoplay
      />
    </div>
  </Portal>
</template>

<script>
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
  }
}
</script>
