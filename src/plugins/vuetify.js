import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#f1f5f9', // 200
				secondary: '#475569', // 600
				accent: '#312e81', // 312e81, // 334155, // 700
				info: '#e2e8f0', // 200
				light: '#f1f5f9',
				/*
				primary: '#D3C3BC',
				secondary: '#BFADA5',
				accent: '#D8EBF1',
				info: '#5B5C79',
				*/
			},
		},
	},
})
