<template>
  <footer class="bg-green-primary relative">
    <BaseContainer>
      <div
        class="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat"
        :style="{ backgroundImage: `url('/images/menu.svg')`, backgroundPosition: '100% 100%' }"
      >
        <Link link="/" class="w-[fit-content]" @click.native="gtagFooterLogo">
          <img
            src="/logo-new.png"
            width="228"
            height="38"
            alt="Beranda"
          >
        </Link>
        <FooterInfo />
        <FooterSitemap />
      </div>
    </BaseContainer>
    <FooterCopyright />
  </footer>
</template>

<script>
export default {
  methods: {
    gtagFooterLogo () {
      this.$gtag.event('click', {
        event_category: 'click_logo',
        value: 'Footer Logo'
      })
    }
  }
}
</script>
