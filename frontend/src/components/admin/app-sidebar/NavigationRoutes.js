export const navigationRoutes = {
    root: {
        name: '/',
        displayName: 'navigationRoutes.home',
    },
    routes: [
        {
            name: 'mainpage',
            displayName: 'menu.main-page',
            meta: {
                iconClass: 'fas fa-home',
            },
        },
        {
            name: 'References',
            displayName: 'menu.references',
            meta: {
                iconClass: 'fas fa-book',
            },
            children: [
                {
                    name: 'languages',
                    displayName: 'menu.languages',
                    meta: {
                        iconClass: 'fas fa-language',
                    },
                },
                {
                    name: 'calculation-types',
                    displayName: 'menu.calculation-types',
                    meta: {
                        iconClass: 'fas fa-calculator',
                    },
                },
                {
                    name: 'topics',
                    displayName: 'menu.topics',
                    meta: {
                        iconClass: 'fas fa-atlas',
                    },
                },
                {
                    name: 'translation-types',
                    displayName: 'menu.translation-types',
                    meta: {
                        iconClass: 'fas fa-globe-europe',
                    },
                },
                {
                    name: 'payment-methods',
                    displayName: 'menu.payment-methods',
                    meta: {
                        iconClass: 'fab fa-cc-visa',
                    },
                },
                {
                    name: 'currencies',
                    displayName: 'menu.currencies',
                    meta: {
                        iconClass: 'fas fa-dollar-sign',
                    },
                },
                {
                    name: 'cat-tools',
                    displayName: 'menu.cat-tools',
                    meta: {
                        iconClass: 'fas fa-tools',
                    },
                },
            ],
        },
        {
            name: 'statistics',
            displayName: 'menu.statistics',
            meta: {
                iconClass: 'fas fa-chart-pie',
            },
        },
        {
            name: 'settings',
            displayName: 'menu.settings',
            meta: {
                iconClass: 'fas fa-cogs',
            },
        }
    ]
}
