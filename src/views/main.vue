<template>
	<div id="myhome">
		<Thehead></Thehead>
		<div class="index-all">
			<div class="index-banner">
				<div class="index-banner-1"></div>
				</div>
			<div class="index-body">
				<div class="index-content">
					<div class="c-left">
						<div class="show-card" v-for="item in info" v-bind:key="item.id">
							<div class="card-in">
								<div class="image">
									<img v-bind:src="item.img_url" />
								</div>
								<div class="detail">
									<div class="title"> {{item.title}} </div>
									<div class="description">{{item.desc}}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="c-right"></div>
				</div>
			</div>
		</div>
		<Thefoot></Thefoot>
	</div>
</template>

<script>
import Thehead from "../components/head.vue";
import Thefoot from "../components/footer.vue";
import {index} from "../http/api.js";
// import {is_login} from "../utils/common.js";
export default{
	name: 'myhome',
	components:{Thehead, Thefoot},
	data: function(){
		return{
			info: {}
		}
	},
	mounted() {
		index().then(result => {
			this.info = result.data
		})
		// is_login()
	}
}	
</script>

<style>
.description {
	height: 90px;
	width: 450px;
	font-size: 13px;
	color: #909399;
	margin-top: 30px;
}
.title {
	color: #00B5AD;
	font-size: 22px;
	height: 30px;
	width: 400px;
}
.image, .image img {
	height: 160px;
	width: 160px;
	border-radius: 10px;
	background-size: cover;
}
.detail {
	margin-left: 30px;
	height: 160px;
}
.card-in {
	width: 690px;
	margin: 0 auto;
	padding-top: 20px;
	display: flex;
}
.show-card{
	width: 730px;
	height: 200px;
	background-color: #FFFFFF;
	margin-bottom: 20px;
	border-radius: 10px;
}
.c-right{
	float: right;
	width: 240px;
	border-radius: 10px;
	background-color: #FFFFFF;
}
.c-left{
	float: left;
	height: auto;
}
.index-body{
	padding: 20px 0 20px 0;
	width: 1000px;
	margin: 0 auto;
}
.index-all {
	min-height: 100vh;
	overflow: hidden;
}
.index-banner{
	height: 250px;
	width: 100%;
	padding-top: 20px;
}
.index-banner-1{
	width: 1000px;
	height: 250px;
	border-radius: 10px;
	margin: 0 auto;
	background: url("https://pic.imgdb.cn/item/60a87bab6ae4f77d3508f615.png");
	background-size: cover;
}
</style>