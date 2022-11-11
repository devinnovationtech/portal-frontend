<template>
  <section class="flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-lg">
      {{ requirement.title }}
    </h2>
    <PublicServiceList :items="requirement.items" :grid="isGrid">
      <template v-if="requirement.image" #poster>
        <div>
          <div class="relative w-full group overflow-hidden rounded-xl">
            <!-- Image Overlay -->
            <div
              class="opacity-0 inset-0 absolute flex items-center justify-center bg-[#00000080]
              group-hover:opacity-100 z-10 transition-opacity ease-brand duration-250 cursor-pointer"
              @click="$emit('show-preview', { index: 0, images: [requirement.image] })"
            >
              <Icon src="/icons/zoom.svg" size="50px" />
            </div>
            <LazyImg
              :src="requirement.image"
              alt="Poster Persyaratan"
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
    requirement: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isGrid () {
      return this.requirement?.items.length > 1 && !this.requirement.image
    }
  }
}
</script>
