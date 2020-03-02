<template>
    <div class="grid row">
        <div class="flex xs12 md12">
            <el-row :gutter="24">
                <el-card shadow="always">
                    <div class="row">
                        <div class="flex xs12">
                            <va-tabs grow v-model="tabsState" style="width: 400px;">
                                <va-tab>
                                    {{$t('dashboard.mainPageTabs.translation')}}
                                </va-tab>
                                <va-tab>
                                    {{$t('dashboard.mainPageTabs.interpretation')}}
                                </va-tab>
                            </va-tabs>
                            <va-separator/>
                            <component :is="tabs[tabsState]"/>
                        </div>
                    </div>
                </el-card>
            </el-row>
        </div>
    </div>
</template>

<script>
    import TranslationTab from './TranslationTab'
    import InterpretationTab from './InterpretationTab'

    export default {
        name: 'create-order',
        components: {
            TranslationTab,
            InterpretationTab
        },
        data() {
            return {
                // tabValue: 0,
                tabsState: 0,
                tabs: [
                    'TranslationTab',
                    'InterpretationTab'
                ],
            }
        },
        computed: {
            computedStyle() {
                return {
                    backgroundColor: this.$themes.primary,
                }
            },
        },
    }
</script>

<style lang="scss">
    .grid {
        &__container {
            min-height: 3rem;
            color: $white;
            border-radius: 0.5rem;
        }
    }
</style>
