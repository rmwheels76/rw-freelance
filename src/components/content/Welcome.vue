<template>
	<div
		:style="theStyle"
	>
		<base-bubble-3
			style="transform: rotate(180deg);text-align: right;"
		/>
		<base-heading>
			Welcome!
		</base-heading>
		<base-text>
			<pre v-if="debug">
				{{ appState.innerHeight }}
				{{ appState }}
			</pre>
			<p>
				Thank you for visiting my website.  I have created this website to demonstrate a minimum level of web programming capabilities.  This website consists of a Vuejs Javascript front-end, a PHP REST API data service, wrapping a MySQL database, served on a Linux/Apache webserver.  I personally manage and host all aspects of this website.
			</p>
		</base-text>
		<v-btn
			class="mt-4 mr-4"
			color="accent"
			x-large
			@click="openRegister()"
		>
			Register Now!
		</v-btn>
	</div>
</template>

<script>
export default {
	components: {

	},
	props: {
		theStyle: String,
	},
	data: () => ({
		debug: false,
	}),
	computed: {
		appState () {
			return this.$store.state.app
		},
		/*
		windowStyle () {
			// const height = this.$store.state.app.innerHeight - (this.header + this.footer)
			// position:fixed;right: 0;overflow-y:scroll;overflow-x:hidden;padding:25px;
			// ';padding-top:' + this.appState.screen.header + 'px;padding-bottom:' + this.appState.screen.footer + ';height:' + this.appState.screen.body + 'px;'
			if (this.$vuetify.breakpoint.smAndDown) {
				return 'width:100%;padding:25px;height:' + this.appState.screen.body + 'px;z-index:10;margin-top:' + this.appState.screen.header + 'px;'
			} else {
				return 'width:50%;position:fixed;right:0;overflow-y:scroll;overflow-x:hidden;padding:25px;height:' + this.appState.screen.body + 'px;'
			}
		},
		*/
	},
	watch: {

	},
	async created () {

	},
	methods: {
		openRegister () {
			this.$store.dispatch('app/resetDialog')
			this.$store.commit('app/setDialog', 'register')
			this.$store.commit('app/setDialogActive', true)
		},
		openLogin () {
			this.$store.dispatch('app/resetDialog')
			this.$store.commit('app/setDialog', 'login')
			this.$store.commit('app/setDialogActive', true)
		},
	},
}
</script>
