<template>
	<v-card
		class="mx-auto mb-5"
		outlined
		color="white"
		elevation="5"
	>
		<v-row no-gutters>
			<v-col
				class="primary pa-3"
			>
				<v-template v-if="leftToRight">
					<div class="float-left pl-3">
						<v-avatar
							color="accent"
							size="60"
							rounded
							outlined
						>
							<v-icon
								size="32"
								color="primary"
								x-large
								v-text="icon"
							/>
						</v-avatar>
					</div>
					<div class="text-h5 accent--text float-right mr-5 mt-3 font-weight-bold">
						{{ name }}
					</div>
				</v-template>
				<v-template v-else>
					<div class="text-h5 accent--text mt-3 ml-5 float-left font-weight-bold">
						{{ name }}
					</div>
					<div class="float-right pr-3">
						<v-avatar
							color="accent"
							size="60"
							rounded
							outlined
						>
							<v-icon
								size="32"
								color="primary"
								x-large
								v-text="icon"
							/>
						</v-avatar>
					</div>
				</v-template>
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col class="pa-3 text-center">
				<div class="text-left">
					<div class="font-weight-bold">
						{{ blurb }}
					</div>
					<div
						v-for="(bullet, b) in bullets"
						:key="b"
						class="text-caption text-left mt-0 mb-0"
						style="text-indent:15px;"
					>
						<v-icon>mdi-circle-small</v-icon> <span v-html="bullet" />
					</div>
				</div>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
// import GradientPattern from '@/components/base/GradientPattern'

export default {
	name: 'GetInTouch',
	props: {
		name: String,
		icon: String,
		blurb: String,
		bullets: Array,
		leftToRight: Boolean,
	},
	data: () => ({
		cardHeight: 146,
		isEven: false,
	}),
	computed: {

	},
	mounted () {

	},
	methods: {
		addServiceButton (name) {
			console.log('adding service button', name)
			if (this.serviceButtons && !this.serviceButtons.includes(name)) {
				this.serviceButtons.push(name)
			}
		},
	},
	/*
	watch: {
		serviceButtons(newVal){
			setTimeout(this.serviceButtons.push(), 3000)
		}
	},
	*/
}
</script>

<style scoped>

</style>
