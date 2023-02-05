<script>

export default {
  name: 'Todo',
  data() {
    return {
      todos: []
    }
  },

  methods: {
    addTodo(target) {
      const text = target.target.todo.value
      const id = Math.floor(Math.random() * 100000000)
      this.todos.push({
        id,
        text,
        completed: false
      })
      return localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    deleteTodo(id) {
      const todo = this.todos.filter(todo => todo.id !== id)
      this.todos = todo
      console.log(this.todos)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    editTodo(id) {
      const updateTodo = this.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = event.target.checked
        }
        return todo
      })
      this.todos = updateTodo
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  },

  mounted() {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
      this.todos = todos
    }
  },
}

</script>


<template>
  <div class="todo">
    <h1 class="title">Todo</h1>
    <div>
      <form v-on:submit.prevent="addTodo" class="form">
        <input type="text" name="todo" class="input" />
        <button type="submit" class="button">Add Todo</button>
      </form>
      <div class="todo-list">
        <div v-if="todos" v-for="todo in todos" :key="todo.id">
          <div class="todo-item">
            <input type="checkbox" class="todo-checkbox" v-on:click="editTodo(todo.id)"
              v-bind:checked="todo.completed" />
            <span class="todo-text" :contenteditable="'true'">{{ todo.text }}</span>
            <button class="todo-delete" v-on:click="deleteTodo(todo.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  color: #111;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form .button {
  padding: 0.5rem 2rem;
  width: 10rem;
  border: none;
  outline: none;
  background: #111;
  color: #fff;
  border-radius: 0.25rem;
  margin: 0;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #373737;
  }
}

.form .input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
  background: rgb(237, 237, 237);
  border-radius: 0.25rem;
}

.todo-list {
  margin-top: 2rem;
}

.todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.todo-checkbox {}

.todo-text {
  flex: 1;
  padding: 0.3rem 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
}

.todo-delete {
  padding: 0.3rem 1rem;
  border: none;
  outline: none;
  background: #cf8181;
  color: #fff;
  border-radius: 0.25rem;
  margin: 0;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #373737;
  }
}
</style>