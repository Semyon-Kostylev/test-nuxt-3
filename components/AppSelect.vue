<template>
  <div class="select">
    <button class="select__button" @click.prevent="toggleMenu">
      {{ selected.title }}
      <svg
        class="select__svg"
        :class="{ 'select__svg--reverse': menuIsOpen }"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4" />
      </svg>
    </button>
    <transition name="fade">
      <ul v-if="menuIsOpen" class="select__menu">
        <li class="select__option" v-for="option in options" :key="option.id">
          <button @click.prevent="selectOption(option.id)" class="select__option-button">
            {{ option.title }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { useStore } from "~~/store";

export default defineComponent({
  setup() {
    const options = ref([
        { id: 1, title: 'По цене (мин.)' },
        { id: 2, title: 'По цене (макс.)' },
        { id: 3, title: 'По наименованию' },
    ])    

    const selected = ref({ title: 'По умолчанию' });
    
    const store = useStore()
    store.setSelectedOption(selected.value)
    watch(selected, (value) => {
      store.setSelectedOption(value)
    })

    const selectOption = id => {
      selected.value = options.value.find(i => i.id === id);
      toggleMenu();
    };

    const menuIsOpen = ref(false);
    const toggleMenu = () => {
      menuIsOpen.value = !menuIsOpen.value;
    };

    return {
      options,
      selected,
      selectOption,
      menuIsOpen,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  display: inline-flex;
  &__button {
    padding: 10px 15.51px 11px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $font-gray;
    transition: 0.3s;
    &:hover,
    &:focus {
      background-color: #ffffff;
      color: $font-black;
      .select__svg {
        path {
          stroke: $font-black;
        }
      }
    }
  }
  &__svg {
    margin-left: 5px;
    transition: .3s;
    path {
      transition: .3s;
    }
    &--reverse {
      transform: rotate(-180deg);
    }
  }
  &__menu {
    position: absolute;
    top: 120%;
    right: 0;
    display: inline-flex;
    flex-direction: column;
    width: max-content;
    border-radius: 4px;
    z-index: 2;
    background-color: $main-bg-color;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  &__option {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
      border-bottom: none;
    }
  }
  &__option-button {
    display: block;
    padding: 10px 15.51px 11px 16px;
    width: 100%;
    margin: 0;
    color: $font-black;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    transition: 0.3s;
    &:hover,
    &:focus {
      background-color: #ffffff;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
