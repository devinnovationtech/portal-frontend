<template>
  <BaseModal
    :show="showDetail"
    @close="$emit('close')"
  >
    <template #header>
      <section class="p-6 pb-0 max-w-[550px]">
        <span
          class="inline-block rounded-md px-[10px] py-2 text-xs font-normal text-gray-700 bg-gray-100 mb-4
        hover:text-green-700 hover:bg-green-50"
        >
          {{ category || '-' }}
        </span>
        <h1 class="font-roboto font-medium text-[21px] leading-[34px] text-green-700">
          {{ title || '-' }}
        </h1>
      </section>
    </template>
    <div class="flex flex-col p-4 md:p-6 gap-6 max-w-[550px] overflow-y-auto overflow-x-hidden">
      <section class="col-span-2 flex gap-4">
        <Icon src="/icons/info-circle-outline.svg" size="16px" class="self-start text-green-600" />
        <div>
          <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
            Deskripsi Program
          </h2>
          <div class="w-full max-h-[116px] overflow-y-auto pr-4">
            <p class="text-gray-800 font-normal text-sm leading-relaxed mb-4">
              {{ description || '-' }}
            </p>
          </div>
        </div>
      </section>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <section class="flex gap-4">
          <Icon src="/icons/category.svg" size="16px" class="self-start text-green-600" />
          <div>
            <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
              Diupdate pada
            </h2>
            <p class="text-gray-800 font-normal text-sm leading-relaxed mb-4">
              {{ updatedAt || '-' }}
            </p>
          </div>
        </section>
        <section class="flex gap-4">
          <Icon src="/icons/category.svg" size="16px" class="self-start text-green-600" />
          <div>
            <h2 class="font-lato text-xs text-blue-gray-200 mb-1 leading-5">
              Format Dokumen
            </h2>
            <p
              class="inline-block rounded-md px-[10px] py-2 text-xs font-normal text-gray-700 bg-gray-100 mb-4
            hover:text-green-700 hover:bg-green-50"
            >
              {{ mimeTypeLabel }}
            </p>
          </div>
        </section>
      </div>
    </div>
    <template #footer>
      <div class="mt-auto bg-gray-50 py-4 px-6 flex justify-end items-center gap-4">
        <Button
          variant="secondary"
          @click="$emit('close')"
        >
          Tutup
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
      </div>
    </template>
  </BaseModal>
</template>

<script>
export default {
  props: {
    showDetail: {
      type: Boolean,
      default: false
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
    updatedAt: {
      type: String,
      default: ''
    },
    mimeType: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    mimeTypeLabel () {
      switch (this.mimeType) {
        case 'application/pdf':
          return 'Portable Document Format (PDF)'

        case 'application/msword':
          return 'Microsoft Word'

        case 'application/vnd.ms-excel':
          return 'Microsoft Excel'

        default:
          return '-'
      }
    }
  }
}
</script>
