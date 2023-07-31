<template>
  <div class="min-h-screen mb-4">
    <div class="w-full h-9 bg-gray-300 animate-pulse rounded-lg mb-4 md:w-3/5" />
    <div class="max-w-full grid grid-cols-1 gap-y-4">
      <div class="w-full h-[170px] md:h-[245px] lg:h-[388px] p-4 bg-gray-100 rounded-2xl">
        <div class="h-full bg-gray-300 animate-pulse rounded-xl" />
      </div>
      <div class="p-2 sm:px-[14px] py-3">
        <div class="h-[150px] bg-gray-300 animate-pulse rounded-xl sm:h-[64px]" />
      </div>
      <div
        class="max-w-full h-full px-4 py-6 grid grid-cols-1 gap-y-6 gap-x-4 border border-gray-300 rounded-xl
        sm:grid-cols-[1fr_216px] sm:grid-rows-[auto_auto_1fr]
        lg:grid-cols-[1fr_345px] lg:grid-rows-[auto_48px_1fr]"
      >
        <div class="w-full h-[220px] bg-gray-300 animate-pulse rounded-xl" />
        <div class="w-full h-[190px] bg-gray-300 animate-pulse rounded-xl sm:col-start-1 sm:row-start-2 sm:h-[48px]" />
        <div class="w-full h-[220px] bg-gray-300 animate-pulse rounded-xl sm:col-start-1 sm:row-start-3" />
        <div class="w-full h-full bg-gray-300 animate-pulse rounded-xl sm:row-span-3" />
      </div>
    </div>
  </div>
</template>
