<template>
  <main class="main">
    <section class="add-product">
      <div class="container add-product__container">
        <div class="add-product__head head">
          <h2 class="head__title">Добавление товара</h2>
          <AppSelect class="head__select" />
        </div>
        <div class="add-product__wrapper">
          <div class="add-product__aside">
            <AppForm class="add-product__form" />
          </div>
          <div class="add-product__content">
            <ProductList class="add-product__list" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  </main>
</template>

<script>
import { useStore } from '@/store';

export default {
  setup() {
    const store = useStore()
    store.createProducts()
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  &__container {
    padding-top: 31px;
    padding-bottom: 31px;
    @media screen and (max-width: 420px) {
      padding: 15px;
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 332px 1fr;
    column-gap: 16px;
    @media screen and (max-width: 700px) {
      grid-template-columns: 332px;
      gap: 20px;
    }
    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
    }
  }
  &__form {
    position: sticky;
    top: 24px;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: $font-black;
    @media screen and (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
}
</style>
