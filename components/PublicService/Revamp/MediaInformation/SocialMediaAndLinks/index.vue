<template>
  <section class="social-media p-3 rounded-xl border border-gray-300 sm:row-span-3">
    <div class="flex items-center">
      <BaseIcon
        icon="/icons/layanan-publik/gmail.svg"
        :size="16"
        fill-color="#EF5350"
      />
      <h3 class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
        Email Hotline
      </h3>
    </div>
    <div class="pb-4 border-b border-gray-300">
      <p class="social-media__email pl-6 font-lato text-sm font-normal leading-6 text-blue-gray-400">
        {{ email }}
      </p>
    </div>

    <ul class="my-4 grid grid-cols-1 gap-y-3">
      <li
        v-for="(item, index) in links"
        :key="`link-${index}`"
      >
        <Link
          :link="item.link"
          :title="item.label"
        >
          <Button
            class="flex flex-row justify-between !px-5 !py-2 sm:!px-2 lg:!px-5 !rounded-xl w-full"
            variant="secondary"
          >
            <div class="flex flex-col items-start">
              <h3 class="text-left font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
                {{ item.title }}
              </h3>
              <p class="text-left font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800 line-clamp-1">
                {{ item.label }}
              </p>
            </div>
            <BaseIcon
              class="flex-shrink-0"
              :icon="item.icon"
              :size="24"
              mode="image"
            />
          </Button>
        </Link>
      </li>
    </ul>

    <div class="flex items-center">
      <BaseIcon
        icon="/icons/share.svg"
        :size="16"
        fill-color="#42A5F5"
      />
      <h3 class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-400">
        Sosial Media
      </h3>
    </div>

    <ul class="grid grid-cols-3 gap-x-2">
      <li
        v-for="(item, index) in socialMedia"
        :key="`social-media-${index}`"
      >
        <Link
          :link="item.link"
          class="flex flex-col p-2 items-center justify-center gap-1
          cursor-pointer hover:bg-green-50"
          :title="item.title"
        >
          <BaseIcon
            :icon="item.icon"
            :size="16"
            mode="image"
          />
          <p class="text-blue-gray-400 capitalize font-normal text-xs leading-relaxed">
            {{ item.label }}
          </p>
        </Link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    },
    socialMedia: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
/* prevent long URL to overflow */
.social-media__email {
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
</style>
