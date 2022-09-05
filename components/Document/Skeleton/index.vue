<template>
  <div class="grid grid-cols-1 md:grid-cols-[60px,1fr] min-w-0 w-full min-h-[228px] md:min-h-[200px] p-4 gap-4 border border-green-50 rounded-xl">
    <div class="w-12 h-12 md:w-[60px] md:h-[60px] bg-gray-200 animate-pulse rounded-md" />
    <div>
      <div class="inline-block rounded-md h-[32px] w-[100px] bg-gray-200 animate-pulse mb-4" />
      <div class="rounded-sm h-6 w-10/12 bg-gray-200 animate-pulse md:mb-2" />
      <div class="hidden md:block rounded-sm h-4 w-full bg-gray-200 animate-pulse md:mb-2" />
    </div>
    <div class="grid h-[fit-content] grid-cols-2 gap-4 md:col-start-2 md:flex">
      <div class="h-[36px] w-full md:w-[100px] bg-gray-200 animate-pulse rounded-md" />
      <div class="h-[36px] w-full md:w-[100px] bg-gray-200 animate-pulse rounded-md" />
    </div>
  </div>
</template>
