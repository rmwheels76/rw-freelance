<template>
	<div>
		<template
			v-if="!$vuetify.breakpoint.mdAndUp"
		>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						color="accent"
						class=""
						icon
						v-bind="attrs"
						v-on="on"
					>
						<v-icon
							color="white"
						>
							mdi-menu
						</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="item in nav2"
						:key="item.to"
					>
						<v-btn
							:color="item.black"
							:to="item.to"
							:small="isSmall"
							text
						>
							{{ item.label }}
						</v-btn>
					</v-list-item>
				</v-list>
			</v-menu>
		</template>
		<template v-else>
			<v-btn
				v-for="item in nav2"
				:key="item.to"
				:to="item.to"
				:color="item.color"
				text
				:small="isSmall"
			>
				{{ item.label }}
			</v-btn>
		</template>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	components: {
		// SocialMedia: () => import('@/components/SocialMedia'),
	},
	props: {
		isSmall: Boolean,
	},
	data: () => ({
		debug: false,
	}),
	computed: {
		isLoggedIn () {
			if (this.$store.state.app && Object.keys(this.$store.state.app).includes('user') && this.$store.state.app.user.isLoggedIn) {
				return true
			} else {
				return false
			}
		},
		nav2 () {
			if (this.$store.state.app.routes && this.$store.state.app.routes.length) {
				var retVal = []
				for (const i in this.$store.state.app.routes) {
					if (Object.keys(this.$store.state.app.routes[i]).includes('meta')) {
						if (Object.keys(this.$store.state.app.routes[i].meta).includes('loginRequired') && this.$store.state.app.routes[i].meta.loginRequired) {
							if (this.isLoggedIn) {
								retVal.push({ label: this.$store.state.app.routes[i].meta.label, to: this.$store.state.app.routes[i].path, color: 'info' })
							} else {
								// must be logged in
							}
						} else {
							retVal.push({ label: this.$store.state.app.routes[i].meta.label, to: this.$store.state.app.routes[i].path, color: 'info' })
						}
					}
				}
				return retVal
			}
			return []
		},
	},
	mounted () {
		console.log('vbreakpoint', this.$vuetify.breakpoint.md)
	},
	methods: {

	},
}
</script>
