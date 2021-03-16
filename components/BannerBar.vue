<template>
    <div class="banner">
      <div class="banner__content">
        <code>{{ person.fields }}</code>
      </div>
    </div>
</template>

<script>
export default {
  props: ['person']
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: #fff;
  z-index: 2;
  overflow: hidden;
  position: relative;
  padding: 42px 0;
  pointer-events: none;
  &__content {
    position: absolute;
  opacity: 0.25;
    top: 50%;
    transform: translateY(-50%) rotate(-2deg);
    font-size: 0.85rem;
  }
}

.template--dark .banner {
  background-color: #222;
  color: #fff;
}
</style>