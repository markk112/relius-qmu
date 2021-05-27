<template>
    <div id="settings" class="view">
        <div class="view-banner">
            <h1>Settings</h1>
        </div>
        <div class="content">
            <Sidebar :currentView='currentView' @changeToView='currentView = $event' />
            <div class="subcontent">
                <Dependencies v-show="currentView === 0" />
                <Preferences v-show="currentView === 1" />
                <About v-show="currentView === 2" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Settings/Sidebar.vue";

import Dependencies from "@/components/Settings/views/Dependencies.vue";
import Preferences from "@/components/Settings/views/Preferences.vue";
import About from "@/components/Settings/views/About.vue";

export default {
    name: 'Settings',
    components: {
        Sidebar,
        Dependencies,
        Preferences,
        About,
    },
    data() {
        return {
            currentView: 0,
        }
    }
};
</script>

<style>
#settings {
    display: flex;
    flex-flow: column;
}
#settings .content {
    display: flex;
    flex: 1;
}
#settings .subcontent {
    flex: 1;
    padding: 17px 30px;
}
#settings .subcontent .title h1 {
    font-size: 16px;
}
#settings .subcontent .title p {
    font-size: 16px;
}
#settings .subcontent .items .dep {
    border: 1px solid #1c1c1c;
    border-radius: 5px;
    padding: 20px;
}
</style>
