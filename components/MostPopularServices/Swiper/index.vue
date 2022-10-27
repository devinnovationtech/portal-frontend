<template>
  <section>
    <div v-for="menu in menus" :key="menu.id" class="mb-8 last-of-type:mb-0">
      <div class="flex items-center gap-6 mb-3">
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
      <client-only>
        <swiper
          ref="swiper"
          :options="swiperOptions"
          :auto-update="true"
          :auto-destroy="true"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="true"
        >
          <swiper-slide
            v-for="(item) in menu.items"
            :key="item.id"
            class="!w-[fit-content]"
          >
            <section class="rounded-md w-full max-w-[250px] min-h-[130px] flex justify-start items-start p-4 pl-0">
              <a
                :href="item.link"
                target="_blank"
                rel="noreferrer"
                class="w-full flex flex-col gap-1"
                @click="$emit('gtag', item)"
              >
                <Icon
                  :src="item.icon"
                  size="24px"
                  :alt="item.title"
                  class="opacity-40 filter grayscale"
                />
                <h3 class="font-bold text-blue-gray-600 ">
                  {{ item.title }}
                </h3>
                <p class="text-sm leading-5 text-blue-gray-600 ">
                  {{ item.description }}
                </p>
              </a>
            </section>
          </swiper-slide>
        </swiper>
        <template #placeholder>
          <div class="overflow-hidden w-[fit-content] flex gap-4">
            <div v-for="i in 3" :key="i" class="w-[245px] min-h-[174px] rounded-md px-4 py-3 bg-gray-300 animate-pulse" />
          </div>
        </template>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: Object.freeze({
        slidesPerView: 'auto',
        spaceBetween: 16,
        mousewheel: true,
        passiveListeners: true
      })
    }
  }
}
</script>
