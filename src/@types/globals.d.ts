// 全局变量

declare interface Window {
  clsx: __Clsx
}

declare let clsx: Window['clsx']

declare interface DefaultProps<Props> extends Function {
  defaultProps?: Partial<Props>
}