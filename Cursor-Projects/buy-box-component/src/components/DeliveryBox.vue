<template>
  <div class="delivery-box">
    <!-- Delivery to ZIP code row (always visible) -->
    <div class="delivery-row">
      <span class="delivery-label">Delivery to</span>
      <button class="zip-code-link" @click="startEditing">
        {{ zipCode }}
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>

    <!-- Edit input row (only visible when editing) -->
    <div v-if="isEditing" class="edit-input-row">
      <div class="zip-input-container">
        <input 
          ref="zipInput"
          v-model="tempZipCode" 
          type="text" 
          class="zip-input"
          placeholder="Enter ZIP code"
          maxlength="5"
          @keyup.enter="updateZipCode"
          @input="validateZipInput"
        />
        <button class="update-btn" @click="updateZipCode" :disabled="!isValidZip">
          Update
        </button>
      </div>
    </div>

    <!-- Ships in row (always visible) -->
    <div class="shipping-info">
      <span class="shipping-text">Ships in 1 business day</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const props = defineProps({
  initialZipCode: {
    type: String,
    default: '60601'
  }
})

const emit = defineEmits(['zip-code-changed'])

// Reactive state
const zipCode = ref(props.initialZipCode)
const tempZipCode = ref(props.initialZipCode)
const isEditing = ref(false)
const zipInput = ref(null)

// Computed properties
const isValidZip = computed(() => {
  return /^\d{5}$/.test(tempZipCode.value)
})

const startEditing = async () => {
  isEditing.value = true
  tempZipCode.value = zipCode.value
  
  // Focus the input after the DOM updates
  await nextTick()
  if (zipInput.value) {
    zipInput.value.focus()
    zipInput.value.select()
  }
}

const updateZipCode = () => {
  if (isValidZip.value) {
    zipCode.value = tempZipCode.value
    isEditing.value = false
    emit('zip-code-changed', zipCode.value)
  }
}

const validateZipInput = () => {
  // Only allow numeric input
  tempZipCode.value = tempZipCode.value.replace(/\D/g, '')
}

// Cancel editing if clicking outside (you could add this functionality)
const cancelEditing = () => {
  tempZipCode.value = zipCode.value
  isEditing.value = false
}

// Expose methods for parent component if needed
defineExpose({
  startEditing,
  cancelEditing
})
</script>

<style scoped>
.delivery-box {
  --color-text-default: #222222;
  --color-text-subtle: #5f5f5f;
  --color-brand-blue: #2071a7;
  --color-brand-dark: #0B485B;
  --color-white: #ffffff;
  --color-border: #cccccc;
  
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  /* No border or padding - removed as per requirements */
}

/* Delivery to ZIP code row */
.delivery-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.delivery-label {
  font-size: 14px;
  color: var(--color-text-default);
  font-weight: normal;
}

.zip-code-link {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: var(--color-brand-blue);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  /* Removed text-decoration: underline as per requirements */
  padding: 0;
  transition: color 0.2s ease;
}

.zip-code-link:hover {
  color: #1a5a8a;
}

.zip-code-link i {
  font-size: 12px;
  transition: transform 0.2s ease;
}

/* Edit input row (appears between delivery and shipping) */
.edit-input-row {
  margin: 4px 0;
}

.zip-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.zip-input {
  width: 120px;
  height: 32px;
  padding: 6px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  outline: none;
  transition: border-color 0.2s ease;
}

.zip-input:focus {
  border-color: var(--color-brand-blue);
  box-shadow: 0 0 0 2px rgba(32, 113, 167, 0.1);
}

.zip-input::placeholder {
  color: var(--color-text-subtle);
}

/* Secondary button style as per requirements */
.update-btn {
  height: 32px;
  padding: 6px 12px;
  background: var(--color-white);
  color: var(--color-brand-dark);
  border: 1px solid var(--color-brand-dark);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.update-btn:hover:not(:disabled) {
  background: #f8f9fa;
}

.update-btn:disabled {
  background: var(--color-white);
  color: var(--color-border);
  border-color: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Ships in row */
.shipping-info {
  margin-top: 2px;
}

.shipping-text {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500; /* Medium weight */
  line-height: 22px;
  color: var(--color-text-default);
}

/* Responsive */
@media (max-width: 480px) {
  .zip-input-container {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .zip-input {
    width: 100px;
  }
}

/* Focus styles for accessibility */
.zip-code-link:focus {
  outline: 2px solid var(--color-brand-blue);
  outline-offset: 2px;
  border-radius: 2px;
}

.update-btn:focus {
  outline: 2px solid var(--color-brand-dark);
  outline-offset: 2px;
}
</style>
