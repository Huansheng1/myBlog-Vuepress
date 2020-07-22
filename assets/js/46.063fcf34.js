(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{395:function(t,a,s){"use strict";s.r(a);var n=s(43),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"迭代、递归-与-遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代、递归-与-遍历"}},[t._v("#")]),t._v(" 迭代、递归 与 遍历")]),t._v(" "),s("h2",{attrs:{id:"递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),s("p",[t._v("递归（"),s("code",[t._v("recursion")]),t._v("）：递归常被用来描述以自相似方法重复事物的过程，在数学和计算机科学中，指的是在函数定义中使用函数自身的方法。（A调用A）")]),t._v(" "),s("blockquote",[s("p",[t._v("自己调用自己的方法")])]),t._v(" "),s("p",[t._v("更多："),s("a",{attrs:{href:"https://www.jianshu.com/p/32bcc45efd32",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我查看"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"迭代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代"}},[t._v("#")]),t._v(" 迭代")]),t._v(" "),s("p",[t._v("迭代（"),s("code",[t._v("iteration")]),t._v("）：重复反馈过程的活动，每一次迭代的结果会作为下一次迭代的初始值。（A重复调用B）")]),t._v(" "),s("p",[t._v("ES6 规定，默认的 "),s("code",[t._v("Iterator")]),t._v(" 接口部署在数据结构的"),s("code",[t._v("Symbol.iterator")]),t._v("属性，或者说，一个数据结构只要具有"),s("code",[t._v("Symbol.iterator")]),t._v("属性，就可以认为是“可遍历的”（"),s("code",[t._v("iterable")]),t._v("）。")]),t._v(" "),s("p",[t._v("原生具备 "),s("code",[t._v("Iterator")]),t._v(" 接口的数据结构如下：")]),t._v(" "),s("ul",[s("li",[t._v("Array")]),t._v(" "),s("li",[t._v("Map")]),t._v(" "),s("li",[t._v("Set")]),t._v(" "),s("li",[t._v("String")]),t._v(" "),s("li",[t._v("TypedArray")]),t._v(" "),s("li",[t._v("函数的 arguments 对象")]),t._v(" "),s("li",[t._v("NodeList 对象")])]),t._v(" "),s("p",[t._v("检测是否是可迭代对象：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义 检查一个对象是否可迭代 的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIterator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIterator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("h3",{attrs:{id:"迭代和遍历的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代和遍历的区别"}},[t._v("#")]),t._v(" 迭代和遍历的区别")]),t._v(" "),s("p",[s("strong",[t._v("迭代")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("很多程序有迭代器。这是一种用于“遍历”数组的工具对象。一般遍历一个数组都是使用循环变量从0到最后一个，或者使用链表遍历量表中内容。使用迭代器可以不关注数组的具体实现方式，遍历数组中所有成员。")])]),t._v(" "),s("p",[s("strong",[t._v("遍历")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("对数据结构中每一个成员都进行一次访问的操作就是遍历；比如遍历数组、遍历树。")]),t._v(" "),s("li",[t._v("遍历树的常见方法有：先序/中序/后序，或者按照另一个纬度划分有，广度遍历和深度遍历。")])]),t._v(" "),s("h2",{attrs:{id:"更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),s("p",[t._v("文档：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:""}})])]),t._v(" "),s("p",[t._v("文章：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.nowcoder.com/questionTerminal/47a43dcd64244bdbad6846509866a23c?orderByHotValue=1&page=1&onlyReference=false",target:"_blank",rel:"noopener noreferrer"}},[t._v("以下哪些对象是Javascript内置的可迭代对象？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/iterator#%E9%BB%98%E8%AE%A4-Iterator-%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iterator 和 for...of 循环 - ECMAScript 6入门"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);