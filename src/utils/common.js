import router from "../router/index.js"

export const is_login = () => {
	let head = document.getElementById('hj')
	let user = document.getElementById('us')
	let token = sessionStorage.getItem('accesstoken')
	if(token == null){
		router.push('/')
		head.style.display = 'block'
		user.style.display = 'none'
	}else{
		user.style.display = 'block'
		head.style.display = 'none'
	}
}