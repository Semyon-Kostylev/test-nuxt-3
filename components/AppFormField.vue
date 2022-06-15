<template>
  <div class="field">
    <p class="field__name">
      {{ title }}
      <span v-if="require" class="field__require"></span>
    </p>
    <slot></slot>
    <p class="field__message">{{ message }}</p>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    title: String,
    require: Boolean,
    message: String
  },

});
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  display: flex;
  flex-direction: column;
  &__name {
    position: relative;
    display: inline-block;
    width: max-content;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $font-black-less;
  }
  &__require {
    position: absolute;
    top: 3px;
    right: -5px;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: $bg-pink;
  }
  &__message {
    position: absolute;
    left: 0;
    bottom: -14px;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: $bg-pink;
  }
}
</style>
