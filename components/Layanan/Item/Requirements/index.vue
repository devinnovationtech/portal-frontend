<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4 sm:max-w-xl">
      {{ sectionTitle }}
    </h2>
    <div class="flex flex-col lg:flex-row gap-3 sm:gap-6 xl:gap-3 sm:max-w-[525px] lg:max-w-4xl xl:max-w-5xl">
      <div class="flex flex-col gap-4">
        <ul
          v-for="requirement in requirements.requirements"
          :key="requirement"
          class="flex flex-row gap-4 bg-[#F9FAFB] rounded-xl p-4 font-lato text-sm text-blue-gray-900 w-full lg:min-w-[458px]"
        >
          <svg height="10" width="10" class="min-w-[10px] mt-[7px]">
            <circle cx="5" cy="5" r="5" fill="#4DC27E" />
          </svg>
          <p class="leading-6">
            {{ requirement }}
          </p>
        </ul>
      </div>
      <LazyImg
        :src="requirements.posters[0]"
        alt="Poster Persyaratan"
        class="rounded-xl sm:h-[725px] lg:h-[428px] xl:h-[667px] w-full sm:w-[525px] lg:w-[318px] xl:w-[520px]"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '-'
    },
    requirements: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
