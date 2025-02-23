<script setup lang="ts">
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore()
</script>

<template>
  <div class="shopping-item" :class="{ completed: item.completed }">
    <input type="checkbox" :checked="item.completed" @change="store.toggleItem(item.id)" />
    <span class="item-name">{{ item.name }}</span>
    <button @click="store.removeItem(item.id)" class="delete-btn">Sil</button>
  </div>
</template>

<style scoped>
.shopping-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  gap: 10px;
}

.completed .item-name {
  text-decoration: line-through;
  color: #888;
}

.item-name {
  flex: 1;
}

.delete-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #cc0000;
}
</style>
