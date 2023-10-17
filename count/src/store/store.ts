import {makeAutoObservable} from 'mobx'
class CounterStore {

    time = 0
    timerName: NodeJS.Timer
    workTimer: boolean

    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    minus = () => this.counter--

    plus = () => this.counter++

    startTimer = () => {
        if(this.workTimer) {
            clearTimeout(this.timerName)
            this.workTimer = false
        }
        this.workTimer = true
        return this.timerName = setInterval(() => {
            this.time++
        }, 1000)
    }

    stopTimer = () => {
        this.workTimer = false
        return clearTimeout(this.timerName)
    }
}
const counterStore = new CounterStore()
export default counterStore