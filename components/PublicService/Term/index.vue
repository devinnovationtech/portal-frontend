<template>
  <section class="flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ term.title }}
    </h2>
    <PublicServiceList :items="term.items">
      <template v-if="term.image" #poster>
        <div>
          <div class="relative w-full group overflow-hidden rounded-xl">
            <!-- Image Overlay -->
            <div
              class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
              group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
              @click="$emit('show-preview', { index: 0, images: [term.image] })"
            >
              <Icon src="/icons/zoom.svg" size="50px" />
            </div>
            <LazyImg
              :src="term.image"
              alt="Poster Ketentuan"
              class="w-full object-cover"
            />
          </div>
        </div>
      </template>
    </PublicServiceList>
  </section>
</template>

<script>
export default {
  props: {
    term: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
