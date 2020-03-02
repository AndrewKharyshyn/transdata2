<template>
    <div class="pt-2">
        <div class="flex xs12">
            <el-card shadow="hover">
                <el-steps :active="orderId" align-center finish-status="success">
                    <el-step title="Pending"></el-step>
                    <el-step title="In progress"></el-step>
                    <el-step title="Edition"></el-step>
                    <el-step title="Proofreading"></el-step>
                    <el-step title="Finished"></el-step>
                    <el-step title="Paid"></el-step>
                </el-steps>
            </el-card>
        </div>


        <!--<div class="row">-->
        <!--<div class="flex xs12">-->
        <!--<va-button-toggle-->
        <!--flat-->
        <!--v-model="model"-->
        <!--:options="options"-->
        <!--color="gray"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->

        <div class="row">
            <div class="cards flex xs12 md6">
                <OrderDetails></OrderDetails>
            </div>
            <div class="cards flex xs12 md6">
                <OrderOriginalsCollapse></OrderOriginalsCollapse>
            </div>
        </div>
        <form>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.inputs.mainInfo')" stripe="gray">
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        v-model="orderCode"
                                        placeholder="Order Code"
                                />
                            </div>
                            <div class="flex md12 sm12 xs12">
                                <va-input
                                        :label="$t('forms.selects.orderDescription')"
                                        v-model="orderDescription"
                                        type="textarea"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-select
                                        :label="$t('forms.selects.agencyName')"
                                        v-model="searchableSelectModel"
                                        searchable
                                        textBy="description"
                                        :options="agencyName"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-select
                                        :label="$t('forms.selects.transDirection')"
                                        v-model="searchableLanguageSelect"
                                        searchable
                                        textBy="description"
                                        :options="transDirection"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-select
                                        :label="$t('forms.selects.topic')"
                                        v-model="multiSearchableTopicSelect"
                                        textBy="description"
                                        searchable
                                        multiple
                                        :options="topic"
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.inputs.financialInfo')" stripe="gray">
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.pricePerPage')"
                                        v-model="pricePerPage"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.pageCount')"
                                        v-model="pageCount"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.totalCost')"
                                        v-model="totalCost"
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.inputs.orderDates')" stripe="gray">
                        <div class="row">
                            <div class="flex md6 sm6 xs12">
                                <va-date-picker
                                        :label="$t('forms.dateTimePicker.orderDate')"
                                        :config="{locale: {firstDayOfWeek: 1}}"
                                        v-model="datepicker.customFirstDay"
                                        weekDays
                                />
                            </div>
                            <div class="flex md6 sm6 xs12">
                                <va-date-picker
                                        :label="$t('forms.dateTimePicker.finishTime')"
                                        :config="{enableTime: true, locale: {firstDayOfWeek: 1}}"
                                        v-model="datepicker.time"
                                        weekDays
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.inputs.additionalInfo')" stripe="gray">
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-select
                                        :label="$t('forms.selects.manager')"
                                        v-model="searchableManagerSelect"
                                        searchable
                                        textBy="description"
                                        :options="manager"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.incomingNumber')"
                                        v-model="incomingNumber"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.customerName')"
                                        v-model="customerName"
                                />
                            </div>
                            <div class="flex xs12">
                                <va-input
                                        :label="$t('forms.selects.comments')"
                                        v-model="comments"
                                        type="textarea"
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row flex xs12">
                <el-button type="success" plain @click="saveAgency()">
                    {{ $t('forms.selects.save') }}
                </el-button>
                <el-button type="info" plain :to="{name: 'mainpage'}">
                    {{ $t('forms.selects.cancel') }}
                </el-button>
            </div>
        </form>
    </div>
</template>

