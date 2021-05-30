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
						<div class="show-card" v-for="item in leftList" v-bind:key="item.id">
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
					<div class="c-right">
						<div class="card-right" v-for="books in bookList" :key="books.id">
							<div class="cr-title">{{books.name}}</div>
							<div class="cr-desc">{{books.desc}}</div>
						</div>
					</div>
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
export default{
	name: 'myhome',
	components:{Thehead, Thefoot},
	data: function(){
		return{
			leftList: {},
			bookList: [
				{id: 1, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 2, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 3, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 4, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 5, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 6, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 7, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 8, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 9, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
				{id: 0, name: "《程序员修炼之道：从小工到专家》", desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。"},
			]
		}
	},
	mounted() {
		//获取首页数据
		index().then(result => {
			this.leftList = result.data
		})
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
	margin-left: 12px;
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
	width: 680px;
	margin: 0 auto;
	padding-top: 20px;
	display: flex;
}
.show-card:hover{
	transform: translateY(-3%);
	box-shadow: 3px 3px 3px 3px #f4f4f4;
}
.show-card{
	width: 680px;
	height: 200px;
	background-color: #FFFFFF;
	transition: all 0.7s;
	margin-bottom: 20px;
	border-radius: 10px;
}
.cr-title {
	color: #00B5AD;
	font-size: 16px;
	font-weight: 300;
}
.cr-desc {
	color: #909399;
}
.card-right {
	margin-top: 12px;
	margin-bottom: 12px;
	text-align: center;
}
.c-right{
	float: right;
	width: 280px;
	min-height: 100vh;
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
	font-family: "楷体";
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