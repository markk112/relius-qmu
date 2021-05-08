<template>
    <div id="settings" class="view">
        <div class="view-banner">
            <h1>Settings</h1>
        </div>
        <div class="content">
            <div class="sidebar">
                <ul>
                    <li><a href="#">Dependencies</a></li>
                    <li><a href="#">Prefrences</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div class="subcontent">
                <div class="dependencies">
                    <div class="title">
                        <h1>Dependencies</h1>
                        <p>Manage installation of Oculus Quest dependencies.</p>
                    </div>
                    <div class="items">
                        Items
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Settings',
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
#settings .sidebar {
    width: 220px;
    border-right: 1px solid #1c1c1c;
}
#settings .subcontent {
    flex: 1;
}
</style>
