<template>
  <va-card :title="$t('tables.originalDocuments')" stripe="warning">
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('tables.search')"
          @input="search"
        >
          <va-icon name="fa fa-search" slot="prepend"/>
        </va-input>
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          :label="$t('tables.perPage')"
          :options="perPageOptions"
        />
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
      @row-clicked="showOrder"
      clickable
      striped
      hoverable
    >
      <template slot="marker" slot-scope="props">
        <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px"/>
      </template>

    </va-data-table>
  </va-card>
</template>

<script>
  import {debounce} from 'lodash'
  import orders from '../../../data/inProgressOrders.json'

  export default {
    data() {
      return {
        term: null,
        perPage: '5',
        perPageOptions: ['2', '3', '4', '5'],
        orders: orders,
      }
    },
    computed: {
      fields() {
        return [{
          name: '__slot:marker',
          width: '3%',
        }, {
          name: 'code',
          title: this.$t('tables.headings.code'),
          width: '10%',
          sortField: 'code',
        }, {
          name: 'fileName',
          title: this.$t('tables.headings.fileName'),
          width: '20%',
          sortField: 'fileName',
        }, {
          name: 'description',
          title: this.$t('tables.headings.description'),
          width: '20%',
          sortField: 'description',
        }, {
          name: 'agency',
          title: this.$t('tables.headings.agency'),
          width: '20%',
          sortField: 'agency',
        }, {
          name: 'fileSize',
          title: this.$t('tables.headings.fileSize'),
          width: '10%',
          sortField: 'fileSize',
        }, {
          name: '__slot:actions',
          dataClass: 'text-right',
        }]
      },
      filteredData() {
        if (!this.term || this.term.length < 1) {
          return this.orders
        }

        return this.orders.filter(item => {
          return item.description.toLowerCase().includes(this.term.toLowerCase())
        })
      },
    },
    methods: {
      showOrder(order) {
        alert(JSON.stringify(order))
      },
      search: debounce(function (term) {
        this.term = term
      }, 400),
    },
  }
</script>
