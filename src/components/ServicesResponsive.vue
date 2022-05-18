<template>
	<section
		id="get-in-touch"
		style="height:100%;"
	>
		<v-row
			class="info white--text"
			style="height:100%;"
			no-gutters
		>
			<v-col
				class="pa-5 sectionBG"
				cols="12"
				md="7"
				lg="6"
			>
				<base-heading
					tag="h6"
					class="ml-3 mb-5 black--text"
				>
					Services
				</base-heading>

				<v-sheet
					color="transparent"
					class="pa-5"
				>
					<div
						v-for="(service, i) in services"
						:key="i"
						cols="12"
						@mouseover="addServiceButton(service.name)"
					>
						<display-card
							:blurb="service.blurb"
							:icon="service.icon"
							:name="service.name"
							:bullets="service.bullets"
							:left-to-right="i%2"
						/>
					</div>
				</v-sheet>
			</v-col>
			<v-col
				class="hidden-sm-and-down"
				md="5"
				lg="6"
			>
				<v-img
					:src="imageSrc"
					height="100vh"
					transition="slide-x-reverse-transition"
					:alt="imageObj.alt"
					@mouseover="$store.commit('app/setPhotoSnack', imageKey)"
				/>
			</v-col>
		</v-row>
	</section>
</template>

<script>
import { dataService } from '@/services/data'
import DisplayCard from '@/components/base/DisplayCard'

