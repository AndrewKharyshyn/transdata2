<template>
  <div>
    <DebtOrdersTable class="mb-4"/>
  </div>
</template>

<script>
  import DebtOrdersTable from './order-tables/DebtOrdersTable.vue'

  export default {
    name: 'debt-orders',
    components: {
      DebtOrdersTable,
    },
  }
</script>

<style lang="scss">
</style>
