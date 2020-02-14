import { Dialogs } from '@ionic-native/dialogs'

export default {
  alert (message: string, title = '提示', buttonName = '确定') {
    return Dialogs.alert(message, title, buttonName)
  }
}