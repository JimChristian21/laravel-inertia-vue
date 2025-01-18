<script setup>
    import {Head, Link} from '@inertiajs/vue3';
</script>

<template>
    <Head :title="$page.component"/>
    <h1 class="text-3xl font-bold underline">{{ $page.component }}</h1>
    <Link class="mt-[60000px] block" :href="route('home')" preserve-scroll>Refresh</Link>

</template>