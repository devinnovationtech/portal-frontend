<template>
  <main class="overflow-hidden relative">
    <Jumbotron v-bind="jumbotron">
      <template #breadcrumb>
        <Breadcrumb class="mb-6" />
      </template>
    </Jumbotron>
    <Sapawarga />
  </main>
</template>

<script>
export default {
  data () {
    return {
      jumbotron: {
        title: 'Aplikasi Sapawarga',
        subtitle: 'Aplikasi layanan publik digital di Jawa Barat yang terintegrasi. Berikan kemudahan akses layanan, informasi, dan aspirasi publik di mana saja dan kapan saja.',
        backgroundImageUrl: '/images/jumbotron/default.webp'
      }
    }
  }
}
</script>
