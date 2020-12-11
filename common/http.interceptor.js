


const install=(Vue,vm)=>{
	Vue.prototype.$x.http.setConfig({
		baseUrl: 'https://tt.6vapp.com', //正式环境
		loadingText: '请求中...',
		loadingTime: 10,
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
		showLoading: true,
		loadingTime: 200

	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$x.http.interceptor.request = (config) => {
	}
	//响应拦截x
	Vue.prototype.$x.http.interceptor.response = (res) => {
		return res

	}
}

export default{
	install
}