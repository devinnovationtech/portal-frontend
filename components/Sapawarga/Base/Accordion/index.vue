<template>
  <details
    class="sapawarga-accordion"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <summary class="sapawarga-accordion__summary min-w-0 w-full flex justify-between">
      <h4
        class="sapawarga-accordion__title mr-4 font-roboto text-base font-bold leading-7 text-blue-gray-800
        cursor-pointer transition-colors ease-brand duration-200"
      >
        {{ title }}
      </h4>
      <div class="sapawarga-accordion__icon--background flex-shrink-0 w-6 h-6 flex items-center justify-center ml-auto self-center cursor-pointer">
        <Icon
          name="chevron-right"
          size="12px"
          class="sapawarga-accordion__toggle-icon text-blue-gray-600 transition-transform ease-brand duration-300"
        />
      </div>
    </summary>
    <ul
      class="sapawarga-accordion__description list-disc list-inside mt-[22px] font-lato font-normal text-[14px] leading-[20px] text-gray-800"
    >
      {{ description }}
      <li
        v-for="(list, index) in lists"
        :key="index"
        class="pl-2 font-lato font-normal text-[14px] leading-[20px] text-gray-800"
      >
        {{ list }}
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    },
    lists: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style scoped>
.sapawarga-accordion__summary::-webkit-details-marker {
  display: none;
}

.sapawarga-accordion[open] .sapawarga-accordion__toggle-icon {
  transform: rotate(90deg);
  color: white;
}

.sapawarga-accordion[open] .sapawarga-accordion__title {
  color: #069550;
}

.sapawarga-accordion[open] .sapawarga-accordion__icon--background  {
  background-color: #16A75C;
  border-radius: 50%;
}
</style>
