<template>
  <main class="overflow-hidden">
    <!-- <Campaign /> -->
    <Hero />
    <section class="relative top-[-14rem] lg:-top-40 z-10 mb-[-14rem] lg:-mb-40">
      <BaseContainer>
        <div
          class="w-full h-full p-4 md:p-8 bg-white rounded-xl shadow
          grid grid-cols-1 xl:grid-cols-[300px,1fr] gap-6"
        >
          <LatestNews />
          <GPR
            class="xl:order-first"
            :loading="gprScriptLoading"
            :timeout="gprScriptTimeout"
            @reload="reloadGPRScript"
          />
        </div>
      </BaseContainer>
    </section>
    <BannerBIAN />
    <FeaturedProgramPreview />
    <!-- TODO: Fix MostPopularServices component style -->
    <!-- <MostPopularServices /> -->
    <LazyQuickLink />
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      gprScriptLoading: true,
      gprScriptLoaded: false,
      gprScriptTimeout: false
    }
  },
  head () {
    return {
      script: [
        {
          hid: 'gpr-kominfo',
          src: 'https://widget.kominfo.go.id/gpr-widget-kominfo.min.js',
          async: true,
          once: true,
          skip: this.GPRScriptLoaded,
          callback: () => {
            this.gprScriptLoaded = true
            this.gprScriptLoading = false
          }
        }
      ]
    }
  },
  mounted () {
    /**
     * Set GPR to timeout if download time exceed 30s after mounted
     */
    setTimeout(() => {
      if (!this.gprScriptLoaded) {
        this.gprScriptLoading = false
        this.gprScriptTimeout = true
      }
    }, 30000)
  },
  methods: {
    removeGPRScript () {
      try {
        const script = document.querySelector('script[data-hid="gpr-kominfo"]')
        script.remove()
        this.gprScriptLoaded = false
      } catch (error) {
        console.error(error)
      }
    },
    /**
     * Remove existing GPR Script and inject new script to head
     */
    reloadGPRScript () {
      try {
        this.gprScriptLoading = true
        this.removeGPRScript()

        const script = document.createElement('script')

        script.setAttribute('data-hid', 'gpr-kominfo')
        script.setAttribute('src', 'https://widget.kominfo.go.id/gpr-widget-kominfo.min.js')
        script.setAttribute('async', true)
        script.onload = () => {
          this.gprScriptLoaded = true
          this.gprScriptLoading = false
          this.gprScriptTimeout = false
        }

        document.head.appendChild(script)
      } catch (error) {
        this.gprScriptLoaded = false
        this.gprScriptLoading = false
        this.gprScriptTimeout = true
      }
    }
  }
}
</script>
