<template>
    <div id="nav">
        <ul>
            <li><a :class="{ 'is-active': currentView === 'dashboard' }"
            @click="handleView($event)">Dashboard</a></li>
            <li><a :class="{ 'is-active': currentView === 'sideload' }"
            @click="handleView($event)">Sideload</a></li>
            <li><a :class="{ 'is-active': currentView === 'settings' }"
            @click="handleView($event)">Settings</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        currentView: String,
    },
    methods: {
        handleView(e) {
            if (!e.srcElement.classList.contains('is-active')) {
                this.$emit('changeCurrentView', e.srcElement.innerHTML.toLowerCase());
            }
        },
    },
};
</script>

<style scoped>
#nav {
    color: #858585;
    font-size: 16px;
    font-family: 'Segoe-UI-Regular';
}

#nav ul li a {
    display: block;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 45px;
    font-size: inherit;
    cursor: pointer;
}

#nav ul li a.is-active {
    border-right: 2px solid #0e64ef;
    background-color: #0e0e0e;
}
</style>
