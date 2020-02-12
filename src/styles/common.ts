import createClasses from 'utils/createClasses'
import styleVars from './styleVars'

export default createClasses('com', {
  pointer: {
    cursor: 'pointer'
  },

  textLimit: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
})