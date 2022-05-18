<template>
	<component
		:is="tag"
		class="display-3 v-heading mt-6 mb-3 font-weight-medium"
		:class="$vuetify.breakpoint.mdAndUp?'text-h2':'text-h4'"
	>
		<slot />
	</component>
</template>

<script>
export default {
	name: 'BaseHeading',

	props: {
		tag: {
			type: String,
			default: 'h1',
		},
	},
}
</script>

<style lang="sass">
	.v-heading
		letter-spacing: 3px !important
</style>
