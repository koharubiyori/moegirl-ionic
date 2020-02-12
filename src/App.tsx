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
import React from 'react'
import { IonApp } from '@ionic/react'
import Routes from './routes'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

// 解决jss生成的class名重复问题
const generateClassName = createGenerateClassName({
  disableGlobal: false,
  productionPrefix: 'c',
})

function App() {
  return (
    <IonApp>
      <StylesProvider generateClassName={generateClassName}>
        <Routes />
      </StylesProvider>
    </IonApp>
  )
}

export default App
