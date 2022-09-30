<template>
  <section
    class="relative w-full bg-gray-800"
    :style="jumbotronStyle"
  >
    <div class="overlay" />
    <BaseContainer class="relative pt-24 pb-40 z-10">
      <slot name="breadcrumb" />
      <h1 class="font-lora font-bold text-3xl leading-relaxed text-green-500 mb-2">
        {{ title }}
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-4">
        <h2
          :class="{
            'font-lato text-sm leading-6 text-white' : true,
            'sm:col-span-4': isSuffixEmpty,
            'sm:col-span-2': !isSuffixEmpty
          }"
        >
          {{ subtitle }}
        </h2>
        <div v-if="!isSuffixEmpty" class="sm:col-span-2 sm:justify-self-end sm:self-end mt-[10px] sm:mt-0">
          <slot name="suffix" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    /**
     * Jumbotron title
     */
    title: {
      type: [String, Number],
      required: false,
      default: ''
    },
    /**
     * Jumbotron subtitle
     */
    subtitle: {
      type: [String, Number],
      required: false,
      default: ''
    },

    /**
     * Jumbotron background image url.
     * Refering to `static` folder.
     */
    backgroundImageUrl: {
      type: String,
      required: false,
      default: '/images/jumbotron/default.webp'
    }
  },
  computed: {
    jumbotronStyle () {
      return {
        backgroundImage: `url('${this.backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    },
    isSuffixEmpty () {
      return this.$slots.suffix === undefined
    }
  }
}
</script>

<style lang="scss" scoped>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: radial-gradient(100% 2589.12% at 0% 0%, rgba(0, 40, 19, 0.98) 0%, rgba(0, 32, 39, 0.9) 100%);
}

</style>
