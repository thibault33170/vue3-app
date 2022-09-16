<template>
    <Header />
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header
    },

    setup() {
    }
}

</script>

<style scoped>

</style>
