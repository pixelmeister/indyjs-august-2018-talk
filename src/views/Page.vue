<template>
	<ion-page class="ion-page">
		<toolbar title="Page" backURL="/"/>
		<ion-content class="ion-content" padding>
			<ion-card>
				<ion-card-content>
					<ion-card-title>Work in progress...</ion-card-title>
					<ion-icon size="large" name="heart" style="color: red"></ion-icon>

					<p>Github top 10 JS Repos:</p>
					<div v-if="$apollo.loading">Loading...</div>
					<ul v-else id="example-1">
						<li v-for="edge in search.edges" :key="edge.node.name">
							<span>{{ edge.node.name }}, {{ edge.node.stargazers.totalCount }} <ion-icon size="small" name="star" style="color: gold"></ion-icon> </span>
						</li>
					</ul>

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

//
export default {
	components: {
		Toolbar
	},
	apollo: {
		search: {
			query: StarGazers,
			// Optional result hook
			result(results) {
				const { data, loading, networkStatus } = results;
				// console.log('We got some result:', data);
			}
		}
	},
	data() {
		return {
			// search: null
		};
	},
	methods: {
		goHome() {
			this.$router.back();
		}
	}
};
</script>