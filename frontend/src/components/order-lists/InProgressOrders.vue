<template>
  <div>
    <InProgressTable class="mb-4"/>
  </div>
</template>

<script>
  import InProgressTable from './order-tables/InProgressTable.vue'

  export default {
    name: 'in-progress',
    components: {
      InProgressTable,
    },
  }
</script>

<style lang="scss">
</style>
