<template>
  <section class="relative md:w-[925px] xl:w-full md:pr-6 xl:pr-0">
    <div class="grid grid-cols-3 gap-x-8 xl:gap-x-10 mb-4">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="flex items-center gap-6 px-4"
      >
        <LazyImg :src="menu.icon" width="56" height="56" :alt="menu.name" />
        <div>
          <p class="font-roboto font-bold text-sm tracking-wide uppercase text-blue-gray-300 mb-1">
            Untuk
          </p>
          <p class="font-roboto text-3xl font-bold">
            {{ menu.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="divide divide-left" />

    <ul class="grid grid-cols-3 grid-rows-3 grid-flow-col gap-x-8 xl:gap-x-10 gap-y-4">
      <template v-for="menu in menus">
        <li
          v-for="item in menu.items"
          :key="item.id"
          class="flex justify-start items-start px-4 py-3 group hover:bg-green-50 hover:rounded-md
          transition-all ease-brand duration-250"
        >
          <a
            :href="item.link"
            target="_blank"
            rel="noreferrer"
            class="w-full flex flex-col gap-1"
            @click="$emit('gtag', item)"
          >
            <div class="min-w-0 flex justify-between items-center">
              <Icon
                :src="item.icon"
                size="24"
                :alt="item.title"
                class="opacity-40 filter grayscale group-hover:grayscale-0 group-hover:opacity-100"
              />
              <Icon name="open-new-tab" size="14px" class="text-transparent group-hover:text-green-800" />
            </div>
            <h3 class="font-bold text-blue-gray-600 group-hover:text-green-800">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-5 text-blue-gray-600 group-hover:text-blue-gray-900">
              {{ item.description }}
            </p>
          </a>
        </li>
      </template>
    </ul>
    <div class="divide divide-right" />
  </section>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.divide {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 100%;
  border: none;
  background-color: #EEEEEE;
}
.divide-left {
  left: 32.5%;
}
.divide-right {
  right: 32.5%;
}
</style>
