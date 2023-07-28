<template>
  <section>
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="index in 3" :key="index" class="w-full h-[166px] bg-gray-200 rounded-lg animate-pulse" />
    </div>
    <BaseEmptyState
      v-else-if="!!searchValue"
      error-message="Mohon maaf kami tidak dapat menemukan nama layanan yang cocok dengan"
      :search-value="searchValue"
    />
    <BaseEmptyStateData
      v-else-if="serviceList.length === 0"
      title="Maaf, layanan belum tersedia"
      error-message="Kami memahami bahwa Anda ingin menemukan layanan tertentu, namun saat ini layanan tersebut belum tersedia di platform kami."
    />
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PublicServiceCategoryItem
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
      default: () => []
    },
    loading: {
      type: Boolean,
      default: true
    },
    searchValue: {
      type: String,
      default: null
    }
  }
}
</script>
