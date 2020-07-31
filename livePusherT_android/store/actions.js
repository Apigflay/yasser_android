
const actions ={
	SET_isLogin: ({ commit }, data) => {
		commit('set_login', data)
	},
	SET_allPusherAddress: ({ commit }, data) => {
		commit('set_allPusherAddress', data)
	},
}
export default actions