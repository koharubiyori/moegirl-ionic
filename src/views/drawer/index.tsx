import { IonContent, IonHeader, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import React, { useRef, useEffect } from 'react'
import drawerRef from 'externalRefs/drawer'

function Drawer(props: any) {
  const
    refs = {
      drawer: useRef<any>()
    }
  
  useEffect(() => {
    setTimeout(() => drawerRef.setInstance(refs.drawer.current))
  }, [])

  return (
    <IonMenu contentId="main" type="overlay" ref={refs.drawer}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Drawer