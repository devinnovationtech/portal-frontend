<template>
  <section class="bg-white py-6 md:py-8 xl:py-12 md:px-4 xl:px-16">
    <BaseContainer>
      <ul class="grid md:grid-cols-3 md:grid-rows-[auto,1fr,1fr] lg:grid-rows-3 md:gap-x-6 lg:gap-x-20 gap-y-6 lg:gap-y-12">
        <li class="md:row-start-1 md:col-start-1 md:col-end-4 lg:row-start-auto lg:col-start-auto lg:col-end-auto flex flex-col gap-2 lg:gap-6">
          <h2 class="text-2xl text-center lg:text-left md:text-4xl font-medium leading-loose">
            Akses Cepat
          </h2>
          <p class="text-center lg:text-left text-sm text-gray-600 leading-6">
            Dapatkan kemudahaan akses ke beberapa layanan Pemerintah Provinsi Jawa Barat untuk kebutuhan Anda.
          </p>
        </li>
        <li v-for="menu in menus" v-show="!$fetchState.pending" :key="menu.id" class="group px-4 py-3 rounded-md hover:bg-green-50 transition-colors ease-brand duration-250">
          <Link :link="menu.link" class="flex flex-col gap-4" @click.native="gtagClickQuickAccess(menu)">
            <LazyImg
              :src="menu.image"
              :alt="menu.title"
              width="40"
              height="40"
              class="w-fit h-10"
            />
            <p class="font-roboto font-bold group-hover:text-green-700">
              {{ menu.title }}
            </p>
            <p class="text-sm text-gray-600 leading-6 group-hover:text-blue-gray-800 focus:outline-none">
              {{ menu.description }}
            </p>
          </Link>
        </li>
        <li v-for="(skeleton, index) in 8" v-show="$fetchState.pending" :key="index">
          <div class="flex flex-col gap-4">
            <div class="w-10 h-10 animate-pulse bg-gray-200 rounded-lg" />
            <div class="w-1/2 h-2 animate-pulse bg-gray-200 rounded-lg" />
            <div class="w-full h-2 animate-pulse bg-gray-200 rounded-lg" />
          </div>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script>

export default {
  data () {
    return {
      menus: []
    }
  },
  async fetch () {
    const params = {
      is_active: 1,
      per_page: 8
    }

    try {
      const response = await this.$axios.get('/v1/public/quick-accesses', { params })
      if (response.status === 200) {
        this.menus = response.data.data
      }
    } catch {
      this.menus = []
    }
  },
  methods: {
    gtagClickQuickAccess (item) {
      this.$gtag.event('click', {
        event_category: 'click_quick_access',
        event_label: `click quick access ${item.title}`,
        value: item.title,
        url: item.link
      })
    }
  }
}
</script>
