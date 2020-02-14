import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'

export interface Props {
  
}

export interface RouteParams {
  
}

type FinalProps = Props

function Search(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()
  
  return (
    <div>
      search
    </div>
  )
}

export default Search

const useStyles = makeStyles({
  
})