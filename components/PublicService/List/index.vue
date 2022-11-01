<template>
  <section
    :class="{
      'grid grid-cols-1 min-w-0 w-full': true,
      'lg:grid-cols-[468px,auto] xl:grid-cols-2 gap-3 sm:gap-6 xl:gap-3 sm:max-w-[525px] lg:max-w-4xl xl:max-w-5xl': !isPosterEmpty,
      'w-full sm:max-w-[525px] md:max-w-[656px] lg:max-w-[800px]': isPosterEmpty
    }"
  >
    <ul class="flex flex-col gap-4">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-[10px,auto] gap-4 bg-[#F9FAFB] rounded-xl p-4 font-lato text-sm text-blue-gray-900 w-full"
      >
        <svg height="10" width="10" class="min-w-[10px] mt-[7px]">
          <circle cx="5" cy="5" r="5" fill="#4DC27E" />
        </svg>
        <p class="leading-6">
          {{ descriptionDisplay(item) }}
        </p>
        <a
          v-if="itemHasLink(item)"
          :href="item.link"
          target="_blank"
          class="col-start-2 font-lato font-bold leading-[18px] underline text-green-700"
        >
          Lihat Contoh
        </a>
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
     * check whether item is string or object
     * @returns {String}
     */
    descriptionDisplay (item) {
      if (typeof item === 'object') {
        return item.description
      }

      return item
    },
    /**
     * check whether item has link props or not
     * @returns {Boolean}
     */
    itemHasLink (item) {
      return typeof item.link === 'string'
    }
  }
}
</script>
