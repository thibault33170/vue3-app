<template>


    <nav class="text-center py-5" aria-label="navigation">
        <ul class="inline-flex items-center -space-x-px">
            <li @click="goPrev">
                <a href="#"
                    class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li v-for="index in pagesNumber" :key="index">
                <a @click="$emit('paginationChanged', index)" v-if="page === index" href="#" aria-current="page"
                    class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                    {{index}}
                </a>

                <a @click="$emit('paginationChanged', index)" v-else href="#"
                    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{index}}
                </a>
            </li>

            <li @click="goNext">
                <a href="#"
                    class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        paginate: {
            type: Number,
            default: 5
        },

        page: {
            type: Number,
            default: 1
        },

        total: {
            type: Number
        }
    },

    setup(props, { emit }) {
        const pagesNumber = Math.ceil(props.total / props.paginate)

        const goPrev = () => {
            if (props.page && props.page > 0) {
                emit('paginationChanged', props.page - 1)
            }
        }

        const goNext = () => {
            if (props.page && props.page < pagesNumber) {
                emit('paginationChanged', props.page + 1)
            }
        }

        return {
            pagesNumber,

            goPrev,

            goNext
        }
    }
}
</script>