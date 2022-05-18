<template>
	<section
		id="get-in-touch"
		class="overflow-hidden"
		style="height:100%;"
	>
		<v-row
			class="info white--text"
			style="height:100%;"
			no-gutters
		>
			<v-col
				class="hidden-sm-and-down"
				md="6"
			>
				<!--
				<v-img
					:src="require('@/assets/unsplash/dillon-shook-mY3_bvR74fI-unsplash2.jpg')"
					height="100%"
					alt="Photo by Dillon Shook on Unsplash"
				/>
				-->
				<v-img
					:src="imageSrc"
					height="100vh"
					transition="slide-x-transition"
					:alt="imageObj.alt"
					@mouseover="$store.commit('app/setPhotoSnack', imageKey)"
				/>
			</v-col>

			<v-col
				class="pa-5 sectionBG"
				cols="12"
				md="6"
			>
				<!-- <base-bubble-1 /> -->

				<base-heading class="mb-5 black--text">
					Get In Touch
				</base-heading>

				<v-sheet
					color="transparent"
					max-width="600"
				>
					<v-alert
						v-model="contactSuccess"
						type="success"
						transition="slide-x-transition"
						dismissible
						light
						border="top"
						color="secondary"
						outlined
					>
						Message sent successfully!
					</v-alert>
					<v-alert
						v-model="contactFailed"
						type="error"
						transition="slide-x-transition"
						dismissible
						border="top"
						color="error"
						outlined
					>
						Error sending message.  Please try again..
					</v-alert>

					<v-text-field
						v-model="name"
						color="accent"
						label="Name"
						solo
						flat
					/>

					<v-text-field
						v-model="email"
						color="info"
						label="Email"
						solo
						flat
					/>

					<v-text-field
						v-model="subject"
						color="info"
						label="Subject"
						solo
						flat
					/>

					<v-textarea
						v-model="message"
						color="info"
						label="Message"
						solo
						flat
						:height="$vuetify.breakpoint.mdAndUp ? 180 : 80"
					/>

					<v-btn
						color="accent"
						width="200"
						x-large
						:block="!$vuetify.breakpoint.mdAndUp"
						@click="doContact()"
					>
						Send
					</v-btn>
				</v-sheet>
			</v-col>
		</v-row>
	</section>
</template>

<script>
import { dataService } from '@/services/data'
// import GradientPattern from '@/components/base/GradientPattern'

