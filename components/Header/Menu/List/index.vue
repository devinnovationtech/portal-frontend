<template>
  <li>
    <button
      class="flex items-center gap-4 cursor-pointer px-3 py-1 rounded-lg hover:bg-green-700 hover:bg-opacity-40"
      @click="setActiveMenu"
    >
      <span class="font-roboto font-medium leading-7">{{ title }}</span>
      <Icon name="chevron-down" size="14px" aria-hidden="true" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    setActiveMenu () {
      this.$emit('click', this.id)
    }
  }
}
</script>
