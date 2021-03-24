<template>
    <div id="native-bar">
        <div>
            <button class="minimise">_</button>
            <button class="maximise">D</button>
            <button class="exit">X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NativeBar',
}
</script>

<style>
#native-bar {
    display: flex;
    justify-content: flex-end;
    background-color: #f5f5f5;
    width: 100%;
    height: 30px;
    -webkit-app-region: drag;
}
#native-bar button {
    background-color: inherit;
    border: 0;
    padding: 0;
    outline: 0;
    width: 46px;
    height: 30px;
    cursor: pointer;
}
</style>