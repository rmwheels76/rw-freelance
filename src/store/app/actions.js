export default {
	resetDialog ({ commit }) {
		commit('clearAlert')
		commit('incrementDialogCounter')
	},
	doLogout ({ commit }) {
		commit('setUserLogout')
		commit('incrementRouterKey')
	},
	setDimensions ({ commit }, dims) {
		console.log('setInnerHeight', dims)
		commit('setInnerHeight', dims.height)
		commit('setHeaderHeight', dims.header)
		commit('setFooterHeight', dims.footer)
	},
}
