import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import Layout from './Layouts/Layout.vue';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`];
        console.log(page);
        page.default.layout = page.default.layout || Layout

        // console.log(page);
        
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue)
        .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,
    
        // The color of the progress bar...
        color: '#29d',
    
        // Whether to include the default NProgress styles...
        includeCSS: true,
    
        // Whether the NProgress spinner will be shown...
        showSpinner: true,
      },
});