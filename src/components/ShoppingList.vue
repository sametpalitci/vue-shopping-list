<script setup lang="ts">
import { ref } from 'vue'
import { useShoppingListStore } from '@/stores/shoppingList'
import ShoppingListItem from './ShoppingListItem.vue'

const store = useShoppingListStore()
const newItemName = ref('')

const addItem = () => {
  if (newItemName.value.trim()) {
    store.addItem(newItemName.value.trim())
    newItemName.value = ''
  }
}
</script>

<template>
  <div class="shopping-list">
    <h2>Alışveriş Listesi</h2>

    <div class="add-item">
      <input v-model="newItemName" @keyup.enter="addItem" placeholder="Yeni ürün ekle..." />
      <button @click="addItem">Ekle</button>
    </div>

    <div class="items">
      <ShoppingListItem v-for="item in store.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.shopping-list {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.add-item {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
