<template>
  <div>
    <p class="font-lato font-bold text-sm leading-6 text-green-300">
      {{ position }}
    </p>
    <p class="font-lato font-bold text-sm leading-6 text-white mb-3">
      {{ name }}
    </p>
    <img class="mb-3" :src="image" :alt="name" width="103" height="125">
    <button
      class="bg-green-primary hover:bg-green-800 py-[10px] w-full rounded-lg text-sm text-white transition-colors ease-brand duration-250"
      @click="$emit('click')"
    >
      Lihat Profil
    </button>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    image: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
