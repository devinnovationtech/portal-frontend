<template>
  <NuxtLink
    :to="`/layanan/${service.slug}`"
    class="w-full flex flex-col gap-1 group bg-white px-4 py-3 rounded-lg
    hover:bg-green-50 hover:cursor-pointer transition-colors ease-brand duration-250"
  >
    <LazyImg :src="service.logo" :alt="service.name" width="42" height="42" class="w-[42px] h-[42px] object-contain" />
    <h3 class="font-lato font-bold text-base text-blue-gray-700 leading-normal group-hover:text-green-700 line-clamp-1">
      {{ service.name }}
    </h3>
    <p class="text-xs leading-6 text-blue-gray-400 group-hover:text-blue-gray-900 line-clamp-2">
      {{ service.description }}
    </p>
    <Button type="button" variant="tertiary-paddingless" class="font-lato self-start" tabindex="-1">
      Selengkapnya
      <Icon name="arrow-right" size="15px" />
    </Button>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>
