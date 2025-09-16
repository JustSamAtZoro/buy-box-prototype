<template>
  <div class="buy-box sticky">
    <!-- 1. Title and Summary -->
    <div class="component-wrapper">
      <TitleAndSummary
        :brand="productData.brand"
        :title="productData.title"
        :mfr-number="productData.mfrNumber"
        :zoro-number="productData.zoroNumber"
        :show-reviews="productData.showReviews"
        :review-count="productData.reviewCount"
        :show-best-seller="productData.showBestSeller"
      />
    </div>

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- HR Divider -->
    <hr class="buy-box-divider" />

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- 2. Pricing Component -->
    <div class="component-wrapper">
      <Pricing
        :variant="pricingData.variant"
        :price="pricingData.price"
        :original-price="pricingData.originalPrice"
        :percent-off="pricingData.percentOff"
        :unit-label="pricingData.unitLabel"
        :show-shipping-info="pricingData.showShippingInfo"
        :shipping-text="pricingData.shippingText"
        :pack-quantity="pricingData.packQuantity"
        :price-per-unit="pricingData.pricePerUnit"
        :surcharge-amount="pricingData.surchargeAmount"
        :moq-quantity="pricingData.moqQuantity"
      />
    </div>

    <!-- 12px spacing -->
    <div class="spacing-12"></div>

    <!-- 3. Promo Restriction Messaging -->
    <div class="component-wrapper" v-if="showPromoRestriction">
      <PromoRestrictionMessaging
        :title-text="promoData.titleText"
        :description-text="promoData.descriptionText"
      />
    </div>

    <!-- 24px spacing -->
    <div class="spacing-24" v-if="showPromoRestriction"></div>

    <!-- 4. Delivery Box -->
    <div class="component-wrapper">
      <DeliveryBox
        :initial-zip-code="deliveryData.zipCode"
        @zip-code-changed="handleZipCodeChange"
      />
    </div>

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- 5. Add to Cart -->
    <div class="component-wrapper">
      <AddToCart
        :price="pricingData.price"
        :in-stock="productData.inStock"
        :max-quantity="productData.maxQuantity"
        @add-to-cart="handleAddToCart"
        @save-to-list="handleSaveToList"
        @quantity-change="handleQuantityChange"
      />
    </div>

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- HR Divider -->
    <hr class="buy-box-divider" />

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- 6. Shipping Details -->
    <div class="component-wrapper">
      <ShippingDetails
        :free-shipping-text="shippingData.freeShippingText"
        :returns-text="shippingData.returnsText"
        :link-text="shippingData.linkText"
        :link-url="shippingData.linkUrl"
        @shipping-link-click="handleShippingLinkClick"
      />
    </div>

    <!-- 24px spacing -->
    <div class="spacing-24"></div>

    <!-- 7. Key Features (full width) -->
    <div class="full-width-wrapper">
      <KeyFeatures
        :title="featuresData.title"
        :features="featuresData.features"
        :see-all-text="featuresData.seeAllText"
        :see-all-url="featuresData.seeAllUrl"
        @see-all-click="handleSeeAllClick"
        @tooltip-click="handleTooltipClick"
      />
    </div>
  </div>
</template>

<script setup>
import TitleAndSummary from './TitleAndSummary.vue'
import Pricing from './Pricing.vue'
import PromoRestrictionMessaging from './PromoRestrictionMessaging.vue'
import DeliveryBox from './DeliveryBox.vue'
import AddToCart from './AddToCart.vue'
import ShippingDetails from './ShippingDetails.vue'
import KeyFeatures from './KeyFeatures.vue'

const props = defineProps({
  // Product Data
  productData: {
    type: Object,
    default: () => ({
      brand: "Milwaukee Tool",
      title: "M18 6 ½\" Circular Saw (Tool Only)",
      mfrNumber: "KZ1348585",
      zoroNumber: "G2174496",
      showReviews: true,
      reviewCount: 4,
      showBestSeller: true,
      inStock: true,
      maxQuantity: 50
    })
  },
  
  // Pricing Data
  pricingData: {
    type: Object,
    default: () => ({
      variant: "default",
      price: 179.99,
      originalPrice: null,
      percentOff: null,
      unitLabel: "ea",
      showShippingInfo: true,
      shippingText: "Free Shipping & Returns",
      packQuantity: null,
      pricePerUnit: null,
      surchargeAmount: 85.00,
      moqQuantity: 5
    })
  },
  
  // Promo Restriction Data
  showPromoRestriction: {
    type: Boolean,
    default: true
  },
  promoData: {
    type: Object,
    default: () => ({
      titleText: "Zoro's best price",
      descriptionText: "not eligible for any other offers or promotions"
    })
  },
  
  // Delivery Data
  deliveryData: {
    type: Object,
    default: () => ({
      zipCode: "60601"
    })
  },
  
  // Shipping Data
  shippingData: {
    type: Object,
    default: () => ({
      freeShippingText: "Free Shipping on orders over $50",
      returnsText: "Free 30-Day Returns",
      linkText: "Shipping & Returns",
      linkUrl: "#"
    })
  },
  
  // Features Data
  featuresData: {
    type: Object,
    default: () => ({
      title: "Key Features",
      features: [
        {
          label: 'Item',
          value: 'M18 Circular Saw',
          tooltip: 'Product type and category'
        },
        {
          label: 'Power Source',
          value: '18V Lithium-Ion',
          tooltip: 'Battery type and voltage'
        },
        {
          label: 'Blade Size',
          value: '6 ½ inches',
          tooltip: 'Circular saw blade diameter'
        },
        {
          label: 'Brand',
          value: 'Milwaukee Tool',
          tooltip: 'Manufacturer brand name'
        }
      ],
      seeAllText: "See all product information",
      seeAllUrl: "#"
    })
  }
})

const emit = defineEmits([
  'add-to-cart',
  'save-to-list', 
  'quantity-change',
  'zip-code-changed',
  'shipping-link-click',
  'see-all-click',
  'tooltip-click'
])

// Event handlers - pass through to parent
const handleAddToCart = (data) => {
  emit('add-to-cart', data)
}

const handleSaveToList = (isSaved) => {
  emit('save-to-list', isSaved)
}

const handleQuantityChange = (quantity) => {
  emit('quantity-change', quantity)
}

const handleZipCodeChange = (zipCode) => {
  emit('zip-code-changed', zipCode)
}

const handleShippingLinkClick = (url) => {
  emit('shipping-link-click', url)
}

const handleSeeAllClick = (url) => {
  emit('see-all-click', url)
}

const handleTooltipClick = (tooltipText) => {
  emit('tooltip-click', tooltipText)
}
</script>

<style scoped>
.buy-box {
  --color-divider: #cccccc;
  
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
}

/* Component wrappers - "hug" content, don't stretch to full width */
.component-wrapper {
  display: inline-block;
  width: auto;
  max-width: 100%;
}

.sticy {
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Full width wrapper for HR and Key Features */
.full-width-wrapper {
  width: 100%;
}

/* HR Divider */
.buy-box-divider {
  width: 100%;
  height: 1px;
  border: none;
  background-color: var(--color-divider);
  margin: 0;
}

/* Spacing utilities */
.spacing-12 {
  height: 12px;
}

.spacing-24 {
  height: 24px;
}

.spacing-32 {
  height: 32px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .buy-box {
    padding: 12px;
  }

  .sticky {
    position: relative;
  }
}
</style>
