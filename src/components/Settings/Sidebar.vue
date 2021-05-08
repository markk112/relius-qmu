<template>
    <div class="sidebar">
        <ul>
            <li><a data-view="0" :class="{ active: currentView === 0 }" @click="handleView($event)">Dependencies</a></li>
            <li><a data-view="1" :class="{ active: currentView === 1 }" @click="handleView($event)">Prefrences</a></li>
            <li><a data-view="2" :class="{ active: currentView === 2 }" @click="handleView($event)">About</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        currentView: Number,
    },
    methods: {
        handleView(e) {
            if (!e.srcElement.classList.contains('active')) {
                this.$emit('changeToView', parseInt(e.srcElement.dataset.view));
            }
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-flow: column;
    width: 220px;
    border-right: 1px solid #1c1c1c;
    padding: 20px;
}
.sidebar li {
    width: 100%;
    margin-bottom: 5px;
}
.sidebar li a {
    cursor: pointer;
    display: block;
    padding: 8px 15px;
    border-radius: 5px;
}
.sidebar .active {
    background-color: #0e0e0e;
}
</style>
