<template>
  <div
    :class="{
      'grid grid-cols-[10px,auto] gap-4 w-full h-full': true,
    }"
  >
    <svg height="10" width="10" class="min-w-[10px] mt-[7px]">
      <circle cx="5" cy="5" r="5" fill="#4DC27E" />
    </svg>
    <p class="w-full font-lato text-left text-blue-gray-900">
      <span
        :class=" {
          'font-normal leading-[23px] text-sm ': !hasDescription,
          'font-bold leading-[26px] text-[16px] block': hasDescription,
        }"
      >
        {{ item.name }}
      </span>
      <span v-show="hasDescription" class="font-normal leading-[23px] text-sm">{{ item.description }}</span>
    </p>
    <a
      v-if="itemHasLink(item)"
      :href="item.link"
      target="_blank"
      class="col-start-2 font-lato font-bold leading-[18px] underline text-green-700"
    >
      <span v-if="isDetailTextButton">Lihat Detail</span>
      <span v-else>Lihat Contoh</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    isDetailTextButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasDescription () {
      return !!this.item?.description
    }
  },
  methods: {
    /**
     * check whether item has link props or not
     * @returns {Boolean}
     */
    itemHasLink (item) {
      return !!item.link
    }
  }
}
</script>
