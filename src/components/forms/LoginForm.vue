<template>
	<div>
		<div class="text-right">
			<v-btn
				text
				x-small
				@click="$store.commit('app/setDialog', 'register')"
			>
				( Register Instead )
			</v-btn>
		</div>
		<v-text-field
			v-model="username"
			:disabled="formDisabled"
			label="Email/Phone"
			color="black"
			class="mt-1"
		/>
		<v-text-field
			v-model="password"
			:disabled="formDisabled"
			label="Password"
			color="black"
			type="password"
		/>
		<v-btn
			color="accent"
			:disabled="formDisabled"
			block
			large
			class="mt-4 mb-2"
			@click="doLogin()"
		>
			Login
		</v-btn>
	</div>
</template>

<script>
import { dataService } from '@/services/data'

export default {
	name: 'LoginForm',
	components: {

	},
	data: () => ({
		debug: false,
		formDisabled: false,
		username: '',
		password: '',
	}),
	computed: {
		isLoggedIn () {
			if (this.$store.state.app && Object.keys(this.$store.state.app).includes('user') && this.$store.state.app.user.isLoggedIn) {
				return true
			} else {
				return false
			}
		},
	},
	mounted () {

	},
	methods: {
		async doLogin () {
			const data = {
				token: 'fdjklw789fbvw754TtsHnmuI',
				action: 'login',
				username: this.username,
				password: this.password,
			}
			const response = await dataService.getData(data)
			console.log('data service response ', response)
			if (response.status) {
				this.regAlertType = 'success'
				this.$store.commit('app/loginSuccess', response.data[0])
				this.$store.commit('app/setAlert', { on: true, context: 'login', type: 'success', text: 'Successfully Logged In!' })
				this.username = ''
				this.password = ''
				this.formDisabled = true
				this.$router.push('/dashboard')
				setTimeout(() => {
					this.$store.commit('app/clearAlert')
					this.$store.commit('app/setDialogActive', false)
				}, 1500)
				// alert('logged in!')
			} else {
				this.$store.commit('app/setAlert', { on: true, context: 'login', type: 'error', text: 'Invalid login, please try again...' })
			}
		},
	},
}
</script>
