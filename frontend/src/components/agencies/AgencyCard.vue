<template>
    <div class="pt-2">
        <div class="flex xs12 sm6">
            <va-card>
                <!--:title={{ agency.agencyName }}-->

                Agency: {{ agency.agencyName }}
                Id: {{ agency.id }}
                City: {{ agency.city }}
                <div>
                    <va-button @click="getAgencyData()">
                        {{ $t('forms.selects.save') }}
                    </va-button>
                </div>
            </va-card>
        </div>
        <form>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.inputs.mainInfo')"
                             image="https://picsum.photos/300/200/?image=898"
                             overlay
                             titleOnImage
                             stripe="secondary">
                        <template slot="header">
                            <va-icon name="fa fa-cogs mr-3" color="danger"/>
                            <h5 class="mt-0 mb-0">{{ $t('cards.title.customHeader') }}</h5>
                        </template>
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.agencyName')"
                                        v-model="agencyName"
                                />
                            </div>

                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.city')"
                                        v-model="city"
                                />
                            </div>

                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.address')"
                                        v-model="address"
                                />
                            </div>

                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.email')"
                                        v-model="email"
                                />
                            </div>

                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.phone')"
                                        v-model="phone"
                                />
                            </div>

                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.mobile')"
                                        v-model="mobile"
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.selects.agencyDates')" stripe="gray">
                        <div class="row">
                            <div class="flex md6 sm6 xs12">
                                <va-date-picker
                                        :label="$t('forms.selects.addedDate')"
                                        :config="{locale: {firstDayOfWeek: 1}}"
                                        v-model="datepicker.customFirstDay"
                                        weekDays
                                />
                            </div>
                            <div class="flex md6 sm6 xs12">
                                <va-date-picker
                                        :label="$t('forms.selects.lastModifiedDate')"
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
                    <va-card :title="$t('forms.selects.agencySettings')" stripe="gray">
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.defaultPrice')"
                                        v-model="defaultPrice"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.defaultPageChars')"
                                        v-model="defaultPageChars"
                                />
                            </div>
                        </div>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('forms.selects.socialContacts')" stripe="gray">
                        <div class="row">
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.viber')"
                                        v-model="viber"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.skype')"
                                        v-model="skype"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.telegram')"
                                        v-model="telegram"
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
                                <va-input
                                        :label="$t('forms.selects.prefix')"
                                        v-model="prefix"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <va-input
                                        :label="$t('forms.selects.website')"
                                        v-model="website"
                                />
                            </div>
                            <div class="flex md4 sm6 xs12">
                                <!--<va-input-->
                                <!--:label="$t('forms.selects.agencyLogo')"-->
                                <!--v-model="agencyLogo">-->
                                <va-file-upload
                                        type="single"
                                        v-model="fileUpload"
                                        color="danger"
                                >
                                    <!--<va-button slot="append" style="margin-right: 0;" small>-->
                                    <!--UPLOAD-->
                                    <!--</va-button>-->
                                </va-file-upload>

                                <!--</va-input>-->
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
        <div class="flex xs12">
            <AgencyRelatedCollapse></AgencyRelatedCollapse>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import AgencyRelatedCollapse from './AgencyRelatedCollapse'

    export default {
        components: {
            AgencyRelatedCollapse
        },
        name: 'agency-card',
        data() {
            return {
                datepicker: {
                    time: '2018-05-08 14:10',
                    customFirstDay: '2018-05-09',
                },
                agencyLogo: '',
                agencyName: '',
                city: '',
                address: '',
                email: '',
                phone: '',
                mobile: '',
                addedDate: '',
                viber: '',
                comments: '',
                skype: '',
                defaultPrice: '',
                defaultPageChars: '',
                telegram: '',
                prefix: '',
                website: '',
                fileUpload: [],

                agency: {
                    agencyName: '',
                    id: 2,
                    city: '',
                },
            }
        },
        methods: {
            clear(field) {
                this[field] = ''
            },
            getAgencyData() {
                axios.get('/api/agency/' + this.agency.id)
                    .then(response => {
                        this.response = response.data;
                        this.agency.id = response.data;
                        console.log(response.data);
                        this.showResponse = true
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
        },
    }
</script>
