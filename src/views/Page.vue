<template>
	<ion-page class="ion-page">
		<toolbar title="Page" backURL="/"/>
		<ion-content class="ion-content" padding>
			<ion-card>
				<ion-card-content>
					<ion-card-title>Work in progress</ion-card-title>
					<ion-icon size="large" name="heart" style="color: red"></ion-icon>

					<p>Star Wars Query:</p>
				</ion-card-content>
			</ion-card>
			<ion-button @click="goHome">Go home</ion-button>
		</ion-content>
	</ion-page>
</template>

<script>
import Vue from 'vue';
import Toolbar from '../components/ToolBar.vue';
import StarGazers from '../queries/StarGazers';

export default {
	components: {
		Toolbar
	},
	apollo: {
		starGazers: StarGazers
	},
	data() {
		return {
			// greeting: 'Hello'
		};
	},
	methods: {
		goHome() {
			this.$router.back();
		}
	}
};
</script>