export default {
	name: 'GetInTouch',
	components: {
		DisplayCard,
	},
	data: () => ({
		cardHeight: 146,
		imageKey: 'architecture',
		serviceButtons: [],
		services: [
			{
				name: 'Front End',
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
				name: 'Back End',
				icon: 'mdi-settings-outline',
				blurb: 'Make your website dynamic and interactive...',
				bullets: [
					'Full L.A.M.P stack services available',
					'Capture data with a MySQL or PostgreSQL database',
					'Wrap your database with RESTful API',
				],
			},
			{
				name: 'Web Design',
				icon: 'mdi-pencil-outline',
				blurb: 'I am not a web designer, but...',
				bullets: [
					'Will work with client preferred professional designer',
					'Able to refer professional web designers upon request',
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
	mounted () {

	},
	methods: {
		addServiceButton (name) {
			console.log('adding service button', name)
			if (this.serviceButtons && !this.serviceButtons.includes(name)) {
				this.serviceButtons.push(name)
			}
		},
		async doContact () {
			this.contactSuccess = false
			const data = {
				token: 'fdjklw789fbvw754TtsHnmuI',
				action: 'contact',
				userId: this.userId,
				name: this.name,
				email: this.email,
				subject: this.subject,
				message: this.message,
			}
			const response = await dataService.getData(data)
			console.log('data service response ', response)
			if (response.status) {
				this.contactSuccess = true
				// this.$store.commit('app/loginSuccess', response.data[0])
				this.name = ''
				this.email = ''
				this.subject = ''
				this.message = ''
				// alert('logged in!')
			} else {
				this.contactFailed = true
				// alert('login failed...')
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
.sectionBG {
	background-color: #FFFFFF;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23FFFFFF' cx='50' cy='0' r='50'/%3E%3Cg fill='%23fcfdfd' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fafbfc' cx='50' cy='100' r='50'/%3E%3Cg fill='%23f7f9fa' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f5f6f9' cx='50' cy='200' r='50'/%3E%3Cg fill='%23f2f4f7' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23eff2f6' cx='50' cy='300' r='50'/%3E%3Cg fill='%23edf0f4' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23eaeef3' cx='50' cy='400' r='50'/%3E%3Cg fill='%23e7ecf1' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e5eaf0' cx='50' cy='500' r='50'/%3E%3Cg fill='%23e2e8ee' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e0e6ed' cx='50' cy='600' r='50'/%3E%3Cg fill='%23dde4eb' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23dae1ea' cx='50' cy='700' r='50'/%3E%3Cg fill='%23d8dfe8' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d5dde7' cx='50' cy='800' r='50'/%3E%3Cg fill='%23d3dbe5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d0d9e4' cx='50' cy='900' r='50'/%3E%3Cg fill='%23ced7e2' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23CBD5E1' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-repeat: repeat-x;
	/*
	background-color: white;
	background-color: #CBD5E1;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23CBD5E1' width='11' height='11'/%3E%3Crect fill='%23ccd6e1' x='10' width='11' height='11'/%3E%3Crect fill='%23ccd6e2' y='10' width='11' height='11'/%3E%3Crect fill='%23cdd7e2' x='20' width='11' height='11'/%3E%3Crect fill='%23cdd7e3' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23ced8e3' y='20' width='11' height='11'/%3E%3Crect fill='%23cfd8e3' x='30' width='11' height='11'/%3E%3Crect fill='%23cfd9e4' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d0d9e4' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d1dae5' y='30' width='11' height='11'/%3E%3Crect fill='%23d1dae5' x='40' width='11' height='11'/%3E%3Crect fill='%23d2dbe5' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d3dbe6' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d3dce6' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d4dde7' y='40' width='11' height='11'/%3E%3Crect fill='%23d4dde7' x='50' width='11' height='11'/%3E%3Crect fill='%23d5dee7' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d6dee8' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d6dfe8' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d7dfe9' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d8e0e9' y='50' width='11' height='11'/%3E%3Crect fill='%23d8e0e9' x='60' width='11' height='11'/%3E%3Crect fill='%23d9e1ea' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23dae1ea' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23dae2eb' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23dbe3eb' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23dbe3eb' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23dce4ec' x='70' width='11' height='11'/%3E%3Crect fill='%23dde4ec' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23dde5ed' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23dee5ed' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23dfe6ee' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23dfe6ee' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23e0e7ee' x='80' width='11' height='11'/%3E%3Crect fill='%23e1e7ef' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23e1e8ef' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23e2e8f0' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23e3e9f0' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23e3eaf0' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23e4eaf1' x='90' width='11' height='11'/%3E%3Crect fill='%23e4ebf1' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23e5ebf2' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23e6ecf2' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23e6ecf2' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23e7edf3' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23e8edf3' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23e8eef4' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23e9eef4' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23eaeff4' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23eaf0f5' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23ebf0f5' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ecf1f6' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23ecf1f6' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23edf2f7' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23eef2f7' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23eef3f7' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23eff3f8' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23f0f4f8' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23f0f4f9' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23F1F5F9' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;

	background-color: #E2E8F0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.16'%3E%3Cpath fill='%23d1dae6' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23c1ccdb' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23b1bed0' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23a2b1c4' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%2394A3B8' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%238193ab' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%236f839f' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%2360738f' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%2353647c' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23475569' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;

	background-color: #94A3B8;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23a4b1c3' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23b3bfce' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23c3ccda' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23d2dae5' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23E2E8F0' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;

	background-color: #94A3B8;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23a2b1c4' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23b1bed0' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23c1ccdb' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23d1dae6' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23E2E8F0' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e6ecf3' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23eaeff5' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23eff3f8' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f3f7fa' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23F8FAFC' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	*/
	/*
	background-color: #F8FAFC;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23F8FAFC' width='11' height='11'/%3E%3Crect fill='%23f6f8fb' x='10' width='11' height='11'/%3E%3Crect fill='%23f4f7fa' y='10' width='11' height='11'/%3E%3Crect fill='%23f3f5f8' x='20' width='11' height='11'/%3E%3Crect fill='%23f1f4f7' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23eff2f6' y='20' width='11' height='11'/%3E%3Crect fill='%23edf1f5' x='30' width='11' height='11'/%3E%3Crect fill='%23ebeff4' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23eaeef3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23e8ecf1' y='30' width='11' height='11'/%3E%3Crect fill='%23e6ebf0' x='40' width='11' height='11'/%3E%3Crect fill='%23e4e9ef' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23e3e8ee' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23e1e6ed' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23dfe5eb' y='40' width='11' height='11'/%3E%3Crect fill='%23dde3ea' x='50' width='11' height='11'/%3E%3Crect fill='%23dbe2e9' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23dae0e8' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d8dfe7' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d6dee6' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d5dce4' y='50' width='11' height='11'/%3E%3Crect fill='%23d3dbe3' x='60' width='11' height='11'/%3E%3Crect fill='%23d1d9e2' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23cfd8e1' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23ced6e0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23ccd5df' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23cad3dd' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23c8d2dc' x='70' width='11' height='11'/%3E%3Crect fill='%23c7d0db' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23c5cfda' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23c3cdd9' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23c2ccd8' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23c0cad7' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23bec9d5' x='80' width='11' height='11'/%3E%3Crect fill='%23bdc7d4' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23bbc6d3' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23b9c4d2' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23b8c3d1' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23b6c1d0' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23b4c0cf' x='90' width='11' height='11'/%3E%3Crect fill='%23b3bfcd' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23b1bdcc' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23afbccb' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23aebaca' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23acb9c9' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23aab7c8' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23a9b6c7' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23a7b4c5' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23a6b3c4' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23a4b1c3' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23a2b0c2' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23a1afc1' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%239fadc0' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%239eacbf' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%239caabe' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%239aa9bc' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2399a7bb' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2397a6ba' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%2396a4b9' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%2394A3B8' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	*/
}
</style>
