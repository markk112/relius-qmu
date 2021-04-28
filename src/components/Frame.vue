<template>
    <div id="frame">
        <div class="draggable">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="12" viewBox="0 0 59.502 11.016">
                    <path
                        d="M11.074-6.973a4.494,4.494,0,0,1-.469,2.139,2.966,2.966,0,0,1-1.333,1.3q.6,1.187,1.8,3.53h-3.3q-.527-1.055-1.6-3.149H5V0H2.065V-7.881a4.2,4.2,0,0,0-.352-1.8,2.42,2.42,0,0,0-1-1.113h6.87a3.278,3.278,0,0,1,2.549,1.011A4.011,4.011,0,0,1,11.074-6.973ZM5-8.423v2.93H6.782a1.263,1.263,0,0,0,1-.4,1.48,1.48,0,0,0,.366-1.069,1.534,1.534,0,0,0-.366-1.084,1.317,1.317,0,0,0-1-.381H5ZM16.67-2.4h3.9q.278.806.835,2.4H15.542a1.768,1.768,0,0,1-1.274-.527A1.736,1.736,0,0,1,13.74-1.8V-7.881a4.2,4.2,0,0,0-.352-1.8,2.42,2.42,0,0,0-1-1.113h8.774l-.923,2.549H16.67v1.772h3.105q-.278.747-.82,2.241H16.67V-2.4ZM31.948-2.7q-.337.894-1,2.7H25.869a1.768,1.768,0,0,1-1.274-.527A1.736,1.736,0,0,1,24.067-1.8V-7.881a4.2,4.2,0,0,0-.352-1.8,2.42,2.42,0,0,0-1-1.113H27v8.1h4.951Zm.981-8.1h4.277V0h-2.93V-7.881a4.2,4.2,0,0,0-.352-1.8A2.42,2.42,0,0,0,32.93-10.8Zm14.063,0h2.93v6.387a4.477,4.477,0,0,1-1.3,3.4A4.923,4.923,0,0,1,45.073.22a4.923,4.923,0,0,1-3.545-1.23,4.5,4.5,0,0,1-1.289-3.4V-7.881a4.2,4.2,0,0,0-.352-1.8,2.42,2.42,0,0,0-1-1.113h4.277v6.46a1.811,1.811,0,0,0,.513,1.362,1.933,1.933,0,0,0,1.406.5,1.881,1.881,0,0,0,1.392-.5,1.811,1.811,0,0,0,.513-1.362V-10.8ZM58.726-5.874a2.728,2.728,0,0,1,1.128,1.128,3.138,3.138,0,0,1,.366,1.523v.044a2.916,2.916,0,0,1-1.245,2.49A5.715,5.715,0,0,1,55.547.22,7.853,7.853,0,0,1,53.218-.1a4.2,4.2,0,0,1-1.67-.952Q52-1.743,52.939-3.12a3.827,3.827,0,0,0,1.245.7,4.087,4.087,0,0,0,1.392.293,2.456,2.456,0,0,0,1.3-.293.834.834,0,0,0,.483-.7.626.626,0,0,0-.22-.469,1.641,1.641,0,0,0-.615-.293q-.146-.044-.864-.22t-.82-.22l-.732-.19A6.481,6.481,0,0,1,53.32-4.8a3.846,3.846,0,0,1-1.3-1,2.861,2.861,0,0,1-.571-1.9,2.878,2.878,0,0,1,1.011-2.168,3.962,3.962,0,0,1,2.8-.923h4.7q-.322.864-.967,2.622H55.269a2.427,2.427,0,0,0-.82.117.4.4,0,0,0-.234.366.435.435,0,0,0,.352.469q.381.132.762.234h0q.088.015.7.161t1.318.381q.381.132.747.264A4.216,4.216,0,0,1,58.726-5.874Z"
                        transform="translate(-0.718 10.796)"
                        fill="#949494"
                    />
                </svg>
                <p>Quest Management Utility</p>
            </div>
        </div>
        <div class="buttons">
            <button class="minimise" @click="minimise">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.202 3">
                    <line class="sw-6 sc-default" x2="44.202" transform="translate(0 1.5)" />
                </svg>
            </button>
            <button class="maximise" @click="maximise">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.097 46.097">
                    <g class="sw-6 sc-default">
                        <rect x="1.5" y="1.5" width="43.097" height="43.097" fill="none" />
                    </g>
                </svg>
            </button>
            <button class="close" @click="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.353 47.556">
                    <g>
                        <line class="sw-6 sc-default" x2="44.202" y2="45.465" />
                        <line class="sw-6 sc-default" x1="44.202" y2="45.465" />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NativeFrame',
    methods: {
        minimise() {
            window.api.send('minimise-window');
        },
        maximise() {
            window.api.send('maximise-window');
        },
        close() {
            window.api.send('exit-app');
        },
    },
};
</script>

<style>
#frame {
    display: flex;
    justify-content: flex-end;
    background-color: #000000;
    width: 100%;
    height: 35px;
    border-bottom: 1px solid #1c1c1c;
}
#frame .draggable {
    display: flex;
    flex-grow: 1;
    -webkit-app-region: drag;
}
#frame .logo {
    display: flex;
    margin-left: 10px;
    align-items: center;
    height: 100%;
}
#frame .logo p {
    color: #949494;
    font-size: 12px;
    margin-left: 10px;
}
#frame .buttons {
    display: flex;
}
#frame button {
    width: 50px;
    height: inherit;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
#frame button:hover {
    background: #1c1c1c;
}
#frame button:hover .sc-default {
    stroke: #fff;
}
#frame button:active {
    background-color: #333333;
}
#frame button.close:hover {
    background-color: #ba0e1c;
}
#frame button.close:active {
    background-color: #e81123;
}
#frame button.minimise {
    padding-top: 9px;
}
#frame button svg .sw-6 {
    stroke-width: 3px;
}
#frame button svg .sc-default {
    stroke: #949494;
}
#frame button svg {
    height: 12px;
    width: 12px;
}
</style>
