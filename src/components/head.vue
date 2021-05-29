<template>
	<div id="hd">
		<div class="head-box">
			<div class="head-connet">
				<div class="head-logo">iBlogs</div>
				<div>
					<span>
						<input class="input" placeholder="喜欢"/>
						<button class="btn">搜索</button>
					</span>
				</div>
				<div class="user" v-if="is_name">{{this.$store.state.username}}</div>
				<div class="to-login" v-else>
					<div class="sign" style="color: #00B5AD;" @click="_is_login()">Sign In</div>
					<div class="join" @click="_is_login()">Join now</div>
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
			<Register v-show="this.$store.state.is_login"></Register>
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
			is_login: this.$store.state.is_login,
			is_name: false,
		}
	},
	methods: {
		// ss: function(){
		// 	this.common.Msgs("暂未开放", 'warning')
		// }
		now: function() {
			let name = this.$store.state.username
			if (name != null){
				this.is_name = true
			}
		},
		_is_login: function(){
			let b = true
			this.$store.commit('cancel_login', b)
		}
	},
	mounted() {
		this.now()
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
		border: 1px;
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
