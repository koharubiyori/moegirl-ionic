import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'
import { flex } from 'styles'

export interface Props {
  
}

type FinalProps = Props

function FlexContainer(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()
  
  return (
    <div className={clsx(flex.container)}>{props.children}</div>
  )
}

export default FlexContainer

const useStyles = makeStyles({
  
})