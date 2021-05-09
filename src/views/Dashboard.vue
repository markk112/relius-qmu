<template>
    <div id="dashboard" class="view">
        <div class="view-banner">
            <h1>Dashboard</h1>
        </div>
        <div class="content padding">
            <div class="banner">
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="58.178" viewBox="0 0 108 58.178">
                    <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M0,28.921V12.7A12.456,12.456,0,0,1,12.752,0h82.4A12.441,12.441,0,0,1,108,12.862V45.567A12.458,12.458,0,0,1,95.405,58.159H75.42a12.413,12.413,0,0,1-10.928-5.835c-1.034-1.546-2.059-3.1-3.093-4.639a4.214,4.214,0,0,0-3.718-1.98c-5.7,0-5.452-.379-8.673,4.585-.588.909-1.167,1.826-1.813,2.688a12.056,12.056,0,0,1-9.978,5.164q-12.329.081-24.657,0A12.433,12.433,0,0,1,0,45.534Z"
                        transform="translate(0.003)"
                        fill="#949494"
                    />
                </svg>
                <div class="mini-info">
                    <h2>Steve's Quest 2</h2>
                    <p>FSDJ99934343JJJFD223</p>
                </div>
                <div class="controls">
                    <div class="buttons">
                        <button class="btn-default">Shutdown</button>
                        <button class="btn-default">Restart</button>
                    </div>
                </div>
            </div>
            <div class="details inner">
                <h2>General {{ getStatus }}</h2>
                <div class="info">
                    <ul>
                        <li>
                            <h3>Device Name</h3>
                            <p>Steve's Oculus Quest 2</p>
                        </li>
                        <li>
                            <h3>Model</h3>
                            <p>Oculus Quest 2 "hollywood"</p>
                        </li>
                        <li>
                            <h3>Firmware Version</h3>
                            <p>v26.223</p>
                        </li>
                        <li>
                            <h3>Serial</h3>
                            <p>FSDFDFD33434FDSD2222</p>
                        </li>
                    </ul>
                </div>
                <hr />
                <h2>Storage</h2>
                <div class="indicator-bg">
                    <div class="indicator-fill"></div>
                    <div class="indicator-fill-1"></div>
                </div>
                <div class="legend">
                    <div class="item">
                        <div class="colour"></div>
                        <div class="name">
                            <h3>Unknown Sources</h3>
                            <p>34.5 <span class="strong">GB</span></p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="colour"></div>
                        <div class="name">
                            <h3>System</h3>
                            <p>34.5 <span class="strong">GB</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    computed: {
        getStatus() {
            return this.$store.state.status;
        }
    }
};
</script>

<style scoped>
#dashboard .content .banner {
    display: flex;
    padding-bottom: 40px;
}
#dashboard .content .banner button {
    background-color: #242424;
    margin-left: 20px;
}
#dashboard .content .banner button:hover {
    transform: scale(0.95);
}
#dashboard .content .banner .mini-info {
    display: flex;
    flex-flow: column;
    margin-left: 20px;
    justify-content: center;
}
#dashboard .content .banner .mini-info h2 {
    font-size: 16px;
}
#dashboard .content .banner .mini-info p {
    padding: 4px 6px;
    line-height: 1.2;
    font-size: 14px;
    margin-left: -5px;
}
#dashboard .content .banner .mini-info p:hover {
    cursor: pointer;
    background-color: #0e0e0e;
    color: #fff;
}
#dashboard .content .banner .controls {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
}
#dashboard .content .banner .controls .buttons {
    display: flex;
    align-items: flex-end;
}

#dashboard .content .details h2 {
    font-size: 18px;
    margin-bottom: 20px;
}
#dashboard .content .details h3 {
    font-size: 14px;
    font-weight: 600;
}
#dashboard .content .details p {
    font-size: 14px;
}
#dashboard .content .details li {
    padding-bottom: 4px;
    display: flex;
    justify-content: space-between;
}
#dashboard .content .details hr {
    border: none;
    height: 1px;
    color: #1c1c1c;
    background-color: #1c1c1c;
    margin: 13px 0;
}

#dashboard .indicator-bg {
    background-color: #040404;
    height: 40px;
    border-radius: 5px;
}
#dashboard .indicator-fill {
    display: inline-block;
    background-color: #0e64ef;
    height: inherit;
    border-radius: 5px 0 0 5px;
    width: 75%;
}
#dashboard .indicator-fill-1 {
    display: inline-block;
    background-color: #0d449c;
    height: inherit;
    width: 14%;
}
#dashboard .legend {
    margin-top: 15px;
}
#dashboard .legend .item {
    display: inline-block;
    margin-right: 25px;
}
#dashboard .legend .item .name {
    display: inline-block;
}
#dashboard .legend .item .colour {
    background-color: #0e64ef;
    border-radius: 5px;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 20px;
}
</style>
