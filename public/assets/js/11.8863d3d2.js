(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{515:function(t,e,n){},582:function(t,e,n){"use strict";var s=n(3),i=n(2),r=n(64),o=i([].reverse),a=[1,2];s({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),o(this)}})},583:function(t,e,n){"use strict";n(515)},591:function(t,e,n){"use strict";n.r(e);var s=n(63),i=(n(82),n(21),n(62),n(66),n(10),n(67),n(257),n(258),n(582),{name:"",data:function(){return{strs:[{title:"不要因为没有掌声,而失去梦想",stop:8},{title:"疏影横斜水清浅,暗香浮动夜黄昏",stop:7},{title:"多爱自己一点点"},{title:"不要着急~"},{title:"写代码,一定要优雅",stop:3},{title:"为中华值崛起而读书"},{title:"你相信光吗?"}],currentIndex:0,spans:null,el:null}},mounted:function(){var t=this;if(this.el=document.querySelector(".hero .description"),this.el)this.init();else var e=this,n=setInterval((function(){t.el&&(n&&clearInterval(n),e.init()),t.el=document.querySelector(".hero .description")}),100)},methods:{init:function(){var t=this;this.currentIndex==this.strs.length&&(this.currentIndex=0),this.el.innerHTML=this.strs[this.currentIndex].title,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");var e=0;this.spans=Object(s.a)(document.querySelectorAll(".hero .description span")),this.spans.forEach((function(n,s){e+=.11,t.strs[t.currentIndex].hasOwnProperty("stop")&&(t.strs[t.currentIndex].stop instanceof Array?t.strs[t.currentIndex].stop.includes(s)&&(e+=.3):t.strs[t.currentIndex].stop==s&&(e+=.3)),n.style.setProperty("--delay","".concat(e,"s"))})),this.el.addEventListener("animationend",this.lastEnd)},lastEnd:function(t){var e=this;t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout((function(){e.el.removeEventListener("animationend",e.lastEnd);var t=0;e.spans.reverse().forEach((function(n,s){e.el.classList.remove("ended"),n.style.width="2ch",n.style.animation="0.1s text-out ease-in-out forwards",t+=.05,n.style.animationDelay="".concat(t,"s")})),e.el.addEventListener("animationend",e.firstEnd)}),3500))},firstEnd:function(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach((function(t){t.remove()})),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}}),r=(n(583),n(9)),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{})}),[],!1,null,null,null);e.default=o.exports}}]);