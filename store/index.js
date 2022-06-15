import { defineStore } from 'pinia';
import productsData from '~/data/productsData';

export const useStore = defineStore('store', {
  state: () => {
    return {
      products: [],
      selectedOption: {},
    };
  },

  actions: {
    createProducts() {
      if (process.client) {
        if (localStorage.getItem('products')) {
          this.products = JSON.parse(localStorage.getItem('products'));
        } else {
          this.products = productsData;
          this.saveToLocalStorage();
        }
      }
    },
    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    },
    deleteProduct(id) {
      this.products = this.products.filter(p => id !== p.id);
      this.saveToLocalStorage();
    },
    addProduct(product) {
      this.products.push({
        ...product,
        id: `f${(+new Date()).toString(16)}`,
      });
      this.saveToLocalStorage();
    },
    setSelectedOption(value) {
      this.selectedOption = value;
    },
  },
  getters: {
    getFilteredProducts(state) {
      //По цене (мин.)
      if (state.selectedOption.id === 1) {
        return state.products.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      //По цене (макс.)
      if (state.selectedOption.id === 2) {
        const filtered = state.products.sort(function (a, b) {
          return a.price - b.price;
        });
        return filtered.reverse();
      }
      //По названию
      if (state.selectedOption.id === 3) {
        return state.products.sort(function (a, b) {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          
          if (titleA < titleB) return -1;
          
          if (titleA > titleB) return 1;
          
          return 0;
        });
      }
      //По умолчанию
      return state.products;
    },
  },
});
