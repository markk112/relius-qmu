<template>
    <div class="sidebar">
        <ul>
            <li><a href="#" class="active">Dependencies</a></li>
            <li><a href="#">Prefrences</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
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
    display: block;
    padding: 8px 15px;
    border-radius: 5px;
}
.sidebar .active {
    background-color: #0e0e0e;
}
</style>
