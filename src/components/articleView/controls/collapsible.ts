import $ from 'jquery'
import { ControlAnimator } from './types'

// collapsible实现
export default <ControlAnimator> function(el, config, history) {
  let viewBox = $(el)

  viewBox.find('.mw-collapsible').each(function () {
    let btnText = this.classList.contains('mw-uncollapsed') ? '[折叠]' : '[展开]'
    let collapseBtn = $(`<div class="collapseBtn">${btnText}</div>`).click(function (e) {
      let body = $(e.target).closest('.mw-collapsible')
      if (body[0].classList.contains('mw-uncollapsed')) {
        collapseBtn.text('[展开]')
      } else {
        collapseBtn.text('[折叠]')
      }
      body.toggleClass('mw-uncollapsed')
    })
    let addTarget = $(this).find('tr:first-child > th:first-child')
    addTarget[0] && addTarget.eq(0).append(collapseBtn)
  })
}
