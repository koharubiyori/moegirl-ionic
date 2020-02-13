import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Plugins, StatusBarStyle } from '@capacitor/core'
import clsx from 'clsx'
import styleVars from 'styles/styleVars'
import './styles/global'

window.clsx = clsx

Plugins.StatusBar.setBackgroundColor({ color: styleVars.colors.dark })
Plugins.StatusBar.setStyle({ style: StatusBarStyle.Dark })

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
