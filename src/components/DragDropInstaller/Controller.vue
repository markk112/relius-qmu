<template>
    <Default v-show="type === 'default'" />
    <Validation v-show="type === 'validation'" />
</template>

<script>
import Default from './views/Default.vue';
import Validation from './views/Validation.vue';
import Installation from './views/Installation.vue';

export default {
    name: 'Controller',
    components: {
        Default,
        Validation,
        Installation
    },
    data() {
        return {
            type: 'default',
        }
    }
}
</script>

<style>

</style>