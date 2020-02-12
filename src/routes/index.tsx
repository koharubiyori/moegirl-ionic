import React from 'react'
import { IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

import Home from 'views/home'

const Routes = () => (
  <IonReactRouter>
    <IonSplitPane contentId="main">
      {/* <Menu appPages={[]} /> */}
      <IonRouterOutlet id="main">
        <Route exact path="/" component={Home} />
        {/* <Route path="/home/list" component={List} exact={true} />
          <Route path="/" render={() => <Redirect to="/home"/> } exact={true} /> */}
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
)

export default Routes