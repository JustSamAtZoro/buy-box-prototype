<template>
  <div class="key-features">
    <!-- Header -->
    <div class="features-header">
      <h3 class="header-title">{{ title }}</h3>
    </div>

    <!-- Features List -->
    <div class="features-list">
      <div 
        v-for="(feature, index) in features" 
        :key="index"
        class="feature-row"
      >
        <div class="feature-label">
          <span class="label-text">{{ feature.label }}</span>
          <button 
            v-if="feature.tooltip" 
            class="tooltip-btn"
            @click="showTooltip(feature.tooltip)"
            :title="feature.tooltip"
          >
            
          </button>
        </div>
        <div class="feature-value">
          <span class="value-text">{{ feature.value }}</span>
        </div>
      </div>
    </div>

    <!-- See All Link -->
    <div class="see-all-section">
      <a 
        href="#" 
        class="see-all-link"
        @click.prevent="handleSeeAllClick"
      >
        {{ seeAllText }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Key Features'
  },
  features: {
    type: Array,
    default: () => [
      {
        label: 'Item',
        value: 'Twin Stepladder',
        tooltip: 'Product type and category'
      },
      {
        label: 'Load Capacity',
        value: '375 lbs',
        tooltip: 'Maximum weight capacity'
      },
      {
        label: 'Material',
        value: 'Fiberglass',
        tooltip: 'Primary construction material'
      },
      {
        label: 'Stepladder Item',
        value: 'Twin Stepladder',
        tooltip: 'Specific stepladder type'
      },
      {
        label: 'Number of Steps',
        value: '7',
        tooltip: 'Total number of steps'
      }
    ]
  },
  seeAllText: {
    type: String,
    default: 'See all product information'
  },
  seeAllUrl: {
    type: String,
    default: '#'
  }
})

const emit = defineEmits(['see-all-click', 'tooltip-click'])

const handleSeeAllClick = () => {
  emit('see-all-click', props.seeAllUrl)
}

const showTooltip = (tooltipText) => {
  emit('tooltip-click', tooltipText)
  // You could also implement a proper tooltip display here
}
</script>

<style scoped>
.key-features {
  --color-text-default: #222222;
  --color-link-blue: #2071a7;
  --color-header-bg: #ebf2f3;
  --color-border: #cccccc;
  --color-white: #ffffff;
  
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

/* Header */
.features-header {
  background-color: var(--color-header-bg);
  padding: 8px;
  height: 40px;
  display: flex;
  align-items: center;
}

.header-title {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: var(--color-text-default);
  margin: 0;
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
}

.feature-row {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-white);
  min-height: 44px;
  align-items: center;
}

.feature-row:last-child {
  border-bottom: none;
}

.feature-label {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 160px;
  flex-shrink: 0;
}

.label-text {
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: var(--color-text-default);
}

.tooltip-btn {
  width: 12px;
  height: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-border);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.tooltip-btn:hover {
  color: var(--color-text-default);
}

.feature-value {
  flex: 1;
  padding-left: 16px;
  padding-right: 8px;
}

.value-text {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: var(--color-text-default);
}

/* See All Section */
.see-all-section {
  padding: 12px 8px;
  background-color: var(--color-white);
}

.see-all-link {
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: var(--color-link-blue);
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration 0.2s ease;
}

.see-all-link:hover {
  text-decoration: underline;
}

.see-all-link:focus {
  outline: 2px solid var(--color-link-blue);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 480px) {
  .feature-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 12px 8px;
  }
  
  .feature-label {
    width: 100%;
  }
  
  .feature-value {
    width: 100%;
    padding-left: 0;
  }
  
  .header-title {
    font-size: 18px;
  }
}
</style>
