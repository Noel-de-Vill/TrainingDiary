import {makeAutoObservable} from "mobx";

export default class DiaryDiary{
    constructor() {
        this._diary = [

        ]
        makeAutoObservable(this)
    }

    setDiary(diary) {
        this._diary = diary
    }

    get diary(){
        return this._diary
    }
}