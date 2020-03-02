<template>
  <va-card :title="$t('tables.allAgencies')" stripe="secondary">
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
      :loading="loading"
      @row-clicked="agencyDetails"
      clickable
      striped
      hoverable
      api-mode
      useDetailRow
      track-by="agencyId"
    >
      <template slot="marker" slot-scope="props">
        <va-icon name="fa fa-circle" :color="props.rowData.color" size="6px"/>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
  import axios from 'axios'
  import {debounce} from 'lodash'
  //import agencies from '../../data/allAgencies.json'

  export default {
    components: {},
    data() {
      return {
        term: null,
        perPage: '3',
        perPageOptions: ['2', '3', '4', '5'],
        agencies: [],
        loading: false,
      }
    },
    computed: {
      fields() {
        return [{
          name: '__slot:marker',
          width: '3%',
        }, {
          name: 'agencyName',
          title: this.$t('tables.headings.name'),
          width: '30%',
          sortField: 'agencyName',
        }, {
          name: 'city',
          title: this.$t('tables.headings.city'),
          width: '10%',
          sortField: 'city',
        }, {
          name: 'email',
          title: this.$t('tables.headings.email'),
          width: '15%',
          sortField: 'email',
        }, {
          name: 'phone',
          title: this.$t('tables.headings.phone'),
          width: '15%',
          sortField: 'phone',
        }, {
          name: 'website',
          title: this.$t('tables.headings.website'),
          width: '15%',
          sortField: 'website',
        }, {
          name: 'prefix',
          title: this.$t('tables.headings.prefix'),
          width: '5%',
          sortField: 'prefix',
        }]
      },
      filteredData() {
        if (!this.term || this.term.length < 1) {
          return this.agencies
        }

        return this.agencies.filter(item => {
          return item.agencyName.toLowerCase().includes(this.term.toLowerCase())
        })
      },
    },
    created () {
      this.getAllAgencies()
    },
    methods: {
      agencyDetails(agency) {
        //this.$router.push('/id=' + agency.id)
        this.$router.push({name: 'agency-card'})
      },
      search: debounce(function (term) {
        this.term = term
      }, 400),
      getAllAgencies (page = 0) {
        this.loading = true

        const params = {
          per_page: this.perPage,
          page: page,
        }

        axios.get('/api/getAllAgencies',{params})
          .then(response => {
            this.agencies = response.data
            //this.totalPages = response.data.total_pages
            this.loading = false
          })
      },
    },
  }
</script>
