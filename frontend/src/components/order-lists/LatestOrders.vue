<template>
  <div>
    <LatestOrdersTable class="mb-4"/>
  </div>
</template>

<script>
  import LatestOrdersTable from './order-tables/LatestOrdersTable.vue'

  export default {
    name: 'latest-orders',
    components: {
      LatestOrdersTable,
    },
  }
</script>

<style lang="scss">
</style>
