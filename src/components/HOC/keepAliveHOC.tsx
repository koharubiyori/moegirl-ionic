import React, { FC } from 'react'
import KeepAlive from 'react-activation'

export default (Component: FC<any>) => (props: any) => <KeepAlive children={<Component {...props} />} />