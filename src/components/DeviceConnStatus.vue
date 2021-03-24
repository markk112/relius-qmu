<template>
    <div id="device-conn-status">
        <img src="../assets/images/components/device-conn-status/disconnected.svg" alt="Quest Connection Status">
    </div>
</template>

<script>
export default {
    name: 'DeviceConnectionStatus',
}
</script>

<style>
#device-conn-status {
    display: flex;
    justify-content: center;
    align-items: center;
}
#device-conn-status img {
    margin: 60px 60px;
    width: 220px;
}
</style>