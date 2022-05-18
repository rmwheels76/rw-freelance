<template>
	<section
		id="welcome"
	>
		<v-row
			no-gutters
			class="mb-5"
		>
			<v-col
				class="hidden-sm-and-down"
				md="6"
			>
				<v-img
					:src="imageSrc"
					height="100vh"
					transition="slide-x-transition"
					alt="Photo by Alexandru Acea on Unsplash"
					@mouseover="$store.commit('app/setPhotoSnack', imageKey)"
				/>
			</v-col>
			<v-col
				class="align-content-space-between layout wrap"
				cols="12"
				md="6"
				:pa-8="$vuetify.breakpoint.smAndDown"
			>
				<base-bubble-3
					style="transform: rotate(180deg);text-align: right;"
				/>
				<v-row
					align="center"
					class="pl-15"
				>
					<v-col
						cols="10"
						md="6"
					>
						<base-heading>
							Welcome!fdafdaf
						</base-heading>
						<base-text>
							Thank you for visiting my website.  I have created this website to demonstrate a minimum level of web programming capabilities.  This website consists of a Vuejs Javascript front-end, a PHP REST API data service, wrapping a MySQL database, served on a Linux/Apache webserver.  I personally manage and host all aspects of this website.  Please submit any Questions or Comments using the form below.  Feel free to register here.  You may use bogus information, as no information will be shared, and registration data will be purged afer 72 hours.
						</base-text>
						<v-btn
							class="mt-4"
							color="accent"
							large
							@click="$store.commit('app/setDialogActive', true)"
						>
							Learn More!
						</v-btn>

						<pre v-if="debug">
							{{ appState }}
						</pre>
					</v-col>
				</v-row>

				<base-bubble-2
					style="transform: rotate(180deg) translate(-200px, -15%)"
				/>
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	components: {

	},
	props: {

	},
	data: () => ({
		debug: false,
		imageKey: 'deskstormtrooper',
	}),
	computed: {
		appState () {
			return this.$store.state.app
		},
		imageObj () {
			if (this.$store.state.app.images && Object.keys(this.$store.state.app.images).length && Object.keys(this.$store.state.app.images).includes(this.imageKey)) {
				return this.$store.state.app.images[this.imageKey]
			}
			return false
		},
		imageSrc () {
			if (this.imageObj && Object.keys(this.imageObj).length && Object.keys(this.imageObj).includes('src')) {
				const fileName = this.imageObj.src
				return require(`../assets/unsplash/${fileName}.jpg`) // the module request
			} else {
				return ''
			}
		},
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
	},
	watch: {

	},
	async created () {

	},
	methods: {

	},
}
</script>
