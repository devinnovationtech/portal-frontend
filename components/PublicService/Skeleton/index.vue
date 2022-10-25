<template>
  <div class="flex flex-col gap-4 sm:gap-6 p-3 md:p-4 lg:p-6 xl:py-8 xl:px-10 rounded-xl bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-[80px,auto] gap-4">
      <div class="skeleton h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] !rounded-full" />
      <div class="grid grid-cols-1 gap-1">
        <div class="skeleton w-full h-[31px] sm:h-[41px]" />
        <div class="skeleton w-1/2 h-[19px]" />
      </div>
    </div>
    <div class="grid grid-flow-row sm:grid-cols-[auto,262px] lg:grid-cols-2 xl:grid-cols-[816px,auto] gap-4 xl:gap-6">
      <div class="skeleton w-full h-[156px] sm:h-[383px] sm:col-span-2 xl:col-span-1" />
      <div class="flex sm:flex-col xl:flex-row gap-4 xl:gap-6 overflow-hidden sm:order-last xl:w-full">
        <div v-for="index in 3" :key="index" class="skeleton h-[150px] sm:h-[170px] lg:h-[183px] xl:h-[150px] min-w-[224px] xl:w-[256px]" />
      </div>
      <div class="skeleton h-[600px] sm:h-auto xl:row-span-2" />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  @apply bg-gray-200 animate-pulse rounded-xl
}
</style>
