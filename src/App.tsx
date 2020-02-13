/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
/* Theme variables */
import './theme/variables.css'
import React, { useEffect, useRef } from 'react'
import { IonApp } from '@ionic/react'
import Routes from './routes'
import { StylesProvider, createGenerateClassName, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import styleVars from 'styles/styleVars'
import { AliveScope } from 'react-activation'

// 解决jss生成的class名重复问题
const generateClassName = createGenerateClassName({
  disableGlobal: false,
  productionPrefix: 'c',
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: styleVars.colors.primary,
      dark: styleVars.colors.dark,
      light: styleVars.colors.light,
      contrastText: 'white'
    }
  }
})

function App(props: any) {
  return (
    <IonApp>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <AliveScope>
            <Routes />
          </AliveScope>
        </ThemeProvider>
      </StylesProvider>
    </IonApp>
  )
}

export default App
