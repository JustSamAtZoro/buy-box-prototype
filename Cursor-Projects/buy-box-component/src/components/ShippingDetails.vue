<template>
  <div class="shipping-details">
    <!-- Row 1: Free Shipping -->
    <div class="shipping-row">
      <span class="shipping-text">{{ freeShippingText }}</span>
    </div>

    <!-- Row 2: Returns and Link -->
    <div class="returns-row">
      <span class="returns-text">{{ returnsText }}</span>
      <a 
        href="#" 
        class="shipping-link"
        @click.prevent="handleShippingLinkClick"
      >
        {{ linkText }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  freeShippingText: {
    type: String,
    default: 'Free Shipping on orders over $50'
  },
  returnsText: {
    type: String,
    default: 'Free 30-Day Returns'
  },
  linkText: {
    type: String,
    default: 'Shipping & Returns'
  },
  linkUrl: {
    type: String,
    default: '#'
  }
})

const emit = defineEmits(['shipping-link-click'])

const handleShippingLinkClick = () => {
  emit('shipping-link-click', props.linkUrl)
}
</script>

<style scoped>
.shipping-details {
  --color-text-gray: #696969;
  --color-link-blue: #2071a7;
  
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Roboto', sans-serif;
}

/* Row 1: Free Shipping */
.shipping-row {
  display: flex;
}

.shipping-text {
  font-size: 14px;
  line-height: 19px;
  color: var(--color-text-gray);
  font-weight: normal;
}

/* Row 2: Returns and Link */
.returns-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.returns-text {
  font-size: 14px;
  line-height: 19px;
  color: var(--color-text-gray);
  font-weight: normal;
}

.shipping-link {
  font-size: 14px;
  line-height: 19px;
  color: var(--color-link-blue);
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration 0.2s ease;
}

.shipping-link:hover {
  text-decoration: underline;
}

.shipping-link:focus {
  outline: 2px solid var(--color-link-blue);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 480px) {
  .returns-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
