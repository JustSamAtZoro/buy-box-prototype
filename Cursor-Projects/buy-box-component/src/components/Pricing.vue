<template>
  <div class="pricing-component">
    <!-- Strikethrough Sale Variant -->
    <template v-if="variant === 'sale'">
      <div class="sale-topline">
        <span class="sale-original">${{ formatPrice(originalPrice) }}</span>
        <span class="sale-percent" v-if="percentOff != null">{{ formatPercent(percentOff) }} off</span>
      </div>

      <div class="price-section">
        <div class="price-container sale">
          <div class="price-text">
            <span class="dollar-sign">$</span>
            <span class="price-amount">{{ formatPrice(price) }}</span>
          </div>
          <div class="unit-text">
            <span class="unit-label">/{{ unitLabel }}</span>
          </div>
        </div>
      </div>

      <div v-if="showShippingInfo" class="shipping-info default-color">
        {{ shippingText }}
      </div>
    </template>

    <!-- Pack Quantity Variant -->
    <template v-else-if="variant === 'pack'">
      <div class="pack-line">
        <span class="pack-price">${{ formatPrice(price) }}</span>
        <span class="pack-detail">/pk {{ packQuantity }}, ${{ formatPrice(pricePerUnit) }}/ea</span>
      </div>

      <div v-if="showShippingInfo" class="shipping-info subtle-color">
        {{ shippingText }}
      </div>
    </template>

    <!-- Special Delivery Variant -->
    <template v-else-if="variant === 'special-delivery'">
      <div class="price-section">
        <div class="price-container">
          <div class="price-text">
            <span class="dollar-sign">$</span>
            <span class="price-amount">{{ formatPrice(price) }}</span>
          </div>
          <div class="unit-text">
            <span class="unit-label">/{{ unitLabel }}</span>
          </div>
        </div>
      </div>
      <div class="special-delivery-message">
        Item requires special delivery chargers. A ${{ formatPrice(surchargeAmount) }} per item surcharge will be applied.
      </div>
    </template>

    <!-- MOQ (Minimum Order Quantity) Variant -->
    <template v-else-if="variant === 'moq'">
      <div class="price-section">
        <div class="price-container">
          <div class="price-text">
            <span class="dollar-sign">$</span>
            <span class="price-amount">{{ formatPrice(price) }}</span>
          </div>
          <div class="unit-text">
            <span class="unit-label">/{{ unitLabel }}</span>
          </div>
        </div>
      </div>
      <div class="moq-message">
        Must be ordered in multiples of {{ moqQuantity }}
      </div>
    </template>

    <!-- Default Variant -->
    <template v-else>
      <div class="price-section">
        <div class="price-container">
          <div class="price-text">
            <span class="dollar-sign">$</span>
            <span class="price-amount">{{ formatPrice(price) }}</span>
          </div>
          <div class="unit-text">
            <span class="unit-label">/{{ unitLabel }}</span>
          </div>
        </div>
      </div>
      <div v-if="showShippingInfo" class="shipping-info default-color">
        {{ shippingText }}
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String, // 'default' | 'sale' | 'pack'
    default: 'default'
  },
  // shared
  price: { type: Number, required: true },
  unitLabel: { type: String, default: 'ea' },
  showShippingInfo: { type: Boolean, default: true },
  shippingText: { type: String, default: 'Free Shipping & Returns' },
  
  // sale
  originalPrice: { type: Number, default: null },
  percentOff: { type: [Number, String], default: null },
  
  // pack
  packQuantity: { type: Number, default: null },
  pricePerUnit: { type: Number, default: null },
  
  // special delivery
  surchargeAmount: { type: Number, default: 85.00 },
  
  // moq
  moqQuantity: { type: Number, default: 5 }
})

const formatPrice = (price) => {
  if (typeof price !== 'number' || isNaN(price)) return '0.00'
  return price.toFixed(2)
}

const formatPercent = (value) => {
  if (value === null || value === undefined || value === '') return ''
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(num)) return String(value)
  return `${num}%`
}
</script>

<style scoped>
.pricing-component {
  --color-text-default: #222222;
  --color-text-subtle: #5f5f5f;
  --color-text-critical: #b22a31;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

/* Colors from Figma (scoped via component custom properties) */

/* Topline for Sale */
.sale-topline {
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}
.sale-original {
  color: var(--color-text-subtle);
  text-decoration: line-through;
  text-decoration-skip-ink: none;
}
.sale-percent {
  color: var(--color-text-critical, #b22a31);
}

/* Price Section */
.price-section {
  display: flex;
  gap: 4px;
  align-items: flex-end;
}

.price-container {
  display: flex;
  gap: 4px;
  align-items: flex-end;
}
.price-container.sale .dollar-sign,
.price-container.sale .price-amount {
  color: var(--color-text-critical, #b22a31);
}

.price-text {
  display: flex;
  font-weight: bold;
  align-items: flex-start;
  line-height: 0;
  white-space: nowrap;
}

.dollar-sign {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18.06px; /* scaled dollar sign */
  color: var(--color-text-default, #222222);
  line-height: 1.3;
}

.price-amount {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: var(--color-text-default, #222222);
  line-height: 1.3;
}

.unit-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
}

.unit-label {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 12px;
  color: var(--color-text-subtle, #5f5f5f);
  line-height: 1.5;
  white-space: pre;
}

/* Pack Variant */
.pack-line {
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: var(--color-text-default, #222222);
  font-family: 'Roboto', sans-serif;
}
.pack-price {
  font-weight: bold;
  font-size: 24px;
  line-height: 1.3;
}
.pack-detail {
  font-size: 14px;
  line-height: 1.5;
}

/* Shipping */
.shipping-info {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}
.default-color { color: var(--color-text-default, #222222); }
.subtle-color { color: var(--color-text-subtle, #5f5f5f); }

/* Special Delivery Message */
.special-delivery-message {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-subtle, #5f5f5f);
  letter-spacing: -0.14px;
}

/* MOQ Message */
.moq-message {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-subtle, #5f5f5f);
  letter-spacing: -0.14px;
}
</style>
