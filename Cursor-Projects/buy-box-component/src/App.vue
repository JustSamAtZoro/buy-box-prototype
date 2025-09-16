<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- Left Column: Component Demos -->
          <v-col cols="12" md="6">
            <h1 class="text-h4 mb-6">Buy Box Components Demo</h1>
            
            <!-- Component demos will be added here -->
            <div class="component-demo">
              <h2 class="text-h5 mb-4">Components</h2>
              
              <!-- Title and Summary Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-2">Title and Summary</h3>
                <v-card class="pa-4" outlined>
                  <TitleAndSummary
                    brand="Milwaukee Tool"
                    title="M18 6 ½&quot; Circular Saw (Tool Only)"
                    mfr-number="KZ1348585"
                    zoro-number="G2174496"
                    :show-reviews="true"
                    :review-count="4"
                    :show-best-seller="true"
                  />
                </v-card>
              </div>

              <!-- Pricing Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Pricing Component</h3>
                
                <!-- Default Pricing -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Default State</h4>
                  <v-card class="pa-4" outlined>
                    <Pricing
                      :price="179.99"
                      unit-label="ea"
                      :show-shipping-info="true"
                      shipping-text="Free Shipping & Returns"
                    />
                  </v-card>
                </div>

                <!-- Strikethrough Sale -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Strikethrough Sale</h4>
                  <v-card class="pa-4" outlined>
                    <Pricing
                      variant="sale"
                      :price="149.99"
                      :original-price="199.99"
                      :percent-off="25"
                      unit-label="ea"
                      :show-shipping-info="true"
                      shipping-text="Free Shipping & Returns"
                    />
                  </v-card>
                </div>

                <!-- Pack Quantity -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Pack Quantity</h4>
                  <v-card class="pa-4" outlined>
                    <Pricing
                      variant="pack"
                      :price="20.99"
                      :pack-quantity="50"
                      :price-per-unit="0.42"
                      :show-shipping-info="true"
                      shipping-text="Free Shipping & Returns"
                    />
                  </v-card>
                </div>

                <!-- Special Delivery -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Special Delivery Charges</h4>
                  <v-card class="pa-4" outlined>
                    <Pricing
                      variant="special-delivery"
                      :price="179.99"
                      unit-label="ea"
                      :surcharge-amount="85.00"
                    />
                  </v-card>
                </div>

                <!-- MOQ (Minimum Order Quantity) -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Minimum Order Quantity</h4>
                  <v-card class="pa-4" outlined>
                    <Pricing
                      variant="moq"
                      :price="179.99"
                      unit-label="ea"
                      :moq-quantity="5"
                    />
                  </v-card>
                </div>
              </div>

              <!-- Promo Restriction Messaging Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Promo Restriction Messaging</h3>
                
                <!-- Default Message -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Default Message</h4>
                  <v-card class="pa-4" outlined>
                    <PromoRestrictionMessaging />
                  </v-card>
                </div>

                <!-- Custom Message -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Custom Message</h4>
                  <v-card class="pa-4" outlined>
                    <PromoRestrictionMessaging
                      title-text="Special offer"
                      description-text="Limited time offer available"
                    />
                  </v-card>
                </div>
              </div>

              <!-- Add to Cart Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Add to Cart</h3>
                
                <!-- In Stock -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">In Stock</h4>
                  <v-card class="pa-4" outlined>
                    <AddToCart
                      :price="179.99"
                      :in-stock="true"
                      :max-quantity="50"
                      @add-to-cart="handleAddToCart"
                      @save-to-list="handleSaveToList"
                      @quantity-change="handleQuantityChange"
                    />
                  </v-card>
                </div>

                <!-- Out of Stock -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Out of Stock</h4>
                  <v-card class="pa-4" outlined>
                    <AddToCart
                      :price="179.99"
                      :in-stock="false"
                      @add-to-cart="handleAddToCart"
                      @save-to-list="handleSaveToList"
                      @quantity-change="handleQuantityChange"
                    />
                  </v-card>
                </div>
              </div>

              <!-- Delivery Box Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Delivery Box</h3>
                
                <!-- Default Delivery -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Interactive Zip Code & Delivery</h4>
                  <v-card class="pa-4" outlined>
                    <DeliveryBox
                      initial-zip-code="60601"
                      @zip-code-changed="handleZipCodeChange"
                    />
                  </v-card>
                </div>

                <!-- Different ZIP Code -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Different ZIP Code</h4>
                  <v-card class="pa-4" outlined>
                    <DeliveryBox
                      initial-zip-code="90210"
                      @zip-code-changed="handleZipCodeChange"
                    />
                  </v-card>
                </div>
              </div>

              <!-- Shipping Details Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Shipping Details</h3>
                
                <!-- Default Shipping Details -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Default</h4>
                  <v-card class="pa-4" outlined>
                    <ShippingDetails
                      @shipping-link-click="handleShippingLinkClick"
                    />
                  </v-card>
                </div>

                <!-- Custom Text -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Custom Text</h4>
                  <v-card class="pa-4" outlined>
                    <ShippingDetails
                      free-shipping-text="Free Shipping on orders over $75"
                      returns-text="Free 60-Day Returns"
                      link-text="View Policy"
                      link-url="/shipping-policy"
                      @shipping-link-click="handleShippingLinkClick"
                    />
                  </v-card>
                </div>
              </div>

              <!-- Key Features Component -->
              <div class="mb-12">
                <h3 class="text-h6 mb-4">Key Features</h3>
                
                <!-- Default Features -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Default Product Features</h4>
                  <v-card class="pa-0" outlined>
                    <KeyFeatures
                      @see-all-click="handleSeeAllClick"
                      @tooltip-click="handleTooltipClick"
                    />
                  </v-card>
                </div>

                <!-- Custom Features -->
                <div class="mb-6">
                  <h4 class="text-subtitle-1 mb-2">Custom Features</h4>
                  <v-card class="pa-0" outlined>
                    <KeyFeatures
                      title="Product Specifications"
                      :features="[
                        { label: 'Brand', value: 'Milwaukee Tool', tooltip: 'Manufacturer brand name' },
                        { label: 'Model', value: 'M18-2732-20', tooltip: 'Product model number' },
                        { label: 'Power Source', value: '18V Lithium-Ion', tooltip: 'Battery type and voltage' },
                        { label: 'Chuck Size', value: '1/2 inch', tooltip: 'Maximum drill bit diameter' }
                      ]"
                      see-all-text="View complete specifications"
                      see-all-url="/specifications"
                      @see-all-click="handleSeeAllClick"
                      @tooltip-click="handleTooltipClick"
                    />
                  </v-card>
                </div>
              </div>
              
            </div>
          </v-col>

          <!-- Right Column: Complete Buy Box -->
          <v-col cols="12" md="6">
            <div class="buy-box-preview">
              <h1 class="text-h4 mb-6">Complete Buy Box</h1>
              <BuyBox
                @add-to-cart="handleAddToCart"
                @save-to-list="handleSaveToList"
                @quantity-change="handleQuantityChange"
                @zip-code-changed="handleZipCodeChange"
                @shipping-link-click="handleShippingLinkClick"
                @see-all-click="handleSeeAllClick"
                @tooltip-click="handleTooltipClick"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TitleAndSummary from './components/TitleAndSummary.vue'
