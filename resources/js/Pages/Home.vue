<script setup>
    import {Head} from '@inertiajs/vue3';
</script>

<template>
    <Head :title="$page.component"/>
    <h1 class="text-3xl font-bold underline">{{ $page.component }}</h1>
</template>