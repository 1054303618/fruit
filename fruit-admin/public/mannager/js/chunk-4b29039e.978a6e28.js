(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b29039e"],{"00bd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("basic-header",{attrs:{items:["系统管理","轮播图管理"]}}),r("el-card",{staticStyle:{"margin-top":"30px"}},[r("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"轮播图查看",name:"first"}},[r("el-table",{attrs:{data:t.tableData}},[r("el-table-column",{attrs:{prop:"id",label:"ID"}}),r("el-table-column",{attrs:{prop:"url",label:"banner图"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("img",{attrs:{src:t.row.url,alt:"",width:"100",height:"100"}})]}}])}),r("el-table-column",{attrs:{prop:"sort",label:"banner排序"}}),r("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),r("el-table-column",{attrs:{prop:"id",label:"所对应的商品id"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.edit(e.row.id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),r("el-tab-pane",{attrs:{label:"轮播图添加",name:"second"}},[r("el-form",{ref:"bannerForm",attrs:{"label-width":"100px",model:t.bannerForm,rules:t.rules}},[r("el-form-item",{attrs:{label:"选择商品",prop:"gid"}},[r("el-input",{attrs:{clearable:!0,placeholder:"请选择商品"},model:{value:t.bannerForm.gid,callback:function(e){t.$set(t.bannerForm,"gid",e)},expression:"bannerForm.gid"}})],1),r("el-form-item",{attrs:{label:"banner排序",prop:"sort"}},[r("el-input",{model:{value:t.bannerForm.sort,callback:function(e){t.$set(t.bannerForm,"sort",e)},expression:"bannerForm.sort"}})],1),r("el-form-item",{attrs:{label:"轮播图",prop:"banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.bannerForm.url?r("img",{staticClass:"avatar",attrs:{src:t.bannerForm.url}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg文件，且不超过500kb")])])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("添加")])],1)],1)],1),r("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"editorForm",attrs:{"label-width":"80px",model:t.editorForm,rules:t.rules2}},[r("el-form-item",{attrs:{label:"商品名称",prop:"gid"}},[r("el-input",{model:{value:t.editorForm.gid,callback:function(e){t.$set(t.editorForm,"gid",e)},expression:"editorForm.gid"}})],1),r("el-form-item",{attrs:{label:"商品排序",prop:"sort"}},[r("el-input",{model:{value:t.editorForm.sort,callback:function(e){t.$set(t.editorForm,"sort",e)},expression:"editorForm.sort"}})],1),r("el-form-item",{attrs:{label:"商品缩略图",prop:"thumb"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.handleAvatarSuccess1,"before-upload":t.beforeAvatarUpload}},[t.editorForm.url?r("img",{staticClass:"avatar",attrs:{src:t.editorForm.url}}):t._e(),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg文件，且不超过500kb")])])],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editorSubmit}},[t._v("确 定")])],1)],1)],1)],1)],1)},a=[],o=r("2fa7"),i=r("dd20"),c={data:function(){return{activeName:"first",tableData:[],api:"/api/banner/banner",page:1,pageSize:5,total:0,bannerForm:{id:"",gid:"",sort:"",url:""},rules:{gid:{required:!0,message:"请输入产品名称",trigger:"change"},sort:{required:!0,message:"请输入产品名称",trigger:"blur"},url:{required:!0,message:"请输入产品名称"}},uploadUrl:"/api/upload/upload",dialogVisible:!1,editorForm:{id:"",gid:"",sort:"",url:""},rules2:{gid:{required:!0,message:"请输入产品名称",trigger:"change"},sort:{required:!0,message:"请输入产品名称",trigger:"blur"},url:{required:!0,message:"请输入产品名称"}}}},methods:{fetchData:function(){var t=this;this.axios.get(this.api,{params:{page:this.page,pageSize:this.pageSize}}).then((function(e){t.tableData=e.data.data,t.total=e.data.total}))},handleAvatarSuccess:function(t){this.bannerForm.url=t,this.$refs.bannerForm.validateField("url")},handleAvatarSuccess1:function(t){this.editorForm.url=t,this.$refs.editorForm.validateField("url")},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,r=t.size/1024/500;return e||this.$message.error("上传图片只能是 JPG 格式!"),r||this.$message.error("上传图片大小不能超过 500kb"),e&&r},del:function(t){var e,r=this;this.$confirm("此操作将永久删除该分类，是否继续？","提示",(e={confirmButtonText:"取消"},Object(o["a"])(e,"confirmButtonText","确定"),Object(o["a"])(e,"type","warning"),e)).then((function(){r.axios.delete(r.api,{params:{id:t}}).then((function(t){200==t.data.code?(r.$message.success("删除成功"),r.fetchData()):r.error(t.data.msg)}))})).catch((function(){r.$message.info("已取消删除")}))},edit:function(t){var e=this;this.dialogVisible=!0,this.axios.get(this.api,{params:{id:t}}).then((function(t){e.editorForm=t.data.data}))},editorSubmit:function(){var t=this;this.$refs.editorForm.validate((function(e){e?(delete t.editorForm.create_time,t.axios.put(t.api,t.editorForm).then((function(e){200===e.data.code&&(t.dialogVisible=!1,t.fetchData())})),t.$message.success("修改成功")):t.$message.error("验证失败.请检查字段内容")}))},submit:function(){var t=this;this.$refs.bannerForm.validate((function(e){e?t.axios.post(t.api,t.bannerForm).then((function(e){200===e.data.code&&(t.$message.success("添加成功"),t.$refs.bannerForm.resetFields(),t.activeName="first",t.fetchData())})):t.$message.error("验证失败")}))}},watch:{page:function(){this.fetchData()}},created:function(){},components:{"basic-header":i["a"]},mounted:function(){this.fetchData()}},s=c,u=(r("958d"),r("2877")),l=Object(u["a"])(s,n,a,!1,null,"095a5046",null);e["default"]=l.exports},"0273":function(t,e,r){var n=r("c1b2"),a=r("4180"),o=r("2c6c");t.exports=n?function(t,e,r){return a.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},"06fa":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},1875:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"194a":function(t,e,r){var n=r("cc94");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,a){return t.call(e,r,n,a)}}return function(){return t.apply(e,arguments)}}},"292d":function(t,e,r){},"2c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"2fa7":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("85d3"),a=r.n(n);function o(t,e,r){return e in t?a()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},"3ac6":function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r("c8ba"))},"3e47":function(t,e,r){var n=r("a5eb"),a=r("c1b2"),o=r("4180");n({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:o.f})},4180:function(t,e,r){var n=r("c1b2"),a=r("77b2"),o=r("6f8d"),i=r("7168"),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(o(t),e=i(e,!0),o(r),a)try{return c(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},"44ba":function(t,e,r){var n=r("c1b2"),a=r("7043"),o=r("2c6c"),i=r("a421"),c=r("7168"),s=r("78e7"),u=r("77b2"),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=i(t),e=c(e,!0),u)try{return l(t,e)}catch(r){}if(s(t,e))return o(!a.f.call(t,e),t[e])}},"638c":function(t,e,r){var n=r("06fa"),a=r("fc48"),o="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?o.call(t,""):Object(t)}:Object},"6f8d":function(t,e,r){var n=r("dfdb");t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},7043:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!n.call({1:2},1);e.f=o?function(t){var e=a(this,t);return!!e&&e.enumerable}:n},7168:function(t,e,r){var n=r("dfdb");t.exports=function(t,e){if(!n(t))return t;var r,a;if(e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;if("function"==typeof(r=t.valueOf)&&!n(a=r.call(t)))return a;if(!e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"764b":function(t,e){t.exports={}},"77b2":function(t,e,r){var n=r("c1b2"),a=r("06fa"),o=r("7a37");t.exports=!n&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"78e7":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},"7a37":function(t,e,r){var n=r("3ac6"),a=r("dfdb"),o=n.document,i=a(o)&&a(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"85d3":function(t,e,r){t.exports=r("9a13")},"958d":function(t,e,r){"use strict";var n=r("292d"),a=r.n(n);a.a},"9a13":function(t,e,r){t.exports=r("a38c")},a0e5:function(t,e,r){var n=r("06fa"),a=/#|\.prototype\./,o=function(t,e){var r=c[i(t)];return r==u||r!=s&&("function"==typeof e?n(e):!!e)},i=o.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},a38c:function(t,e,r){r("3e47");var n=r("764b"),a=n.Object,o=t.exports=function(t,e,r){return a.defineProperty(t,e,r)};a.defineProperty.sham&&(o.sham=!0)},a421:function(t,e,r){var n=r("638c"),a=r("1875");t.exports=function(t){return n(a(t))}},a5eb:function(t,e,r){"use strict";var n=r("3ac6"),a=r("44ba").f,o=r("a0e5"),i=r("764b"),c=r("194a"),s=r("0273"),u=r("78e7"),l=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var r,f,p,d,b,m,h,v,g,y=t.target,x=t.global,w=t.stat,F=t.proto,j=x?n:w?n[y]:(n[y]||{}).prototype,_=x?i:i[y]||(i[y]={}),$=_.prototype;for(d in e)r=o(x?d:y+(w?".":"#")+d,t.forced),f=!r&&j&&u(j,d),m=_[d],f&&(t.noTargetGet?(g=a(j,d),h=g&&g.value):h=j[d]),b=f&&h?h:e[d],f&&typeof m===typeof b||(v=t.bind&&f?c(b,n):t.wrap&&f?l(b):F&&"function"==typeof b?c(Function.call,b):b,(t.sham||b&&b.sham||m&&m.sham)&&s(v,"sham",!0),_[d]=v,F&&(p=y+"Prototype",u(i,p)||s(i,p,{}),i[p][d]=b,t.real&&$&&!$[d]&&s($,d,b)))}},c1b2:function(t,e,r){var n=r("06fa");t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},cc94:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},dd20:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.items,(function(e){return r("el-breadcrumb-item",[t._v(t._s(e))])})),1)},a=[],o={data:function(){return{}},methods:{},props:{items:{type:Array,required:!0}},created:function(){},mounted:function(){}},i=o,c=r("2877"),s=Object(c["a"])(i,n,a,!1,null,"e3ff9536",null);e["a"]=s.exports},dfdb:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fc48:function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}}}]);
//# sourceMappingURL=chunk-4b29039e.978a6e28.js.map