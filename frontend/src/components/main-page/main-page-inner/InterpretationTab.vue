<template>
  <div class="pt-2">
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
              <div class="flex xs12">
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
                  :label="$t('forms.selects.pricePerDay')"
                  v-model="pricePerDay"
                />
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  :label="$t('forms.selects.daysCount')"
                  v-model="daysCount"
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

  export default {
    name: 'translation-tab',
    components: {VaCard},
    data() {
      return {
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
        orderDescription: '',
        pricePerDay: '',
        daysCount: '',
        totalCost: '',
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
