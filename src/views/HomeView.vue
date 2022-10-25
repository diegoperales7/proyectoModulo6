<template>
  <app-lista></app-lista>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppLista from '@/components/AppLista.vue'

export default {
  name: 'HomeView',
  components: {
    AppLista
  }
}
</script>
