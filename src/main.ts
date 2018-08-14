import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { IonicVueRouter, IonicAPI } from '@modus/ionic-vue';
import Page from './views/Page.vue';
import Home from './views/Home.vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

const httpLink = new HttpLink({
	// You should use your grapqql URL here
	uri: 'https://api.github.com/graphql'
});

// Create the apollo client
const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true
});

// Install the vue plugin
Vue.use(VueApollo);
Vue.use(IonicVueRouter);
Vue.use(IonicAPI);

Vue.config.ignoredElements.push(/^ion-/);

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
	defaultClient: apolloClient
});

new Vue({
	router: new IonicVueRouter({
		routes: [{ path: '/', component: Home }, { path: '/page', component: Page }]
	}),
	store,
	provide: apolloProvider.provide(),
	render: h => h(App)
}).$mount('#app');
