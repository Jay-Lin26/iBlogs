<template>
  <div class="table">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="标题：">
        <el-input v-model="formInline.title" placeholder="标题" size="small"></el-input>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="formInline.desc" placeholder="描述" size="small"></el-input>
      </el-form-item>
      <!-- <el-form-item label="描述">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="40px">
        </el-table-column>
        <el-table-column
        prop="title"
        label="标题"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="desc"
        label="描述"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="img_url"
        label="图片地址"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="writer"
        label="作者"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="avatar"
        label="头像"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="view"
        label="查看次数"
        width="auto">
        </el-table-column>
        <el-table-column
        prop="release_time"
        label="发布时间"
        width="auto">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100px">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              查看
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              编辑
            </el-button>
          </template>
        </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[20, 50, 100, 200]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  </div>
</template>

<script>
import { indexApi } from "../../http/api.js";
export default {
    name: "page-one",
    data:()=>{
      return{
        tableData: [],
        formInline: {
          title: '',
          desc: ''
        },
        total: 0,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      getData: function(){
        indexApi().then((result) => {
          this.tableData = result.article
          this.total = result.article.length
        })
      },
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      this.getData()
    }
}
</script>

<style>
.el-container {
  overflow: auto;
}
.el-container::-webkit-scrollbar{
	width: 6px;
}
.el-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
}
.cell {
    /* 超过多少行自动隐藏 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow:clip;
}
.el-table__body-wrapper::-webkit-scrollbar{
	height: 8px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
}
.el-pagination {
  position: absolute;
  bottom: 20px;
}
.el-form {
  /* position: absolute;
  top: 120px; */
}
</style>