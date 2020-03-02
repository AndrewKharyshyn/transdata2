<template>
  <div>
    <AllOrdersTable class="mb-4"/>
  </div>
</template>

<script>
  import AllOrdersTable from './order-tables/AllOrdersTable.vue'

  export default {
    name: 'all-orders',
    components: {
      AllOrdersTable,
    },
  }
</script>

<style lang="scss">
</style>
