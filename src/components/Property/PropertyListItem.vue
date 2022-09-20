<template>
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">

            <a href="#" class="relative">
                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/400/200/?random">
                <span class="absolute top-2 right-2 rounded-[15px] px-2 bg-white">{{property.status}}</span>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                        {{property.name}}
                    </a>
                </h1>
                <p class="text-grey-darker text-sm">
                    {{property.amount}} € - {{property.surface}} m²
                </p>
            </header>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                    <p class="ml-2 text-sm">
                        Author Name
                    </p>
                </a>
                <span class="text-black cursor-pointer" @click.stop="deleteProperty">
                    <i class="fa fa-trash"></i>
                </span>
            </footer>

        </article>
        <!-- END Article -->

    </div>

</template>

<script>
import { computed } from 'vue'
import { usePropertyStore } from '@/store/property.store'

export default {
    props: {
        propertyId: String
    },

    setup(props) {
        const propertyStore = usePropertyStore()

        const property = computed(() => propertyStore.getProperty(props.propertyId))

        const deleteProperty = async () => {
            await propertyStore.deleteProperty(props.propertyId)
        }

        return {
            property,

            deleteProperty
        }
    }
}
</script>