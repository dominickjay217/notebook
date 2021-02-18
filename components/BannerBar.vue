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
  overflow: hidden;
  opacity: 0.25;
  position: relative;
  padding: 42px 0;
  margin: 40px auto;
  pointer-events: none;
  &__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-2deg);
    font-size: 0.85rem;
  }
}
</style>