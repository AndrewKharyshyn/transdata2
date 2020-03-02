<template>
    <el-row :gutter="24">
        <el-card shadow="always">
            <va-tabs grow v-model="tabsState">
                <va-tab>
                    <va-icon name="fas fa-list" style="padding-right: 10px"/>
                    {{$t('dashboard.mainPageTabs.orders')}}
                </va-tab>
                <va-tab>
                    <va-icon name="fas fa-briefcase" style="padding-right: 10px"/>
                    {{$t('dashboard.mainPageTabs.documents')}}
                </va-tab>
                <va-tab>
                    <va-icon name="fas fa-landmark" style="padding-right: 10px"/>
                    {{$t('dashboard.mainPageTabs.agencies')}}
                </va-tab>
                <va-tab>
                    <va-icon name="far fa-credit-card" style="padding-right: 10px"/>
                    {{$t('dashboard.mainPageTabs.payment')}}
                </va-tab>
            </va-tabs>
            <va-separator/>
            <component :is="tabs[tabsState]"/>
        </el-card>
    </el-row>
</template>

<script>
    import OrdersTab from './OrdersTab'
    import DocumentsTab from './DocumentsTab'
    import AgenciesTab from './AgenciesTab'
    import PaymentTab from './PaymentTab'

    export default {
        name: 'DashboardTabs',
        components: {
            OrdersTab,
            DocumentsTab,
            AgenciesTab,
            PaymentTab
        },
        data() {
            return {
                tabsState: 0,
                tabs: [
                    'OrdersTab',
                    'DocumentsTab',
                    'AgenciesTab',
                    'PaymentTab'
                ],
            }
        },
    }
</script>
