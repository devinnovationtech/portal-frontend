<template>
  <main class="overflow-hidden">
    <!-- <Campaign /> -->
    <Hero />
    <section class="relative top-[-12rem] mb-[-12rem] md:top-[-14rem] md:mb-[-14rem] lg:-top-40 lg:-mb-40 z-10">
      <BaseContainer>
        <div
          class="w-full h-full p-4 md:p-8 bg-white rounded-xl shadow
          grid grid-cols-1 xl:grid-cols-[300px,1fr] gap-6"
        >
          <LatestNews />
          <GPR
            class="xl:order-first"
            :status="gprScriptStatus"
            @reload="reloadGPRScript"
          />
        </div>
      </BaseContainer>
    </section>
    <BannerBIAN />
    <FeaturedProgramPreview />
    <section class="bg-white py-[52px] md:py-14 xl:py-[60px]">
      <BaseContainer class="md:!px-0 xl:!px-6">
        <h2 class="hidden md:block xl:hidden text-4xl text-center font-medium leading-loose mb-10">
          Layanan Terpopuler
        </h2>
        <div class="w-full min-w-0 grid grid-cols-1 md:grid-cols-[314px,1fr] gap-10 md:gap-6 xl:gap-10">
          <MostPopularServices class="md:overflow-x-auto" />
          <AgendaWidget class="md:order-first" />
        </div>
      </BaseContainer>
    </section>
    <LazyQuickLink />
  </main>
</template>

<script>
import { GPR_SCRIPT_STATUS } from 'static/data'

export default {
  name: 'HomePage',
  data () {
    return {
      gprScriptStatus: GPR_SCRIPT_STATUS.LOADING
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
            this.gprScriptStatus = GPR_SCRIPT_STATUS.LOADED
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
      if (this.gprScriptStatus !== GPR_SCRIPT_STATUS.LOADED) {
        this.gprScriptStatus = GPR_SCRIPT_STATUS.TIMEOUT
      }
    }, 30000)
  },
  methods: {
    removeGPRScript () {
      try {
        const script = document.querySelector('script[data-hid="gpr-kominfo"]')
        script.remove()
      } catch (error) {
        console.error(error)
      }
    },
    /**
     * Remove existing GPR Script and inject new script to head
     */
    reloadGPRScript () {
      try {
        this.gprScriptStatus = GPR_SCRIPT_STATUS.LOADING
        this.removeGPRScript()

        const script = document.createElement('script')

        script.setAttribute('data-hid', 'gpr-kominfo')
        script.setAttribute('src', 'https://widget.kominfo.go.id/gpr-widget-kominfo.min.js')
        script.setAttribute('async', true)

        script.addEventListener('load', () => {
          this.gprScriptStatus = GPR_SCRIPT_STATUS.LOADED
        })

        script.addEventListener('error', () => {
          this.gprScriptStatus = GPR_SCRIPT_STATUS.TIMEOUT
        })

        document.head.appendChild(script)
      } catch (error) {
        this.gprScriptStatus = GPR_SCRIPT_STATUS.TIMEOUT
      }
    }
  }
}
</script>
