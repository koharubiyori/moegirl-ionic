import createClasses from 'utils/createClasses'
import styleVars from './styleVars'

createClasses('', {
  '@global': {
    '*': {
      outline: 'none'
    },

    // keep-alive容器
    '.ka-wrapper, .ka-content': {
      height: '100%',
    }
  }
})