<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ term.title }}
    </h2>
    <PublicServiceList :items="term.items">
      <template v-if="term.image" #poster>
        <div class="w-full h-full">
          <LazyImg
            :src="term.image"
            alt="Poster Persyaratan"
            class="rounded-xl max-w-full object-cover"
          />
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
