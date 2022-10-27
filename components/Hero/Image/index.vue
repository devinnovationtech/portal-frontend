<template>
  <div class="h-[740px]">
    <div
      class="w-full h-full absolute top-0"
      style="background: radial-gradient(100% 820.78% at 0% 0%, rgba(0, 40, 19, 0.9) 0%, rgba(0, 32, 39, 0.7) 61.62%)"
    />
    <Carousel :items="items">
      <template #filter>
        <div
          class="w-full h-full absolute top-0"
          style="background: radial-gradient(100% 820.78% at 0% 0%, rgba(0, 40, 19, 0.9) 0%, rgba(0, 32, 39, 0.7) 61.62%)"
        />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { heroImages } from '~/static/data'

export default {
  data () {
    return {
      items: heroImages
    }
  }
}
</script>
