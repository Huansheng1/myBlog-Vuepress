(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{404:function(e,o,t){"use strict";t.r(o);var _=t(43),v=Object(_.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mock数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock数据"}},[e._v("#")]),e._v(" Mock数据")]),e._v(" "),t("h2",{attrs:{id:"为什么需要mock数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要mock数据"}},[e._v("#")]),e._v(" 为什么需要Mock数据")]),e._v(" "),t("p",[e._v("前后台并行开发，节省因为数据联掉而浪费的时间")]),e._v(" "),t("h2",{attrs:{id:"数据mock方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据mock方案"}},[e._v("#")]),e._v(" 数据Mock方案")]),e._v(" "),t("h3",{attrs:{id:"本地json文件mock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地json文件mock"}},[e._v("#")]),e._v(" 本地Json文件Mock")]),e._v(" "),t("p",[e._v("直接请求项目本地"),t("code",[e._v("Json")]),e._v("文件，方便快捷，操作简单，缺点是代码耦合度太高，更换接口时需要改动不少文件；还支持"),t("code",[e._v("mock.js")]),e._v("语法")]),e._v(" "),t("h3",{attrs:{id:"easymock平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#easymock平台"}},[e._v("#")]),e._v(" EasyMock平台")]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("EasyMock")]),e._v("网站，代码几乎不需要任何变更，只需要将"),t("code",[e._v("baseUrl")]),e._v("修改为"),t("code",[e._v("EasyMock")]),e._v("地址，方便快捷，不但学习成本低，后期更换自己接口也非常容易；缺点是官方网站服务器不理想，经常无法访问，一旦出现故障，项目就无法正常进行"),t("code",[e._v("Mock")])]),e._v(" "),t("p",[e._v("解决办法：自己通过"),t("code",[e._v("github")]),e._v("搭建属于自己公司的"),t("code",[e._v("easyMock")]),e._v("网站，当然需要一定学习成本")]),e._v(" "),t("p",[e._v("更多："),t("a",{attrs:{href:"https://juejin.im/post/5d31925ef265da1bd04f1b6d",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用easyMock"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("官网："),t("a",{attrs:{href:"https://easy-mock.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Easy Mock"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"mock-js拦截请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock-js拦截请求"}},[e._v("#")]),e._v(" Mock.JS拦截请求")]),e._v(" "),t("p",[e._v("在网络请求发送前"),t("code",[e._v("mock.js")]),e._v("就将其拦截掉，返回给"),t("code",[e._v("vue")]),e._v("它模拟的数据，既不用担心服务器故障，也不需要担心后期代码大幅更换，只需要一点点代码的增加。")]),e._v(" "),t("p",[e._v("步骤图示：")]),e._v(" "),t("ol",[t("li",[e._v("安装"),t("code",[e._v("mockjs")]),e._v("插件：")]),e._v(" "),t("li",[e._v("在项目源代码文件夹创建"),t("code",[e._v("mock")]),e._v("目录，里面存放我们的"),t("code",[e._v("api.js")]),e._v("用来"),t("code",[e._v("mock")]),e._v("掉我们的"),t("code",[e._v("api")]),e._v("请求："),t("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200721221329.png",alt:""}})])]),e._v(" "),t("blockquote",[t("p",[e._v("上面代码可让我们"),t("code",[e._v("vue")]),e._v("项目请求"),t("code",[e._v("/api/user/login")]),e._v("时自动拦截并返回传入的"),t("code",[e._v("JSON")]),e._v("格式对象")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("在"),t("code",[e._v("main.js")]),e._v("里加入我们少量的"),t("code",[e._v("mock")]),e._v("代码："),t("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200721221520.png",alt:""}})])]),e._v(" "),t("blockquote",[t("p",[e._v("注意"),t("code",[e._v("require")]),e._v("与"),t("code",[e._v("import")]),e._v("的区别："),t("code",[e._v("import")]),e._v("导入插件会在项目发布时编译，"),t("code",[e._v("require")]),e._v("则在项目运行时才决定是否运行（我们这里通过"),t("code",[e._v("mock")]),e._v("状态判断是否引入"),t("code",[e._v("mock.js")]),e._v("）")])]),e._v(" "),t("p",[t("strong",[e._v("注意")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("不能直接用字符串拦截"),t("code",[e._v("'/api/getSeller'")]),e._v("，因为其代码实际会把相对路径当成完整的路径去和"),t("code",[e._v("'http://localhost:8080/api/getSeller'")]),e._v("比较，导致拦截不到")]),e._v(" "),t("li",[e._v("我们应该使用正则形式："),t("code",[e._v("/\\/api\\/getSeller/")]),e._v("才能匹配到；上面示例能成功是因为其"),t("code",[e._v("axios")]),e._v("的"),t("code",[e._v("baseURL")]),e._v("只是"),t("code",[e._v("/api")])])]),e._v(" "),t("blockquote",[t("p",[e._v("更多请看官网："),t("a",{attrs:{href:"http://mockjs.com/examples.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mock.js"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/dadiyang/article/details/79686637",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在Vue项目中使用Mockjs，模拟接口返回的数据"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/soyxiaobi/p/9846057.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("正确开启Mockjs的三种姿势：入门参考"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/139785015",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-本地mock后台-本地静态资源引入，解决跨域"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=v.exports}}]);