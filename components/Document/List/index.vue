<template>
  <ul class="grid grid-cols-1 gap-4">
    <li v-for="i in 5" :key="i">
      <DocumentItem @open-detail="$emit('open-detail', $event)" />
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
