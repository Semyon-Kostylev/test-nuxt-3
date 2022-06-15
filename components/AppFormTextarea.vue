<template>
  <AppFormField :title="title" :require="require">
    <textarea class="field__area" :placeholder="placeholder" v-model="areaValue" />
  </AppFormField>
</template>

<script>
  export default defineComponent({
    props: {
      title: String,
      placeholder: String,
      require: Boolean,
      field: String,
    },
    setup(props, context) {
    const areaValue = computed({
      get() {
        return props.field
      },
      set(value) {
        context.emit('update:field', value)
      }
    })

    return {
      areaValue,
    };
  },
  })
</script>

<style lang="scss" scoped>
.field {
  &__area {
    display: block;
    height: 108px;
    padding: 10px 16px 11px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $font-black;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    resize: none;
    transition: .3s;
    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $font-gray;
    }
    &:hover, &:focus {
      background-color: $bg-milk;
    }
  }
}
</style>