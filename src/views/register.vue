<template>
	<div id="login">
		<div class="alert-body">
			<div id="login-box" v-if="is_login === true">
				<div class="login-title"> Log in </div>
				<input id="email" placeholder="Enter Your Email" v-model="email" />
				<input id="pwd" type="password" placeholder="Enter Your Password" v-model="password" />
				<p id="toJoin" @click="is_login = !is_login">Join now？</p>
				<button id="loginClick" @click="login()">Login in</button>
			</div>
			<div id="join-box" v-else>
				<div class="join-title">Sign up</div>
				<input id="s-email" placeholder="Enter Your Email" v-model="email" />
				<div class="code">
					<div class="input-code">
						<input id="code" placeholder="Verification Code" v-model="code" />
					</div>
					<div class="button-code">
						<button id="codeClick" @click="get_code()">Get Code</button>
					</div>
				</div>
				<input id="s-pwd" type="password" placeholder="Enter Your Password" v-model="password" />
				<p id="toLogin" @click="is_login = !is_login">Login in</p>
				<button id="signClick" @click="register()">Join Now</button>
			</div>
		</div>
	</div>
</template>

<script>
import {getCode, login, register} from '../http/api.js';
export default {
	name: 'login',
	data() {
		return{
			email: "",
			code: "",
			password: "",
			is_login: true
		}
	},
	methods: {
		//登录
		login: function() {
			let param = new URLSearchParams()
			param.append('email', this.email)
			param.append('password', this.password)
			login(param).then(result =>{
				if(result.code === 200){
					// this.common.Msgs(result.message, 'success')
					sessionStorage.setItem('accesstoken', result.Access_token)
					this.$store.commit('setname', result.name)
					let _this = this
					setInterval(function(){
						_this.$router.push('/main')
					}, 1000)
				}else{
					// this.common.Msgs(result.message, 'error')
				}
			})
		},
		//注册
		register: function() {
			let params = new URLSearchParams
			params.append('email', this.email)
			params.append('code', this.code)
			params.append('password', this.password)
			register(params).then(result =>{
				if (result.code === 200){
					// this.common.Msgs(result.message, 'success')
				}else{
					// this.common.Msgs(result.message, 'error')
				}
			})
		},
		//发送验证码
		get_code: function(){
			getCode(this.email).then(result =>{
				if(result.code === 200){
					// this.common.Msgs(result.message, 'success')
				}else{
					// this.common.Msgs(result.message, 'error')
				}
			})
		},
	}
}
</script>

<style>
	.login-join-box {
		font-size: 14px;
		width: 1000px;
		height: calc(100vh - 250px);
		margin: 0 auto;
	}
	#login-box, #join-box{
		width: 400px;
		margin: 0 auto;
		padding-top: calc((77vh - 500px) / 2);
		text-align: center;
		font-family: Microsoft YaHei;
	}
	.login-title, .join-title{
		font-size: 25px;
		padding:0 0 24px 0;
		color: #00B5AD;
	}
	#email, #pwd, #s-email, #s-pwd, #signClick{
		text-align: center;
		height:2.7em;
		width:400px;
		height: 47.35px;
		border-radius:4px;
		border:1px solid #00B5AD;
		color:#00B5AD;
		background-color: transparent;
		margin-bottom: 24px;
		padding: 0;
		outline:0;
	}
	/* 输入框默认字体 */
	#email::-webkit-input-placeholder,
	#pwd::-webkit-input-placeholder,
	#s-email::-webkit-input-placeholder,
	#code::-webkit-input-placeholder,
	#s-pwd::-webkit-input-placeholder{
		color: #acacac;
	}
	#toJoin, #toLogin {
		line-height:14px; 
		width: 90px;
		right: -320px;
		margin-bottom: 24px;
		color: #00B5AD;
		position: relative;
		cursor: pointer;
	}
	#loginClick,#signClick{
		box-sizing: border-box;
		text-align:center;
		height:47px;
		border-radius:4px;
		border:1px solid #00B5AD;
		background-color: #00B5AD;
		color: #EEEEEE;
		outline:0;
		margin-top: 20px;
		text-decoration:none;
		width:100%;
	}
	.code {
		width: 400px;
		height: 47.35px;
		margin-bottom: 24px;
		border: 1px solid #00B5AD;
		border-radius: 4px;
	}
	.input-code{
		width: 250px;
		height: 100%;
		float: left;
	}
	.button-code{
		background-color: #00B5AD;
		width: 120px;
		height: 100%;
		float: right;
	}
	#code {
		text-align:center;
		height:100%;
		width:100%;
		outline: 0;
		border:0;
		color:#00B5AD;
		background-color: transparent;
		padding: 0;
	}
	#codeClick{
		text-align:center;
		height:100%;
		width:100%;
		outline: 0;
		border: 1px solid #00B5AD;
		color: #EEEEEE;
		background: transparent;
	}
</style>
