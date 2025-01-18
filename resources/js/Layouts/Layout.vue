<script setup>
    import { Link, Head } from '@inertiajs/vue3';
</script>

<template>
    <Head>
        <title>Laravel Inertia Vue</title>
    </Head>
    <div>
        <header>
            <nav>
                <div class="space-x-6">
                    <Link :href="route('home')" class="nav-link">Home</Link>
                    <Link :href="route('register')" class="nav-link">Register</Link>
                </div>
            </nav>
        </header>

        <main class="p-4">
            <slot />
        </main>
    </div>
</template>