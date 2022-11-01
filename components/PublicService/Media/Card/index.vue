<template>
  <section class="flex flex-col rounded-xl p-4 border border-solid border-gray-300 xl:row-span-2 sm:max-h-[557px] lg:max-h-[597px] xl:max-h-[557px] overflow-auto">
    <!-- Category -->
    <div v-show="data.category" class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400">
      <Icon src="/icons/layanan-publik/category.svg" size="16px" class="my-[5px] mr-[5px]" />
      <div class="flex flex-col items-start justify-center gap-2">
        <h3>Kategori</h3>
        <p class="text-blue-gray-600 capitalize">
          {{ data.category }}
        </p>
      </div>
    </div>

    <!-- Addresses -->
    <div
      v-if="hasAddresses"
      :class="{
        'grid grid-cols-[16px,auto] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8': true,
        'mb-[-16px]': hasMoreThanOneAddress
      }"
    >
      <Icon src="/icons/layanan-publik/location.svg" size="16px" class="my-[5px] mr-[5px]" />

      <div class="flex flex-col min-w-0 items-start justify-center gap-2">
        <h3>Alamat</h3>
        <client-only>
          <swiper
            v-show="swiperReady"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            class="public-service__address-swiper w-full"
            @ready="swiperReady = true"
          >
            <swiper-slide
              v-for="(address, index) in data.addresses"
              :key="`address-${index}`"
            >
              <div
                :class="{
                  'w-full': true,
                  'pb-[40px] min-h-[70px]': hasMoreThanOneAddress
                }"
              >
                <p class="text-blue-gray-600">
                  {{ address }}
                </p>
              </div>
            </swiper-slide>

            <!-- Swiper Pagination -->
            <div
              v-show="hasMoreThanOneAddress"
              slot="pagination"
              class="swiper-pagination"
            />
          </swiper>
        </client-only>
      </div>
    </div>

    <!-- Telephone -->
    <div v-show="hasPhone" class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
      <Icon src="/icons/layanan-publik/phone.svg" size="16px" class="my-[5px] mr-[5px]" />
      <div class="flex flex-col items-start justify-center">
        <h3 class="mb-2">
          Telepon
        </h3>
        <p v-for="phone in data.phone" :key="phone" class="text-blue-gray-600">
          {{ phone }}
        </p>
      </div>
    </div>

    <!-- Email -->
    <div v-show="data.email" class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
      <Icon src="/icons/layanan-publik/gmail.svg" size="16px" class="my-[5px] mr-[5px]" />
      <div class="flex flex-col items-start justify-center gap-2">
        <h3>Email</h3>
        <a :href="`mailto:${data.email}`" class="text-blue-gray-600">
          {{ data.email }}
        </a>
      </div>
    </div>

    <!-- Operational Hours -->
    <div v-show="hasOperationalHours" class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
      <Icon src="/icons/layanan-publik/clock.svg" size="16px" class="my-[5px] mr-[5px]" />
      <div class="flex flex-col items-start justify-center gap-2">
        <h3>Jam Operasional ({{ currentDate }})</h3>
        <PublicServiceMediaCardOpenHours
          :operational-hours="data.operational_hours"
          class="w-full"
        />
      </div>
    </div>

    <!-- Button List -->
    <section v-show="hasLink" class="flex flex-col gap-3 mt-4 sm:mt-8">
      <Link v-for="(button, name) in buttonList" v-show="button.link" :key="name" :link="button.link">
        <Button
          class="flex flex-row justify-between !px-5 !py-2 !rounded-xl w-full"
          variant="secondary"
        >
          <div class="flex flex-col items-start">
            <p class="font-lato font-medium text-[11px] leading-[18px] text-blue-gray-300">
              {{ button.label }}
            </p>
            <p class="font-segoeui font-semibold text-base leading-[21px] text-blue-gray-800">
              {{ button.title }}
            </p>
          </div>
          <Icon :src="button.icon" size="24px" />
        </Button>
      </Link>
    </section>

    <!-- Social Media -->
    <section v-show="hasSocialMedia" class="grid grid-cols-[16px,1fr] gap-3 font-lato text-sm leading-6 text-blue-gray-400 mt-4 sm:mt-8">
      <Icon src="/icons/share.svg" size="16px" class="my-[5px] mr-[5px]" />
      <div class="flex flex-col justify-center gap-2">
        <h3>Sosial Media</h3>
        <div class="flex flex-wrap justify-start items-end gap-5 w-full">
          <Link
            v-for="(socialMedia, name) in data.social_media"
            v-show="socialMedia"
            :key="name"
            :link="socialMedia"
            class="flex flex-col items-center text-[11px] leading-[18px] cursor-pointer capitalize"
          >
            <Icon :src="`/icons/social-media/${name}-logo.svg`" :size="name === 'facebook' ? '12px' : '18px'" />
            {{ name }}
          </Link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { format } from '~/utils/date'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        spaceBetween: 24,
        mousewheel: true,
        passiveListeners: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }
  },
  computed: {
    currentDate () {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

      return format(Date.now(), options)
    },
    buttonList () {
      return {
        website: {
          title: this.data.alias,
          label: 'Link Akses',
          link: this.link('website'),
          icon: '/icons/world.svg'
        },
        googlePlay: {
          title: 'Google Play',
          label: 'Unduh Aplikasinya di',
          link: this.link('google_play'),
          icon: '/icons/layanan-publik/google-play.svg'
        },
        appStore: {
          title: 'App Store',
          label: 'Dapatkan di',
          link: this.link('app_store'),
          icon: '/icons/layanan-publik/app-store.svg'
        },
        googleForm: {
          title: 'Google Forms',
          label: 'Akses formulir',
          link: this.link('google_form'),
          icon: '/icons/layanan-publik/google-form.svg'
        }
      }
    },
    hasAddresses () {
      return this.data && Array.isArray(this.data.addresses) && this.data.addresses.length > 0 && this.data.addresses[0] !== ''
    },
    hasMoreThanOneAddress () {
      return this.hasAddresses && this.data.addresses.length > 1
    },
    hasPhone () {
      return this.data && Array.isArray(this.data.phone) && this.data.phone.length && this.data.phone[0] !== ''
    },
    hasOperationalHours () {
      return this.data && Array.isArray(this.data.operational_hours) && this.data.operational_hours.length
    },
    hasLink () {
      return this.data && (this.data.link?.website || this.data.link?.googlePlay || this.data.link?.appStore || this.data.link?.googleForm)
    },
    hasSocialMedia () {
      return this.data && (this.data.social_media?.facebook || this.data.social_media?.instagram || this.data.social_media?.twitter || this.data.social_media?.tiktok || this.data.social_media?.youtube)
    }
  },
  methods: {
    link (buttonName) {
      return this.data && this.data.link ? this.data.link[buttonName] : '-'
    }
  }
}
</script>

<style lang="scss" scoped>
  .public-service__address-swiper::v-deep {

    .swiper-pagination-bullet {
      width: 8px !important;
      height: 8px !important;
      border-radius: 9999px !important;
      margin-right: 8px !important;
      background: #E0E0E0 !important;
      opacity: 1 !important;

      &-active {
        background: #4DC27E !important;
        width: 24px !important;
        height: 8px !important;
        transition: width 0.3s ease-out;
      }
    }
  }
</style>
