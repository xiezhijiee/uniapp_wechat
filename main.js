
import Vue from 'vue'
import App from './App'
import X from 'libs/index.js'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(X)
const app = new Vue({
	...App
})
import httpInterceptor from './common/http.interceptor.js' //拦截器
Vue.use(httpInterceptor, app);
import httpApi from 'common/http.api.js'
Vue.use(httpApi, app)
app.$mount()
