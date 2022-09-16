<template>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <PropertyListItem v-for="property in properties" :key="property.id" :propertyId="property.id"
                @click="goToCategoryEdit(property.id)" />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

import { usePropertyStore } from '@/store/property.store'
import { useRouter } from 'vue-router'

import PropertyListItem from '@/components/Property/PropertyListItem.vue'


export default {
    setup() {
        const propertyStore = usePropertyStore()
        const router = useRouter()

        propertyStore.getProperties()

        const properties = computed(() => propertyStore.properties)

        const goToCategoryEdit = (id) => {
            router.push({
                name: 'PropertyEdit',
                params: {
                    id
                }
            })
        }
        return { properties, goToCategoryEdit }
    },

    components: {
        PropertyListItem
    }
}
</script>