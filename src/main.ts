import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { apolloClient } from './services/backend/connect-graphql.ts'

const app = createApp(App)

provideApolloClient(apolloClient)
app.provide(DefaultApolloClient, apolloClient)

app.use(router)
app.mount('#app')
