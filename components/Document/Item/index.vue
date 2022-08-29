<template>
  <article class="grid grid-cols-1 md:grid-cols-[60px,1fr] min-w-0 w-full min-h-[228px] md:min-h-[220px] p-4 gap-4 border border-green-50 rounded-xl">
    <figure class="w-12 h-12 md:w-[60px] md:h-[60px] flex justify-center items-center">
      <img :src="documentIcon" :alt="title" class="min-w-full min-h-full object-contain" width="48" height="48">
    </figure>
    <section>
      <span
        class="inline-block rounded-md px-[10px] py-2 text-xs font-normal text-gray-700 bg-gray-100 mb-4
      hover:text-green-700 hover:bg-green-50"
      >
        Lorem Ipsum
      </span>
      <h3 class="font-lato font-medium text-lg text-blue-gray-800 line-clamp-1 md:mb-2">
        Lorem ipsum dolor sit amet.
      </h3>
      <p class="hidden md:block font-lato font-normal text-base text-blue-gray-800 md:line-clamp-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci minus aut eos optio neque sed repellat laudantium id voluptatibus assumenda!
      </p>
    </section>
    <section class="grid grid-cols-2 gap-4 md:col-start-2 md:flex">
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
        <Button type="button" class="w-full md:w-auto !justify-center">
          <Icon name="cloud-download" size="18px" />
          Unduh
        </Button>
      </Link>
    </section>
  </article>
</template>

<script>
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
      switch (this.mimeType) {
        case 'application/pdf':
          return '/icons/document/pdf.svg'

        case 'application/msword':
          return '/icons/document/doc.svg'

        case 'application/vnd.ms-excel':
          return '/icons/document/xls.svg'

        default:
          return '/icons/document/pdf.svg'
      }
    }
  }
}
</script>
