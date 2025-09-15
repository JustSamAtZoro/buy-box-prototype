<template>
  <div class="add-to-cart-component">
    <!-- Price and Stock Info -->
    <div class="info-row">
      <div class="price-info">
        <span class="price">${{ formatPrice(price) }}</span>
        <i class="fas fa-info-circle info-icon"></i>
      </div>
      <div class="divider">|</div>
      <div class="stock-info">
        <span class="stock-text" :class="{ 'in-stock': inStock, 'out-of-stock': !inStock }">
          {{ inStock ? 'In Stock' : 'Out of Stock' }}
        </span>
        
      </div>
    </div>

    <!-- Add to Cart Controls -->
    <div class="controls-section">
      <div class="quantity-section">
        <!-- Quantity Picker -->
        <div class="quantity-picker">
          <button 
            class="quantity-btn minus-btn" 
            :disabled="quantity <= 1"
            @click="decreaseQuantity"
            :class="{ disabled: quantity <= 1 }"
          >
            <i class="fas fa-minus"></i>
          </button>
          <div class="quantity-input">
            <input 
              type="number" 
              v-model.number="quantity" 
              :min="1" 
              :max="maxQuantity"
              @input="validateQuantity"
            />
          </div>
          <button 
            class="quantity-btn plus-btn" 
            @click="increaseQuantity"
            :disabled="quantity >= maxQuantity"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button 
          class="add-to-cart-btn" 
          @click="addToCart"
          :disabled="!inStock"
        >
          <i class="fas fa-shopping-cart"></i>
          <span>Add to Cart</span>
        </button>
        
        <button 
          class="save-to-list-btn" 
          @click="toggleSaveToList"
          :class="{ active: isSavedToList }"
        >
          <i :class="isSavedToList ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  maxQuantity: {
    type: Number,
    default: 999
  },
  initialQuantity: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['add-to-cart', 'save-to-list', 'quantity-change'])

// Reactive state
const quantity = ref(props.initialQuantity)
const isSavedToList = ref(false)

// Methods
const formatPrice = (price) => {
  if (typeof price !== 'number' || isNaN(price)) return '0.00'
  return price.toFixed(2)
}

const increaseQuantity = () => {
  if (quantity.value < props.maxQuantity) {
    quantity.value++
    emit('quantity-change', quantity.value)
  }
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
    emit('quantity-change', quantity.value)
  }
}

const validateQuantity = () => {
  if (quantity.value < 1) {
    quantity.value = 1
  } else if (quantity.value > props.maxQuantity) {
    quantity.value = props.maxQuantity
  }
  emit('quantity-change', quantity.value)
}

const addToCart = () => {
  if (props.inStock) {
    emit('add-to-cart', {
      quantity: quantity.value,
      price: props.price
    })
  }
}

const toggleSaveToList = () => {
  isSavedToList.value = !isSavedToList.value
  emit('save-to-list', isSavedToList.value)
}
</script>

<style scoped>
.add-to-cart-component {
  --color-text-default: #222222;
  --color-text-success: #428503;
  --color-text-error: #b22a31;
  --color-border: #222222;
  --color-brand-blue: #0b485b;
  --color-brand-blue-light: #2071a7;
  --color-white: #ffffff;
  --color-disabled: #cccccc;
  
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
}

/* Info Row */
.info-row {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  line-height: 19px;
}

.price-info {
  display: flex;
  gap: 4px;
  align-items: center;
}

.price {
  color: var(--color-text-default);
  font-weight: normal;
}

.info-icon {
  font-size: 12px;
  color: var(--color-text-default);
}

.divider {
  color: var(--color-text-default);
}

.stock-info {
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 55px;
}

.stock-text.in-stock {
  color: var(--color-text-success);
  font-weight: bold;
}

.stock-text.out-of-stock {
  color: var(--color-text-error);
  font-weight: bold;
}

/* Controls Section */
.controls-section {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
}

.quantity-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  width: 148px;
}

/* Quantity Picker */
.quantity-picker {
  display: flex;
  height: 44px;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-btn {
  width: 40px;
  height: 44px;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quantity-btn:hover:not(.disabled) {
  background: #f5f5f5;
}

.quantity-btn.disabled {
  color: var(--color-disabled);
  cursor: not-allowed;
}

.minus-btn {
  border-radius: 4px 0 0 4px;
  border-right: none;
}

.plus-btn {
  border-radius: 0 4px 4px 0;
  border-left: none;
}

.quantity-input {
  flex: 1;
  height: 44px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.quantity-input input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Roboto', sans-serif;
  background: var(--color-white);
  outline: none;
}

.quantity-input input::-webkit-outer-spin-button,
.quantity-input input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity-input input[type=number] {
  -moz-appearance: textfield;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 16px;
  flex: 1;
  min-width: 240px;
  max-width: 324px;
}

.add-to-cart-btn {
  flex: 1;
  height: 44px;
  background: var(--color-brand-blue);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 16px;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: #0a3d4f;
}

.add-to-cart-btn:disabled {
  background: var(--color-disabled);
  cursor: not-allowed;
}

.add-to-cart-btn i {
  font-size: 24px;
}

.save-to-list-btn {
  width: 44px;
  height: 44px;
  background: var(--color-white);
  border: 1px solid var(--color-brand-blue-light);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--color-brand-blue-light);
}

.save-to-list-btn:hover {
  background: #f0f8ff;
}

.save-to-list-btn.active {
  color: #e74c3c;
}

.save-to-list-btn i {
  font-size: 20px;
}

/* Responsive */
@media (max-width: 480px) {
  .controls-section {
    flex-direction: column;
    gap: 12px;
  }
  
  .quantity-section {
    width: 100%;
    max-width: 200px;
  }
  
  .action-buttons {
    width: 100%;
    max-width: none;
  }
}
</style>
