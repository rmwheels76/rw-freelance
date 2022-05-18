<template>
	<section
		id="dashboard"
		class="overflow-auto light"
		style="height:100%;"
	>
		<v-card
			class="mx-auto ml-5 mr-5 mt-10 mb-10 info"
			elevation="5"
		>
			<v-card-text>
				<p class="text-h4 text--primary">
					Dashboard
					<span class="float-right">
						<v-switch
							v-model="debug"
							color="accent"
							:label="'Debug: '+(debug?'On':'Off')"
						/>
					</span>
				</p>
				<div class="text--primary">
					<v-btn
						text
					>
						Update Information
					</v-btn>
				</div>
			</v-card-text>
			<div
				v-if="debug"
				class="pa-10"
				style="max-width:800px;overflow:hidden;"
			>
				<v-divider />

				<h5
					class="mt-5"
				>
					Debug
				</h5>
				<pre class="text-caption">{{ data }}</pre>
			</div>
		</v-card>
	</section>
</template>

<script>
export default {
	name: 'Dashboard',
	data: () => ({
		debug: false,
	}),
	computed: {
		data () {
			return this.$store.state.app
		},
		user () {
			return this.$store.state.app.user
		},
	},
	mounted () {
		for (let i = 0; i < 3; i++) {
			setTimeout(function () { alert (i)	}, 1000 + i)
		}
	},
}
</script>
