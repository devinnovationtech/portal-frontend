<template>
  <section
    class="bg-green-primary w-full absolute top-full left-0 border-t border-green-400 overflow-auto
    max-h-[calc(100vh-64px)] xl:max-h-[calc(100vh-80px)]"
  >
    <BaseContainer>
      <div
        class="flex mx-auto items-start pt-6 pb-10 bg-no-repeat"
        :style="{ backgroundImage: `url('/images/menu.svg')`, backgroundPosition: '100% 100%' }"
      >
        <div class="flex flex-col gap-8 flex-grow">
          <Link v-if="link" :link="link" class="text-white font-roboto font-medium text-3xl leading-10">
            {{ title }}
          </Link>
          <h1 v-else class="text-white font-roboto font-medium text-3xl leading-10">
            {{ title }}
          </h1>
          <nav
            class="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-10"
            :class="{ 'grid-flow-col': items.length <= 3}"
          >
            <li v-for="item in items" :key="item.id">
              <Link
                :link="item.link"
                class="flex items-start"
                @click.native="gtagNavigationItem(item)"
              >
                <img
                  class="w-[52px] h-[52px] mt-1.5"
                  :src="item.icon"
                  width="52"
                  height="52"
                  :alt="item.title"
                  aria-hidden="true"
                >
                <div class="ml-4">
                  <h2 class="text-lg font-bold text-gray-50 mb-1">
                    {{ item.title }}
                  </h2>
                  <p class="text-sm text-gray-50 font-roboto opacity-80">
                    {{ item.description }}
                  </p>
                </div>
              </Link>
            </li>
          </nav>
        </div>
        <button title="Tutup Menu Navigasi" @click.stop="$emit('close')">
          <Icon
            name="times"
            size="24px"
            class="text-white"
          />
        </button>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    gtagEvent: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    gtagNavigationItem (item) {
      this.$gtag.event('click', {
        event_category: this.gtagEvent,
        event_label: `Click Menu ${this.title}`,
        value: item.title
      })
    }
  }
}
</script>
