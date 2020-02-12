import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Plugins, StatusBarStyle } from '@capacitor/core'
import Header from 'components/Header'
import FlexContainer from 'components/FlexContainer'
import { flex } from 'styles'
import ArticleView from 'components/articleView'


export interface Props {
  
}

type FinalProps = Props

function Home(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles()
  
  return (
    <FlexContainer>
      <Header 
        title="萌娘百科" 
        leftIcon="menu"
        rightIcon="search"
      />
      
      <ArticleView title="Mainpage" />
    </FlexContainer>
  )
}

export default Home

const useStyles = makeStyles({
  
})