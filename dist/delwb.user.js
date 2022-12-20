// ==UserScript==
// @name         delwb
// @namespace    https://github.com/babybluue/delWeibo
// @version      1.1.3
// @author       plain
// @description  批量删除新浪微博
// @license      MIT
// @icon         https://weibo.com/favicon.ico
// @match        *://weibo.com/u/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js
// ==/UserScript==

(o=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=o,document.head.appendChild(e)})(".del-weibo[data-v-ecba8d6e]{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:9999999;background-color:#ff8200;color:#fff;padding:6px 16px;border:none;border-radius:100px 0 0 100px;cursor:pointer}.del-weibo-end[data-v-ecba8d6e]{background-color:#ff84007a}");

(function(vue) {
  "use strict";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "DelWeibo",
    setup(__props) {
      const start = vue.ref(0);
      const count = vue.ref(0);
      function $(elem) {
        return document.querySelector(elem);
      }
      function $All(elem) {
        return document.querySelectorAll(elem);
      }
      function $$(elem, el) {
        return $(elem).querySelectorAll(el)[1];
      }
      const blog = ".vue-recycle-scroller__item-view";
      function del() {
        for (let i = 0; i < 1e3; i++) {
          setTimeout(function() {
            const article = $(blog);
            const articleH = article.clientHeight;
            const height = window.scrollY;
            const isRetweet = article.querySelector(".Feed_retweet_JqZJb");
            if (!isRetweet) {
              article.remove();
              window.scrollTo({
                top: height + articleH,
                behavior: "smooth"
              });
              count.value + 1;
              return;
            }
            if ($('i[title="\u66F4\u591A"]')) {
              if ($('i[title="\u66F4\u591A"]')) {
                $('i[title="\u66F4\u591A"]').click();
              }
              const item = $All(".woo-pop-item-main");
              if (item.length) {
                if (item.length > 3) {
                  item.forEach((item2) => item2.innerText === "\u5220\u9664" && item2.click());
                } else {
                  item.forEach(
                    (item2) => item2.innerText === "\u53D6\u6D88\u5FEB\u8F6C" && item2.click()
                  );
                }
              }
              $(".woo-dialog-ctrl") && $$(".woo-dialog-ctrl", ".woo-button-main").click();
              if ($(".deletedToolbar_toolbarFull_1dOfW")) {
                $(".deletedToolbar_toolbarFull_1dOfW").click();
              }
            }
            window.scrollTo({
              top: height + 100
            });
            count.value > 15 && window.location.reload();
          }, 1e3 * i);
        }
      }
      const onStart = () => {
        console.log("\u5F00\u59CB");
        localStorage.delWeibo = "start";
        start.value = 1;
        del();
      };
      const onEnd = () => {
        console.log("\u7ED3\u675F");
        localStorage.delWeibo = "end";
        start.value = 0;
        window.location.reload();
      };
      vue.onMounted(() => {
        if (localStorage.delWeibo === "start") {
          del();
          start.value = 1;
        }
      });
      return (_ctx, _cache) => {
        return start.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: vue.normalizeClass(["del-weibo", { "del-weibo-end": start.value }]),
          onClick: onEnd
        }, " \u7ED3\u675F ", 2)) : (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "del-weibo",
          onClick: onStart
        }, "\u5F00\u59CB\u5220\u9664"));
      };
    }
  });
  const DelWeibo_vue_vue_type_style_index_0_scoped_ecba8d6e_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const DelWeibo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecba8d6e"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(DelWeibo);
      };
    }
  });
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );
})(Vue);
