<template>
  <div>
    <OriginalsTable class="mb-4"/>
  </div>
</template>

<script>
  import OriginalsTable from './document-tables/OriginalsTable.vue'

  export default {
    name: 'originals',
    components: {
      OriginalsTable,
    },
  }
</script>

<style lang="scss">
</style>
