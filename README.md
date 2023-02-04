# Vue 3 + Vite

Vue é um framework JavaScript para construir interfaces de usuário. Ele se baseia em HTML, CSS e JavaScript padrão e fornece um modelo de programação declarativo e baseado em componentes. 

- Renderização declarativa : o Vue estende o HTML padrão com uma sintaxe de modelo que nos permite descrever declarativamente a saída HTML com base no estado do JavaScript.
- Reatividade : o Vue rastreia automaticamente as mudanças de estado do JavaScript e atualiza eficientemente o DOM quando as mudanças acontecem.

### Vue pode ser usado de diferentes maneiras:

- Aprimorando o HTML estático sem uma etapa de compilação
- Incorporação como Web Components em qualquer página
- Aplicativo de página única (SPA)
- Fullstack / renderização no lado do servidor (SSR)
- Jamstack / geração de site estático (SSG)
- Segmentação de desktop, celular, WebGL e até mesmo o terminal

### Componentes de arquivo único

Na maioria dos projetos Vue habilitados para ferramentas de construção, criamos componentes Vue usando um formato de arquivo semelhante a HTML chamado Single-File Component (também conhecido como *.vuearquivos, abreviado como SFC ).

```js
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

### API Options

Com a API Options, a lógica de um componente é composta por um objeto de opções como data, methods e mounted. As propriedades definidas por opções são expostas em thisfunções internas, que apontam para a instância do componente.

```js
<script>
export default {
  // Properties returned from data() become reactive state and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  methods: {
    increment() {
      this.count++
    }
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`) // This function will be called when the component is mounted.
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### Composition API

Em SFCs, Composition API é normalmente usada com `<script setup>` . O atributo `setup` é uma dica que faz com que o Vue execute transformações em tempo de compilação que nos permitem usar a API de composição com menos clichê. Por exemplo, importações e variáveis/funções de nível superior declaradas `<script setup>` podem ser usadas diretamente no modelo.

```js
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### Interpolação de texto

A interpolação de texto é uma das formas mais básicas de vincular dados ao modelo. A sintaxe de interpolação de texto é muito simples: colocar o nome de uma variável entre dois parênteses duplos ({{ mustache }}).

```js
<div id="app">
  {{ message }}
</div> 
```

### Diretivas

As diretivas são atributos especiais com prefixo v- que são adicionados ao modelo. Elas são responsáveis ​​por fazer o modelo reativo, ou seja, quando o valor de uma variável é alterado, o modelo é atualizado automaticamente.

```js
<div id="app">
  <p v-if="seen">Agora você me vê</p>
  <a v-on:click="doSomething"> ... </a>
</div>
```

Mustaches não podem ser usados ​​dentro de atributos HTML, pois eles são interpretados como texto simples. Para vincular o valor de uma expressão a um atributo HTML, use a diretiva v-bind:

```js
<div id="app">
  <a v-bind:href="url">Link</a>
</div>
```

```js
<div v-bind:id="dynamicId"></div>
```

Shorthand: a sintaxe abreviada é opcional

```js
<div :id="dynamicId"></div>
```

<img src="https://vuejs.org/assets/directive.69c37117.png" alt="Vue Directives" />

### Atributos Booleanos

Atributos HTML como disabled e required geralmente são especificados sem um valor. No entanto, em HTML, um atributo sem valor é interpretado como true. Por exemplo, o seguinte template:

```js
<button v-bind:disabled="isButtonDisabled">Button</button>

<button :disabled="isButtonDisabled">Button</button>
```

### Atributos dinâmicos

É possível usar a diretiva v-bind para vincular qualquer atributo HTML, incluindo os personalizados. Por exemplo, se você quiser vincular o atributo aria-label de um elemento a uma expressão, você pode fazer isso com v-bind:

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}

<div v-bind="objectOfAttrs"></div>
```

### JavaScript Expressions

Nos modelos Vue, as expressões JavaScript podem ser usadas nas seguintes posições:

- Dentro de interpolações de texto ({{ mustaches }})
- No valor do atributo de qualquer diretiva Vue (atributos especiais que começam com v-)

```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

### Calling Functions

É possível chamar um método exposto ao componente dentro de uma expressão de ligação

_As funções chamadas dentro das expressões de ligação serão chamadas sempre que o componente for atualizado, portanto, não devem ter nenhum efeito colateral, como alteração de dados ou acionamento de operações assíncronas._

```js
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

## Reactivity

### Deep Reactivity

No Vue, o estado é profundamente reativo por padrão. Isso significa que você pode esperar que as alterações sejam detectadas mesmo quando você modifica objetos ou matrizes aninhadas:

```js
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}
```

### Shallow Reactive

Shallow data structures devem ser usadas apenas para o estado de nível raiz em um componente. Evite aninhá-lo dentro de um objeto reativo profundo, pois cria uma árvore com comportamento de reatividade inconsistente que pode ser difícil de entender e depurar.

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// mutating state's own properties is reactive
state.foo++

// ...but does not convert nested objects
isReactive(state.nested) // false

// NOT reactive
state.nested.bar++
```

### Métodos com Estado

Para manter a função debounced de cada instância do componente independente das outras, podemos criar a versão debounced com o hook `created`

```js
export default {
  created() {
    // each instance now has its own copy of debounced handler
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // also a good idea to cancel the timer
    // when the component is removed
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... respond to click ...
    }
  }
}
```

## Propriedades calculadas

Serve para encapsular a lógica em funções para evitar a adição em templates Mustache. Além disso, propriedades computadas são armazenadas em cache, portanto, apenas são recalculadas quando suas dependências forem alteradas. 

```js
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
```

```js
computed: {
  now() {
    return Date.now()
  }
}
```

As propriedades calculadas são, por padrão, somente getter. Se você tentar atribuir um novo valor a uma propriedade computada, receberá um aviso de tempo de execução. Nos raros casos em que você precisa de uma propriedade computada "gravável", você pode criar uma fornecendo um getter e um setter:

```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```

Getters devem ser livres de efeitos colaterais, pois eles podem ser executados várias vezes durante a renderização e, portanto, não devem ter efeitos colaterais.


- [Vue Router 4](https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/)