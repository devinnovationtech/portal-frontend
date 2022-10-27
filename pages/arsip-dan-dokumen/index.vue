<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb class="mb-6" :items="breadcrumbItems" :capitalize="false" />
      </template>
    </Jumbotron>
    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white min-h-screen w-full xl:grid xl:grid-cols-[268px,1fr] xl:grid-rows-[1fr,auto] lg:gap-6">
          <!-- Archive and Document Topics -->
          <aside class="hidden xl:block p-4 border border-green-50 rounded-xl h-[fit-content]">
            <h2 class="font-lato font-bold text-sm text-gray-800">
              Topik Publikasi
            </h2>
            <section class="p-4 grid grid-cols-1 gap-5">
              <div v-for="topic in topicOptions" :key="topic.value" class="flex">
                <input
                  :id="topic.value"
                  v-model="selectedTopics"
                  type="radio"
                  :value="topic.value"
                  class="hidden"
                >
                <label
                  :for="topic.value"
                  :class="{
                    'font-lato font-normal text-sm text-gray-700 cursor-pointer': true,
                    'font-bold text-green-600': topic.value === selectedTopics,
                  }"
                >
                  {{ topic.label }}
                </label>
              </div>
            </section>
          </aside>

          <!-- Archive and Document Items -->
          <section class="jabar__archive-and-document">
            <h1 class="font-bold font-lora text-green-700 text-[28px] md:text-4xl text-center md:text-left leading-9 md:leading-[56px] mb-8">
              {{ activeTopicTitle }}
            </h1>
            <InputSearch
              v-model.trim="searchKeyword"
              :clear="false"
              placeholder="Cari di sini"
              class="mb-6"
              @submit="handleSearch"
              @clear="handleClearSearch"
            />
            <Select
              class="!gap-0 mb-6 xl:hidden"
              :options="topicOptions"
              :value="selectedTopics"
              @click="setActiveTopic"
            />
            <DocumentList
              :documents="documents"
              :loading="$fetchState.pending"
              :empty-result="emptyResult"
              :items-per-page="pagination.itemsPerPage"
              :search-keyword="searchKeyword"
              @open-detail="handleOpenDetail($event)"
            />
          </section>

          <!-- Pagination -->
          <Pagination
            v-if="!emptyResult"
            v-bind="pagination"
            class="col-start-2"
            @previous-page="onPaginationChange('prev-page', $event)"
            @next-page="onPaginationChange('next-page', $event)"
            @page-change="onPaginationChange('page-change', $event)"
            @per-page-change="onPaginationChange('per-page-change', $event)"
          />
        </div>
      </BaseContainer>
    </section>

    <!-- Document Detail -->
    <DocumentDetail
      :show-detail="isDetailOpen"
      :title="documentDetail.title"
      :description="documentDetail.description"
      :source="documentDetail.source"
      :mime-type="documentDetail.mimetype"
      :category="documentDetail.category"
      :updated-at="documentDetail.updatedAt"
      @close="handleCloseDetail"
    />
  </main>
</template>

<script>
import debounce from 'lodash/debounce'
import { archiveAndDocumentTopics } from '~/static/data'
import { formatTz } from '~/utils/date'

