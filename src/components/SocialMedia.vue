<template>
	<div>
		<v-btn
			v-for="(item, i) in items.slice(0, large ? items.length : 3)"
			:key="i"
			fab
			class="ma-2"
			color="accent"
			:small="$vuetify.breakpoint.mdAndUp"
			:x-small="!$vuetify.breakpoint.mdAndUp"
			@click="openExternal(item.url)"
		>
			<v-icon
				dark
				v-text="item.icon"
			/>
		</v-btn>
	</div>
</template>

<script>
export default {
	props: {
		large: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		items: [
			{
				name: 'Twitter',
				icon: 'mdi-twitter',
				url: 'https://twitter.com/w13260455',
			},
			{
				name: 'LinkedIn',
				icon: 'mdi-linkedin',
				url: 'https://twitter.com/w13260455',
			},
			/*
			{
				name: 'Facebook',
				icon: 'mdi-facebook',
			},
			{
				name: 'Email',
				icon: 'mdi-email',
			},
			{
				name: 'Phone',
				icon: 'mdi-phone',
			},
			*/
		],
	}),
	methods: {
		openExternal (url) {
			window.open(url, '_blank')
		},
	},
}
</script>
