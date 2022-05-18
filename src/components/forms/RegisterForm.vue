<template>
	<div>
		<div class="text-right">
			<v-btn
				text
				x-small
				@click="$store.commit('app/setDialog', 'login')"
			>
				( Login Instead )
			</v-btn>
		</div>
		<v-text-field
			v-model="email"
			label="Email Address"
			color="black"
		/>
		<v-text-field
			v-model="mobile"
			label="Mobile Phone"
			color="black"
		/>
		<v-text-field
			v-model="password"
			label="Password"
			color="black"
			:append-icon="showP1?'mdi-eye':'mdi-eye-off'"
			:type="showP1 ? 'text' : 'password'"
			:rules="[rules.required, rules.min]"
			@click:append="showP1 = !showP1"
		/>
		<v-text-field
			v-model="passwordConfirm"
			label="Confirm Password"
			color="black"
			:append-icon="showP2?'mdi-eye':'mdi-eye-off'"
			:type="showP2 ? 'text' : 'password'"
			:rules="[rules.required, rules.min]"
			@click:append="showP2 = !showP2"
		/>
		<v-btn
			:disabled="!((email || mobile) && password && passwordConfirm && password==passwordConfirm)"
			large
			block
			color="accent"
			class="mt-3 mb-1"
			@click="doRegister()"
		>
			Submit
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
		email: '',
		mobile: '',
		password: '',
		passwordConfirm: '',
		showP1: false,
		showP2: false,
		rules: {
			required: value => !!value || 'Required.',
			min: v => v.length >= 8 || 'Min 8 characters',
			// matched: v => (!!v && v) === this.password || 'Password confirm must match',
		},
		regAlert: '',
		regAlertType: 'info',
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
		async doRegister () {
			this.regAlert = 'Processing...'
			const data = {
				token: 'fdjklw789fbvw754TtsHnmuI',
				action: 'register',
				pass: this.password,
				phone: this.mobile,
				email: this.email,
			}
			const response = await dataService.getData(data)
			console.log('data service response ', response)
			if (response.status) {
				console.log('register success set alert')
				this.$store.commit('app/setAlert', { on: true, context: 'login', type: 'success', text: 'Successfully Registered!' })
				this.email = ''
				this.mobile = ''
				this.password = ''
				this.passwordConfirm = ''
				console.log('register success set dialog to login')
				this.$store.commit('app/setDialog', 'login')
			} else {
				this.$store.commit('app/setAlert', { on: true, context: 'register', type: 'error', text: 'There was an error during registration. Please try again.' })
			}
		},
	},
}
</script>
