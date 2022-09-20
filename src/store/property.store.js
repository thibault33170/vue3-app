import { defineStore } from 'pinia'
import { generateApi } from '@/http/factory'

const TestApi = generateApi('properties')

export const usePropertyStore = defineStore('property', {
    state: () => ({
        properties: [],
    }),

    getters: {
        getProperty: (state) => (id) => {
            return state.properties.find(property => property.id === id)
        },

        getProperties: (state) => () => {
            return state.properties
        },
    },

    actions: {
        async fetchProperties({ page = 0, paginate = 5 }) {
            const { data } = await TestApi.getAll({ page, paginate })

            this.properties = data.properties
        },

        async updateProperty(id, payload) {
            const { data } = await TestApi.updateOne(id, payload.value)

            const index = this.properties.findIndex(property => +property.id === id)

            this.properties[index] = data.property
        },

        async createProperty(payload) {
            const { data } = await TestApi.createOne(payload)

            this.properties.push(data.property)
        },

        async deleteProperty(id) {
            await TestApi.deleteOne(id)

            this.properties = this.properties.filter(property => property.id !== id)
        }
    }
})