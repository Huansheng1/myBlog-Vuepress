# 初识MD
## 为什么我们需要MD
* markdown现在是非常主流的标记排版语法，拥有易上手、自由度高等优点，本博客文章也需要使用它
* MD在各大网站编辑器都开始支持，我们可以实现一次排版，多站发布
## MD软件推荐
* *Typora* 目前相当好用的md编辑器，强力推荐
## MD语法预备知识
* MD常用符号有：# * + - ~ [] > . ()
* 如果以基本符号开头的标记，注意基本符号后有一个用于分割标记符和内容的*空格*。
* 需要换行时需要在句末后面加上最少两个空格，不然默认成一行
# MD基础用法
## 标题
> #开头，后面空格接上标题文字，对应的Html里的h1-h6标签，一级最大，h1标题下会有一条横线  
* MD语法：
```
1. 常用写法
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
2. 闭合写法
# 一级标题 #
## 二级标题 ##
### 三级标题 ###
#### 四级标题 ####
##### 五级标题 #####
###### 六级标题 ######
```
* 效果展示：  
![image.png](https://i.loli.net/2020/06/03/L4APq3FdWymNcDE.png)
## 列表
### 无序列表
> 支持三种符号：* + -，效果一致
* MD语法：
```
//形式一
+ a
+ b
+ c
//形式二
- d
- e
- f
//形式三
* g
* h
* i
```
* 效果展示：  
+ a
+ b
+ c
- d
- e
- f
* g
* h
* i
### 有序列表
* MD语法：
```
//正常形式
1. abc
2. bcd
3. cde
//错序效果
5. fgh
7. ghi
9. hij
```
* 效果展示：  
1. abc
2. bcd
3. cde
5. fgh
7. ghi
9. hij
### 列表嵌套
* MD语法：
```
//无序列表嵌套
+ 123
    + abc
    + bcd
    + cde
+ 465
//有序列表嵌套
1. abcd
    1. abcde
    2. abcde
    3. abcde
2. bcde
//无序列表嵌套有序列表
+ 123
    1. abc
    2. bcd
    3. cde
+ 465
//有序列表嵌套无序列表
1. abcd
    * abcde
    * abcde
    * abcde
2. bcde
```
* 效果展示：  
+ 123
    + abc
    + bcd
    + cde
+ 465
1. abcd
    1. abcde
    2. abcde
    3. abcde
2. bcde
+ 123
    1. abc
    2. bcd
    3. cde
+ 465
1. abcd
    * abcde
    * abcde
    * abcde
2. bcde
> tips：列表可以嵌套，使用时在嵌套列表前按 tab 或 空格 来缩进,去控制列表的层数
## 引用
> 对某个部分做的内容做一些说明/提示/注意或者引用其他的片段
* MD语法：
```
//正常引用
> 我们想描述出来的话
//嵌套引用
> 引用第一个
>> 嵌套引用第二个
>>> 和标题一样支持6级
```
* 效果展示：  
> 引用第一个
>> 嵌套引用第二个
>>> 和标题一样支持6级
## 代码块
> 当我们想要展现我们的代码或者特殊符号想使用原格式而不是MD效果时可使用该符号
> 支持指定语言哦：比如-> javascript
* MD语法：
```
    //单行代码
    `console.log('Hello World!')`
```
```
    //多行代码，为了展示语法，我们在前面多加了个tab避免生效！这里我们指定了javascript，也可不指定语言！
    ```javascript
    function Hello(){
        console.log('Hello World!')
    }
    Hello();
    ```
```
* 效果展示：  
`console.log('Hello World!')`
```javascript
function Hello(){
    console.log('Hello World!')
}
Hello();
```
## 插入链接
> 写文章怎么能少得了链接呢，我们必须掌握。  
> 写法有几种：  
> 1. 行内式："Title" 可省略 ->`[链接文字](url)`  
> 2. 参数/定义式：链接的文字放在[]中，链接地址放在随后的:后，链接地址后面空一格，然后用引号引起来  
* MD语法：
```
//行内式，适用于一次出现的链接
[链接文字](https://github.com '鼠标放上去的显示的hover文字')

//参数式，适用于多次出现的链接，定义链接前面必须有空格，定义后下面可直接调用！

[链接文字]: https://github.com "鼠标放上去的显示的hover文字"
//参数定义的其他写法

[链接文字]: https://github.com '鼠标放上去的显示的hover文字'
[链接文字]: https://github.com (鼠标放上去的显示的hover文字)
[链接文字]: <https://github.com> "鼠标放上去的显示的hover文字"

//定义式 使用链接，一次调用整个文件都可一直使用
[链接文字]是一个强大的开源平台！
//行内式只能什么时候调用，什么时候使用！
这是一个行内式的[链接文字](https://github.com '鼠标放上去的显示的hover文字')
```
* 效果展示：  
> [链接文字]上面也能使用哦！  

[链接文字]: https://github.com '鼠标放上去的显示的hover文字'  
> 我调用了[链接文字]，我还要调用[链接文字]！  
> [链接文字](https://github.com '鼠标放上去的显示的hover文字')是一个强大的开源平台-行内式用法  
## 插入图片
> 图片也是写文章必不可少的东西  
> 图床推荐：SM.MS免费永久图床 -  https://sm.ms/  
> 相比于链接，图片只是在链接上加个!符号  
> 参数含义：`![图片文字](picture.url '图片title')`
* MD语法：
```
//行内式：一次使用
![person.png](https://himg.bdimg.com/sys/portrait/item/pp.1.17dfeaa1.OAicJxAu2KhlAgsbf4LvGw?_t=1591156077638 "图片鼠标放上来展示的title标题")

//参数式：一处调用，多次使用

[person.png]: https://himg.bdimg.com/sys/portrait/item/pp.1.17dfeaa1.OAicJxAu2KhlAgsbf4LvGw?_t=1591156077638 '图片title标题'
//注意，定义与链接一致，使用在前面加个!代表是图片，否则会当成链接来调用
//其他用法和链接一致，不再赘述
![person.png]快来看美女啊！
```
* 效果展示：  
1. 行内式调用：![person.png](https://himg.bdimg.com/sys/portrait/item/pp.1.17dfeaa1.OAicJxAu2KhlAgsbf4LvGw?_t=1591156077638 "图片鼠标放上来展示的title标题")

[person.png]: https://himg.bdimg.com/sys/portrait/item/pp.1.17dfeaa1.OAicJxAu2KhlAgsbf4LvGw?_t=1591156077638 "图片鼠标放上来展示的title标题"
2. ![person.png]快来看美女啊！ --> 定义调用  
3. 前面不加半角的!会当成链接，点击进去是图片的地址：[person.png]  
## 水平分割线
> 分割线和无序列表一样支持多种格式：  
>> 1. ---这种等于/大于三个的-符号单独一行
>> 2. ___这种等于/大于三个的_符号单独一行
>> 3. `***这种等于/大于三个的*符号单独一行`  

> 支持符号中间有个空格哦！
* MD语法：
```
---
- - -
------
***
* * *
******
___
_ _ _
______
```
* 效果展示：
---
___
***
## 特殊字符转义
> 某些时候我们需要用到MD语法中特殊的字符，我们不希望总是用`这种代码符号，毕竟它会带来特殊的显示风格，与其他的有时会格格不入
> 我们这时和js一样，只需要在前面加上\就可
* MD语法：
```
\`拉拉\`
\*我是正常的文\*字
\+
```
* 效果展示：
1. \`拉拉\`
2. \*我是正常的文\*字
3. \+  
## 字体倾斜、加粗、删除线
> 主要符号有：* ~ 或者 _  
> \* 或者 \_ 一个代表 字体倾斜，两个代表 字体加粗  
> ~~ 表示删除线
* MD语法：
```
*md字体倾斜*    
**md字体加粗**
_md字体倾斜_   
 __md字体加粗__
 ~~md字体删除线~~
 ***粗斜体文本***
___粗斜体文本___
```
* 效果展示：  
*md字体倾斜*    
**md字体加粗**  
 ~~md字体删除线~~  
 ***粗斜体文本***
___粗斜体文本___  
## 表格
1. 表格的格式不一定要对的非常起，但是为了良好的变成风格，尽量对齐是最好的
2. 分割线后面的冒号表示对齐方式，写在左边表示左对齐，右边为右对齐，两边都写表示居中
* MD语法：
```
|标题1|标题2|标题3|
|:--|:-:|--:|
|左对齐|居中对齐|右对齐|
|左对齐|居中对齐|右对齐|
|左对齐|居中对齐|右对齐|

// 重点就是第二行，其他还是可以很随意的。

|  序号  |  标题  |  备注  |
| --- | :-: | --: |
|  左靠齐  |  居中对齐  |  右对齐  |
|  1  |   川普  |  美国总统  |
|  2  |  普京  |  俄罗斯总统  |
```
* 效果展示：  

|标题1|标题2|标题3|
|:-----|:-----:|-----:|
|左对齐|居中对齐|右对齐|
|左对齐|居中对齐|右对齐|
|左对齐|居中对齐|右对齐|

|  序号  |  标题  |  备注  |
| --- | :-: | --: |
|  左靠齐  |  居中对齐  |  右对齐  |
|  1  |   川普  |  美国总统  |
|  2  |  普京  |  俄罗斯总统  |
## 脚注
> 脚注是对文本的补充说明。
* MD语法：
```
[^要注明的文本]
//使用脚注：
创建脚注格式类似这样 [^RUNOOB]。
```
* 效果展示：  
>注明的文本：  
[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！  

> 我们来看下效果：[^RUNOOB]  
![image.png](https://i.loli.net/2020/06/03/6MbjNnmI8TZAEkB.png)
# MD进阶技巧
## 支持Html标签
> 大部分Html标签都支持
> 比如：a、strong、em、sub、kbd、b、i、br、sup等
* MD语法：
```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑  
<a href="http://baidu.com">百度</a>  
<em>字体倾斜</em>  
<strong>字体加粗</strong>  
<!-- 注释 -->  
```
* 效果展示：  
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑  
<a href="http://baidu.com">百度</a>  
<em>字体倾斜</em>  
<strong>字体加粗</strong>  
<!-- 注释 -->  

* [markdown让文字居中和带颜色](https://www.cnblogs.com/bigmagic/p/3301b25e8b0b8ef8b9415379385a798c.html)  
* [让微信排版变 Nice](https://mdnice.com/)