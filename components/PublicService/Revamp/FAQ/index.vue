<template>
  <section class="w-full px-2 py-8 rounded-2xl bg-[#F9FAFB]">
    <h2 class="font-lora font-bold text-2xl leading-8 md:text-[32px] md:leading-10 text-center mb-6">
      Frequently Asked Question
    </h2>
    <ul class="w-full max-w-[918px] mx-auto min-w-0 grid grid-cols-1 gap-4">
      <li
        v-for="(item, index) in items"
        :key="`faq-item-${index}`"
      >
        <BaseAccordion
          :id="`faq-item-${index}`"
          :class="`public-service__faq-item`"
          :title="item.question"
          :description="item.answer"
          @click="closeOtherItems(`faq-item-${index}`)"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeOtherItems (id) {
      // select all FAQ items except the element with id of `id`
      const faqItems = [...document.querySelectorAll('.public-service__faq-item')]
        .filter(el => el.id !== id)

      faqItems.forEach(element => element.removeAttribute('open'))
    }
  }
}
</script>
