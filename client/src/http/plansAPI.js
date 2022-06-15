import {$authHost, $host} from "./index";

export const createPlan = async (plan) => {
    const {data} = await $authHost.post('api/plan', plan)
    return data
}

export const fetchPlans = async () => {
    const {data} = await $host.get('api/plan')
    return data
}