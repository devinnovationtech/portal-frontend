<template>
  <div
    class="carousel w-full h-full overflow-hidden relative"
    :class="{'group': hover}"
    @mouseover="setPause(pauseOnHover)"
    @mouseout="setPause(false)"
  >
    <template v-for="(item, index) in items">
      <transition :key="index" name="fade" tag="div" mode="out-in">
        <div v-show="index === currentIndex" class="w-full h-full">
          <div
            v-lazy:background-image="item.image"
            class="carousel-bg bg-no-repeat bg-cover bg-center w-full h-full"
            :class="{ 'transition duration-500 ease-in-out group-hover:transform group-hover:scale-110': hover }"
          />
          <slot name="filter" />
          <slot
            name="content"
            :item="item"
            :index="index"
            :current-index="currentIndex"
            :prev="prev"
            :next="next"
          />
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    },
    hover: {
      type: Boolean,
      required: false,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      interval: null,
      currentIndex: 0,
      pause: false
    }
  },
  mounted () {
    this.startSlide()
  },

  methods: {
    startSlide () {
      this.resetInterval()
      this.interval = setInterval(() => {
        if (!this.pause) {
          this.next()
        }
      }, this.duration)
    },
    resetInterval () {
      clearInterval(this.interval)
    },
    setPause (active) {
      this.pause = active
      if (this.pauseOnHover) {
        this.startSlide()
      }
    },
    next () {
      if (this.currentIndex >= this.items.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex += 1
      }
    },
    prev () {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.items.length - 1
      } else {
        this.currentIndex -= 1
      }
    }
  }
}
</script>

<style scoped>
.carousel .carousel-bg[lazy=loading] {
  @apply bg-gray-200 animate-pulse
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  position: absolute;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
