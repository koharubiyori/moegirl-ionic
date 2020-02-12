import React, { useState, useEffect, useRef, PropsWithChildren, CSSProperties } from 'react'
import { makeStyles } from '@material-ui/styles'
import { IonRippleEffect } from '@ionic/react'

export interface Props {
  unbounded?: boolean
  onClick?(event: any): void
  style?: CSSProperties
  className?: string
}

type FinalProps = Props

function RippleButton(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()
  
  return (
    <div className={clsx('ion-activatable', classes.container, props.className)} style={{ ...props.style, position: 'relative' }} onClick={props.onClick}>
      {props.children}
      <IonRippleEffect type={props.unbounded ? 'unbounded' : 'bounded'} />
    </div>
  )
}

export default RippleButton

const useStyles = makeStyles({
  container: {
    padding: 5
  }
})