<template>
  <ul
    class="flex w-full md:w-[fit-content] max-w-xl mt-4 justify-between md:justify-center gap-6
    md:mt-0 md:absolute md:h-[740px] md:top-0 md:right-6 md:flex-col"
  >
    <li
      v-for="socialMediaSite in socialMediaSites"
      :key="socialMediaSite.id"
      class="group bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg group cursor-pointer border-l border-t border-transparent
      hover:bg-opacity-10 hover:border-white hover:border-opacity-10 transition-all ease-brand duration-250"
    >
      <Link
        :link="socialMediaSite.link"
        :aria-label="socialMediaSite.name"
        class="flex justify-center items-center p-3"
        @click.native="gtagSocialMedia(socialMediaSite.name)"
      >
        <Icon
          :name="socialMediaSite.icon"
          size="18px"
          class="text-white group-hover:opacity-100 md:opacity-40"
          aria-hidden="true"
        />
      </Link>
    </li>
  </ul>
</template>

<script>
import { socialMediaSites } from '~/static/data'

export default {
  data () {
    return {
      socialMediaSites
    }
  },
  methods: {
    gtagSocialMedia (name) {
      this.$gtag.event('click', {
        event_category: 'click_sosmed',
        value: name
      })
    }
  }
}
</script>
