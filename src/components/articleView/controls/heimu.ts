import $ from 'jquery'
import { ControlAnimator } from './types'

export default <ControlAnimator> function(el, config, history) {
  let viewBox = $(el)

  viewBox.find('.heimu').each(function () {
    // if (window._appConfig.heimu) {
    if (window) {
      $(this).data('unTapped', true)
      $(this).one('click', e => {
        $(this).css('color', 'white').find('a').css('color', '#5BCEFF')
        if ($(this).data('unTapped')) {
          $(this).data('unTapped', false)
          e.preventDefault()
          e.stopPropagation()
        }
      })
    } else {
      $(this).css('color', 'white').find('a').css('color', '#5BCEFF')
    }

  })
}