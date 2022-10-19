<template>
  <details
    class="base-accordion w-full min-h-[58px] bg-white p-4 rounded-xl border border-green-[#DFE6F0] items-center"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <summary class="base-accordion__summary min-w-0 w-full flex">
      <h3
        class="base-accordion__title mr-4 font-roboto text-base font-medium leading-7 text-blue-gray-800
        cursor-pointer transition-colors ease-brand duration-200"
      >
        {{ title }}
      </h3>
      <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center ml-auto self-center cursor-pointer">
        <Icon
          name="chevron-down"
          size="18px"
          class="base-accordion__toggle-icon text-green-600 transition-transform ease-brand duration-300"
        />
      </div>
    </summary>
    <p class="base-accordion__description mt-2 font-lato text-base font-normal leading-7 text-blue-gray-800">
      {{ description }}
    </p>
  </details>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Accordion title'
    },
    description: {
      type: String,
      default: 'Accordion description'
    }
  }

}
</script>

<style scoped>
.base-accordion__summary::-webkit-details-marker {
  display:none;
}

.base-accordion[open] .base-accordion__toggle-icon {
  transform: rotate(180deg);
}

.base-accordion[open] .base-accordion__title {
  color: #008444;
}

.base-accordion[open] {
  border-color: #008444;
}
</style>
