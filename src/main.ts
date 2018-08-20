import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { IonicVueRouter, IonicAPI } from '@modus/ionic-vue';
import Page from './views/Page.vue';
import Home from './views/Home.vue';

import App from './App.vue';
import store from './store';
import './registerServiceWorker';

// const customFetch = (uri, options) => {
// 	const { header } = Hawk.client.header('http://example.com:8000/resource/1?b=1&a=2', 'POST', {
// 		credentials: credentials,
// 		ext: 'some-app-data'
// 	});
// 	options.headers.Authorization = header;
// 	return fetch(uri, options);
// };

// const httpLink = createHttpLink({ fetch: customFetch });

// const httpLink = new HttpLink({
// 	// You should use your grapqql URL here
// 	uri: 'https://api.github.com/graphql',
// 	fetch: {}
// 	// opts: {
// 	// 	headers: {
// 	// 		Authorization: `bearer ${localStorage.getItem('ghToken') || ''}`
// 	// 	}
// 	// }
// });

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const middlewareLink = new ApolloLink((operation, forward: any) => {
	operation.setContext({
		headers: {
			Authorization: `bearer ${process.env.VUE_APP_GH_TOKEN}`
		}
	});
	return forward(operation);
});

// use with apollo-client
const link = middlewareLink.concat(httpLink);

// Create the apollo client
const apolloClient = new ApolloClient({
	link,
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
		routes: [
			{ path: '/', component: Home },
			{ path: '/page', component: () => import(/* webpackChunkName: "page" */ './views/Page.vue') }
		]
	}),
	store,
	provide: apolloProvider.provide(),
	render: (h: any) => h(App)
} as any).$mount('#app');
