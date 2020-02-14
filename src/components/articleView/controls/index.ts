import biliPlayer from './biliPlayer'
import collapsible from './collapsible'
import heimu from './heimu'
import link from './link'
import music from './music'
import music163 from './music163'
import navbox from './navbox'
import tabs from './tabs'
import trim from './trim'

import { ControlAnimator } from './types'

export default <ControlAnimator> function(el, config, history) {
  [
    // biliPlayer, 
    collapsible,
    heimu,
    link,
    music,
    music163,
    navbox,
    tabs,
    trim
  ].forEach(animator => animator(el, config, history))
}