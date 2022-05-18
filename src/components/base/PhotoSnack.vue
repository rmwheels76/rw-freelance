<template>
	<v-snackbar
		v-model="photoSnackbar"
		:timeout="1500"
		style="opacity:0.9;"
		app
	>
		<span v-html="snackbarText" />
		<!--
		<v-btn
			color="primary"
			class="ml-1"
			text
			@click="$store.commit('app/setPhotoSnackActive', false)"
		>
			<v-icon
				class="mr-1"
			>
				mdi-close
			</v-icon>
			Close
		</v-btn>
		-->
	</v-snackbar>
</template>

<script>
export default {
	name: 'PhotoSnack',
	components: {

	},
	data: () => ({
		debug: false,
	}),
	computed: {
		photoSnackbar: {
			// getter
			get: function () {
				return this.$store.state.app.photoSnackbar.on
			},
			// setter
			set: function (newValue) {
				this.$store.commit('app/setPhotoSnackActive', newValue)
			},
		},
		snackbarText () {
			return this.$store.state.app.photoSnackbar.text
		},
	},
	mounted () {

	},
	methods: {

	},
}
</script>
