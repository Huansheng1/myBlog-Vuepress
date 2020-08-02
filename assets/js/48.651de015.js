(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{397:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"原型与原型对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型对象"}},[t._v("#")]),t._v(" 原型与原型对象")]),t._v(" "),n("h2",{attrs:{id:"原型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),n("p",[t._v("是不是还傻傻分不清"),n("code",[t._v("__proto__")]),t._v("和"),n("code",[t._v("prototype")]),t._v("？")]),t._v(" "),n("p",[n("code",[t._v("__proto__")]),t._v("（隐式原型）：对象有一个"),n("code",[t._v("[[prototype]]")]),t._v("属性，在标准中，这是一个隐藏属性。该属性指向的是这个对象的原型。")]),t._v(" "),n("blockquote",[n("p",[t._v("ES5之前没有标准的方法访问这个内置属性，大多数浏览器支持通过"),n("code",[t._v("__proto__")]),t._v("来访问。")])]),t._v(" "),n("blockquote",[n("p",[t._v("ES5开始有了对于这个内置属性标准的Get方法："),n("code",[t._v("Object.getPrototypeOf()")])])]),t._v(" "),n("p",[n("code",[t._v("prototype")]),t._v("（显式原型）：每一个函数在创建之后都拥有一个名为"),n("code",[t._v("prototype")]),t._v("的属性，这个属性指向函数的原型对象。")]),t._v(" "),n("blockquote",[n("p",[t._v("注意：通过"),n("code",[t._v("Function.prototype.bind")]),t._v("方法构造出来的函数是个例外，它没有"),n("code",[t._v("prototype")]),t._v("属性。")])]),t._v(" "),n("p",[t._v("简单来说：")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("JavaScript")]),t._v("对象都有自己的隐式原型"),n("code",[t._v("[[prototype]]")]),t._v("，该属性在之前是没有官方标准的方法，大部分浏览器自身实现对象以"),n("code",[t._v("__proto__")]),t._v("属性名可获取自己原型对象，后来标准推出了"),n("code",[t._v("Obejct.getPrototypeof()")]),t._v("方法来获取对象原型（"),n("code",[t._v("__protp__")]),t._v("指向的对象）")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trump'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对象的原型对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/***\n{\n  constructor:ƒ Foo(),\n  __proto__:Object\n}\n***/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("code",[t._v("Function")]),t._v("函数对象作为一等公民，自然与众不同，它除了"),n("code",[t._v("[[prototype]]")]),t._v("隐式原型属性外，还拥有"),n("code",[t._v("prototype")]),t._v("显示原型属性，通过"),n("code",[t._v("Function.prototype")]),t._v("获得该函数的原型对象")])]),t._v(" "),n("blockquote",[n("p",[t._v("函数也是一个对象，它的"),n("code",[t._v("[[prototype]]")]),t._v("指向谁呢？")]),t._v(" "),n("ul",[n("li",[t._v("指向该函数的构造函数的原型对象 ---\x3e 一个函数的构造函数："),n("code",[t._v("Function")]),t._v("，所以函数的"),n("code",[t._v("[[prototype]]")]),t._v("就是"),n("code",[t._v("Function.prototype")])]),t._v(" "),n("li",[t._v("那"),n("code",[t._v("Function.prototype")]),t._v("也就是JS里的"),n("code",[t._v("Function")]),t._v("函数原型对象的"),n("code",[t._v("[[prototype]]")]),t._v("隐式原型对象指向谁呢？答："),n("code",[t._v("Object.prototype")]),t._v(" - JS对象公共属性与方法的原型对象最顶层（注意：这里说了前提："),n("em",[t._v("共享方法")]),t._v(" 的原型对象最顶层，原型的最顶层是"),n("code",[t._v("null")]),t._v("空对象，但是"),n("code",[t._v("null")]),t._v("很明显是没有方法与属性的）")])])]),t._v(" "),n("blockquote",[n("ul",[n("li",[n("strong",[t._v("注意")]),t._v("：")])])]),t._v(" "),n("blockquote",[n("ul",[n("li",[n("ol",[n("li",[t._v("只要是对象，如果你找不到构建函数，那么就是由 Object() 这个构造函数创建")])])])])]),t._v(" "),n("ul",[n("li",[n("blockquote",[n("blockquote",[n("p",[t._v("所有的内建对象都是由Object()创建而来。")])])])])]),t._v(" "),n("blockquote",[n("ul",[n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("原型对象是对象，故"),n("code",[t._v("Function.prototype")]),t._v("这个对象之后就只有"),n("code",[t._v("[[prototype]]")]),t._v("隐式原型属性。")])])])])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//函数的原型对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n{\n  constructor:ƒ Foo(),\n  __proto__:Object\n}\n**/")]),t._v("\nFoo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("原型对象是什么？实例对象的原型对象就是其构造函数的原型对象，"),n("code",[t._v("JavaScript")]),t._v("的继承机制就是基于原型，原型对象是该实例对象的父类/基类/超类")])]),t._v(" "),n("ul",[n("li",[n("blockquote",[n("p",[t._v("原型对象最少含有两个属性："),n("code",[t._v("[[prototype]]")]),t._v(" 与 "),n("code",[t._v("constructor")])])])]),t._v(" "),n("li",[n("blockquote",[n("p",[n("code",[t._v("[[prototype]]")]),t._v(" 用于指向父类（原型对象），"),n("code",[t._v("constructor")]),t._v(" 用于指回原构造函数")])])])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trump'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" f1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\nƒ Foo() {\n  this.name = 'trump'\n}\n**/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("原型对象的作用：")])]),t._v(" "),n("ul",[n("li",[n("blockquote",[n("p",[t._v("所有同一构造函数创建的对象实例拥有共同的属性与方法"),n("br"),t._v("\n（例如JS一切属性都有"),n("code",[t._v("length")]),t._v("属性 --- 因为其在"),n("code",[t._v("Object.prototype")]),t._v("里）")])])]),t._v(" "),n("li",[n("blockquote",[n("p",[n("code",[t._v("[[prototype]]")]),t._v("构成原型链，"),n("code",[t._v("prototype")]),t._v("实现基于原型的继承与属性的共享。")])])])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trump'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myName is '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', myAge is '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Foo { name: 'trump' } Foo { name: 'trump' }")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" f2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nf1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//myName is trump, myAge is 18")]),t._v("\nf2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//myName is trump, myAge is 18")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[t._v("原型图示例：由 "),n("a",{attrs:{href:"http://zhihu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("doris"),n("OutboundLink")],1),t._v(" 绘制\n"),n("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200710105708.jpg",alt:""}})]),t._v(" "),n("p",[t._v("我们最后来通俗总结下：")]),t._v(" "),n("ol",[n("li",[t._v("有一个小孩"),n("code",[t._v("foo")]),t._v("对象实例张三，其父亲为"),n("code",[t._v("[[prototype]]")]),t._v("隐式原型对象。")]),t._v(" "),n("li",[n("code",[t._v("foo")]),t._v("张三 从"),n("code",[t._v("new")]),t._v("出生开始，"),n("code",[t._v("[[prototype]]")]),t._v("父亲给与张三 他的 "),n("code",[t._v("属性")]),t._v("姓氏和财产，并传授"),n("code",[t._v("方法")]),t._v("家传绝技")]),t._v(" "),n("li",[t._v("有一天他问父亲为什么母亲是他父亲的老婆？父亲告诉他，夫妻之间是有结婚证的，通过结婚证（属性）可以看到，"),n("code",[t._v("[[prototype]]")]),t._v("父亲的 合法夫妻关系"),n("code",[t._v("constructor")]),t._v("属性 指向的是 "),n("code",[t._v("constructor")]),t._v("构造函数Foo，所以"),n("code",[t._v("foo")]),t._v("张三其母亲为"),n("code",[t._v("constructor")]),t._v("构造函数Foo，，而母亲Foo的丈夫"),n("code",[t._v("prototype")]),t._v("就是"),n("code",[t._v("[[prototype]]")]),t._v("父亲")]),t._v(" "),n("li",[n("code",[t._v("constructor")]),t._v("母亲感觉 "),n("code",[t._v("foo")]),t._v("张三 太皮蛋，要求自己的丈夫 "),n("code",[t._v("prototype")]),t._v(" 教会 "),n("code",[t._v("foo")]),t._v("张三  "),n("code",[t._v("新方法")]),t._v(" 礼貌并写入家规，让以后的儿女都必须知礼，从此  "),n("code",[t._v("foo")]),t._v("张三 见人会礼貌的打招呼 "),n("code",[t._v("方法调用")])]),t._v(" "),n("li",[n("code",[t._v("foo")]),t._v("张三 上学了，教育局办理学籍档案时，通过 "),n("code",[t._v("foo")]),t._v("张三 能找到 他的 "),n("code",[t._v("[[prototype]]")]),t._v("父亲 和 "),n("code",[t._v("constructor")]),t._v("母亲，并能通过父母信息继续找到他们的家族谱")]),t._v(" "),n("li",[n("code",[t._v("foo")]),t._v("张三 眼睛浅棕色，他去问 "),n("code",[t._v("[[prototype]]")]),t._v("父亲，父亲告诉他这是他爸爸的爸爸（爷爷）遗传给他的，而他爷爷又是他爷爷的爸爸遗传给他的。。。。。。，最后 张三明白了他们家族的 浅棕色眼眸 都是 老祖宗 "),n("code",[t._v("Object.prototype")]),t._v(" 遗传给他们的，至于老祖宗哪来的？张三后来学过生物，明白是从不是人的生物"),n("code",[t._v("null")]),t._v("进化过来的")]),t._v(" "),n("li",[t._v("张三 有一天发现个问题：自己明明是"),n("code",[t._v("constructor")]),t._v("母亲生的，但是却没有"),n("code",[t._v("constructor")]),t._v("私有属性来指向自己母亲。如果想寻找自己的母亲"),n("code",[t._v("构造函数")]),t._v("，身份信息查询系统通过"),n("code",[t._v("[[prototype]]")]),t._v("父亲的"),n("code",[t._v("constructor")]),t._v("妻子属性 找到的，可是俺张三是学过英语的，"),n("code",[t._v("constructor")]),t._v("不就是母亲的意思么，为什么在父亲那是"),n("code",[t._v("constructor")]),t._v("妻子关系，而不是在我档案里弄个"),n("code",[t._v("constructor")]),t._v("母亲关系呢？")]),t._v(" "),n("li",[t._v("这里我们需要明白："),n("strong",[n("code",[t._v("JavaScript")]),t._v("世界的繁衍"),n("code",[t._v("继承")]),t._v("是基于家族谱"),n("code",[t._v("原型链")]),t._v("繁衍"),n("code",[t._v("继承")]),t._v("的")]),t._v("；张三 寻找自己的"),n("code",[t._v("constructor")]),t._v("构造函数母亲，其是通过父亲"),n("code",[t._v("[[prototype]]")]),t._v("原型对象来调用原型对象的"),n("code",[t._v("constructor")]),t._v("属性，如果原型的"),n("code",[t._v("constructor")]),t._v("属性不指向"),n("code",[t._v("constructor")]),t._v("构造函数，而是指向自己的构造函数，那么岂不是每个对象的"),n("code",[t._v("construtor")]),t._v("属性通过原型链去查找最后都指向"),n("code",[t._v("Object")]),t._v("构造函数了？")]),t._v(" "),n("li",[t._v("所以，儿子的母亲构造函数 就是 老爹的妻子"),n("code",[t._v("constructor")]),t._v("属性 ，这也就说得过去了！")]),t._v(" "),n("li",[t._v("end...")])]),t._v(" "),n("p",[t._v("图示总结："),n("img",{attrs:{src:"https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200712125621.png",alt:""}})]),t._v(" "),n("p",[t._v("相关文章：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.zhihu.com/question/34183746",target:"_blank",rel:"noopener noreferrer"}},[t._v("js中__proto__和prototype的区别和关系？"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e95db9ee51d4546d635868e",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂JS中类、原型和继承"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000016024573",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底搞懂js里的__proto__和prototype到底有什么区别？"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/686b61c4a43d",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底理解JavaScript原型链（一）—__proto__的默认指向"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/3d756c5bba16",target:"_blank",rel:"noopener noreferrer"}},[t._v("prototype和__proto__ "),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.prototype."),n("strong",[t._v("proto")]),t._v(" - JavaScript | MDN"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.getPrototypeOf()"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/99103505",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的类、原型、原型链、继承"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);