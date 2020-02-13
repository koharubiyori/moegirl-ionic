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

type FinalProps = Props & RouteComponentProps

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
      />
      <IonButton onClick={() => props.history.push('/article')}>123</IonButton>
      <ArticleView title="Mainpage" bodyClassName={homeClasses.articleViewBody} />
    </FlexContainer>
  )
}

export default keepAliveHOC(Home)

const useStyles = makeStyles({
  
})