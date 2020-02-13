import { Plugins } from '@capacitor/core'
import { IonContent } from '@ionic/react'
import { Button, CircularProgress } from '@material-ui/core'
import { CSSProperties, makeStyles } from '@material-ui/styles'
import articleApi from 'api/article'
import { ArticleApiData } from 'api/article.d'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import styleVars from 'styles/styleVars'
import useArticleStyles from 'styles/articleView/article'

export interface Props {
  title: string
  style?: CSSProperties
  html?: string
  disabledLink?: boolean
  bodyClassName?: string
}

type FinalProps = Props

function ArticleView(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles(),
    articleClasses = useArticleStyles(),
    [articleData, setArticleData] = useState<ArticleApiData.GetContent>(),
    [articleDataStatus, setArticleDataStatus] = useState<0 | 1 | 2 | 3>(1)

  useEffect(() => {
    loadArticleData()
  }, [])
    
  function loadArticleData() {
    if (articleDataStatus === 2) { return }
    setArticleDataStatus(2)
    articleApi.getContent(props.title)
      .then(data => {
        setArticleData(data)
        setArticleDataStatus(3)
      })
      .catch(e => {
        console.log(e)
        Plugins.Toast.show({ text: '加载失败了_(:з」∠)_' })
        setArticleDataStatus(0)
      })
  }


  return (
    <div className={classes.container}>
      {{
        0: () => <div className={classes.fixedMiddle}>
          <Button variant="contained" color="primary" onClick={() => loadArticleData()}>重新加载</Button>
        </div>,
        1: () => null,
        2: () => <div className={classes.fixedMiddle}>
          <CircularProgress thickness={4.5} size={45} style={{ fill: styleVars.colors.primary }} />
        </div>,
        3: () => <div className={clsx(articleClasses.articleViewBody, props.bodyClassName)} dangerouslySetInnerHTML={{ __html: articleData!.parse.text['*'] }} />
      }[articleDataStatus]()}
    </div>
  )
}

export default ArticleView

const useStyles = makeStyles({
  container: {
    position: 'relative',
    overflow: 'auto',
    flex: 1
  },
  
  fixedMiddle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})