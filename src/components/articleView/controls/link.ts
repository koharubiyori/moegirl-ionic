import $ from 'jquery'

export default function(el: HTMLDivElement) {
  // let viewBox = $(el)

  // viewBox.find('a').each(function (e) {
  //   // 编辑按钮替换图片
  //   if ($(this).text() === '编辑') {
  //     $(this).addClass('page-editBtn').html('<div class="edit-btn page-editBtn">')
  //   }
  // })

  // // 拦截点击链接
  // viewBox.on('click', 'a', function(e) {
  //   e.preventDefault()

  //   // 配合黑幕的第一次点击不跳转
  //   if ($(this).parent('.heimu').data('unTapped')) {
  //     $(this).parent('.heimu').data('unTapped', false)
  //     return
  //   }

  //   // 编辑按钮导向
  //   if (this.classList.contains('page-editBtn')) {
  //     let page = decodeURIComponent(this.href.match(/title=(.+?)(&|$)/)[1])
  //     let section = this.dataset.section
  //     if (!section) {
  //       section = parseInt(this.href.match(/&section=(.+?)(&|$)/)[1])
  //     }

  //     return window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'onTapEdit', data: { page, section } }))
  //   }

  //   // 一般链接导向
  //   let link = ($(e.target).attr('href') || $(e.target).parent('a').attr('href'))!
  //   let type = 'inner'
  //   if (/^\/File:/.test(link)) {
  //     return window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'onTapImage', data: { name: decodeURIComponent(link.replace(/^\/File:/, '')) } }))
  //   } else if (/^#cite_note-/.test(link)) {
  //     console.log($(link).text())
  //     let content = $(link).text().replace(/^\[跳转至目标\]/, '').trim()
  //     if (content.length > 400) { // 文字过多dialog会装不下
  //       document.querySelector(link)!.scrollIntoView()
  //       return window.scrollTo(0, window.scrollY - 60)
  //     } else {
  //       return window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'onTapNote', data: { anchor: link, content } }))
  //     }
  //   } else if (/^#/.test(link)) {
  //     document.querySelector(link)!.scrollIntoView()
  //     return window.scrollTo(0, window.scrollY - 60)
  //   } else if (link.indexOf('redlink=1') >= 0) {
  //     type = 'notExists'
  //   } else if (/^\//.test(link)) {
  //     link = decodeURIComponent(link.substring(1))
  //   } else if (/^https?:\/\//.test(link)) {
  //     type = 'outer'
  //   }

  //   window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'onTapLink', data: { link, type } }))
  // })
}