export default {
  beforeRouteEnter (to, _, next) {
    if (to.query.kategori === null || to.query.kategori === undefined) {
      next({
        path: to.path,
        query: {
          kategori: 'dokumen perencanaan'
        }
      })
    } else {
      next()
    }
  },
  data () {
    return {
      jumbotron: {
        title: 'Arsip dan Dokumen',
        subtitle: 'Akses dan unduh dokumen resmi yang dirilis Pemerintah Jawa Barat.',
        backgroundImageUrl: '/images/jumbotron/default.webp'
      },
      topicOptions: archiveAndDocumentTopics,
      selectedTopics: this.$route.query.kategori,
      searchKeyword: '',
      documents: [],
      meta: {},
      isDetailOpen: false,
      documentDetail: {
        id: '',
        title: '',
        description: '',
        source: '',
        mimetype: '',
        category: '',
        updatedAt: ''
      },
      pagination: {
        currentPage: 1,
        itemsPerPage: 5,
        totalRows: 0,
        itemsPerPageOptions: [5, 10, 20]
      }
    }
  },
  async fetch () {
    try {
      if (!this.checkValidCategory(this.selectedTopics)) {
        throw new Error('Invalid category')
      }

      const params = {
        q: this.searchKeyword,
        cat: this.selectedTopics,
        page: this.pagination.currentPage,
        per_page: this.pagination.itemsPerPage
      }

      const response = await this.$axios.get('v1/public/document-archives', { params })
      const { data, meta } = response.data

      this.documents = data
      this.meta = meta

      const paginationObj = {
        ...this.pagination,
        currentPage: this.meta.current_page,
        itemsPerPage: this.meta.per_page,
        totalRows: this.meta.total_count
      }

      this.pagination = JSON.parse(JSON.stringify(paginationObj))
    } catch (error) {
      this.documents = []
      this.meta = {}

      this.$nuxt.error({ statusCode: 404, message: 'Data tidak ditemukan' })
    }
  },
  computed: {
    breadcrumbItems () {
      return [
        {
          path: '/',
          label: 'Beranda'
        },
        {
          path: '/arsip-dan-dokumen',
          label: 'Arsip dan Dokumen'
        }
      ]
    },
    activeTopicTitle () {
      if (!this.checkValidCategory(this.selectedTopics)) { return '' }

      const activeTopic = archiveAndDocumentTopics.find(topic => topic.value === this.selectedTopics)
      return activeTopic.label
    },
    emptyResult () {
      return !this.$fetchState.pending && this.documents.length === 0
    }
  },
  watch: {
    selectedTopics (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$router.push({ path: this.$route.path, query: { kategori: newValue } })
      }
    },
    '$route.query.kategori': {
      handler (newValue, oldValue) {
        if (newValue !== oldValue && this.checkValidCategory(newValue)) {
          this.setActiveTopic(newValue)
          this.resetPagination()
          this.$fetchState.pending = true
          debounce(this.$fetch, 500)()
        }
      }
    }
  },
  methods: {
    setActiveTopic (topic) {
      if (topic) {
        this.selectedTopics = topic
      }
    },
    handleOpenDetail (id) {
      this.setDocumentDetail(id)
      this.isDetailOpen = true
    },
    handleCloseDetail () {
      this.resetDocumentDetail()
      this.isDetailOpen = false
    },
    setDocumentDetail (id) {
      const detail = this.documents.find(document => document.id === id)

      this.documentDetail = {
        id: detail.id,
        title: detail.title,
        description: detail.description,
        source: detail.source,
        mimetype: detail.mimetype,
        category: detail.category,
        updatedAt: formatTz(new Date(detail.updated_at), 'Asia/Jakarta', 'EEEE, dd MMMM yyyy HH:mm') + ' WIB'
      }
    },
    resetDocumentDetail () {
      this.documentDetail = {
        id: '',
        title: '',
        description: '',
        source: '',
        mimetype: '',
        category: '',
        updatedAt: ''
      }
    },
    resetPagination () {
      this.pagination = {
        currentPage: 1,
        itemsPerPage: 5,
        totalRows: 0,
        itemsPerPageOptions: [5, 10, 20]
      }
    },
    onPaginationChange (action, value) {
      this.scrollToTop()

      const paginationObj = { ...this.pagination }

      switch (action) {
        case 'prev-page':
          paginationObj.currentPage = this.pagination.currentPage - 1
          break
        case 'next-page':
          paginationObj.currentPage = this.pagination.currentPage + 1
          break
        case 'page-change':
          paginationObj.currentPage = value
          break
        case 'per-page-change':
          paginationObj.itemsPerPage = value
          break
        default:
          break
      }

      this.pagination = JSON.parse(JSON.stringify(paginationObj))

      /**
       *  NOTE:
       *  `jds-pagination` emits `page-change` and `per-page-change` events
       *  whenever user changes per page value.
       *
       *  To avoid double fetch, we immediately stop this function on
       *  `per-page-change` event and let `page-change` event to
       *  fetch data from API
       */
      if (action === 'per-page-change') {
        return
      }

      this.$fetch()
    },
    scrollToTop () {
      window.scrollTo({ top: 200 })
    },
    handleSearch () {
      if (this.searchKeyword.length >= 3) {
        this.pagination = {
          ...this.pagination,
          currentPage: 1
        }
        this.$fetch()
      }
    },
    handleClearSearch () {
      this.pagination = {
        ...this.pagination,
        currentPage: 1
      }
      this.$fetch()
    },
    checkValidCategory (category) {
      return archiveAndDocumentTopics.some(topic => topic.value === category)
    }
  }
}
</script>

<style>
/**
* Override default Design System styles
*/
.jabar__archive-and-document .jds-popover,
.jabar__archive-and-document .jds-popover__activator,
.jabar__archive-and-document .jds-select,
.jabar__archive-and-document .jds-input-text {
  width: 100% !important;
}

.jabar__archive-and-document .jds-options__option-list-item__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.jabar__archive-and-document .jds-popover__content {
  z-index: 50 !important;
}

.jabar__archive-and-document .jds-input-text__input-wrapper {
  height: 38px !important;
  border-color: #E3E7ED !important;
}

.jabar__archive-and-document .jds-input-text input {
  width: 100% !important;
  height: 100% !important;
  font-size: 14px !important;
}
</style>
