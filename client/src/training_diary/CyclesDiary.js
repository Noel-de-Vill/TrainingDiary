import {makeAutoObservable} from "mobx";

export default class CyclesDiary{
    constructor() {
        this._macrocycles = []
        this._steps = []
        this._cycles = []
        this._selectedMacrocycle = []
        this._page = 1
        makeAutoObservable(this)
    }

    setCycles(cycles) {
        this._cycles = cycles
    }

    setSteps(steps) {
        this._steps = steps
    }

    setMacrocycles(macrocycles) {
        this._macrocycles = macrocycles
    }

    setSelectedMacrocyle(macrocycles) {
        this._selectedMacrocycle = macrocycles
    }

    get selectedMacrocycle() {
        this.setPage(1)
        return this._selectedMacrocycle
    }

    get cycles(){
        return this._cycles
    }

    get steps(){
        return this._steps
    }

    get macrocycles(){
        return this._macrocycles
    }

    setPage(page) {
        this._page = page
    }
    get page() {
        return this._page
    }
}