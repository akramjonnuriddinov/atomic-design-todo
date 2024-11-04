<template>
  <div class="container max-w-7xl p-5 mx-auto">
    <h1 class="text-2xl font-semibold">Todo app</h1>
    <form @submit.prevent="addTodo" class="flex flex-col py-5">
      <div class="flex gap-5 items-center">
        <input
          v-model="newTodo"
          class="border rounded p-3 max-w-72 w-full"
          type="text"
          placeholder="Enter task"
        />
        <button
          class="bg-blue-400 text-white flex items-center justify-center px-5 py-3 rounded cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
    <ul class="flex flex-col gap-4">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="bg-gray-100 pl-3 rounded flex items-center justify-between"
      >
        <input
          v-model="todo.done"
          class="mr-2 cursor-pointer w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"
          type="checkbox"
        />
        <span class="flex w-full">{{ todo.title }}</span>
        <button
          @click="
            ;(isOpen = true), (updateId = todo.id), (updateTodo = todo.title)
          "
          class="text-white bg-green-400 mr-1 flex items-center justify-center px-5 py-3 rounded cursor-pointer"
        >
          Edit
        </button>
        <button
          @click="deleteTodo(todo.id)"
          class="text-white bg-red-400 flex items-center justify-center px-5 py-3 rounded cursor-pointer"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
  <div
    v-if="isOpen"
    @click="toggleModal"
    class="fixed bg-[#00000080] w-full h-full top-0 flex p-10 items-start justify-center"
  >
    <div @click.stop class="bg-white max-w-5xl w-full rounded p-5 min-h-60">
      <form
        @submit.prevent="editTodo(updateId, updateTodo), (updateTodo = '')"
        class="flex gap-5 items-center"
      >
        <input
          v-model="updateTodo"
          class="border rounded p-3 max-w-72 w-full"
          type="text"
          placeholder="Enter new task"
        />
        <button
          class="bg-blue-400 text-white flex items-center justify-center px-5 py-3 rounded cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

interface Todo {
  id: number
  title: string
  done: boolean
}

let id = 1
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
