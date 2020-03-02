<template>
    <el-card shadow="hover">
        <div slot="header" class="clearfix">
            <span>ATTACHED FILES</span>
        </div>
        <el-collapse accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <va-icon name="fas fa-file-download" style="padding-right: 10px"/>
                    ORIGINALS (4)
                </template>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
                <template slot="title">
                    <va-icon name="fas fa-file-word" style="padding-right: 10px"/>
                    TRANSLATED (5)
                </template>
            </el-collapse-item>
        </el-collapse>
    </el-card>
    <!--<div class="collapse-page">-->
    <!--<div class="row">-->
    <!--<div class="flex xs12">-->
    <!--<va-card :title="$t('collapse.attachedFiles')"-->
    <!--stripe="info">-->
    <!--<va-accordion>-->
    <!--<va-collapse>-->
    <!--<span slot="header"> ORIGINALS (4) </span>-->
    <!--<div slot="body">-->
    <!--<div>-->
    <!--<div class="row align&#45;&#45;center">-->
    <!--<div class="flex xs12">-->
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
    <!--&lt;!&ndash;</va-card>&ndash;&gt;-->
    <!--</div>-->
    <!--</div>-->
    <!--</va-collapse>-->
    <!--<va-collapse withBackground>-->
    <!--<span slot="header"> TRANSLATED (4) </span>-->
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
    import files from '../../../data/allFiles.json'

    export default {
        name: "order-originals-collapse",
        data() {
            return {
                term: null,
                perPage: '3',
                perPageOptions: ['2', '3', '4', '5'],
                files: files,
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
