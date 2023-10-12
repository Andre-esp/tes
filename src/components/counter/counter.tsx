import counterStore from '../../store/store'
import {observer} from 'mobx-react-lite'

export const Counter = observer(() => {
    return `Count = ${counterStore.counter}`
  })