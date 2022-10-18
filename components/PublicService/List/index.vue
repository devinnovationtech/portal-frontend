<template>
  <section>
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="index in 3" :key="index" class="w-full h-[166px] bg-gray-200 rounded-lg animate-pulse" />
    </div>
    <BaseEmptyState
      v-else-if="serviceList.length === 0"
      error-message="Mohon maaf kami tidak dapat menemukan nama layanan yang cocok dengan"
      :search-value="searchValue"
    />
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PublicServiceListItem
        v-for="service in serviceList"
        :key="service.id"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    serviceList: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    searchValue: {
      type: String,
      default: null
    }
  }
}
</script>
