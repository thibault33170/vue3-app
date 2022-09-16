import { defineStore } from 'pinia'
import { generateApi } from '@/http/factory'

const TestApi = generateApi('properties')

export const usePropertyStore = defineStore('property', {
    state: () => ({
        properties: []
    }),

    getters: {
        getProperty: (state) => (id) => {
            return state.properties.find(property => property.id === id)
        }
    },

    actions: {
        async getProperties() {
            const { data } = await TestApi.getAll()
            this.properties = data
        },

        async updateProperty(id, payload) {
            const { data } = await TestApi.updateOne(id, payload.value)
            // TODO maj du store ? 
        },

        async createProperty(payload) {
            const { data } = await TestApi.createOne(payload)
            // TODO maj du store ? 
        }
    }
})