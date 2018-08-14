<template>
	<ion-header>
		<ion-toolbar color="primary">
			<ion-buttons slot="start">
				<ion-back-button :default-href="backURL"/>
			</ion-buttons>
			<ion-title>{{ title }}</ion-title>
		</ion-toolbar>
	</ion-header>
</template>

<script>
import Vue from 'vue';

export default Vue.component('Toolbar', {
	name: 'Toolbar',
	props: { title: String, backURL: String },
	components: {
		// OtherComponent
	},
	data() {
		return {
			// greeting: 'Hello'
		};
	}
});
</script>