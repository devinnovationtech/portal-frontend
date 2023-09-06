<template>
  <article class="grid grid-cols-1 md:grid-cols-[60px,1fr] min-w-0 w-full min-h-[228px] md:min-h-[200px] p-4 gap-4 border border-green-50 rounded-xl">
    <figure class="w-12 h-12 md:w-[60px] md:h-[60px] flex justify-center items-center">
      <img :src="documentIcon" :alt="title" class="min-w-full min-h-full object-contain" width="48" height="48">
    </figure>
    <section>
      <span
        class="inline-block rounded-md px-[10px] py-2 text-xs font-normal text-gray-700 bg-gray-100 mb-4
      hover:text-green-700 hover:bg-green-50"
      >
        {{ category }}
      </span>
      <h3 class="font-lato font-medium text-lg text-blue-gray-800 md:mb-2">
        {{ title }}
      </h3>
      <p class="hidden md:block font-lato font-normal text-sm text-blue-gray-800 md:line-clamp-2">
        {{ description }}
      </p>
    </section>
    <section class="grid h-[fit-content] grid-cols-2 gap-4 md:col-start-2 md:flex">
      <Button
        type="button"
        variant="secondary"
        class="w-full md:w-auto !justify-center"
        @click="$emit('open-detail', id)"
      >
        <Icon name="eye" size="18px" />
        Lihat
      </Button>
      <Link :link="source" :title="title" download>
        <Button
          type="button"
          class="w-full md:w-auto !justify-center disabled:!bg-gray-300"
          :disabled="!source"
        >
          <Icon name="cloud-download" size="18px" />
          Unduh
        </Button>
      </Link>
    </section>
  </article>
</template>

<script>
import mime from 'mime-types'

export default {
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    mimeType: {
      type: String,
      default: 'application/pdf'
    },
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    documentIcon () {
      switch (mime.extension(this.mimeType)) {
        case 'pdf':
          return '/icons/document/pdf.svg'

        case 'doc':
        case 'docx':
          return '/icons/document/doc.svg'

        case 'xls':
        case 'xlsx':
          return '/icons/document/xls.svg'

        default:
          return '/icons/document/file.svg'
      }
    }
  }
}
</script>
