export let drawerInstance: any

export interface DrawerController {
  open(): void
  close(): void
}

const drawerRef = {
  setInstance(instance: any) {
    drawerInstance = instance
  },

  get(): DrawerController {
    return {
      open: () => drawerInstance.open(),
      close: () => drawerInstance.close()
    }
  }
}

export default drawerRef