import {makeAutoObservable} from "mobx";

export default class InfoDiary{
    constructor() {
        this._infoTrainer = [
            // {id:1,surname:"Руденик",name:"Виктор",middlename:"Владимирович",userId:2},
            // {id:2,surname:"Руденик",name:"Иньяцио",middlename:"Владимирович",userId:2}
        ]
        this._infoSportsman = [
            // {id:1,surname:"Тихон",name:"Иван",middlename:"Григорьевич",height:1.86,gender:"male",birthdate:"1976-07-23T21:00:00.000Z",weight:123,trainerId:1,sporttypeId:1,userId:1},
            // {id:2,surname:"Тихон",name:"Себастьян",middlename:"Григорьевич",height:1.86,gender:"male",birthdate:"1976-07-23T21:00:00.000Z",weight:123,trainerId:1,sporttypeId:1,userId:1}
        ]
        this._selectedTrainer = {}
        this._selectedSportsman={}
        this._sporttype = [
            //{id: 1,title:"sdfghjk"}
        ]
        this._page = 1
        this._selectedSporttype ={}
        makeAutoObservable(this)
    }

    setInfoTrainer(infoTrainer) {
        this._infoTrainer = infoTrainer
    }

    setSporttype(sporttype) {
        this._sporttype = sporttype
    }

    setSelectedSporttype(sporttype) {
        this._selectedSporttype = sporttype
    }

    setInfoSportsman(infoSportsman) {
        this._infoSportsman = infoSportsman
    }

    setSelectedTrainer(trainer) {
        this._selectedTrainer = trainer
    }

    setSelectedSportsman(sportsman) {
        this._selectedSportsman = sportsman
    }

    get infoTrainer(){
        return this._infoTrainer
    }
    get infoSportsman(){
        return this._infoSportsman
    }
    get sporttype(){
        return this._sporttype
    }
    get selectedSporttype() {
        return this._selectedSporttype
    }
    get selectedTrainer() {
        this.setPage(1)
        return this._selectedTrainer
    }
    get selectedSportsman() {
        this.setPage(1)
        return this._selectedSportsman
    }
    setPage(page) {
        this._page = page
    }
    get page() {
        return this._page
    }

}