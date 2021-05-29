<template>
	<div id="home">
		<thehead></thehead>
		<div class="body-box">
			<div class="body-content">
				<div class="userinfo">
					<div class="u-wel">Welcome</div>
					<div class="u-name" style="font-size: 16px; color: #00B5AD;">{{this.$store.state.username}}</div>
					<div class="u-time">Member since 9/12/2020</div>
					<div class="u-button" style="color: #00B5AD;"><a href="#">Edit Profile</a></div>
					<div class="u-hav">
						<div class="u-space"></div>
						<div class="u-hav-1"><router-link to="/blogdetail">Home</router-link></div>
						<div class="u-hav-2"><router-link to="/">Tag</router-link></div>
						<div class="u-hav-3"><router-link to="/">Sort</router-link></div>
					</div>
				</div>
				<div class="usershow">
					<div class="show-title">
						<h3 style="text-align: center;">{{show_title}}</h3>
						<h4 style="text-align: center;">发表于 2021-04-30 |  更新于 2021-04-30 |  阅读次数： 6695</h4>
						<div class="content" v-html="show_content">
							{{show_content}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<Thefoot></Thefoot>
	</div>
</template>
<script>
import {is_login} from "../utils/common.js";
import {blog_detail} from "../http/api.js";
import Thehead from "../components/head.vue";
import Thefoot from "../components/footer.vue";
export default {
	name: 'home',
	components: {Thehead, Thefoot},
	data: function(){
		return{
			show_title: '',
			show_content: ''
		}
	},
	mounted() {
		blog_detail().then(result => {
			this.show_title = result.title,
			this.show_content = result.content
		})
		is_login()
	}
};
</script>

<style>
	.body-box {
		width: 100%;
		overflow-x: hidden;
		background-color: #f1f1f1;
		border-top: 1px solid #F1F1F1;
	}
	.body-content {
		width: 1000px;
		overflow-x: hidden;
		height: 100%;
		margin: 0 auto;
		margin-top: 25px;
	}
	.userinfo {
		font-size: 14px;
		width: 20%;
		height: 220px;
		background-color: #FFFFFF;
		border-radius: 10px;
		float: left;
	}
	.u-button a , .u-hav a{
		font-size: 14px;
		text-decoration: none;
		color: #00B5AD;
	}
	.u-wel, .u-name, .u-time, .u-button{
		font-size: px;
		color: #909399;
		text-align: center;
		padding: 10px;
	}
	.u-hav {
		background-color: #FFFFFF;
		border-radius: 10px;
		height: 200px;
	}
	.u-hav-1, .u-hav-2, .u-hav-3{
		text-align: center;
		margin: 20px 0 30px 0;
	}
	.u-space {
		width: 100%;
		height: 20px;
		background-color: #F1F1F1;
	}
	.usershow {
		width: 78%;
		height: 100%;
		float: right;
		background-color: #FFFFFF;
		border-radius: 10px;
		margin-bottom: 25px;
	}
	.usershow h3 {
		font-size: 18px;
	}
	.usershow h4 {
		font-size: 13px;
		color: #00B5AD;
	}
	.usershow p {
		font-size: 10px;
	}
	.content {
		color: #909399;
		padding-left: 50px;
		padding-right: 30px;
	}
</style>
