import styleVars from 'styles/styleVars'
import createClasses from 'utils/createClasses'

createClasses('', {
  '@global .articleViewBody': {
    '.mainpage-newsbox > .mainpage-title:first-child': {
      display: 'none'
    },

    '.mainpage-1stcontent, .mainpage-content': {
      margin: '0 5px'
    },

    '.mainpage-1stcontent > ul.gallery:first-child': {
      overflow: 'hidden',
      padding: 0,
      textAlign: 'center',
      fontSize: 0
    },

    '.mainpage-content p, dl, ul': {
      margin: 0
    },

    '.mainpage-content p': {
      margin: '5px 15px'
    },

    ul: {
      paddingLeft: 0
    },

    li: {
      display: 'inline-block',
      verticalAlign: 'top',
      margin: 5,
      fontSize: 14,
  
      '@global img': {
        width: '100%',
        boxShadow: '0 0 3px #666',
      },

      '@global p': {
        margin: 0,
        textAlign: 'center',
      }
    },

    '.mainpage-title': {
      lineHeight: '30px',
      background: styleVars.colors.primary,
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      textShadow: '1px 1px 1px #666',
    },

    '.mainpage-box': {
      boxShadow: '0 0 2px #eee, 0 2px 5px #ccc',
      padding: 5,
      marginBottom: 10
    },

    '#mainpage > .mainpage-title, #mainpage > .mainpage-content': {
      display: 'none'
    },

    '.mainpage-1stcontent .gallery.mw-gallery-packed-hover img': {
      objectFit: 'cover'
    }
  }
})