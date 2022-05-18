export default {
	setDialog: (state, dialogSlug) => {
		state.dialog = state.dialogs[dialogSlug]
		state.dialog.on = true
	},
	clearAlert: (state) => {
		state.alert = {
			on: false,
			context: '',
			type: '',
			text: '',
		}
	},
	setAlert: (state, alertObj) => {
		state.alert = alertObj
	},
	setAlertOff: (state) => {
		state.alert.on = false
	},
	setDialogActive: (state, isOn) => {
		state.dialog.on = isOn
	},
	setUserState: (state, userData) => {
		state.user = userData
	},
	loginSuccess: (state, userData) => {
		state.user.isLoggedIn = true
		state.user.data = userData
	},
	setUserLogout: (state) => {
		state.user.isLoggedIn = false
		state.user.data = {}
	},
	setPhotoSnackActive: (state, isOn) => {
		state.photoSnackbar.on = isOn
	},
	setPhotoSnackText: (state, text) => {
		state.photoSnackbar.text = text
	},
	setPhotoSnack: (state, key) => {
		state.photoSnackbar = {
			on: true,
			text: state.images[key].fullCredit,
		}
	},
	incrementDialogCounter: (state) => {
		state.dialogCounter += 1
	},
	incrementRouterKey: (state) => {
		state.routerKey += 1
	},
	setInnerHeight: (state, height) => {
		state.innerHeight = height
	},
	setHeaderHeight: (state, height) => {
		state.headerHeight = height
	},
	setFooterHeight: (state, height) => {
		state.footerHeight = height
	},
	setScreen: (state, screen) => {
		state.screen = screen
	},
}