export default {
	name: 'GetInTouch',
	data: () => ({
		imageKey: 'deskwood',
		name: '', // 'Robert Test',
		email: '', // 'test@test.com',
		subject: '', // 'This is a test',
		message: '', // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		contactSuccess: false,
		contactFailed: false,
	}),
	computed: {
		user () {
			return this.$store.state.app.user
		},
		userId () {
			if (this.user && this.user.data && this.user.data.user_id) {
				return this.user.data.user_id
			} else {
				return false
			}
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
	},
	methods: {
		async doContact () {
			this.contactSuccess = false
			this.contactFailed = false
			const data = {
				token: 'fdjklw789fbvw754TtsHnmuI',
				action: 'contact',
				userId: this.userId ? this.userId : null,
				name: this.name,
				email: this.email,
				subject: this.subject,
				message: this.message,
			}
			const response = await dataService.getData(data)
			console.log('data service response ', response)
			if (response.status) {
				this.contactSuccess = true
				this.name = ''
				this.email = ''
				this.subject = ''
				this.message = ''
			} else {
				this.contactFailed = true
			}
		},
	},
}
</script>

<style scoped>
.sectionBG {
	background-color: #F1F5F9;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23F1F5F9' width='11' height='11'/%3E%3Crect fill='%23f0f4f9' x='10' width='11' height='11'/%3E%3Crect fill='%23f0f4f8' y='10' width='11' height='11'/%3E%3Crect fill='%23eff3f8' x='20' width='11' height='11'/%3E%3Crect fill='%23eef3f7' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23eef2f7' y='20' width='11' height='11'/%3E%3Crect fill='%23edf2f7' x='30' width='11' height='11'/%3E%3Crect fill='%23ecf1f6' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23ecf1f6' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23ebf0f5' y='30' width='11' height='11'/%3E%3Crect fill='%23eaf0f5' x='40' width='11' height='11'/%3E%3Crect fill='%23eaeff4' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23e9eef4' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23e8eef4' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23e8edf3' y='40' width='11' height='11'/%3E%3Crect fill='%23e7edf3' x='50' width='11' height='11'/%3E%3Crect fill='%23e6ecf2' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23e6ecf2' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23e5ebf2' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23e4ebf1' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23e4eaf1' y='50' width='11' height='11'/%3E%3Crect fill='%23e3eaf0' x='60' width='11' height='11'/%3E%3Crect fill='%23e3e9f0' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23e2e8f0' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23e1e8ef' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23e1e7ef' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23e0e7ee' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23dfe6ee' x='70' width='11' height='11'/%3E%3Crect fill='%23dfe6ee' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23dee5ed' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23dde5ed' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23dde4ec' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23dce4ec' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23dbe3eb' x='80' width='11' height='11'/%3E%3Crect fill='%23dbe3eb' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23dae2eb' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23dae1ea' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d9e1ea' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23d8e0e9' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23d8e0e9' x='90' width='11' height='11'/%3E%3Crect fill='%23d7dfe9' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d6dfe8' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d6dee8' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d5dee7' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d4dde7' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d4dde7' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d3dce6' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d3dbe6' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d2dbe5' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d1dae5' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d1dae5' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23d0d9e4' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23cfd9e4' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23cfd8e3' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23ced8e3' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23cdd7e3' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23cdd7e2' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ccd6e2' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ccd6e1' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23CBD5E1' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	/*
	background-color: #F8FAFC;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23F8FAFC' width='11' height='11'/%3E%3Crect fill='%23f6f8fb' x='10' width='11' height='11'/%3E%3Crect fill='%23f4f7fa' y='10' width='11' height='11'/%3E%3Crect fill='%23f3f5f8' x='20' width='11' height='11'/%3E%3Crect fill='%23f1f4f7' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23eff2f6' y='20' width='11' height='11'/%3E%3Crect fill='%23edf1f5' x='30' width='11' height='11'/%3E%3Crect fill='%23ebeff4' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23eaeef3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23e8ecf1' y='30' width='11' height='11'/%3E%3Crect fill='%23e6ebf0' x='40' width='11' height='11'/%3E%3Crect fill='%23e4e9ef' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23e3e8ee' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23e1e6ed' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23dfe5eb' y='40' width='11' height='11'/%3E%3Crect fill='%23dde3ea' x='50' width='11' height='11'/%3E%3Crect fill='%23dbe2e9' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23dae0e8' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d8dfe7' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d6dee6' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d5dce4' y='50' width='11' height='11'/%3E%3Crect fill='%23d3dbe3' x='60' width='11' height='11'/%3E%3Crect fill='%23d1d9e2' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23cfd8e1' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23ced6e0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23ccd5df' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23cad3dd' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23c8d2dc' x='70' width='11' height='11'/%3E%3Crect fill='%23c7d0db' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23c5cfda' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23c3cdd9' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23c2ccd8' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23c0cad7' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23bec9d5' x='80' width='11' height='11'/%3E%3Crect fill='%23bdc7d4' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23bbc6d3' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23b9c4d2' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23b8c3d1' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23b6c1d0' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23b4c0cf' x='90' width='11' height='11'/%3E%3Crect fill='%23b3bfcd' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23b1bdcc' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23afbccb' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23aebaca' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23acb9c9' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23aab7c8' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23a9b6c7' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23a7b4c5' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23a6b3c4' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23a4b1c3' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23a2b0c2' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23a1afc1' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%239fadc0' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%239eacbf' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%239caabe' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%239aa9bc' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2399a7bb' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2397a6ba' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%2396a4b9' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%2394A3B8' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	*/
}
</style>