import Pricing from './components/Pricing.vue'
import PromoRestrictionMessaging from './components/PromoRestrictionMessaging.vue'
import AddToCart from './components/AddToCart.vue'
import DeliveryBox from './components/DeliveryBox.vue'
import ShippingDetails from './components/ShippingDetails.vue'
import KeyFeatures from './components/KeyFeatures.vue'
import BuyBox from './components/BuyBox.vue'

// Event handlers for AddToCart component
const handleAddToCart = (data) => {
  console.log('Add to cart:', data)
  // You can add your cart logic here
}

const handleSaveToList = (isSaved) => {
  console.log('Save to list:', isSaved ? 'Added' : 'Removed')
  // You can add your wishlist logic here
}

const handleQuantityChange = (quantity) => {
  console.log('Quantity changed:', quantity)
  // You can add quantity change logic here
}

const handleZipCodeChange = (zipCode) => {
  console.log('Zip code changed:', zipCode)
  // You can add zip code change logic here (e.g., update delivery estimates, shipping costs)
}

const handleShippingLinkClick = (url) => {
  console.log('Shipping link clicked:', url)
  // You can add navigation logic here (e.g., router.push(url) or window.open(url))
}

const handleSeeAllClick = (url) => {
  console.log('See all product information clicked:', url)
  // You can add navigation logic here (e.g., router.push(url) or window.open(url))
}

const handleTooltipClick = (tooltipText) => {
  console.log('Tooltip clicked:', tooltipText)
  // You can add tooltip display logic here (e.g., show modal or popover)
}
</script>

<style scoped>
.component-demo {
  max-width: 800px;
}

.buy-box-preview {
  max-width: 600px;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .component-demo,
  .buy-box-preview {
    max-width: none;
  }
}
</style>
