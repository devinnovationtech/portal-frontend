<template>
  <div class="w-full py-4 lg:py-6 border-t border-green-500">
    <BaseContainer>
      <div class="flex flex-col items-center lg:items-start gap-5">
        <!-- NOTE: Temporary Hide Element -->
        <!-- <ul class="flex justify-between items-center gap-3 md:gap-4 text-center text-white">
          <li>
            <NuxtLink to="#">
              <a class="text-sm font-normal leading-6">
                Ketentuan Layanan
              </a>
            </NuxtLink>
          </li>
          <li class="h-6 w-1 border-r border-green-500" />
          <li>
            <NuxtLink to="#">
              <a class="text-sm font-normal leading-6">
                Aksesibilitas
              </a>
            </NuxtLink>
          </li>
          <li class="h-6 w-1 border-r border-green-500" />
          <li>
            <Link link="#" class="text-sm font-normal leading-6">
              Kontak Layanan
            </Link>
          </li>
        </ul> -->
        <p class="font-lato text-sm font-normal leading-6 text-white text-center lg:text-left">
          Copyright © {{ year }} <br class="lg:hidden"> Pemerintah Daerah Provinsi Jawa Barat. All Right Reserved
        </p>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
