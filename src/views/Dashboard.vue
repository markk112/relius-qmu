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
                    <form @submit="finishEdit">
                        <input type="text" :value="questCustomName" @input="updateQuestCustomName" @keyup.enter="finishEdit">
                    </form>
                    <p :class="{ old: !questStatus }" @click="writeToClipboard(questSerial)">{{ questSerial }}</p>
                </div>
                <div class="controls">
                    <div class="buttons">
                        <button class="btn-default">Shutdown</button>
                        <button class="btn-default">Restart</button>
                    </div>
                </div>
            </div>
            <div class="details inner">
                <h2>General</h2>
                <div class="info">
                    <ul>
                        <li>
                            <h3>Device Name</h3>
                            <p :class="{ old: !questStatus }">{{ questCustomName }}</p>
                        </li>
                        <li>
                            <h3>Model</h3>
                            <p :class="{ model: 1, old: !questStatus }">{{ questModel }}</p>
                        </li>
                        <li>
                            <h3>Firmware Version</h3>
                            <p :class="{ old: !questStatus }">{{ questFirmwareVersion }}</p>
                        </li>
                        <li>
                            <h3>Serial</h3>
                            <p :class="{ old: !questStatus }">{{ questSerial }}</p>
                        </li>
                    </ul>
                </div>
                <hr />
                <h2>Storage</h2>
                <div class="indicator-bg">
                    <div class="indicator-fill" :style="{ width: systemSize + '%' }"></div>
                    <div class="indicator-fill-1" :style="{ width: dataSize + '%' }"></div>
                    <div class="indicator-fill" :style="{ width: freeSize + '%' }"></div>
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
    mounted() {
        window.api.receive('GET_QUEST_PROPS__REPLY', (propsObj) => {
            this.$store.dispatch('updateDeviceProps', propsObj);
        });
        window.api.receive('GET_QUEST_STORAGE_DATA__REPLY', (dataStorageObj) => {
            this.$store.dispatch('updateStorageDataSize', dataStorageObj);
        });
    },
    methods: {
        writeToClipboard(text) {
            if (!(text === '1WMH0000000000')) {
                window.api.send('writeToClipboard', text);
            }
        },
        updateQuestCustomName(event) {
            this.$store.commit('updateQuestCustomName', event.target.value);
        },
        finishEdit(event) {
            event.preventDefault();
            event.target.blur();
        }

    },
    computed: {
        questCustomName() {
            return this.$store.state.questCustomName;
        },
        questSerial() {
            return this.$store.state.questSerial;
        },
        questFirmwareVersion() {
            return this.$store.state.questFirmwareVersion;
        },
        questModel() {
            return this.$store.state.questModel;
        },
        questStatus() {
            return this.$store.state.status;
        },
        questStorageSizeData() {
            return this.$store.state.questStorageSizeData;
        },
        systemSize() {
            const sys = this.$store.state.questStorageSizeData.system;
            const decimal = (sys / (sys + this.$store.state.questStorageSizeData.dataMax)).toFixed(2);
            return decimal * 100;
        },
        dataSize() {
            const sys = this.$store.state.questStorageSizeData.system;
            const data = this.$store.state.questStorageSizeData.dataCurrent;
            const decimal = (data / (sys + this.$store.state.questStorageSizeData.dataMax)).toFixed(2);
            return decimal * 100;
        },
        freeSize() {
            const sys = this.$store.state.questStorageSizeData.system;
            const dataLeft = this.$store.state.questStorageSizeData.dataMax - this.$store.state.questStorageSizeData.dataCurrent;
            const decimal = (dataLeft / (sys + this.$store.state.questStorageSizeData.dataMax)).toFixed(2);
            return decimal * 100;
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
    transition: all .25s;
}
#dashboard .content .banner button:hover {
    /* transform: scale(0.95); */
    background-color: #0e64ef;
    color: #fff;
}
#dashboard .content .banner .mini-info {
    display: flex;
    flex-flow: column;
    margin-left: 20px;
    justify-content: center;
    align-items: flex-start;
}
#dashboard .content .banner .mini-info form {
    width: 100%;
    line-height: 1.2;
}
#dashboard .content .banner .mini-info form input {
    background-color: rgba(0,0,0,0);
    border: 0;
    outline: none;
    color: #949494;
    padding: 0;
    width: 150px;
}
#dashboard .content .banner .mini-info form input:focus {
    outline: none;
    border:0;
    color: #949494;
    border-bottom: solid 1px #1c1c1c;
    width: 300px;
}
#dashboard .content .banner .mini-info h2 {
    font-size: 16px;
}
#dashboard .content .banner .mini-info .old {
    color: #ef1c26;
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
    border-radius: 3px;
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


#dashboard .content .details .info .old {
    color: #ef1c26;
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
#dashboard .content .details p.model {
    text-transform: capitalize;
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
}
#dashboard .indicator-fill-1 {
    display: inline-block;
    background-color: #0d449c;
    height: inherit;
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
