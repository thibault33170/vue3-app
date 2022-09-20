<template>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <PropertyListItem v-for="property in properties" :key="property.id" :propertyId="property.id"
                @click="goToCategoryEdit(property.id)" />
        </div>

        <Pagination @pagination-changed="paginationChanged" :total="16" :page="page" :paginate="paginate">
            {{pagesNumber}}
        </Pagination>

    </div>
</template>

<script>
import { computed, ref } from 'vue'

import { usePropertyStore } from '@/store/property.store'
import { useRouter } from 'vue-router'

import PropertyListItem from '@/components/Property/PropertyListItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    setup() {
        const propertyStore = usePropertyStore()
        const router = useRouter()

        let page = ref(1)
        let paginate = ref(5)

        propertyStore.fetchProperties({ page: page.value - 1, paginate: paginate.value })

        const properties = computed(() => propertyStore.getProperties())

        const goToCategoryEdit = (id) => {
            router.push({
                name: 'PropertyEdit',

                params: {
                    id
                }
            })
        }

        const paginationChanged = async (index) => {
            page.value = index

            await propertyStore.fetchProperties({ page: page.value - 1, paginate: paginate.value })
        }

        return {
            properties,

            goToCategoryEdit,

            paginationChanged,

            page,

            paginate
        }
    },

    components: {
        PropertyListItem,

        Pagination
    }
}
</script>