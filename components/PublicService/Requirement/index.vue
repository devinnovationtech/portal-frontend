<template>
  <section class="flex flex-col items-center gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-lg">
      {{ requirement.title }}
    </h2>
    <PublicServiceList :items="requirement.items">
      <template v-if="requirement.image" #poster>
        <div class="w-full h-full">
          <LazyImg
            :src="requirement.image"
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
    requirement: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
