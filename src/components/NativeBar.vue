<template>
    <div id="native-bar">
        <div class="draggable">

        </div>
        <div>
            <button class="minimise" @click="minimise"></button>
            <button class="maximise" @click="maximise"></button>
            <button class="exit" @click="exit"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NativeBar',
    methods: {
        minimise() {
            window.api.send('minimise-window');
        },
        maximise() {
            window.api.send('maximise-window');
        },
        exit() {
            window.api.send('exit-app');
        }
    }
}
</script>

<style>
#native-bar {
    display: flex;
    justify-content: flex-end;
    background-color: #f5f5f5;
    width: 100%;
    height: 30px;
}
#native-bar .draggable {
    flex-grow: 1;
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
#native-bar .minimise {
    background-image: url('../assets/images/components/native-bar/minimize-icon.png');
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: center;
}
#native-bar .minimise:active {
    background-color: #cccccc;
}
#native-bar .maximise {
    background-image: url('../assets/images/components/native-bar/maximize-icon.png');
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: center;
}
#native-bar .maximise:active {
    background-color: #cccccc;
}
#native-bar .exit {
    background-image: url('../assets/images/components/native-bar/exit-icon.png');
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: center;
}
#native-bar .exit:hover {
    background-color: #e81123;
    background-image: url('../assets/images/components/native-bar/exit-icon-white.png');
}
#native-bar .exit:active {
    background-color: #f1707a;
}
</style>