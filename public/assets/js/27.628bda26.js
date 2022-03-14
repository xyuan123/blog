(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{564:function(t,s,a){t.exports=a.p+"assets/img/generator1.562980d3.png"},648:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[t._v("这是一篇关于ES6generator函数的知识o(￣▽￣)ｄ")])]),t._v(" "),n("h2",{attrs:{id:"前奏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前奏"}},[t._v("#")]),t._v(" 前奏")]),t._v(" "),n("p",[n("strong",[t._v("在学习这篇文章之前,假设我们还没有学过ES7的async和await语法，但是我们学过Promise")])]),t._v(" "),n("p",[t._v("学习一个新的知识,应该带有一些目的性,或者了解一下相关背景,带着疑问去学一个东西,至少不会那么痛苦。(不要跟我说学习是快乐的,学习哪来的快乐(￣ー￣) (￣ー￣))。")]),t._v(" "),n("p",[t._v("我们先看一个场景,一个很常见且简单的需求。现在有2个接口,一个获取token的接口/api/gettoken,一个获取用户信息的接口/api/getuserinfo,那么帅气的后端小哥哥给我们进行了定义,在我们获取用户信息之前,必须先拿到token,所以,我们前端在获取用户信息时的处理代码就应该是这样的")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/gettoken'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" token "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" token\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/getuserinfo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("userid")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userinfo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用用户信息干别的事情")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("这种场景在真实业务是很常见的一种事情,各位想想,如果后端让你再用用户信息去干别的事情呢,比如根据用户信息中的某些参数再去获得一些其他的东西,这么一弄,问题就来了, 我们就得一直.then.then,虽然"),n("strong",[t._v("Promise")]),t._v("帮我们解决了很大问题,已经处理了以前ajax回调地狱的问题,但是.then的方式过多,代码的优雅性就变的很低了。有没有更好的处理方式呢?"),n("strong",[t._v("这里要先说一下,目前最好的处理网络请求的方式是async和await")]),t._v("但是这篇文章只讲generator。")]),t._v(" "),n("h2",{attrs:{id:"主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),n("h3",{attrs:{id:"主角"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主角"}},[t._v("#")]),t._v(" 主角")]),t._v(" "),n("p",[t._v("带着前奏的问题,我们来介绍一下我们这篇文章的主角"),n("strong",[t._v("Generator函数")]),t._v("。")]),t._v(" "),n("p",[t._v("废话不多说,先上代码(talk is cheap，show you my code):")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generator函数学习 ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("111111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" y\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aRes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*     aRes你可以理解为一个指针,这个如果学过算法与数据结构就很好理解了\n        你可以理解为调用这个generator函数它不会执行里面的代码,而是返给你一个指针 */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*   然后指针上面有个next()方法,调用之后,指针就会指到第一个yield这里,再次调用它就会\n      指向第二个yield,如果没有返回结果的对象里面,done的属性就为true */")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aRes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aRes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aRes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(aRes.next(5))")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("分析: 函数后面带*号表示这是一个generator函数,就跟vue里面的很多对象自带$符号一样,为了跟普通的自定义对象做区分。")]),t._v(" "),n("p",[t._v("然后在generator中我们可以使用一个很关键的标识符"),n("strong",[t._v("yield")]),t._v("。")]),t._v(" "),n("p",[t._v("然后再来分析上面的函数")]),t._v(" "),n("p",[t._v("我们先在控制台打印一下aRes,输出的是以下结果。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%","margin-right":"10%",float:"none"},attrs:{src:a(564),alt:"加载失败",align:"left"}}),t._v(" "),n("p",[t._v("我们发现函数的运行结果是一个对象,然后原型上有个next方法,我们重点关注这个方法。"),n("strong",[t._v("我们来把这个方法调用一下,看看会怎么样")])]),t._v(" "),n("p",[t._v("控制台打印console.log(aRes.next())")]),t._v(" "),n("p",[t._v("输出结果:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("done")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("看到这里,其实就对"),n("strong",[t._v("generator")]),t._v("函数有了初步的认识了,我们在看"),n("strong",[t._v("generator")]),t._v("函数时,大脑里面最好给函数语句前面想象一个指针,当调用"),n("strong",[t._v("next()"),n("strong",[t._v("方法时,你大脑里面想的那个指针就会指到")]),t._v("yield")]),t._v("这个标识符那条语句前面,而"),n("strong",[t._v("yield")]),t._v("语句可以看做"),n("strong",[t._v("return")]),t._v(",它跟"),n("strong",[t._v("return")]),t._v("语句的区别在于,")]),t._v(" "),n("p",[t._v("执行"),n("strong",[t._v("return")]),t._v("语句后,函数体就结束了,后面的语句就不执行了,但是指针指到"),n("strong",[t._v("yield")]),t._v("这条语句的时候,函数会暂停执行,通俗的理解就是卡在这里了,处于等待状态,这时候"),n("code",[t._v("value = 9")]),t._v("就是yield后面的值,而"),n("code",[t._v("done = flase")]),t._v("表示指针还没有指到结尾的节点,说的通俗点,如果在指到一个yield之后,再调用一次aRes.next()方法,后面没有yield了,done就会变成true,这里我理解为函数执行完毕了。")]),t._v(" "),n("h3",{attrs:{id:"next函数传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next函数传参"}},[t._v("#")]),t._v(" next函数传参")])])}),[],!1,null,null,null);s.default=e.exports}}]);