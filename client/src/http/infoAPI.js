import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createInfoTrainer = async (surname, name, middlename, userId) => {
    const {data} = await $authHost.post('api/trainer', {surname, name, middlename, userId})
    return data
}

export const fetchInfoTrainer = async () => {
    const {data} = await $host.get('api/trainer',)
    return data
}

export const createInfoSportsman = async (surname, name, middlename, height, gender, birthdate, weight, trainerId, sporttypeId, userId) => {
    const {data} = await $authHost.post('api/sportsman', {surname, name, middlename, height, gender, birthdate, weight, trainerId, sporttypeId, userId})
    return data
}

export const fetchInfoSportsman = async () => {
    const {data} = await $host.get('api/sportsman', )
    return data
}

export const fetchSporttype = async () => {
    const {data} = await $host.get('api/sporttype',)
    return data
}

// export const fetchOneDevice = async (id) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }
