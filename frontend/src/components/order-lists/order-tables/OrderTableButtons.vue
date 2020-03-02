<template>
  <div>
    <div class="flex xs12">
      <div
        class="larger-padding"
        :title="$t('buttons.colors')"
      >
        <div class="row justify--center">
          <div class="flex">
            <va-button outline color="info"> {{ $t('buttons.mainPage') }}</va-button>
            <va-button outline color="success"> {{ $t('buttons.backToOrders') }}</va-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order-table-buttons"
  }
</script>

<style scoped>

</style>
