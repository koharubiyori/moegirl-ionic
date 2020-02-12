import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'

export interface Props {
  
}

type FinalProps = Props

function ArticleView(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()
  
  return (
    <div>
      
    </div>
  )
}

export default ArticleView

const useStyles = makeStyles({
  
})