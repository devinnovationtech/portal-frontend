<template>
  <aside class="hidden xl:block sticky top-[96px]">
    <h3 class="text-sm font-bold leading-5 text-gray-800 mb-3">
      Konten Layanan
    </h3>
    <ul class="border-l-2 border-gray-200">
      <li v-for="menu in menus" :key="menu.label" class="flex items-center">
        <NuxtLink
          :to="menu.link"
          class="relative ml-[-2px] text-sm font-medium leading-5 text-gray-800 py-2 pr-2 border-l-2 border-transparent"
        >
          <span class="pl-3">
            {{ menu.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'PublicServiceSidebar',
  props: {
    menus: {
      type: Array,
      required: true,
      default: () => []
    }
  }

}
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
  @apply font-bold text-green-700 border-green-700;
}
</style>
