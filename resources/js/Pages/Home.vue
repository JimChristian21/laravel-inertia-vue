<script setup>
    import {Head, Link} from '@inertiajs/vue3';
    import PaginationLinks from './Components/PaginationLinks.vue';

    defineProps({
        users: Object
    });

    const getDate = (date) => {
        return new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
</script>

<template>
    <Head :title="$page.component"/>
    <h1> Users </h1>
    <div>
        <table>
            <thead>
                <tr class="bg-slate-300">
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registarion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users.data" :key="user.id">
                   <td>
                        <img :src="user.avatar ? ('storage/' + user.avatar) : '#'" class="avatar" alt="avatar"/>
                   </td>
                   <td>{{ user.name }}</td> 
                   <td>{{ user.email }}</td> 
                   <td>{{ getDate(user.created_at) }}</td> 
                </tr>
            </tbody>
        </table>
        <div>
            <PaginationLinks :paginator="users"/>
        </div>
    </div>
</template>