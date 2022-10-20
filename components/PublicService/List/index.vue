<template>
  <section
    :class="{
      'grid grid-cols-1 py-4 sm:py-8 min-w-0': true,
      'lg:grid-cols-[468px,auto] xl:grid-cols-2 gap-3 sm:gap-6 xl:gap-3 sm:max-w-[525px] lg:max-w-4xl xl:max-w-5xl': !isPosterEmpty,
      'w-full lg:max-w-[800px]': isPosterEmpty
    }"
  >
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex gap-4 bg-[#F9FAFB] rounded-xl p-4 font-lato text-sm text-blue-gray-900 w-full mb-4"
      >
        <svg height="10" width="10" class="min-w-[10px] mt-[7px]">
          <circle cx="5" cy="5" r="5" fill="#4DC27E" />
        </svg>
        <p class="leading-6">
          {{ descriptionDisplay(item) }}
        </p>
      </li>
    </ul>
    <slot name="poster" />
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isPosterEmpty () {
      return this.$slots.poster === undefined
    }
  },
  methods: {
    /**
     * check wether item is string or object
     * @returns {String}
     */
    descriptionDisplay (item) {
      if (typeof item === 'object') {
        return item.description
      }

      return item
    }
  }
}
</script>
