<template>
  <form class="form" @submit.prevent="addProductToList">
    <div class="form__wrapper">
      <AppFormInput
        class="form__field"
        title="Наименование товара"
        placeholder="Введите наименование товара"
        :require="true"
        type="text"
        v-model:field="form.title"
        :message="formError.title"
      />
      <AppFormTextarea
        class="form__field"
        title="Описание товара"
        placeholder="Введите описание товара"
        :require="false"
        v-model:field="form.description"
      />
      <AppFormInput
        class="form__field"
        title="Ссылка на изображение товара"
        placeholder="Введите ссылку"
        :require="true"
        type="text"
        v-model:field="form.url"
        :message="formError.url"
      />
      <AppFormInputPrice
        class="form__field"
        title="Цена товара"
        placeholder="Введите цену"
        :require="true"
        type="number"
        v-model:field.number="form.price"
        :message="formError.price"
      />
    </div>
    <button class="form__submit" type="submit" :disabled="isButtonDisabled">Добавить товар</button>
    <transition name="fade">
      <p v-if="message" class="form__message">{{ message }}</p>
    </transition>
  </form>
</template>

<script>
import { useStore } from '@/store/index';

export default defineComponent({
  setup() {
    const store = useStore();
    const form = reactive({
      title: '',
      description: '',
      url: '',
      price: null,
    });

    const formError = reactive({
      title: '',
      description: '',
      url: '',
      price: '',
    });

    const message = ref('');

    const isButtonDisabled = computed(() => {
      return form.title && form.url && form.price ? false : true;
    });

    watch(form, () => {
      if (!form.title) {
        formError.title = 'Поле является обязательным';
      } else {
        formError.title = '';
      }
      if (!form.url) {
        formError.url = 'Поле является обязательным';
      } else {
        formError.url = '';
      }
      if (!form.price) {
        formError.price = 'Поле является обязательным';
      } else {
        formError.price = '';
      }
    });

    const addProductToList = () => {
      store.addProduct(form);

      message.value = 'Товар успешно добавлен!';
      setTimeout(() => {
        message.value = '';
      }, 5000);
    };

    return {
      form,
      formError,
      message,
      isButtonDisabled,
      addProductToList,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  padding: 24px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__wrapper {
    margin-bottom: 24px;
  }
  &__field {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__submit {
    display: block;
    width: 100%;
    padding: 10px 20px 11px;
    border-radius: 10px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: $font-white;
    background-color: $button-green;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    &:disabled {
      color: $font-gray;
      background-color: $button-disabled;
      box-shadow: none;
      pointer-events: none;
    }
    &:hover,
    &:focus {
      background-color: $bg-green;
    }
    &:active {
      background-color: $bg-green-active;
    }
  }
  &__message {
    position: absolute;
    bottom: 3px;
    left: 24px;
    font-size: 12px;
    color: $bg-green;
  }
}
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
