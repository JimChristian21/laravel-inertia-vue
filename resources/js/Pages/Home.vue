<script setup>
    import {Head} from '@inertiajs/vue3';

    defineProps({
        users: Object
    });
</script>

<template>
    <Head :title="$page.component"/>
    <h1>{{ $page.component }} Page</h1>
</template>