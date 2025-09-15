<template>
  <div class="title-summary">
    <!-- Brand/Manufacturer -->
    <div class="brand-section" v-if="brand">
      <div class="brand-name">{{ brand }}</div>
    </div>
    
    <!-- Product Title -->
    <div class="title-section">
      <h1 class="product-title">{{ title }}</h1>
    </div>
    
    <!-- Part Numbers -->
    <div class="part-numbers" v-if="mfrNumber || zoroNumber">
      <div class="part-number-group" v-if="mfrNumber">
        <span class="part-label">MFR # </span>
        <div class="part-value-container">
          <span class="part-value">{{ mfrNumber }}</span>
        </div>
      </div>
      <div class="part-number-group" v-if="zoroNumber">
        <span class="part-label">Zoro # </span>
        <div class="part-value-container">
          <span class="part-value">{{ zoroNumber }}</span>
        </div>
      </div>
    </div>
    
    <!-- Reviews Summary -->
    <div class="reviews-summary" v-if="showReviews">
      <div class="stars">
        <i v-for="star in 5" :key="star" class="fa-star fas star-icon"></i>
      </div>
      <span class="review-count">{{ reviewCount }} reviews</span>
      <div class="divider-line"></div>
      <a href="#" class="write-review-link">Write a Review</a>
    </div>
    
    <!-- Best Seller Badge -->
    <div class="badge-section" v-if="showBestSeller">
      <div class="best-seller-badge">
        <span class="badge-text">Best Seller</span>
      </div>
    </div>
    
  </div>
</template>

<script setup>
defineProps({
  brand: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  mfrNumber: {
    type: String,
    default: ''
  },
  zoroNumber: {
    type: String,
    default: ''
  },
  showReviews: {
    type: Boolean,
    default: true
  },
  reviewCount: {
    type: Number,
    default: 4
  },
  showBestSeller: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.title-summary {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 4px;
  width: 100%;
}

/* Brand Section */
.brand-section {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
}

.brand-name {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16.8px;
  color: #2071a7;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Title Section */
.title-section {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%;
}

.product-title {
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  flex-grow: 1;
  min-height: 1px;
  min-width: 1px;
}

/* Part Numbers */
.part-numbers {
  display: flex;
  gap: 12px;
  height: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
}

.part-number-group {
  background: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
}

.part-label {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: dimgrey;
  text-align: center;
  white-space: pre;
}

.part-value-container {
  display: flex;
  gap: 4px;
  height: 28px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4px;
  border-radius: 4px;
  flex-shrink: 0;
}

.part-value {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: dimgrey;
  text-align: center;
  white-space: pre;
}

/* Reviews Summary */
.reviews-summary {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 0;
  flex-shrink: 0;
}

.stars {
  display: flex;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
}

.star-icon {
  flex-shrink: 0;
  font-size: 16px;
  color: #D24600;
}

.review-count {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: #2071a7;
  white-space: nowrap;
  flex-shrink: 0;
}

.divider-line {
  display: flex;
  align-items: center;
  align-self: stretch;
  width: 1px;
  height: 16px;
  background: #ccc;
  flex-shrink: 0;
}

.write-review-link {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: #2071a7;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.write-review-link:hover {
  text-decoration: underline;
}

/* Badge Section */
.badge-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0 0 0;
  flex-shrink: 0;
}

.best-seller-badge {
  background: #ccdbe0;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 24px;
  flex-shrink: 0;
}

.badge-text {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #222222;
  white-space: pre;
  height: 24px;
  display: flex;
  align-items: center;
}

</style>
