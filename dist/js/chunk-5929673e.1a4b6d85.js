(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5929673e"],{"33b5":function(e,t,l){"use strict";l("5fa8")},"5fa8":function(e,t,l){},"64bd":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"标题:"}},[l("el-input",{attrs:{placeholder:"标题",size:"small"},model:{value:e.formInline.title,callback:function(t){e.$set(e.formInline,"title",t)},expression:"formInline.title"}})],1),l("el-form-item",{attrs:{label:"描述:"}},[l("el-input",{attrs:{placeholder:"描述",size:"small"},model:{value:e.formInline.desc,callback:function(t){e.$set(e.formInline,"desc",t)},expression:"formInline.desc"}})],1),l("el-form-item",{attrs:{label:"分类:"}},[l("el-select",{attrs:{placeholder:"活动区域",size:"small"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"文章",value:"shanghai"}}),l("el-option",{attrs:{label:"趣闻",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"925"}},[l("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"40px"}}),l("el-table-column",{attrs:{prop:"title",label:"标题",width:"auto"}}),l("el-table-column",{attrs:{prop:"desc",label:"描述",width:"auto"}}),l("el-table-column",{attrs:{prop:"img_url",label:"图片地址",width:"auto"}}),l("el-table-column",{attrs:{prop:"writer",label:"作者",width:"auto"}}),l("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"auto"}}),l("el-table-column",{attrs:{prop:"view",label:"查看次数",width:"auto"}}),l("el-table-column",{attrs:{prop:"release_time",label:"发布时间",width:"auto"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(l){return l.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v(" 查看 ")]),l("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(l){return l.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v(" 编辑 ")])]}}])})],1),l("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[20,50,100,200],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],o=l("f96b"),i={name:"page-one",data:function(){return{tableData:[],formInline:{title:"",desc:""},total:0,currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}},methods:{getData:function(){var e=this;Object(o["d"])().then((function(t){e.tableData=t.article,e.total=t.article.length}))},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}},mounted:function(){this.getData()}},r=i,s=(l("33b5"),l("2877")),c=Object(s["a"])(r,a,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5929673e.1a4b6d85.js.map