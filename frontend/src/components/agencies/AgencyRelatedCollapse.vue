<template>
    <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>RELATED INFO</span>
        </div>
        <div class="row">
            <div class="flex xs12">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item name="1">
                        <template slot="title">
                            <va-icon name="far fa-folder-open" style="padding-right: 10px"/>
                            ORDERS (45)
                        </template>
                        <div>Consistent with real life: in line with the process and logic of real life, and comply with
                            languages and habits that the users are used to;
                        </div>
                        <div>Consistent within interface: all elements should be consistent, such as: design style,
                            icons
                            and texts, position of elements, etc.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <va-icon name="fas fa-user-friends" style="padding-right: 10px"/>
                            MANAGERS (3)
                        </template>
                        <div>Operation feedback: enable the users to clearly perceive their operations by style updates
                            and
                            interactive effects;
                        </div>
                        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                        <template slot="title">
                            <va-icon name="fas fa-file-invoice" style="padding-right: 10px"/>
                            PAYERS (8)
                        </template>
                        <div>Simplify the process: keep operating process simple and intuitive;</div>
                        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly
                            understand
                            and make decisions;
                        </div>
                        <div>Easy to identify: the interface should be straightforward, which helps the users to
                            identify
                            and frees them from memorizing and recalling.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </el-card>

    <!--<div class="collapse-page">-->
    <!--<div class="row">-->
    <!--<div class="flex xs12">-->
    <!--<va-card :title="$t('collapse.related')"-->
    <!--stripe="info">-->
    <!--<va-accordion>-->
    <!--<va-collapse>-->
    <!--<span slot="header"> ORDERS (28) </span>-->
    <!--<div slot="body">-->
    <!--<div>-->
    <!--<div class="row align&#45;&#45;center">-->
    <!--<div class="flex xs12 md6">-->
    <!--<va-input-->
    <!--:value="term"-->
    <!--:placeholder="$t('tables.search')"-->
    <!--@input="search"-->
    <!--&gt;-->
    <!--<va-icon name="fa fa-search" slot="prepend"/>-->
    <!--</va-input>-->
    <!--</div>-->

    <!--<div class="flex xs12 md3 offset&#45;&#45;md3">-->
    <!--<va-select-->
    <!--v-model="perPage"-->
    <!--:label="$t('tables.perPage')"-->
    <!--:options="perPageOptions"-->
    <!--/>-->
    <!--</div>-->
    <!--</div>-->

    <!--<va-data-table-->
    <!--:fields="fields"-->
    <!--:data="filteredData"-->
    <!--:per-page="parseInt(perPage)"-->
    <!--@row-clicked="showOrder"-->
    <!--clickable-->
    <!--striped-->
    <!--hoverable-->
    <!--&gt;-->

    <!--</va-data-table>-->
    <!--</div>-->
    <!--</div>-->
    <!--</va-collapse>-->
    <!--<va-collapse withBackground>-->
    <!--<span slot="header"> MANAGERS (3) </span>-->
    <!--<div slot="body">-->
    <!--<div>-->
    <!--<div class="row align&#45;&#45;center">-->
    <!--<div class="flex xs12 md6">-->
    <!--<va-input-->
    <!--:value="term"-->
    <!--:placeholder="$t('tables.search')"-->
    <!--@input="search"-->
    <!--&gt;-->
    <!--<va-icon name="fa fa-search" slot="prepend"/>-->
    <!--</va-input>-->
    <!--</div>-->

    <!--<div class="flex xs12 md3 offset&#45;&#45;md3">-->
    <!--<va-select-->
    <!--v-model="perPage"-->
    <!--:label="$t('tables.perPage')"-->
    <!--:options="perPageOptions"-->
    <!--/>-->
    <!--</div>-->
    <!--</div>-->

    <!--<va-data-table-->
    <!--:fields="fields"-->
    <!--:data="filteredData"-->
    <!--:per-page="parseInt(perPage)"-->
    <!--@row-clicked="showOrder"-->
    <!--clickable-->
    <!--striped-->
    <!--hoverable-->
    <!--&gt;-->
    <!--</va-data-table>-->
    <!--</div>-->
    <!--</div>-->
    <!--</va-collapse>-->
    <!--<va-collapse withBackground>-->
    <!--<span slot="header"> PAYERS (8) </span>-->
    <!--<div slot="body">-->
    <!--<div>-->
    <!--<div class="row align&#45;&#45;center">-->
    <!--<div class="flex xs12 md6">-->
    <!--<va-input-->
    <!--:value="term"-->
    <!--:placeholder="$t('tables.search')"-->
    <!--@input="search"-->
    <!--&gt;-->
    <!--<va-icon name="fa fa-search" slot="prepend"/>-->
    <!--</va-input>-->
    <!--</div>-->

    <!--<div class="flex xs12 md3 offset&#45;&#45;md3">-->
    <!--<va-select-->
    <!--v-model="perPage"-->
    <!--:label="$t('tables.perPage')"-->
    <!--:options="perPageOptions"-->
    <!--/>-->
    <!--</div>-->
    <!--</div>-->

    <!--<va-data-table-->
    <!--:fields="fields"-->
    <!--:data="filteredData"-->
    <!--:per-page="parseInt(perPage)"-->
    <!--@row-clicked="showOrder"-->
    <!--clickable-->
    <!--striped-->
    <!--hoverable-->
    <!--&gt;-->
    <!--</va-data-table>-->
    <!--</div>-->
    <!--</div>-->
    <!--</va-collapse>-->
    <!--</va-accordion>-->
    <!--</va-card>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
</template>

<script>
    import {debounce} from 'lodash'

    export default {
        name: "agency-related-collapse",
        data() {
            return {
                term: null,
                perPage: '3',
                perPageOptions: ['2', '3', '4', '5'],
                // managers: managers,
                // orders: orders,
                // payers: payers,
            }
        },
        computed: {
            fields() {
                return [{
                    name: 'fileName',
                    title: this.$t('tables.headings.fileName'),
                    width: '20%',
                    // dataClass: 'text-center',
                    sortField: 'code',
                }, {
                    name: 'comments',
                    title: this.$t('tables.headings.comments'),
                    width: '20%',
                    sortField: 'comments',
                }, {
                    name: 'addedDate',
                    title: this.$t('tables.headings.addedDate'),
                    width: '20%',
                    sortField: 'addedDate',
                }, {
                    name: 'fileSize',
                    title: this.$t('tables.headings.fileSize'),
                    width: '20%',
                    sortField: 'fileSize',
                }]
            },
            filteredData() {
                if (!this.term || this.term.length < 1) {
                    return this.files
                }

                return this.files.filter(item => {
                    return item.fileName.toLowerCase().includes(this.term.toLowerCase())
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

<style scoped>

</style>