<script>
    import OrderDetails from '../main-page-inner/OrderDetails.vue'
    import OrderOriginalsCollapse from '../main-page-inner/OrderOriginalsCollapse.vue'
    import axios from 'axios'

    export default {
        components: {
            OrderDetails,
            OrderOriginalsCollapse
        },
        name: 'order-card',
        data() {
            return {
                order: null,
                datepicker: {
                    simple: '2018-05-09',
                    time: '2018-05-08 14:10',
                    range: '2018-05-08 to 2018-05-23',
                    disabled: '2018-05-09',
                    multiple: '2018-04-25, 2018-04-27',
                    customFirstDay: '2018-05-09',
                    customDate: '2017-Dec-06',
                },
                orderCode: '',
                orderId: 2,
                orderDescription: '',
                pricePerPage: '',
                symbolCount: '',
                pageCount: '',
                customerName: '',
                incomingNumber: '',
                totalPrice: '',
                comments: '',
                searchableSelectModel: '',
                multiSearchableTopicSelect: [],
                searchableLanguageSelect: '',
                searchableManagerSelect: '',
                toggles: {
                    unselected: false,
                    selected: true,
                    disabled: true,
                    small: false,
                    large: false,
                },
                topic: [
                    {
                        id: 1,
                        description: 'Invoices',
                    },
                    {
                        id: 2,
                        description: 'Export declaration',
                    },
                    {
                        id: 3,
                        description: 'Medical',
                    },
                    {
                        id: 4,
                        description: 'Law',
                    },
                    {
                        id: 5,
                        description: 'Automobile',
                    },
                ],
                agencyName: [
                    {
                        id: 1,
                        description: 'Tris',
                    },
                    {
                        id: 2,
                        description: 'Myvic Solutions',
                    },
                    {
                        id: 3,
                        description: 'KLS',
                    },
                    {
                        id: 4,
                        description: 'Advanced International Translations',
                    },
                    {
                        id: 5,
                        description: 'Expert Translation',
                    },
                ],
                manager: [
                    {
                        id: 1,
                        description: 'Andrew',
                    },
                    {
                        id: 2,
                        description: 'Linda',
                    },
                    {
                        id: 3,
                        description: 'Roger',
                    },
                    {
                        id: 4,
                        description: 'Nadia',
                    },
                    {
                        id: 5,
                        description: 'Olena',
                    },
                ],
                orderStatus: [
                    {
                        id: 1,
                        description: 'Pending',
                    },
                    {
                        id: 2,
                        description: 'In progress',
                    },
                    {
                        id: 3,
                        description: 'Edition',
                    },
                    {
                        id: 4,
                        description: 'Proofreading',
                    },
                    {
                        id: 5,
                        description: 'Finished',
                    },
                    {
                        id: 6,
                        description: 'Paid',
                    },
                ],
                transDirection: [
                    {
                        id: 1,
                        description: 'CN - RU',
                    },
                    {
                        id: 2,
                        description: 'CN - UA',
                    },
                    {
                        id: 3,
                        description: 'EN - UA',
                    },
                    {
                        id: 4,
                        description: 'RU - EN',
                    },
                    {
                        id: 5,
                        description: 'SP - EN',
                    },
                ],
                simpleSelectModel: '',
                orderStatusModel: '',
                options: [
                    {label: 'Pending', value: 'pending'},
                    {label: 'In progress', value: 'inprogress'},
                    {label: 'Edition', value: 'edition'},
                    {label: 'Proofreading', value: 'proofreading'},
                    {label: 'Finished', value: 'finished'},
                    {label: 'Paid', value: 'paid'},
                ],
                model: 'pending',
            }
        },
        methods: {
            open1() {
                this.$notify({
                    title: 'Success',
                    message: 'This is a success message',
                    type: 'success'
                });
            },
            clear(field) {
                this[field] = ''
            },
            getOrderById() {
                axios.get('/api/order/' + this.orderId)
                    .then(response => {
                        this.order = response.data
                            .then(this.$notify({
                                title: response.data.orderCode,
                                message: response.data.orderCode + ' was imported successfully!',
                                type: 'success'
                            })
                        )
                    })
            },
        },
        created() {
            this.getOrderById()
        },
    }
</script>
