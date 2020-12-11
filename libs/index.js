
import http from './request/index.js'

const $x={
	http
}

const install =Vue=>{
	Vue.prototype.$x=$x
}

export default{
	install
}