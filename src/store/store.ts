import {makeAutoObservable} from 'mobx'
class counterStore {

    time = 0
    timerName
    workTimer

    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    plus = () => this.counter++

    minus = () => this.counter--

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

export default new counterStore()