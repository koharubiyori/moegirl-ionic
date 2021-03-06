import { Plugins } from '@capacitor/core'
import { IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React, { useEffect, useRef, FC } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { transition } from 'styles'
import Drawer from 'views/drawer'
import Home, { RouteParams as HomeRP } from 'views/home'
import Article, { RouteParams as ArticleRP } from 'views/article'
import Search, { RouteParams as SearchRP } from 'views/search'

export type RouteParamMaps = {
  '/': HomeRP
  '/article': ArticleRP
  '/search': SearchRP
}

const routeConfig: { [Key in keyof RouteParamMaps]: FC<any> } = {
  '/': Home,
  '/article': Article,
  '/search': Search
}

function RouteMaps() {
  const history = useHistory()
  const location = useLocation()
  // const transitionName = useRef(transition.horizontalPush)
  
  // 监听物理返回键退出应用
  useEffect(() => {
    let pressedBackBtnMark = false
    let currentLocation = location
    history.listen(loc => currentLocation = loc)
    
    Plugins.App.addListener('backButton', () => {
      if (currentLocation.pathname !== '/') { return }
      
      if (pressedBackBtnMark) {
        Plugins.App.exitApp()
      } else {
        pressedBackBtnMark = true
        Plugins.Toast.show({ text: '再次按下返回键退出应用' })
        setTimeout(() => pressedBackBtnMark = false, 3000)
      }
    })
  }, [])

  const transitionName = transition[history.action === 'POP' ? 'horizontalPop' : 'horizontalPush']
  return (
    // 添加classNames必须使用这种形式，transitionGroup不识别动态的classNames属性。同时也不能在CSSTransition加classNames，在路由过渡时动画会出bug
    <TransitionGroup style={{ height: '100%' }} childFactory={child => React.cloneElement(child, { classNames: transitionName })}>
      <CSSTransition key={location.key} timeout={250}>
        <Switch location={location}>
          {Object.keys(routeConfig).map(path => React.createElement(Route, { path, exact: true, key: path, component: (routeConfig as any)[path] }))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

function Routes() {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Drawer />
        <IonRouterOutlet id="main">
          <Route path="*">
            <RouteMaps />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  )
}

export default Routes