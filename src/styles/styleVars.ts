import { CSSProperties } from 'react'

const colors = {
  primary: '#4CAF50',
  dark: '#388E3C',
  light: '#C8E6C9',
  accent: '#8BC34A',
  text: '#212121',
  subtext: '#757575',
  black: '#313131'
}

export function createTransition(
  enter: CSSProperties, 
  active: CSSProperties, 
  exit: CSSProperties
) {
  return {
    '&-enter, &-exit-active': enter,
    '&-enter-active, &-exit-active': active,
    '&-enter-active': exit
  }  
}

export default {
  colors,
  contentContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    borderRadius: 1,
    boxShadow: '0 0 3px white'
  },

  textLimit: {
    whiteSpace: 'nowrap' as any,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}