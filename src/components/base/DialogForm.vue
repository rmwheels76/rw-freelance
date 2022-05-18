<template>
	<v-dialog
		v-model="dialog"
		:fullscreen="!$vuetify.breakpoint.mdAndUp"
		width="500"
		:overlay-opacity="(!$vuetify.breakpoint.mdAndUp?'0.6':'0.8')"
	>
		<v-card>
			<v-card-title
				class="text-h5 primary"
			>
				{{ dialogObj.title }}
				<v-spacer />
				<v-btn
					small
					text
					@click="dialog = false"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text class="text-black font-weight-medium mt-4 mb-2">
				<v-alert
					v-if="dialogAlert.on"
					:type="dialogAlert.type"
					border="left"
					colored-border
					elevation="3"
					class="mb-5 mt-3"
				>
					{{ dialogAlert.text }}
				</v-alert>

				<component :is="dialogObj.component" />

				<pre v-if="debug">
					{{ dialogObj }}
				</pre>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'DialogForm',
	components: {
		LoginForm: () => import('@/components/forms/LoginForm'),
		RegisterForm: () => import('@/components/forms/RegisterForm'),
	},
	data: () => ({
		debug: false,
	}),
	computed: {
		dialog: {
			// getter
			get: function () {
				return this.$store.state.app.dialog.on
			},
			// setter
			set: function (newValue) {
				this.$store.commit('app/setDialogActive', newValue)
			},
		},
		dialogObj () {
			if (this.$store.state.app.dialog) {
				return this.$store.state.app.dialog
			} else {
				return {}
			}
		},
		dialogAlert () {
			if (this.$store.state.app.alert && this.$store.state.app.alert.on && this.$store.state.app.alert.context === this.dialogObj.slug) {
				return this.$store.state.app.alert
			} else {
				return {}
			}
		},
	},
	mounted () {

	},
	methods: {

	},
}
</script>
