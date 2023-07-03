<template>
  <section class="p-3 rounded-xl border border-gray-300 sm:col-start-1 sm:row-start-2 md:flex md:items-center">
    <div
      class="flex items-center pb-3 border-b border-b-gray-300 mb-3
      md:pb-0 md:pr-3 md:mb-0 md:mr-3 md:border-b-transparent md:border-r md:border-r-gray-300"
    >
      <BaseIcon
        icon="/icons/layanan-publik/global-search.svg"
        :size="20"
        fill-color="#42A5F5"
        class="flex-shrink-0"
      />
      <h3 class="ml-2 font-lato text-sm font-normal leading-6 text-blue-gray-600">
        Alamat Website Resmi Layanan
      </h3>
    </div>
    <Link
      :link="website"
      class="text-sm text-blue-700 hover:text-blue-500 underline whitespace-normal line-clamp-1"
      title="Alamat website resmi layanan"
    >
      {{ website }}
    </Link>
  </section>
</template>

<script>
export default {
  props: {
    website: {
      type: String,
      default: ''
    }
  }
}
</script>
