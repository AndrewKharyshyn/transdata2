<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg12">
        <va-list fit class="mb-2">
          <template v-for="(menuItem, i) in menuItems">
            <va-item :key="'item' + menuItem.id" clickable @click="notify(menuItem.name)">
              <va-item-section avatar>
                <va-avatar>
                  <img :src="menuItem.picture" :alt="menuItem.name">
                </va-avatar>
              </va-item-section>

              <va-item-section>
                <va-item-label>
                  {{ menuItem.name }}
                </va-item-label>

                <va-item-label caption>
                  {{ menuItem.description }}
                </va-item-label>
              </va-item-section>

              <va-item-section side>
                <va-icon name="fa fa-eye" color="gray"/>
              </va-item-section>
            </va-item>

            <va-list-separator v-if="i < menuItem.length - 1" :key="'separator' + menuItem.id"/>
          </template>
        </va-list>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../data/menu-data.json'

  export default {
    name: 'payment-tab',
    data() {
      return {
        menuItems: data.slice(10, 14),
        appBanners: true,
        banners: true,
        notifications: true,
      }
    },
    methods: {
      notify(name) {
        this.showToast(`${name}`, {
          position: 'bottom-center',
        })
      },
    },
  }
</script>
