(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{402:function(e,s,t){"use strict";t.r(s);var a=t(43),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"个人经验记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人经验记录"}},[e._v("#")]),e._v(" 个人经验记录")]),e._v(" "),t("h2",{attrs:{id:"脚手架创建项目版本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架创建项目版本问题"}},[e._v("#")]),e._v(" 脚手架创建项目版本问题")]),e._v(" "),t("p",[e._v("不知道为啥，在我这台电脑上安装最新的"),t("code",[e._v("Angular/cli")]),e._v("脚手架创建项目后，其项目内的"),t("code",[e._v("Angular")]),e._v("版本是"),t("code",[e._v("Angular2")]),e._v("的版本。")]),e._v(" "),t("p",[e._v("因此，我在练习"),t("code",[e._v("Angular")]),e._v("的"),t("code",[e._v("*ngIf")]),e._v("的"),t("code",[e._v("else")]),e._v("语法时，控制台会提示一个错误："),t("code",[e._v("Unhandled Promise rejection: Template parse errors: Can't bind to 'ngIfElse' since it isn't a known property of 'div'.")])]),e._v(" "),t("blockquote",[t("p",[e._v("也就是说：ngIfElse 不是一个已知的属性；我以为是自己代码问题，来回与官网对比，摸不着头脑")])]),e._v(" "),t("p",[e._v("突然，灵光一闪，是不是这个项目内部的"),t("code",[e._v("Angular")]),e._v("版本太旧，不支持这种比较新的语法呢？")]),e._v(" "),t("p",[e._v("打开"),t("code",[e._v("package.json")]),e._v("一看，啊，果然："),t("img",{attrs:{src:"https://i.loli.net/2020/08/21/TC1EcVAZUMwsujN.png",alt:"image.png"}})]),e._v(" "),t("p",[e._v("既然知道问题原因，那就很简单了，首先我们打开官方提供的："),t("a",{attrs:{href:"https://github.com/raineorshine/npm-check-updates",target:"_blank",rel:"noopener noreferrer"}},[e._v("升级指南"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("全局安装检查更新模块：")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g npm-check-updates\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("在当前项目目录下的控制台输入："),t("code",[e._v("ncu")]),e._v(" "),t("img",{attrs:{src:"https://i.loli.net/2020/08/21/7eOgoSKPszCvDa5.png",alt:"本地版本与最新版本对比"}})]),e._v(" "),t("li",[e._v("将"),t("code",[e._v("package.json")]),e._v("文件内依赖的版本号升级："),t("code",[e._v("ncu -u")])]),e._v(" "),t("li",[e._v("然后呢，重新"),t("code",[e._v("npm install")]),e._v("一遍，将最新版的模块下载到本地")]),e._v(" "),t("li",[t("code",[e._v("ng serve")]),e._v("运行项目看看还有没有问题 ， 尴尬，报错提示："),t("code",[e._v('Version of @angular/compiler-cli needs to be 2.3.1 or greater. Current version is "10.0.11".')]),e._v(" -> "),t("code",[e._v("@angular/compiler-cli 版本应该是2.3.1或者更高。当前版本是10.0.11")]),e._v(" ；我们当前版本不是明显大于它了么，为啥报错？")]),e._v(" "),t("li",[e._v("通过检查全局包："),t("code",[e._v("ncu -g")]),e._v("，发现我们的脚手架好像版本不对，强制升级了一下")]),e._v(" "),t("li",[e._v("检查版本："),t("code",[e._v("ng v")]),e._v("，正常了，但是之前老版本的命令"),t("code",[e._v("ng serve")]),e._v("使用报错。。。")]),e._v(" "),t("li",[e._v("我们重新创建一个项目，"),t("code",[e._v("ng new demo-ng")]),e._v("，现在创建项目有选择是否需要路由 和 "),t("code",[e._v("css")]),e._v("语法选择 ，耐心等待片刻。")]),e._v(" "),t("li",[e._v("启动顺利，在 html 文件复制之前代码过来测试 是否为我们之前推测报错为老版本太旧，导致不支持新语法的问题")]),e._v(" "),t("li",[e._v("正常了，完美。")])]),e._v(" "),t("h2",{attrs:{id:"请求数据控制台报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求数据控制台报错"}},[e._v("#")]),e._v(" 请求数据控制台报错")]),e._v(" "),t("p",[e._v("错误：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ERROR "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" node_modules/@angular/common/http/http.d.ts:2823:22 - error NG6002: Appears "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the NgModule.imports of AppModule, but could not be resolved to an NgModule class.\n\n    This likely means that the library "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("@angular/common/http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" declares HttpClientModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" a newer version of the library is available, and update "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" so. Also consider checking with the library's authors to see "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the library is expected to be compatible with Ivy.\n\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2823")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("declare")]),e._v(" class HttpClientModule "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("表现：")]),e._v(" "),t("p",[e._v("控制台虽然报错："),t("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200919135347.png",alt:""}}),e._v("，但网页能正常运行获取到数据："),t("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200919135430.png",alt:""}})]),e._v(" "),t("p",[e._v("解决办法：")]),e._v(" "),t("blockquote",[t("p",[e._v("删除"),t("code",[e._v("node_modules")]),e._v("目录，重新"),t("code",[e._v("npm install")]),e._v("即可。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);