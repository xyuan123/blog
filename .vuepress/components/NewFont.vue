<template>
  <div class=''>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        strs: [{
            title: "不要因为没有掌声,而失去梦想",
            // 停顿的位置
            stop: 8,
            // stop: [4, 13] // 可以是数组，多几个位置停顿
          },

          {
            title: '生如夏花之绚烂,死若秋叶之静美',
            stop: 7
          },
          {
            title: '人生无常,大肠包小肠',
            stop: 5
          },
          {
            title: "多爱自己一点点",
          },
          {
            title: "不要着急,最好的总会在最不经意的时候出现。",
            stop: 4
          },
          {
            title: "写代码,一定要优雅",
            stop: 3
          },
          {
            title: "你相信光吗?",
          },
          {
            title: "外面下着毛毛细雨,阳台上的衣服依旧落着些许水滴,一直未干,我想大抵是与我一样,不想干了",
            stop: 8
          }
        ],
        // 当前进行到第几行
        currentIndex: 0,
        spans: null,
        el: null,
      };
    },
    created() {

    },
    mounted() {
      this.clickSpecialEffect()
      this.el = document.querySelector(".hero .description");

      if (!this.el) {
        let that = this;
        const timer = setInterval(() => {
          if (this.el) {
            timer && clearInterval(timer);
            that.init();
          }
          this.el = document.querySelector(".hero .description");
        }, 100);
      } else {
        this.init();
      }
    },
    methods: {
      init() {
        if (this.currentIndex == this.strs.length) {
          this.currentIndex = 0;
        }
        this.el.innerHTML = this.strs[this.currentIndex].title;
        this.el.innerHTML = this.el.textContent.replace(/\S/g, "<span>$&</span>");

        let delay = 0;
        this.spans = [...document.querySelectorAll(".hero .description span")];
        this.spans.forEach((span, i) => {
          delay += 0.11;
          if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
            if (this.strs[this.currentIndex].stop instanceof Array) {
              if (this.strs[this.currentIndex].stop.includes(i)) {
                delay += 0.3;
              }
            } else {
              if (this.strs[this.currentIndex].stop == i) {
                delay += 0.3;
              }
            }
          }

          span.style.setProperty("--delay", `${delay}s`);
        });

        this.el.addEventListener("animationend", this.lastEnd);
      },

      lastEnd(e) {
        if (
          e.target == document.querySelector(".hero .description span:last-child")
        ) {
          this.el.classList.add("ended");
          setTimeout(() => {
            this.el.removeEventListener("animationend", this.lastEnd);
            let delay = 0;

            this.spans.reverse().forEach((span, i) => {
              this.el.classList.remove("ended");
              span.style.width = "2ch";
              span.style.animation = "0.1s text-out ease-in-out forwards";
              delay += 0.05;

        

              span.style.animationDelay = `${delay}s`;
            });
            this.el.addEventListener("animationend", this.firstEnd);
          }, 3200);
        }
      },

      firstEnd(e) {
        if (
          e.target ==
          document.querySelector(".hero .description span:first-child")
        ) {
          this.spans.forEach((v) => {
            v.remove();
          });
          this.el.removeEventListener("animationend", this.firstEnd);
          this.currentIndex++;
          this.init();
        }
      },
      clickSpecialEffect() {
        ! function (e, t, a) {
          e.onclick = null
          function r() {
            for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e]
              .y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[
                e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale +
              ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
            requestAnimationFrame(r)
          }

          function n() {
            var t = "function" == typeof e.onclick && e.onclick;
            e.onclick = function (e) {
              t && t(),
                o(e)
            }
          }

          function o(e) {
            console.log(e)
            var a = t.createElement("div");
            a.className = "heart",
              s.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: c()
              }),
              t.body.appendChild(a)
          }

          function i(e) {
            var a = t.createElement("style");
            a.type = "text/css";
            try {
              a.appendChild(t.createTextNode(e))
            } catch (t) {
              a.styleSheet.cssText = e
            }
            t.getElementsByTagName("head")[0].appendChild(a)
          }

          function c() {
            return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) +
              ")"
          }
          var s = [];
          e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
            .mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
            function (e) {
              setTimeout(e, 1e3 / 60)
            },
            i(
              ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
            n(),
            r()
        }(window, document);
      }
    },
  };
</script>


<style>
  .hero .description {
    margin: 0;
    padding: 0;
    /* 必须是等宽字体 */
    /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    font-family: monospace;
    position: relative;
    width: fit-content;
  }

  .hero .description::after {
    content: "";
    display: inline;
    position: absolute;
    width: 2px;
    height: 2ch;
    top: 9%;
    background-color: #000;
    border-radius: 2px;
    right: -0.5ch;
  }

  .hero .description.ended::after {
    animation: 1.1s cursor steps(2, jump-none) infinite;
  }

  .home-blog .hero .description span {
    --delay: 10s;
    display: inline-block;
    overflow: hidden;
    width: 0ch;
    animation: 0.1s text-in ease-in-out forwards;
    animation-delay: var(--delay);
    font-weight: 600;
  }

  @keyframes text-in {
    from {
      width: 0ch;
    }

    to {
      /* 必须是等宽字体 */
      /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
      /* 中文2ch，英文1ch */
      width: 2ch;
    }
  }

  @keyframes text-out {
    from {
      /* 中文2ch，英文1ch */
      width: 2ch;
    }

    to {
      width: 0ch;
    }
  }

  @keyframes cursor {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>