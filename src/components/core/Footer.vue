<template>
	<v-footer
		:height="height"
		class="justify-center"
		color="black"
		app
	>
		<social-media :large="$vuetify.breakpoint.mdAndUp" />
		<v-spacer />
		<span
			class="text-center white--text"
			:style="!$vuetify.breakpoint.mdAndUp?'font-size:9px;':'font-size:12px;'"
		>
			&copy; 2022 RobW Freelance.<br v-if="!$vuetify.breakpoint.mdAndUp"> All Rights Reserved.
		</span>
		<v-spacer />
		<nav-bar :is-small="true" />
		<dialog-form :key="dialogKey" />
	</v-footer>
</template>

<script>
export default {
	name: 'CoreFooter',
	components: {
		SocialMedia: () => import('@/components/SocialMedia'),
		DialogForm: () => import('@/components/base/DialogForm'),
		navBar: () => import('@/components/core/NavBar'),
	},
	props: {
		height: Number,
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
		dialogKey () {
			return this.$store.state.app.dialogCounter
		},
	},
}
</script>
