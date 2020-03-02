<template>
    <va-card :title="$t('tables.debtOrders')">
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

            <template slot="trend" slot-scope="props">
                <va-icon :name="getTrendIcon(props.rowData)" :color="getTrendColor(props.rowData)"/>
            </template>

            <template slot="status" slot-scope="props">
                <va-badge :color="getStatusColor(props.rowData)">
                    {{ props.rowData.status }}
                </va-badge>
            </template>

            <template slot="actions" slot-scope="props">
                <va-popover :message="`${$t('tables.copy')} ${props.rowData.code}`" placement="left">
                    <va-button flat small color="gray" icon="fa fa-files-o"/>
                </va-popover>

                <va-popover :message="`${$t('tables.files')} ${props.rowData.code}`" placement="left">
                    <va-button flat small color="gray" icon="fa fa-file-text-o"/>
                </va-popover>
            </template>
        </va-data-table>
    </va-card>
</template>

<script>
    import {debounce} from 'lodash'
    import orders from '../../../data/debtOrders.json'

    export default {
        data() {
            return {
                term: null,
                perPage: '4',
                perPageOptions: ['2', '3', '4', '5'],
                orders: orders,
                active: 0
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
                    name: 'description',
                    title: this.$t('tables.headings.description'),
                    width: '20%',
                    sortField: 'description',
                }, {
                    name: 'agency',
                    title: this.$t('tables.headings.agency'),
                    width: '15%',
                    sortField: 'agency',
                }, {
                    name: 'orderSum',
                    title: this.$t('tables.headings.orderSum'),
                    width: '10%',
                    sortField: 'orderSum',
                }, {
                    name: 'orderDate',
                    title: this.$t('tables.headings.orderDate'),
                    width: '15%',
                    sortField: 'orderDate',
                }, {
                    name: 'finishTime',
                    title: this.$t('tables.headings.finishTime'),
                    width: '15%',
                    sortField: 'finishTime',
                }, {
                    name: 'symbols',
                    title: this.$t('tables.headings.symbols'),
                    width: '5%',
                    sortField: 'symbols',
                }, {
                    name: 'pages',
                    title: this.$t('tables.headings.pages'),
                    width: '5%',
                    sortField: 'pages',
                }, {
                    name: 'language',
                    title: this.$t('tables.headings.language'),
                    width: '5%',
                    sortField: 'language',
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
            getStatusColor(order) {
                if (order.status === 'Pending') {
                    return 'info'
                }
                if (order.status === 'In progress') {
                    return 'danger'
                }
                if (order.status === 'Editing') {
                    return 'warning'
                }
                if (order.status === 'Proofreading') {
                    return 'secondary'
                }
                if (order.status === 'Finished') {
                    return 'primary'
                }
                if (order.status === 'Paid') {
                    return 'grey'
                }
                return 'grey'
            },
            search: debounce(function (term) {
                this.term = term
            }, 400),
        },
    }
</script>
