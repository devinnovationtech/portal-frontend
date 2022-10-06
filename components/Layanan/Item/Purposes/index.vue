<template>
  <section class="flex flex-col items-center py-4 sm:py-8 gap-4">
    <h2 class="font-lora font-bold text-[32px] text-center text-blue-gray-800 mb-4">
      {{ sectionTitle }}
    </h2>
    <ul
      v-for="purpose in purposes"
      :key="purpose"
      class="flex flex-row gap-4 bg-[#F9FAFB] rounded-xl p-4 mx-6 lg:mx-0 font-lato text-sm text-blue-gray-900 w-full lg:w-[800px]"
    >
      <svg height="10" width="10" class="min-w-[10px] mt-[7px]">
        <circle cx="5" cy="5" r="5" fill="#4DC27E" />
      </svg>
      <p class="leading-6">
        {{ purpose }}
      </p>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '-'
    },
    purposes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
