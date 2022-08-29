<template>
  <main class="overflow-hidden">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb class="mb-6" :items="breadcrumbItems" :capitalize="false" />
      </template>
    </Jumbotron>
    <section class="w-full bg-gray-200">
      <BaseContainer class="relative -top-24 z-20">
        <div class="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white min-h-screen w-full xl:grid xl:grid-cols-[268px,1fr] lg:gap-6">
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
            />
            <Select
              class="!gap-0 mb-6 xl:hidden"
              :options="topicOptions"
              :value="selectedTopics"
              @click="setActiveTopic"
            />
            <DocumentList class="mb-6" @open-detail="handleOpenDetail($event)" />
          </section>

          <!-- Pagination -->
          <Pagination
            v-bind="pagination"
            class="col-start-2"
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
import { archiveAndDocumentTopics } from '~/static/data'
import { format } from '~/utils/date'

export default {
  data () {
    return {
      jumbotron: {
        title: 'Arsip',
        subtitle: 'Akses dan unduh dokumen resmi yang dirilis Pemerintah Jawa Barat.',
        backgroundImageUrl: '/images/jumbotron/default.webp'
      },
      topicOptions: archiveAndDocumentTopics,
      selectedTopics: archiveAndDocumentTopics[0].value,
      searchKeyword: '',
      pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        totalRows: 0,
        itemsPerPageOptions: [10, 20, 30]
      },
      isDetailOpen: false,
      documents: [],
      documentDetail: {
        id: '',
        title: '',
        description: '',
        source: '',
        mimetype: '',
        category: '',
        updatedAt: ''
      }
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
      const activeTopic = archiveAndDocumentTopics.find(topic => topic.value === this.selectedTopics)
      return activeTopic.label
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
      // @TODO: get document detail using `id`
      this.documentDetail = {
        id: 2,
        title: 'Jabar Dalam Angka 2012',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim velit, senectus rhoncus gravida nisl, leo eu pharetra et. Enim sodales in amet blandit gravida nulla erat tincidunt. Pretium aliquam pellentesque a consequat dictum varius lorem faucibus.',
        source: 'https://jabarprov.go.id/assets/images/berita/gambar_43509.jpg',
        mimetype: 'application/pdf',
        category: 'Dokumen Perencanaan',
        updatedAt: format(new Date('2021-08-05T06:53:14.000000Z'),
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
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
