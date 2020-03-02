<template>
  <div>
    <TranslatedTable class="mb-4"/>
  </div>
</template>

<script>
  import TranslatedTable from './document-tables/TranslatedTable.vue'

  export default {
    name: 'translated',
    components: {
      TranslatedTable,
    },
  }
</script>

<style lang="scss">
</style>
