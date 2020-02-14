import { IonButton } from '@ionic/react'
import { makeStyles } from '@material-ui/styles'
import ArticleView from 'components/articleView'
import FlexContainer from 'components/FlexContainer'
import Header from 'components/Header'
import keepAliveHOC from 'components/HOC/keepAliveHOC'
import drawerRef from 'externalRefs/drawer'
import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import useHomeStyles from 'styles/articleView/home'

export interface Props {
  
}

export interface RouteParams {

}

type FinalProps = Props & __Router.Props

function Home(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles(),
    homeClasses = useHomeStyles()

  return (
    <FlexContainer>
      <Header 
        title="萌娘百科" 
        leftIcon="menu"
        rightIcon="search"
        onClickLeftIcon={() => drawerRef.get().open()}
        onClickRightIcon={() => props.history.push('/search')}
      />
      <ArticleView title="Mainpage" history={props.history} bodyClassName={homeClasses.articleViewBody} />
    </FlexContainer>
  )
}

export default keepAliveHOC(Home)

const useStyles = makeStyles({
  
})