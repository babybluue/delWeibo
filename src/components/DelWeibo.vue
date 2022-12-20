<script setup lang="ts">
  import { onMounted, ref, watchEffect } from 'vue'

  const start = ref(0)
  const count = ref(0)

  function $(elem: string) {
    return document.querySelector(elem) as HTMLDivElement
  }
  function $All(elem: string) {
    return document.querySelectorAll(elem) as unknown as HTMLDivElement[]
  }
  function $$(elem: string, el: string) {
    return $(elem).querySelectorAll(el)[1] as HTMLDivElement
  }

  const blog = '.vue-recycle-scroller__item-view'

  function del() {
    for (let i = 0; i < 1000; i++) {
      setTimeout(function () {
        const article = $(blog)
        const articleH = article.clientHeight
        const height = window.scrollY
        const isRetweet = article.querySelector('.Feed_retweet_JqZJb')
        if (!isRetweet) {
          article.remove()
          window.scrollTo({
            top: height + articleH,
            behavior: 'smooth',
          })
          count.value + 1
          return
        }
        if ($('i[title="更多"]')) {
          if ($('i[title="更多"]')) {
            $('i[title="更多"]').click()
          }
          const item = $All('.woo-pop-item-main')
          if (item.length) {
            if (item.length > 3) {
              item.forEach((item) => item.innerText === '删除' && item.click())
            } else {
              item.forEach(
                (item) => item.innerText === '取消快转' && item.click()
              )
            }
          }

          $('.woo-dialog-ctrl') &&
            $$('.woo-dialog-ctrl', '.woo-button-main').click()
          if ($('.deletedToolbar_toolbarFull_1dOfW')) {
            $('.deletedToolbar_toolbarFull_1dOfW').click()
          }
        }
        window.scrollTo({
          top: height + 100,
        })
        count.value > 15 && window.location.reload()
      }, 1000 * i)
    }
  }

  const onStart = () => {
    console.log('开始')
    localStorage.delWeibo = 'start'
    start.value = 1
    del()
  }

  const onEnd = () => {
    console.log('结束')
    localStorage.delWeibo = 'end'
    start.value = 0
    window.location.reload()
  }

  onMounted(() => {
    if (localStorage.delWeibo === 'start') {
      del()
      start.value = 1
    }
  })
</script>

<template>
  <button
    class="del-weibo"
    :class="{ 'del-weibo-end': start }"
    v-if="start"
    @click="onEnd"
  >
    结束
  </button>
  <button class="del-weibo" v-else @click="onStart">开始删除</button>
</template>

<style scoped>
  .del-weibo {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9999999;
    background-color: #ff8200;
    color: #fff;
    padding: 6px 16px;
    border: none;
    border-radius: 100px 0 0 100px;
    cursor: pointer;
  }
  .del-weibo-end {
    background-color: #ff84007a;
  }
</style>
