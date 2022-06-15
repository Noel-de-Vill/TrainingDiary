import {$authHost, $host} from "./index";

export const createCycle = async (title, dateofstart,dateoffinish,type,task,stepId) => {
    const {data} = await $authHost.post('api/cycle', {title, dateofstart, dateoffinish, type, task, stepId})
    return data
}

export const fetchCycle = async () => {
    const {data} = await $host.get('api/cycle')
    return data
}

export const fetchCycleByStep = async (stepId) => {
    const {data} = await $host.get('api/cycle', {params: {stepId}})
    return data
}

export const fetchCycleById = async (id) => {
    const {data} = await $host.get('api/cycle' + id)
    return data
}

export const createStep = async (title, description, macrocycleId) => {
    const {data} = await $authHost.post('api/step', {title, description, macrocycleId})
    return data
}

export const fetchStep = async () => {
    const {data} = await $host.get('api/step')
    return data
}

export const createMacrocycle = async (title, description, sportsmanId) => {
    const {data} = await $authHost.post('api/macrocycle', {title, description, sportsmanId})
    return data
}

export const fetchMacrocycle = async () => {
    const {data} = await $host.get('api/macrocycle')
    return data
}
