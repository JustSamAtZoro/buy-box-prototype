<template>
  <div class="promo-restriction-message">
    <div class="icon-container">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM5.6 10.5L2.1 7L3.514 5.586L5.6 7.672L10.486 2.786L11.9 4.2L5.6 10.5Z" fill="#4d7f23"/>
      </svg>
    </div>
    <div class="message-content">
      <span class="title-text">{{ titleText }}:</span>
      <span class="description-text">{{ descriptionText }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  titleText: {
    type: String,
    default: "Zoro's best price"
  },
  descriptionText: {
    type: String,
    default: "not eligible for any other offers or promotions"
  }
})
</script>

<style scoped>
.promo-restriction-message {
  --color-background: #eaeef0;
  --color-border: #b0bec6;
  --color-text-default: #222222;
  --color-success: #4d7f23;
  
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}

.message-content {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.375;
  color: var(--color-text-default);
  white-space: nowrap;
}

.title-text {
  font-weight: bold;
}

.description-text {
  font-weight: normal;
}
</style>
