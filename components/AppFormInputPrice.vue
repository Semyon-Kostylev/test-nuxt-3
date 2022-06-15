<template>
  <AppFormField :title="title" :require="require" :message="message" class="field">
    <input
      class="field__input"
      :class="{ 'field__input--error': message }"
      :type="type"
      :placeholder="placeholder"
      v-model.number="inputValue"
    />
  </AppFormField>
</template>

<script>
export default defineComponent({
  props: {
    title: String,
    placeholder: String,
    require: Boolean,
    type: String,
    field: Number,
    message: String,
  },
  setup(props, context) {
    const inputValue = computed({
      get() {
        return props.field;
      },
      set(value) {
        context.emit('update:field', value);
      },
    });

    return {
      inputValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.field {
  &__input {
    width: 100%;
    padding: 10px 16px 11px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $font-black;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $font-gray;
    }
    &:hover,
    &:focus {
      background-color: $bg-milk;
    }
    &--error {
      outline: 1px solid $bg-pink;
    }
  }
}
</style>
