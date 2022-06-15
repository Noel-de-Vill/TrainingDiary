import {makeAutoObservable} from "mobx";

export default class PlansDiary{
    constructor() {
        this._plans = []
        makeAutoObservable(this)
    }

    setPlans(plans) {
        this._plans = plans
    }

    get planes(){
        return this._plans
    }
}