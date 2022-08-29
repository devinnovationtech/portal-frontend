<template>
  <section class="min-h-[288px] lg:h-[371px] lg:max-h-[371px] bg-green-primary rounded-xl grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-0 lg:gap-x-12">
    <div class="flex flex-col justify-center p-4 md:px-6 xl:px-8 xl:py-12">
      <h1 class="font-lora font-bold text-2xl md:text-xl lg:text-[34px] xl:text-[40px] text-center md:text-left text-white mb-4 lg:leading-[54px] lg:max-w-[20ch] line-clamp-2">
        Provinsi Jawa Barat Dengan Segala Pesonanya
      </h1>
      <p class="text-white text-sm leading-[23px] text-center md:text-left mb-4 md:line-clamp-3 lg:max-w-[60ch]">
        Jelajahi pesona Jawa Barat mulai dari kekayaan alam, budaya khas hingga tradisi yang tak lekang oleh waktu.
      </p>
      <Button
        class="banner-button w-full lg:max-w-[190px]"
        type="button"
        variant="primary"
        @click="isOpen = true"
      >
        Lihat videonya di sini
        <Icon name="open-new-tab" size="14px" />
      </Button>
      <BaseVideoPlayer
        :show="isOpen"
        src="https://dvgddkosknh6r.cloudfront.net/staging/media/videos/Our_West_Java.mp4"
        @close="isOpen = false"
      />
    </div>
    <div class="hidden w-full h-full p-4 md:px-6 xl:px-8 xl:py-12 md:flex items-center justify-end relative overflow-hidden">
      <ProfileHighlightBannerBackground />
      <div class="hidden aspect-w-16 aspect-h-9 xl:aspect-w-2 xl:aspect-h-1 md:block w-full max-w-[513px] rounded-xl overflow-hidden">
        <img
          src="/images/about/background.png"
          class="object-cover max-w-full max-h-full"
          width="513"
          height="278"
          alt="Di balik layar"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
.banner-button.jds-button--primary {
  background-color: #FFFFFF;
  color: #069550;
}
.banner-button.jds-button--primary:hover {
  background-color: #FAFAFA;
  color: #008444;
}
</style>
