import { RouteComponentProps } from 'react-router'
import { RouteParamMaps } from 'routes'

export = Router

export as namespace __Router

type NavigateFn = <RouteName extends keyof RouteParamMaps>(path: RouteName, params?: RouteParamMaps[RouteName]) => void

declare namespace Router {
  interface Props<RouteParams = {}> extends RouteComponentProps {
    history: Omit<RouteComponentProps['history'], 'push' | 'replace'> & {
      push: NavigateFn
      replace: NavigateFn
      location: RouteComponentProps['location'] & { state: RouteParams }
    }

    location: RouteComponentProps['location'] & { state: RouteParams }
  }
}