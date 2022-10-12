<template>
  <client-only>
    <Portal to="modal">
      <vue-easy-lightbox
        :visible="show"
        :imgs="images"
        :index="index"
        @hide="$emit('close')"
      />
    </Portal>
  </client-only>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    },
    index: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>
