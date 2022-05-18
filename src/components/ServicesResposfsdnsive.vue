<template>
	<section
		id="services"
		class="overflow-hidden"
	>
		<v-row
			class="accent"
			no-gutters
		>
			<v-col
				class="hidden-sm-and-down"
				md="6"
			>
				<v-img
					:src="require('@/assets/services.png')"
					height="100%"
				/>
			</v-col>

			<v-col
				class="text-center pa-5"
				cols="12"
				md="6"
			>
				<v-row
					class="fill-height"
					align="center"
					justify="center"
				>
					<v-col cols="12">
						<base-bubble-2
							style="transform: translateX(55%)"
						/>
						<base-heading class="info--text">
							Services
						</base-heading>
						<base-text class="mb-5">
							Specializing in custom built websites utilizing modern javascript frameworks such as Vue.js and React.js.
						</base-text>
					</v-col>
					<v-col
						v-for="(service, i) in services"
						:key="i"
						class="text-center mb-3"
						md="6"
					>
						<v-avatar
							class="elevation-6 mb-2"
							color="#69A1BB"
							rounded
							size="84"
						>
							<v-icon
								dark
								size="52"
								v-text="service.icon"
							/>
						</v-avatar>

						<base-text>
							<div
								class="mb-2"
								v-text="service.name"
							/>
							<div
								class="text-h1 text-left"
							>
								{{ service.blurb }}
							</div>
							<template v-if="service.bullets && service.bullets.length">
								<v-list-item
									v-for="(bullet, b) in service.bullets"
									:key="b"
									class="text-left"
									style="text-indent:15px;"
								>
									<v-list-item-content>
										<v-list-item-title><v-icon>mdi-circle-small</v-icon> <span v-html="bullet" /></v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</template>
						</base-text>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	name: 'Services',

	data: () => ({
		services: [
			{
				name: 'Front-end',
				icon: 'mdi-monitor-cellphone',
				blurb: 'Modern, Dynamic front-ends...',
				bullets: [
					'Save money and time by leveraging existing libraries and frameworks.',
					'Website built as Single Page Applications (SPA).',
					'Utilize <a target="_NEW001" href="https://vuejs.org/">Vue.js</a> or <a target="_NEW002" href="https://reactjs.org/">React.js</a> Javascript Framework.',
					'Incorporate preferred modern UI/CSS framework for the right touch.',
				],
			},
			{
				name: 'Web Design',
				icon: 'mdi-pencil-outline',
				blurb: 'I am not a web designer, but hear me out...',
				bullets: [
					'Will work with client preferred professional designer',
					'Able to refer professional web designers upon request',
				],
			},
			{
				name: 'Development',
				icon: 'mdi-settings-outline',
				blurb: 'Make your website dynamic and interactive...',
				bullets: [
					'Full L.A.M.P stack services available',
					'Capture data with a MySQL or PostgreSQL database',
					'Wrap your database with RESTful API',
				],
			},
			{
				name: 'Support',
				icon: 'mdi-account',
				blurb: 'Responsive to client needs...',
				bullets: [
					'Will quickly address bugs upon discovery',
					'Consultation for wordpress support issues available as well',
				],
			},
		],
	}),
}
</script>
