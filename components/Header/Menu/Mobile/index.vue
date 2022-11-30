<template>
  <div>
    <div class="min-w-0 flex gap-4">
      <!-- TEMPORARY HIDE SEARCH ICON -->
      <!-- <Link link="/pencarian" class="w-7 h-7 flex items-center justify-center">
        <Icon src="/icons/search.svg" />
      </Link> -->
      <button
        class="w-7 h-7 flex items-center justify-center"
        @click="toggleSidebar"
      >
        <BaseIcon
          v-show="open"
          icon="icons/close.svg"
          :size="24"
          fill-color="white"
        />
        <BaseIcon
          v-show="!open"
          icon="icons/hamburger.svg"
          :size="24"
          fill-color="white"
        />
        <span class="sr-only">{{ open ? 'Tutup Menu' : 'Buka Menu' }}</span>
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    open () {
      return this.$store.state.sidebar.open
    }
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('sidebar/setSidebar')
    }
  }
}
</script>
