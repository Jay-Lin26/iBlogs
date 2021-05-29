<template>
	<div id="hd">
		<div class="head-box">
			<div class="head-connet">
				<div class="head-logo">iBlogs</div>
				<div>
					<span>
						<input class="input" placeholder="Enter what you want to search"/>
						<button class="btn">Search</button>
					</span>
				</div>
				<div class="user" v-if="whetheLogin">{{this.$store.state.UserName}}</div>
				<div class="to-login" v-else>
					<div class="sign" style="color: #00B5AD;" @click="pageControl()">Sign In</div>
					<div class="join" @click="pageControl()">Join now</div>
				</div>
			</div>
			<div class="head-button">
				<div class="head-button-1">
					<router-link to="/">Home</router-link>
					<router-link to="/articledetail" class="sort">Sort</router-link>
					<router-link to="/articledetail" class="category">Category</router-link>
					<router-link to="/articledetail" class="about">About</router-link>
				</div>
			</div>
			<Register v-show="this.$store.state.PageStatus"></Register>
		</div>
	</div>
</template>

<script>
import Register from "../components/register.vue"
export default{
	name: 'hd',
	components:{Register},
	data:function(){
		return{
			//是否展示用户名的状态
			whetheLogin: false,
		}
	},
	methods: {
		//判断用户是否登录
		judgeUser: function() {
			let name = this.$store.state.UserName
			if (name != null){
				this.whetheLogin = true
			}
			},
		//打开或关闭登录、注册页面
		pageControl: function(){
			let status = true
			this.$store.commit('changePage', status)
		}
	},
	mounted() {
		this.judgeUser()
	}
}
</script>

<style>
	#hd, .head-box {
		width: 100%;
		height: 100px;
		background-color: #fefefe;
	}
	.head-connet {
		width: 1000px;
		height: 80px;
		margin: 0 auto;
		display: flex;
	}
	.head-logo {
		width: 90px;
		font-size: 35px;
		font-weight: 700;
		color: #00B5AD;
		margin-left: 10px;
		margin-top: 15px;
	}
	.input {
		width: 360px;
		height: 35px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		border:1px solid #eeeeee;
		padding-left: 20px;
		outline:0;
		margin-left: 200px;
		margin-top: 20px;
	}
	.btn {
		cursor: pointer;
		width: 40px;
		height: 39px;
		border: 0px solid #eeeeee;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		background: url(../assets/search.png) #00B5AD;
		background-size: cover;
		color: rgba(0,0,0,0);
		outline:0;
	}
	.user {
		margin-top: 30px;
		font-size: 16px;
		color: #00B5AD;
		margin-left: 150px;
		cursor: pointer;
	}
	.to-login {
		display: flex;
	}
	.sign {
		margin-left: 50px;
		margin-top: 30px;
		font-size: 16px;
		cursor: pointer;
	}
	.join {
		height: 30px;
		width: 98px;
		text-align: center;
		cursor: pointer;
		line-height: 30px;
		margin-left: 50px;
		margin-top: 25px;
		font-size: 16px;
		border: 1px solid #00B5AD;
		color: #00B5AD;
	}
	.join:hover{
		background-color: #00B5AD;
		color: #F1F1F1;
	}
	.sign:hover{
		text-decoration: underline;
	}
	.head-button{
		margin: 0 auto;
	}
	.head-button-1 {
		height: 20px;
		width: 1000px;
		margin: 0 auto;
		line-height: 5px;
	}
	.head-button-1 a {
		text-decoration: none;
		color: #000000;
		font-size: 15px;
		margin-left: 10px;
		margin-right: 52px;
	}
	.head-button-1 a:hover{
		color: #00B5AD;
	}
</style>
