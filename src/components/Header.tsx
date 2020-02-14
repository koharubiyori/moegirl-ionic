import { IonTitle } from '@ionic/react'
import { Menu } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import MenuIcon from '@material-ui/icons/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/styles'
import React, { CSSProperties, PropsWithChildren, useRef, useState } from 'react'
import { com, flex } from 'styles'
import styleVars from 'styles/styleVars'
import RippleButton from './RippleButton'

const Icons = {
  keyboardBackspace: KeyboardBackspaceIcon,
  home: HomeIcon,
  menu: MenuIcon,
  search: SearchIcon
}

export interface Props {
  title: string
  style?: CSSProperties
  className?: string
  leftIcon?: keyof typeof Icons
  rightIcon?: keyof typeof Icons
  iconColor?: string
  actions?: string[]
  onClickLeftIcon? (): void
  onClickRightIcon? (): void
  onClickActions? (actionName: string, index: number): void
}

(Header as DefaultProps<Props>).defaultProps = {
  leftIcon: 'keyboardBackspace',
  iconColor: 'white'
}

type FinalProps = Props

function Header(props: PropsWithChildren<FinalProps>) {
  const
    classes = useStyles(),
    [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState<any>(),
    refs = {
      moreMenu: useRef<HTMLDivElement>()
    }

  function showMoreMenu(menuAnchorEl: any) {
    setMoreMenuAnchorEl(menuAnchorEl)
    function handler() {
      setMoreMenuAnchorEl(null)
      // 因为material-ui是桌面端框架，menu组件不响应触摸事件，这里只好手动绑定
      refs.moreMenu.current!.removeEventListener('touchstart', handler)
    }

    setTimeout(() => refs.moreMenu.current!.addEventListener('touchstart', handler)) 
  }

  return (
    <div className={clsx(classes.container, flex.row, flex.between, props.className)} style={props.style}>
      <RippleButton unbounded style={{ marginLeft: 10 }} onClick={() => props.onClickLeftIcon && props.onClickLeftIcon()}>
        {React.createElement(Icons[props.leftIcon!], { className: classes.rippleButton })}
      </RippleButton>
      
      <IonTitle className={com.textLimit}>{props.title}</IonTitle>
      
      {props.rightIcon ? <>
        <RippleButton unbounded style={{ marginRight: 10 }} onClick={() => props.onClickRightIcon && props.onClickRightIcon() }>
          {React.createElement(Icons[props.rightIcon], { className: classes.rippleButton })}
        </RippleButton>
      </> : null}

      {props.actions ? <>
        <RippleButton unbounded style={{ marginRight: 10 }} onClick={e => showMoreMenu(e.target) }>
          <MoreVertIcon className={classes.rippleButton} />
        </RippleButton>
        
        <Menu keepMounted
          anchorEl={moreMenuAnchorEl}
          open={!!moreMenuAnchorEl}
          ref={refs.moreMenu}
        >
          <div className={classes.moreMenu}>{props.actions.map((actionName, index) => 
            <div key={index} onClick={() => props.onClickActions && props.onClickActions(actionName, index)}>{actionName}</div>  
          )}</div>
        </Menu>
      </> : null}
    </div>
  )
}

export default Header

const useStyles = makeStyles({  
  container: {
    backgroundColor: styleVars.colors.primary,
    color: 'white',
    boxShadow: '0 0 3px #666',
    height: 56,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000000
  },

  rippleButton: {
    width: 30, 
    height: 30,
    position: 'relative', 
    top: 3, 
  },

  moreMenu: {
    minWidth: 100,
    
    '& > div': {
      lineHeight: '40px',
      fontSize: 18,
      textIndent: 10
    }
  }
})