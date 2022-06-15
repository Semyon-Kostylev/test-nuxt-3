<template>
  <ul class="list">
    <transition-group name="list-complete">
      <ProductItem
        class="list__item"
        v-for="product in store.getFilteredProducts"
        :key="product.id"
        :product="product"
      />
    </transition-group>
  </ul>
</template>

<script>
import { useStore } from '@/store/index';
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__item {
    max-width: 333px;
    transition: all 0.5s ease;
  }
}
.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
