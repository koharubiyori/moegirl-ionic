import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/styles'
import FlexContainer from 'components/FlexContainer'
import Header from 'components/Header'
import ArticleView from 'components/articleView'
import keepAliveHOC from 'components/HOC/keepAliveHOC'
import { CSSTransition } from 'react-transition-group'
import { createTransition } from 'styles/styleVars'

export interface Props {
  
}

export interface RouteParams {
  title: string
}

type FinalProps = Props & __Router.Props<RouteParams>

function Article(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles(),
    [visibleHeader, setVisibleHeader] = useState(true)


  const scrollMemo = useRef({
    last: 0,
    active: 0
  })
  function toggleVisibleHeaderByOnScroll(event: any) {    
    const el: HTMLDivElement = event.target
    console.log(el.scrollTop, scrollMemo.current.last)
    
    if (el.scrollTop < 100) {
      scrollMemo.current.active = 0
      setVisibleHeader(true)
      return true
    }

    if (el.scrollTop < scrollMemo.current.last) {
      scrollMemo.current.active += 2
      if (scrollMemo.current.active >= 100) {
        scrollMemo.current.active = 0
        setVisibleHeader(true)
      }
    } else {
      scrollMemo.current.active = 0
      setVisibleHeader(false)
    }

    scrollMemo.current.last = el.scrollTop
  }

  return (
    <FlexContainer>
      <Header
        className={classes.header}
        style={{ transform: visibleHeader ? 'initial' : 'translateY(-100%)' }}
        title={props.location.state.title}
        rightIcon="search"
        onClickLeftIcon={() => props.history.goBack()}
        onClickRightIcon={() => props.history.push('/search')}
      />
      <ArticleView headerPlaceholder
        history={props.history} 
        title={props.location.state.title} 
        onScroll={toggleVisibleHeaderByOnScroll}
      />
    </FlexContainer>
  )
}

export default keepAliveHOC(Article)

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    transition: 'transform 0.2s linear'
  },
})