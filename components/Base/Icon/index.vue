<template>
  <span
    :style="computedStyle"
    aria-hidden="true"
  />
</template>

<script>
export default {
  props: {
    // Icon path relative to /static folder
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    },
    fillColor: {
      type: String,
      default: '#000'
    },
    mode: {
      type: String,
      default: 'mask',
      validator: value => ['mask', 'image'].includes(value)
    }
  },
  computed: {
    computedStyle () {
      if (this.mode === 'mask') {
        return {
          'mask-image': `url(${this.icon})`,
          'mask-repeat': 'no-repeat',
          'mask-size': '100% 100%',
          '-webkit-mask-image': `url(${this.icon})`,
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-size': '100% 100%',
          'background-color': this.fillColor,
          height: `${this.size}px`,
          width: `${this.size}px`,
          display: 'inline-block'
        }
      } else {
        return {
          background: `url(${this.icon}) no-repeat`,
          'background-color': 'transparent',
          'background-size': '100% 100%',
          height: `${this.size}px`,
          width: `${this.size}px`,
          display: 'inline-block'
        }
      }
    }
  }
}
</script>
