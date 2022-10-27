<template>
  <section>
    <div class="min-w-0 flex flex-col gap-6 md:flex-row justify-between items-center mb-6">
      <h3 class="font-roboto font-medium text-[22px] text-center md:text-left leading-[26px]">
        Simak berita terbaru terkait <strong class="text-green-700">{{ serviceName }}</strong>
      </h3>
      <Link
        :link="`/pencarian/berita?q=${serviceName}`"
        tabindex="-1"
      >
        <Button type="button" variant="secondary">
          Lihat Semua Berita Terkait
          <Icon name="open-new-tab" size="14px" />
        </Button>
      </Link>
    </div>
    <SearchList
      :list-view="device.isTablet ? 'list' : 'grid'"
      :loading="loading"
      :items="news"
      :max-length="3"
    />
  </section>
</template>

<script>
export default {
  props: {
    serviceName: {
      type: String,
      default: ''
    },
    news: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    device () {
      return this.$store.state.device.device
    }
  }
}
</script>
