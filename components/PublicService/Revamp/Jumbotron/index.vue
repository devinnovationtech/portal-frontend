<template>
  <section
    class="relative w-full bg-gray-800"
    :style="jumbotronStyle"
  >
    <div class="overlay" />
    <BaseContainer class="relative pt-24 pb-40 z-10">
      <Breadcrumb :items="breadcrumbItems" :capitalize="false" class="mb-6" />

      <div class="grid grid-cols-1 md:grid-cols-[80px,1fr,1fr] md:gap-x-4">
        <img
          :src="logo"
          :alt="`Logo layanan ${title}`"
          width="80"
          height="80"
          class="rounded-full object-cover object-center mb-3 md:row-span-3 md:mb-1 md:self-center"
        >
        <h1
          class="font-lora font-bold text-[28px] leading-relaxed text-green-500 mb-2 md:col-span-2"
        >
          {{ title }}
        </h1>
        <span class="w-fit px-3 py-1 rounded-full bg-[#67676C] bg-opacity-40 text-white text-xs line-clamp-1 mb-4 md:col-span-2 md:mb-3">
          {{ portalCategory }}
        </span>
        <div class="grid grid-cols-[auto_1fr] gap-x-[14px] md:flex md:col-span-2 md:mb-0">
          <span class="text-xs text-white flex items-center">
            <BaseIcon
              icon="/icons/rewind-clock.svg"
              :size="12"
              fill-color="#fff"
              class="mr-[10px]"
            />
            Terakhir diupdate {{ updatedAt }}
          </span>
          <span class="text-xs text-white flex items-center">
            <BaseIcon
              icon="/icons/category.svg"
              :size="12"
              fill-color="#fff"
              class="mr-[10px]"
            />
            {{ category }}
          </span>
        </div>
        <h2 class="font-lato text-sm leading-6 text-white line-clamp-5 mb-6 mt-1 md:mb-0 md:col-span-2 md:mt-5">
          {{ subtitle }}
        </h2>
        <PublicServiceType
          :type="serviceType"
          class="mt-1 md:justify-self-end md:self-center md:mt-5"
        />
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    breadcrumbItems: {
      type: Array,
      required: true,
      default: () => []
    },
    logo: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: [String, Number],
      required: true,
      default: ''
    },
    subtitle: {
      type: [String, Number],
      required: false,
      default: ''
    },
    portalCategory: {
      type: String,
      required: false,
      default: ''
    },
    category: {
      type: String,
      required: false,
      default: ''
    },
    updatedAt: {
      type: String,
      required: false,
      default: ''
    },
    backgroundImageUrl: {
      type: String,
      required: false,
      default: '/images/jumbotron/default.webp'
    },
    serviceType: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    jumbotronStyle () {
      return {
        backgroundImage: `url('${this.backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: radial-gradient(100% 2589.12% at 0% 0%, rgba(0, 40, 19, 0.98) 0%, rgba(0, 32, 39, 0.9) 100%);
}

</style>
