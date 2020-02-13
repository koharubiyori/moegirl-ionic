import createClasses from 'utils/createClasses'
import { createTransition } from './styleVars'

export default createClasses('transition', {
  fadeSink: createTransition(
    {
      opacity: 0,
      transform: 'translateY(-30px)'
    }, {
      transition: 'all 0.6s'
    }, {
      opacity: 1,
      transform: 'initial'
    }
  ),

  fadeFloat: createTransition(
    {
      opacity: 0,
      transform: 'translateY(30px)'
    }, {
      transition: 'all 0.7s'
    }, {
      opacity: 1,
      transform: 'initial'
    }
  ),

  horizontalPush: {
    '&-enter': {
      transform: 'translateX(100%)'
    },

    '&-enter-active': {
      transform: 'initial'
    },

    '&-enter-active, &-exit-active': {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transition: 'all 0.25s'
    },

    '&-exit': {
      transform: 'initial'
    },

    '&-exit-active': {
      transform: 'translateX(-100%)'
    }
  },

  horizontalPop: {
    '&-enter': {
      transform: 'translateX(-100%)'
    },

    '&-enter-active': {
      transform: 'initial'
    },

    '&-enter-active, &-exit-active': {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transition: 'all 0.25s'
    },

    '&-exit': {
      transform: 'initial'
    },

    '&-exit-active': {
      transform: 'translateX(100%)'
    }
  }
})
