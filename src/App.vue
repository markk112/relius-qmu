<template>
    <Frame />
    <div id="content">
        <div id="sidebar">
            <ConnectionIndicator />
            <BatteryIndicator />
            <Nav :currentView="currentRoute.view" @changeCurrentView="changeCurrentView" />
        </div>
        <component :is="currentRoute.component" />
    </div>
</template>

<script>
import Frame from '@/components/Frame.vue';

import ConnectionIndicator from '@/components/Sidebar/ConnectionIndicator.vue';
import BatteryIndicator from '@/components/Sidebar/BatteryIndicator.vue';
import Nav from '@/components/Sidebar/Nav.vue';

import Dashboard from '@/views/Dashboard.vue';
import Sideload from '@/views/Sideload.vue';
import Settings from '@/views/Settings.vue';

export default {
    name: 'App',
    components: {
        Dashboard,
        Sideload,
        Settings,
        Nav,
        ConnectionIndicator,
        BatteryIndicator,
        Frame,
    },
    mounted() {
        window.api.receive('usbAttached', (data) => {
            console.log('USB SUCCESS', data);
            this.$store.dispatch('usbAttached', data);
        });
    },
    data() {
        return {
            routes: [
                {
                    view: 'dashboard',
                    component: Dashboard,
                },
                {
                    view: 'sideload',
                    component: Sideload,
                },
                {
                    view: 'settings',
                    component: Settings,
                },
            ],
            currentRoute: {
                view: 'dashboard',
                component: Dashboard,
            },
        };
    },
    methods: {
        changeCurrentView(toRoute) {
            this.currentRoute = this.routes.find((route) => route.view === toRoute);
        },
    },
};
</script>

<style>
#app {
    border: 1px solid #1c1c1c;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
#content {
    display: flex;
    height: 100%;
    width: 100%;
}
#sidebar {
    height: 100%;
    width: 340px;
    background-color: #000000;
    border-right: 1px solid #1c1c1c;
}
</style>
