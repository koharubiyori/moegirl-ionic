import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'

export interface Props {
  
}

type FinalProps = Props

function Article(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()

  return (
    <div>
      article
    </div>
  )
}

export default Article

const useStyles = makeStyles({
  
})