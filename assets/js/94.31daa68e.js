(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{442:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs第一天"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs第一天"}},[s._v("#")]),s._v(" NodeJs第一天")]),s._v(" "),a("h2",{attrs:{id:"获取node后面的输入参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取node后面的输入参数"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("node")]),s._v("后面的输入参数")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("node")]),s._v("运行"),a("code",[s._v("js")]),s._v("文件通常我们是这样做的："),a("code",[s._v("node test.js")]),s._v("；")]),s._v(" "),a("p",[s._v("可是，如果我们想给运行的"),a("code",[s._v("js")]),s._v("传递参数呢？"),a("br"),s._v("\n其实"),a("code",[s._v("node")]),s._v("也是支持该操作，为了实现获取参数的效果，我们需要知道一个对象："),a("code",[s._v("process")]),s._v("："),a("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020212503.png",alt:""}})]),s._v(" "),a("p",[s._v("通过打印"),a("code",[s._v("process.argv")]),s._v("，我们可用知道：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("arfv")]),s._v("存储的是"),a("code",[s._v("node进程")]),s._v("接收到参数信息，其类型为一个数组")]),s._v(" "),a("li",[s._v("第一个成员为"),a("code",[s._v("node绝对路径")]),s._v("，第二个成员为"),a("code",[s._v("当前运行的js文件")])])]),s._v(" "),a("p",[s._v("那么，我们如果在运行时传递一个参数呢？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("node demo.js testArg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("结果："),a("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020212926.png",alt:""}})]),s._v(" "),a("p",[s._v("那么，我们要做的非常简单，"),a("strong",[s._v("只需通过"),a("code",[s._v("process.argv[process.argv.length-1]")]),s._v("即可读取最后一个参数")])]),s._v(" "),a("h2",{attrs:{id:"持续获取用户输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续获取用户输入"}},[s._v("#")]),s._v(" 持续获取用户输入")]),s._v(" "),a("p",[s._v("通过上面的方式，我们只能在"),a("code",[s._v("js")]),s._v("文件运行时获取一次就执行结束了，那我们能不能做到 接受用户多次输入（持续交互）")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stdin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// e.toString()就能打印出我们的输入结果")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("运行后终端我们可一直输入："),a("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020220942.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"commonjs与es6模块的规范区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs与es6模块的规范区别"}},[s._v("#")]),s._v(" "),a("code",[s._v("CommonJs")]),s._v("与"),a("code",[s._v("Es6")]),s._v("模块的规范区别")]),s._v(" "),a("h3",{attrs:{id:"es6-module规范-js官方标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-module规范-js官方标准"}},[s._v("#")]),s._v(" "),a("code",[s._v("Es6 Module")]),s._v("规范 - "),a("code",[s._v("Js官方标准")])]),s._v(" "),a("ol",[a("li",[s._v("在当前目录"),a("code",[s._v("创建 package.json")]),s._v("文件，并加入以下字段：")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("导出：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只能暴漏一个成员")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" obj\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// export var s = {}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//export var b = {}  (可以暴漏多个成员)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("导入：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入export default暴漏的成员")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import * as foo from './test.js';")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo.default指向的才和上面的相等")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import {s} from '包名（或者是文件路径）' （导入export 暴漏的成员，名字要一致）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import {s as foo} from '包名（或者是文件路径）' （但是，别名也是可行的）")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"commonjs规范-nodejs使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范-nodejs使用"}},[s._v("#")]),s._v(" "),a("code",[s._v("CommonJs")]),s._v("规范 - "),a("code",[s._v("NodeJs")]),s._v("使用")]),s._v(" "),a("blockquote",[a("p",[s._v("如果导入一个没导出的文件，其值将为"),a("code",[s._v("{}")])])]),s._v(" "),a("p",[s._v("方式一："),a("strong",[a("code",[s._v("module.exports")]),s._v("导出")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("方式二："),a("strong",[a("code",[s._v("exports")]),s._v("导出")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[a("code",[s._v("require")]),s._v("导入")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("exports.属性名 = 导出的具体数据")]),s._v("导出的数据挂载在同一个对象里，但支持导出多个数据")]),s._v(" "),a("li",[a("code",[s._v("module.exports = {}")]),s._v("只导出一个数据，如果先后导出两次，则其他文件只能获得最后导出的那次数据")]),s._v(" "),a("li",[a("blockquote",[a("p",[a("code",[s._v("module.exports")]),s._v("导出多个数据就得这样："),a("code",[s._v("module.exports={属性1：属性值，属性2：属性值2}")])])])])]),s._v(" "),a("h4",{attrs:{id:"exports与module-exports区别与联系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports与module-exports区别与联系"}},[s._v("#")]),s._v(" "),a("code",[s._v("exports")]),s._v("与"),a("code",[s._v("module.exports")]),s._v("区别与联系")]),s._v(" "),a("p",[a("em",[a("code",[s._v("exports")]),s._v("变量与"),a("code",[s._v("exports.属性")]),s._v("关联对象")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("情境一：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("情境二：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\nexports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("思考题：")])]),s._v(" "),a("ol",[a("li",[s._v("为什么导出的对象和模块里的对象不一样？")]),s._v(" "),a("li",[s._v("只是在导出的那个文件里稍微跳转了下赋值顺序，为什么结果截然相反？")])]),s._v(" "),a("p",[a("em",[s._v("为什么"),a("code",[s._v("module.exports")]),s._v("导出两次，后一次数据会覆盖前一次？")])]),s._v(" "),a("p",[a("em",[a("code",[s._v("exports.属性")]),s._v("对上"),a("code",[s._v("module.exports")])]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fooObj'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { obj: { obj: { name: 'foo', age: 18 }, name: 'fooObj' } }")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { test: true }")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { test: true }")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("思考题：")])]),s._v(" "),a("ol",[a("li",[s._v("为什么"),a("code",[s._v("exports")]),s._v("和"),a("code",[s._v("module.exports")]),s._v("对象不一样？")]),s._v(" "),a("li",[s._v("为什么其他文件导入结果是"),a("code",[s._v("module.exports")]),s._v("对象数据？")])]),s._v(" "),a("p",[a("strong",[s._v("结论")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("exports")]),s._v("是"),a("code",[s._v("module.exports")]),s._v("的语法糖，或者你可以这样说："),a("code",[s._v("exports")]),s._v("是"),a("code",[s._v("module.exports")]),s._v("的别名，其指向"),a("code",[s._v("module.exports")]),s._v("对象地址：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里，foo就是module.exports，bar就是exports")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exports.a = a  其实是它缩写--\x3e module.exports.a = a ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("module.exports")]),s._v("之所以后一次会覆盖前一次数据，道理非常简单，因此后一次将其指向了新的对象地址")]),s._v(" "),a("li",[a("code",[s._v("exports.属性")]),s._v("导出后，再将"),a("code",[s._v("exports")]),s._v("赋予别的值，结果内部打印结果与外部导入结果不一样的原因是：后面的赋值将"),a("code",[s._v("exports")]),s._v("指向了其他类型的引用地址，而导出的对象其实是"),a("code",[s._v("module.exports")]),s._v("指向的对象数据")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟语法糖")]),s._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aaa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加导出数据，模拟 exports.xxx = xxx")]),s._v("\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟后面的赋值操作，exports = {}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这就是为什么其他地方导入数据和内部打印不一样的原因，因为只是改变了bar的指针，但外面人家导入的是foo啊")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"其他小知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他小知识"}},[s._v("#")]),s._v(" 其他小知识")]),s._v(" "),a("h3",{attrs:{id:"获取运行文件路径与目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取运行文件路径与目录"}},[s._v("#")]),s._v(" 获取运行文件路径与目录")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前运行js文件的绝对路径")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前运行js文件的所在目录（绝对路径）")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);