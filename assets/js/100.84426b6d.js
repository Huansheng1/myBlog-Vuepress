(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{449:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"谈谈我踩过vue的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谈谈我踩过vue的坑"}},[s._v("#")]),s._v(" 谈谈我踩过Vue的坑")]),s._v(" "),a("blockquote",[a("p",[s._v("注：本文并不意味着说"),a("code",[s._v("Vue")]),s._v("有问题哦！主要是个人操作失误导致的")])]),s._v(" "),a("h2",{attrs:{id:"写代码时遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写代码时遇到的坑"}},[s._v("#")]),s._v(" 写代码时遇到的坑")]),s._v(" "),a("h3",{attrs:{id:"路由数据变化未检测到问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由数据变化未检测到问题"}},[s._v("#")]),s._v(" 路由数据变化未检测到问题")]),s._v(" "),a("p",[s._v("场景下，我定义了一个对象属性，通过索引对数组成员对象的属性进行修改，"),a("code",[s._v("Vue")]),s._v("是检测不到的，具体可以百度")]),s._v(" "),a("blockquote",[a("p",[s._v("小声BB：其实官网也有，我以前也看到过；但是人吧，不睬一次，不会往那方面想。")])]),s._v(" "),a("p",[a("strong",[s._v("Vue数组不能监测的情况有两种")])]),s._v(" "),a("p",[s._v("数组方面")]),s._v(" "),a("ol",[a("li",[s._v("直接通过索引修改值")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("通过修改数组长度")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newLength\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决办法：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组解决办法：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array.prototype.splice.call()")]),s._v("\narr数组对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("开始索引，删除长度，插入的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 两者是一样的，没啥区别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.$set(arr,index,value)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("对象方面")]),s._v(" "),a("ol",[a("li",[s._v("通过点方法赋值"),a("code",[s._v("Watch")]),s._v("无法监测到")])]),s._v(" "),a("blockquote",[a("p",[s._v("我通过计算属性返回"),a("code",[s._v("store")]),s._v("里的数据再通过"),a("code",[s._v("watch")]),s._v("监听这个计算属性来达到间接监听"),a("code",[s._v("Vuex")]),s._v("的目的；万万没想到还有个坑。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("属性 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("如果在实例创建之后添加新的属性到实例上，它不会触发视图更新\n解决办法：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'属性名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过提供的API添加属性；后续可正常监听")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Object.assign(target, ...sources) 第一个参数是目标对象，后面可接N个源对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后面的数据都会复制到前面目标对象里，最后将结果对象返回")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("对象 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 新对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过新对象避免无法检测的问题")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("最后，也可试试"),a("code",[s._v("deep")]),s._v("深度监听属性：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要监听的变量名'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("curVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("oldVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("oldVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据变动就 打印以前的值")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      deep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重点")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"编译时遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译时遇到的坑"}},[s._v("#")]),s._v(" 编译时遇到的坑")]),s._v(" "),a("h2",{attrs:{id:"优化时遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化时遇到的坑"}},[s._v("#")]),s._v(" 优化时遇到的坑")]),s._v(" "),a("h2",{attrs:{id:"网络请求遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络请求遇到的坑"}},[s._v("#")]),s._v(" 网络请求遇到的坑")]),s._v(" "),a("h3",{attrs:{id:"跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[s._v("#")]),s._v(" 跨域问题")]),s._v(" "),a("p",[a("code",[s._v("axios")]),s._v("是不能随便配置的哦")]),s._v(" "),a("p",[s._v("我们之前不是写了一篇文章，最后贴出来了最终整理的封装代码么，于是，在某个项目中，我直接复制了之前的代码。")]),s._v(" "),a("p",[s._v("请求之前，我先测试了下，嗯，这接口是允许跨域访问的；那就不用"),a("code",[s._v("vue.config.js")]),s._v("本地代理，直接使用吧。")]),s._v(" "),a("p",[s._v("可是，一运行，emm，报错了？")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("Request header field withCredentials is not allowed by Access-Control-Allow-Headers in preflight response.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("中文翻译：在预发请求返回相应结果中，"),a("code",[s._v("Access-Control-Allow-Headers")]),s._v("不允许"),a("code",[s._v("request")]),s._v("请求使用带凭证的请求标头字段。")])]),s._v(" "),a("p",[s._v("所以，结果很明显了：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("axios")]),s._v("的属性 "),a("code",[s._v("withCredentials: true")]),s._v(" 配置不能乱用，之前理解有误：服务器可能允许我们跨域请求，但并未设置允许我们跨域请求携带"),a("code",[s._v("cookies")]),s._v("，因此，不要将该属性设置为默认的哦。")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.net/article/137278.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("详细原因"),a("OutboundLink")],1),s._v("：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("HTTP")]),s._v(" 请求方式有许多种，有些请求会触发 "),a("code",[s._v("CORS")]),s._v(" 预检请求。“需预检的请求”会使用 "),a("code",[s._v("OPTIONS")]),s._v(" 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。")])]),s._v(" "),a("li",[a("p",[s._v("对于跨域请求浏览器一般不会发送身份凭证信息。如果要发送凭证信息，需要设置 "),a("code",[s._v("XMLHttpRequest")]),s._v(" 的 "),a("code",[s._v("withCredentials")]),s._v(" 属性为 "),a("code",[s._v("true：withCredentials: true")]),s._v("。此时要求服务器的响应信息中携带 "),a("code",[s._v("Access-Control-Allow-Credentials: true")]),s._v("，否则响应内容将不会返回。")])]),s._v(" "),a("li",[a("p",[s._v("另外，响应头中也携带了 "),a("code",[s._v("Set-Cookie")]),s._v(" 字段，尝试对 "),a("code",[s._v("Cookie")]),s._v(" 进行修改。如果操作失败，将会抛出异常。")])])]),s._v(" "),a("p",[s._v("最后贴上后端解决跨域的常见代码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最简单的方法就是在被访问的服务端返回的内容上面加上Access-Control-Allow-Origin响应头, 值为*或是当前网站的域名. 使用*的话虽然方便, 但容易被别的网站乱用,总归有些不太安全; 设置为当前网站的域名的话又只能设置一个. ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 推荐解决办法是设置一个允许的域名白名单, 判断当前请求的refer地址是否在白名单里,如果是,就设置这个地址到Access-Control-Allow-Origin中去,否则就不设置这个响应头.")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Access-Control-Allow-Origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后台通过cookie与前端交互的,但跨域时每次请求都是独立的,都会生成不同的cookie.为了保证前端与后端能够正常交互，后端需要设置这个，允许跨域请求携带cookies")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要注意，如果使用，两者皆要使用，反之不行")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Access-Control-Allow-Credentials"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许所有请求方式")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Access-Control-Allow-Methods"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求头Content-Type字段内容没有在Access-Control-Allow-Headers中被设置为允许.可能也会发生错误")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Access-Control-Allow-Headers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type,Access-Token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Access-Control-Expose-Headers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// header里面包含自定义字段，浏览器是会先发一次options请求，如果请求通过，则继续发送正式的post请求，而如果不通过则返回以上错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接允许就行了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OPTIONS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    HttpUtil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HttpStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// php解决")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Methods:OPTIONS, GET, POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Headers:x-requested-with'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Max-Age:86400'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Origin:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'HTTP_ORIGIN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Credentials:true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Headers:x-requested-with,content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Access-Control-Allow-Headers:Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("参考文章：")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/552daaf2869c",target:"_blank",rel:"noopener noreferrer"}},[s._v("js网络请求跨域问题汇总(携带cookie)"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/caimuqing/p/6733405.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何解决出现not allowed by Access-Control-Allow-Headers in preflight response."),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://icewing.cc/post/about-cross-origin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端AJAX请求跨域时遇到的一些坑"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/b55086cbd9af",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端 | 浅谈preflight request"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"部署托管遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署托管遇到的坑"}},[s._v("#")]),s._v(" 部署托管遇到的坑")]),s._v(" "),a("h3",{attrs:{id:"多级路由刷新出现404问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多级路由刷新出现404问题"}},[s._v("#")]),s._v(" 多级路由刷新出现404问题")]),s._v(" "),a("p",[s._v("这个坑踩了一下午不知道为什么，最后排查发现是路由嵌套惹的锅")]),s._v(" "),a("p",[s._v("因为我使用了"),a("code",[s._v("history")]),s._v("模式，导致路由跳转会改变路径，因为本来从首页一路使用确实是正常的；")]),s._v(" "),a("p",[s._v("但当我们在嵌套路由页面刷新时，完蛋，页面404打不开，因为我托管在"),a("code",[s._v("Github")]),s._v("里，这时控制台会显示"),a("code",[s._v("refused ....xxx.icon....")]),s._v(" - 意思就是：拒绝加载我们的资源。")]),s._v(" "),a("p",[s._v("为什么会这样？因为我们此时的路径是路由地址，实际服务器是没有的，刷新操作会让页面数据清除，JS文件不存在了，就向服务器请求该地址，那可不就报错了么。")]),s._v(" "),a("p",[s._v("最简单的解决办法：设置路由模式为"),a("code",[s._v("hash")])]),s._v(" "),a("p",[s._v("更多办法：")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://bbs.csdn.net/topics/393538425",target:"_blank",rel:"noopener noreferrer"}},[s._v("各位用cli3 遇到过 路由用history模式 二级路由刷新报错的情况吗"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/kevingrace/p/6126762.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-route+webpack部署单页路由项目，访问刷新出现404问题"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_39989929/article/details/94015657",target:"_blank",rel:"noopener noreferrer"}},[s._v("关于react-router的HashRouter与BrowserRouter（二级路由刷新404）"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);