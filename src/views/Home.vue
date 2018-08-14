<template>
	<ion-page class="ion-page">
		<toolbar title="Home"/>
		<ion-content class="ion-content" padding>
			<router-link to="/page">Go to GitHub GraphQL page</router-link>
		</ion-content>
	</ion-page>
</template>

<script>
import Vue from 'vue';
import Toolbar from '../components/ToolBar.vue';

export default {
	components: {
		Toolbar
	},
	data() {
		return {
			// greeting: 'Hello'
		};
	}
};
</script>