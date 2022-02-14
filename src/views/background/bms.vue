<template>
	<div>
		<el-container style="height: 100vh; border: 1px solid #eee">
			<el-header height="80px"><i class="el-icon-s-custom"></i> 后台管理系统</el-header>
			<el-container>
				<el-aside width="auto" style="background-color: rgb(238, 241, 246)">
					<el-menu :default-openeds="['1', '3']">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>数据操作</template>
							<el-menu-item-group>
								<template slot="title">数据管理</template>
								<el-menu-item index="1-1" @click="pageChange(1)">用户</el-menu-item>
								<el-menu-item index="1-2" @click="pageChange(2)">页面2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>导航二</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="2-1">选项1</el-menu-item>
								<el-menu-item index="2-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="2-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项4-1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-setting"></i>导航三</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="3-1">选项1</el-menu-item>
								<el-menu-item index="3-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="3-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="3-4">
								<template slot="title">选项4</template>
								<el-menu-item index="3-4-1">选项4-1</el-menu-item>
							</el-submenu>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view :key='$route.fullPath'/>
				</el-main>
			</el-container>

		</el-container>
	</div>
</template>

<script>
export default {
	name: "bms",
  data: () => {
  	return{
			tableData: []
    }
  },
	methods: {
		pageChange: function( page ) {
			if (page == 1) {
				this.$router.push("/bms/pageone")
			}else if (page == 2){
				this.$router.push("/bms/pagetwo")
			}

		}
	}
};
</script>

<style>
.el-header {
  background-color: #409EFF;
  color: #FFF;
	font-size: 24px;
  line-height: 80px;
}
.headbar {
	height: 200px;
}
/* 滚动条样式 */
.el-aside::-webkit-scrollbar{
	width: 6px;
}
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
}
.el-main::-webkit-scrollbar{
	width: 6px;
}
.el-main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
}

</style>