<template>
    <div class="pt-2">
        <form>
            <el-card shadow="hover">
                <el-row :gutter="24">
                    <el-col :span="24">
                        <el-input
                                placeholder="Order Code"
                                v-model="orderCode"
                                :disabled="true">
                        </el-input>
                    </el-col>
                </el-row>
            </el-card>

            <el-card shadow="hover">
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="row">
                            <div class="flex xs12">
                                <el-input
                                        type="textarea"
                                        :rows="2"
                                        placeholder="Order Description"
                                        v-model="orderDescription">
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-card>

            <el-card>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <el-select v-model="value" clearable placeholder="Agency Name"
                                   filterable=true>
                            <el-option
                                    v-for="item in agencyName"
                                    :key="item.id"
                                    :label="item.description"
                                    :value="item.description">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        <el-select v-model="searchableLanguageSelect" multiple
                                   placeholder="Translation Direction"
                                   multiple-limit=3>
                            <el-option
                                    v-for="item in transDirection"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.description">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        <el-select v-model="multiSearchableTopicSelect" multiple placeholder="Topic"
                                   multiple-limit=5 filterable=true>
                            <el-option
                                    v-for="item in topic"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.description">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-card>

            <el-card>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <el-input v-model="pricePerPage" clearable placeholder="Price Per Page">
                        </el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="pageCount" clearable placeholder="Number Of Pages">
                        </el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="totalCost" clearable placeholder="Number Of Pages">
                        </el-input>
                    </el-col>
                </el-row>
            </el-card>

            <el-card>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <el-date-picker
                                v-model="pickerOptions.today"
                                type="date"
                                placeholder="Order Date"
                                format="dd.MM.yyyy"
                                :picker-options="pickerOptions"
                        >
                        </el-date-picker>
                    </el-col>
                    <el-col :span="8">
                        <el-date-picker
                                v-model="pickerOptions.today"
                                type="datetime"
                                placeholder="Finish Time"
                                format="dd.MM.yyyy"
                                default-time="10:00:00"
                                :picker-options="pickerOptions"
                        >
                        </el-date-picker>
                    </el-col>
                </el-row>
            </el-card>


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
    import VaCard from "vuestic-ui/src/components/vuestic-components/va-card/VaCard";
    import VaInput from "vuestic-ui/src/components/vuestic-components/va-input/VaInput";

    export default {
        name: 'translation-tab',
        components: {VaInput, VaCard},
        data() {
            return {
                form: {
                    accountName: 'GoalSaver',
                    sortCode: '6558912',
                    accountNumber: '000876432',
                    notes: '',
                },
                datepicker: {
                    simple: '2018-05-09',
                    time: '2018-05-08 14:10',
                    range: '2018-05-08 to 2018-05-23',
                    disabled: '2018-05-09',
                    multiple: '2018-04-25, 2018-04-27',
                    customFirstDay: '2018-05-09',
                    customDate: '2017-Dec-06',
                },
                pickerOptions: {
                    firstDayOfWeek: 1,
                    today: new Date()
                },
                orderCode: '',
                orderDescription: '',
                pricePerPage: '',
                pageCount: '',
                totalCost: '',
                incomingNumber: '',
                comments: '',
                customerName: '',
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
                value: [
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
            }
        },
        methods: {
            clear(field) {
                this[field] = ''
            },
        },
    }
</script>
<style>
    .el-select {
        display: flex;
    }
</style>