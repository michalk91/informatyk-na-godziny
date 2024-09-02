<template>
  <teleport to="body">
    <Transition @after-leave="$emit('on-animation-ended')">
      <div v-if="isOpen" @click="$emit('close-modal')" class="modal-overlay">
        <Transition name="slide-fade" appear>
          <div v-show="isOpen" class="modal-content" @click.stop>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </teleport>
</template>

<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();

const emits = defineEmits(["close-modal", "on-animation-ended"]);
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(60vh);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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

  .modal-content {
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 20px;
  }
}
</style>
