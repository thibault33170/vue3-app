import { $axios } from '@/http/axios'

function createQueryString(obj) {
    const params = new URLSearchParams('')

    for (let key in obj) {
        params.append(key, obj[key])
    }

    return params.toString()
}

class JsonApi {
    constructor(resource) {
        this.resource = resource
    }

    async getAll(params) {
        return await $axios.get(`/${this.resource}?${createQueryString(params)}`)
    }

    async getOne(id) {
        return await $axios.get(`/${this.resource}/${id}`)
    }

    async createOne(payload) {
        return await $axios.post(`/${this.resource}`, payload)
    }

    async updateOne(id, payload) {
        return await $axios.put(`/${this.resource}/${id}`, payload)
    }

    async deleteOne(id) {
        return await $axios.delete(`/${this.resource}/${id}`)
    }
}

export const generateApi = (resource) => new JsonApi(resource)