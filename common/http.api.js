const test = '/api/lab/test/index'

const install = (Vue, vm) => {
	const getTest = (params = {}) => vm.$x.http.get(test, params)
	vm.$x.api = {
		getTest
	}

}

export default {
	install
}
