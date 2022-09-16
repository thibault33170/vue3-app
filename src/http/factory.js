import { $axios } from '@/http/axios'

class JsonApi {
    constructor(resource) {
        this.resource = resource
    }

    async getAll() {
        return await $axios.get(`/${this.resource}/`)
    }

    getOne(id) {
        return $axios.get(`/${this.resource}/${id}`)
    }

    createOne(payload) {
        debugger
        return $axios.post(`/${this.resource}`, payload)
    }

    updateOne(id, payload) {
        return $axios.put(`/${this.resource}/${id}`, payload)
    }

    deleteOne(id) {
        return $axios.delete(`/${this.resource}/${id}`)
    }
}

export const generateApi = (resource) => new JsonApi(resource)