<template>
  <ul class="grid grid-cols-1 gap-4">
    <template v-if="loading">
      <li v-for="i in itemsPerPage" :key="`document-skeleton-${i}`">
        <DocumentSkeleton />
      </li>
    </template>
    <template v-else-if="emptyResult">
      <li>
        <DocumentEmptySearch :search-keyword="searchKeyword" />
      </li>
    </template>
    <template v-else>
      <li v-for="document in documents" :key="document.id">
        <DocumentItem
          :id="document.id"
          :title="document.title"
          :description="document.description"
          :source="document.source"
          :mime-type="document.mimetype"
          :category="document.category"
          @open-detail="$emit('open-detail', $event)"
        />
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    itemsPerPage: {
      type: Number,
      default: 5
    },
    searchKeyword: {
      type: String,
      default: ''
    },
    emptyResult: {
      type: Boolean,
      default: false
    }
  }
}
</script>
