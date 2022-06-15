<template>
  <li class="product">
    <button class="product__button" @click.prevent="store.deleteProduct(product.id)">
      <img src="~/assets/images/delete-button.svg" alt="Удалить" />
    </button>
    <article class="product__article">
      <img class="product__image" :src="product.url" :alt="product.title" />
      <div class="product__wrapper">
        <h3 class="product__title">{{ product.title }}</h3>
        <p class="product__description">{{ product.description }}</p>
        <p class="product__price">{{ useNumberFormat(product.price) }} руб.</p>
      </div>
    </article>
  </li>
</template>

<script>
import { useStore } from '@/store';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    return {
      store,
      useNumberFormat,
    };
  },
});
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  &:hover,
  &:focus {
    .product__button {
      visibility: visible;
      opacity: 1;
    }
  }
  &__button {
    position: absolute;
    top: -8px;
    right: -8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: $bg-pink;
    transition: 0.3s;
    z-index: 1;
    &:hover {
      background-color: $bg-red;
    }
  }
  &__article {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 4px;
    overflow: hidden;
  }
  &__image {
    height: 200px;
    object-fit: cover;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px 16px 24px;
  }
  &__title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: $font-black;
  }
  &__description {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $font-black;
  }
  &__price {
    margin-top: auto;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: $font-black;
  }
}
</style>
