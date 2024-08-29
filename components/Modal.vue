<template>
  <teleport to="body">
    <div v-if="isOpen" @click="$emit('closeModal')" class="modal-overlay">
      <div class="modal-content" @click.stop>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();
</script>

<style>
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
