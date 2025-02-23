import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ShoppingItem {
  id: number
  name: string
  completed: boolean
}

export const useShoppingListStore = defineStore('shoppingList', () => {
  const items = ref<ShoppingItem[]>([])
  const nextId = ref(1)

  function addItem(name: string) {
    items.value.push({
      id: nextId.value++,
      name,
      completed: false,
    })
  }

  function removeItem(id: number) {
    const index = items.value.findIndex((item) => item.id === id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function toggleItem(id: number) {
    const item = items.value.find((item) => item.id === id)
    if (item) {
      item.completed = !item.completed
    }
  }

  return { items, addItem, removeItem, toggleItem }
})
