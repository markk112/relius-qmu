<template>
    <div id="connection-indicator">
        <svg :class="{ removed: !getStatus, attached: getStatus }" xmlns="http://www.w3.org/2000/svg" width="108" height="58.178" viewBox="0 0 108 58.178">
            <path
                id="Path_1"
                data-name="Path 1"
                d="M0,28.921V12.7A12.456,12.456,0,0,1,12.752,0h82.4A12.441,12.441,0,0,1,108,12.862V45.567A12.458,12.458,0,0,1,95.405,58.159H75.42a12.413,12.413,0,0,1-10.928-5.835c-1.034-1.546-2.059-3.1-3.093-4.639a4.214,4.214,0,0,0-3.718-1.98c-5.7,0-5.452-.379-8.673,4.585-.588.909-1.167,1.826-1.813,2.688a12.056,12.056,0,0,1-9.978,5.164q-12.329.081-24.657,0A12.433,12.433,0,0,1,0,45.534Z"
                transform="translate(0.003)"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Connection Indicator',
    computed: {
        getStatus() {
            return this.$store.state.status;
        },
    },
};
</script>

<style scoped>
#connection-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
    border-bottom: 1px solid #1c1c1c;
}
#connection-indicator svg.removed {
    filter: drop-shadow(0px 0px 4px #ef1c26);
}
#connection-indicator svg.removed path {
    fill: #ef1c26;
}
#connection-indicator svg.attached {
    filter: drop-shadow(0px 0px 4px #21bf73);
}
#connection-indicator svg.attached path {
    fill: #21bf73;
}

</style>
