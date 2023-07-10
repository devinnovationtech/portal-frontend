<template>
  <section class="breadcrumb">
    <nav class="hidden md:inline-flex">
      <nuxt-link
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        :to="item.path"
        class="breadcrumb__item font-lato text-sm flex items-center max-w-[35ch] line-clamp-1 md:max-w-full md:line-clamp-none"
        :class="[
          item.active || isActive(item.path) ? 'font-bold text-white' : 'text-blue-400',
          { 'capitalize': capitalize }
        ]"
      >
        {{ item.label }}
      </nuxt-link>
    </nav>
    <nav
      :class="{
        'md:hidden': true,
        'capitalize': capitalize
      }"
    >
      <nuxt-link :to="prevLink.path" class="font-lato font-bold text-sm text-blue-400 flex items-center">
        <span class="w-6 h-6 flex items-center justify-start">
          <Icon name="chevron-left" size="12px" />
        </span>
        {{ prevLink.label }}
      </nuxt-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    /**
     * Predefined array of breadcrumb items
     * Use this props to override default breadcrumb item list.
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Array of hidden breadcrumb item
     */
    hideItems: {
      type: Array,
      default: () => []
    },
    capitalize: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    breadcrumbItems () {
      /**
       * return `items` props if defined
       */
      if (Array.isArray(this.items) && this.items.length > 0) {
        return this.items
      }

      const fullPath = this.$route.path
      const params = fullPath.substring(1).split('/')
      const crumbs = []
      let path = ''

      // Add homepage to first index of breadcrumb items
      crumbs.push({
        path: '/',
        label: 'beranda'
      })

      params.map((param) => {
        path = `${path}/${param}`

        crumbs.push({
          path,
          label: param.replace('/', '').replace(/-/g, ' ')
        })

        return null
      })

      /**
       * Remove any breadcrumb item that is defined on
       * hideItems props (if any)
       */

      if (Array.isArray(this.hideItems) && this.hideItems.length > 0) {
        const hiddenItems = this.hideItems.map(item => item.toLowerCase())

        return crumbs.filter(item => !hiddenItems.includes(item.path))
      }

      return crumbs
    },
    prevLink () {
      const secondToLastIndex = Array.isArray(this.breadcrumbItems) ? this.breadcrumbItems.length - 2 : -1

      if (secondToLastIndex < 0) {
        return {
          path: '/',
          label: 'beranda'
        }
      }

      return this.breadcrumbItems[secondToLastIndex]
    }
  },
  methods: {
    isActive (path) {
      return path === this.$route.path || path === this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  &__item + &__item::before {
    content: '';
    display: inline-block;
    margin: 0 12px;
    width: 10px;
    height: 10px;
    background-image: url('/icons/arrow-right.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
