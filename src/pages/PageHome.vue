<template>
  <div class="container p-5 mx-auto max-w-7xl">
    <h1 class="text-2xl font-semibold">Todo app</h1>
    <form @submit.prevent="addTodo" class="flex flex-col py-5">
      <div class="flex items-center gap-5">
        <input
          v-model="newTodo"
          class="w-full p-3 border rounded max-w-72"
          type="text"
          placeholder="Enter task"
        />
        <base-button classes="bg-blue-400">Add</base-button>
      </div>
    </form>
    <ul class="flex flex-col gap-4">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between pl-3 bg-gray-100 rounded"
      >
        <input
          v-model="todo.done"
          class="w-4 h-4 mr-2 bg-white border-2 border-blue-500 rounded-sm cursor-pointer"
          type="checkbox"
        />
        <span class="flex w-full">{{ todo.title }}</span>
        <base-button
          @click="
            ;(isOpen = true), (updateId = todo.id), (updateTodo = todo.title)
          "
          classes="bg-green-400 mr-1"
          >Edit</base-button
        >
        <base-button @click="deleteTodo(todo.id)" classes="bg-red-400">
          Delete
        </base-button>
      </li>
    </ul>
  </div>
  <div
    v-if="isOpen"
    @click="toggleModal"
    class="fixed bg-[#00000080] w-full h-full top-0 flex p-10 items-start justify-center"
  >
    <div @click.stop class="w-full max-w-5xl p-5 bg-white rounded min-h-60">
      <form
        @submit.prevent="editTodo(updateId, updateTodo), (updateTodo = '')"
        class="flex items-center gap-5"
      >
        <input
          v-model="updateTodo"
          class="w-full p-3 border rounded max-w-72"
          type="text"
          placeholder="Enter new task"
        />
        <base-button classes="bg-blue-400">Update</base-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import BaseButton from "../components/atoms/BaseButton.vue"

interface Todo {
  id: number
  title: string
  done: boolean
}

let id = 4
const newTodo = ref("")
const todos = ref<Todo[]>([])
const isOpen = ref(false)
const updateId = ref<number>(0)
const updateTodo = ref("")

const fetchTodos = async () => {
  todos.value = [
    { id: 1, title: "Playing Football", done: false },
    { id: 2, title: "Coding", done: false },
    { id: 3, title: "Doing Workout", done: false },
  ]
}

const addTodo = () => {
  todos.value.push({ id: id, title: newTodo.value, done: false })
  id++
  newTodo.value = ""
}

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo: Todo) => todo.id !== id)
}

const editTodo = (id: number, newTodo: string) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, title: newTodo } : todo
  )
  toggleModal()
}

const toggleModal = () => (isOpen.value = !isOpen.value)

onMounted(fetchTodos)
</script>
