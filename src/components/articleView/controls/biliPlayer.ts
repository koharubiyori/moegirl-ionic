import $ from 'jquery'
import Hammer from 'hammerjs'
import { ControlAnimator } from './types'

// b站播放器
export default <ControlAnimator> function(el, config, history) {
  let viewBox = $(el)

  viewBox.find('.wikitable.bilibili-video-container').each(function () {
    let avId = parseInt($(this).data('aid').toString().replace('av', ''))
    let page = $(this).data('page')

    let title = $('<div class="bilibili-video-title">标题获取中...</div>')
    title.click(function() {
      // window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'onTapBiliVideo', data: { avId, page } }))
    })

    let titlePhoneEvent = new Hammer(title[0])
    titlePhoneEvent.on('press', function() {
      // window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'openApp', data: { url: 'bilibili://video/' + avId } }))
    })

    let titleText = $(this).data('title')
    if (titleText) {
      title.text(titleText)
    } else {
      // title.text('av' + avId)

      //   let info = window._request({
      //     url: 'https://api.bilibili.com/x/web-interface/view',
      //     method: 'get',
      //     params: {
      //       aid: avId
      //     }
      //   }, function(data) {
      //     let { data: res } = data
      //     if (res.code !== 0) {
      //       title.text(res.code === -404 ? '视频又挂了_(:з」∠)_' : '标题获取失败')
      //     } else {
      //       title.text(res.data.title)
      //     }
      //   })

    //   window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'request', data: info }))
    }

    $(this).css({
      display: 'block',
      width: '100%'
    })

    $(this).append(title)
  })
}