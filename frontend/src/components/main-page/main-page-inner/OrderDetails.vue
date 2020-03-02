<template>
    <div class="cards">
        <div class="cards-container row d-flex wrap align--start">
            <template>
                <div class="flex">
                    <va-card
                            stripe="info"
                            :title="$t('forms.inputs.orderCode')"
                    >
                        <div class="row">
                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Agency: {{order.agency.agencyName}}
                                </div>
                            </div>

                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Order code: {{order.orderCode}}
                                </div>
                            </div>

                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Comments: {{order.comments}}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Status: {{order.status.statusName}}
                                </div>
                            </div>

                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Manager: {{order.manager.surname}}
                                </div>
                            </div>

                            <div class="flex xs12 md4">
                                <div class="overview-tab__item d-flex ">
                                    Incoming number: {{order}}
                                </div>
                            </div>
                        </div>
                    </va-card>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'order-details',
        data() {
            return {
                order: null,
                orderCode: '',
                orderId: 1,
                agencyName: '',
                comments: '',
                statusName: '',
                surname: '',
                incomingNumber: ''
            }
        },
        methods: {
            getOrderById() {
                axios.get('/api/order/' + this.orderId)
                    .then(response => {
                        this.order = response.data;
                    })
            },
        },
        created() {
            this.getOrderById();
        }
    }
</script>

<style lang="scss">
    .cards-container {
        .va-card {
            margin: 0;
        }
    }
</style>
