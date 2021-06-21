<template>
    <div id="battery-indicator">
        <div class="columns">
            <div class="column">
                <svg xmlns="http://www.w3.org/2000/svg" width="28.326" height="28.3" viewBox="0 0 28.326 28.3">
                    <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M10.081,23.594V19.263L9.192,16.6c-.074-.1-.144-.2-.21-.307-5.928.641-6.82-3.25-6.82-3.25.732-.622,3.978-3.355,7.119-3.711a19.639,19.639,0,0,1,10.588.1l.01.021c2.9.643,5.715,3.014,6.391,3.588,0,0-.833,3.63-6.231,3.3l-.623,2.915v4.332s-.447,4.705-4.78,4.705S10.081,23.594,10.081,23.594ZM14.551,7.7c-9.2,0-13.1,4.539-13.156,4.6C-3.144,6.153,4.382,1.384,9.841.35s12.064.23,16.374,3.677S26.9,12.3,26.9,12.3,23.748,7.7,14.551,7.7Z"
                        transform="translate(0 0)"
                        fill="#949494"
                    />
                </svg>
                <div class="left progress">
                    <div class="bar"></div>
                </div>
            </div>
            <div class="column">
                <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="21.817" viewBox="0 0 40.5 21.817">
                    <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M0,10.845V4.762A4.671,4.671,0,0,1,4.78,0h30.9A4.665,4.665,0,0,1,40.5,4.823V17.088a4.672,4.672,0,0,1-4.722,4.722H28.281a4.655,4.655,0,0,1-4.1-2.188c-.388-.58-.772-1.161-1.16-1.74a1.58,1.58,0,0,0-1.394-.742c-2.138,0-2.044-.142-3.253,1.719-.22.341-.438.685-.68,1.008A4.521,4.521,0,0,1,13.955,21.8q-4.623.03-9.246,0A4.662,4.662,0,0,1,0,17.075Z"
                        transform="translate(0.003)"
                        fill="#949494"
                    />
                </svg>
                <div class="unit progress centre">
                    <div class="bar"></div>
                </div>
            </div>
            <div class="column">
                <svg xmlns="http://www.w3.org/2000/svg" width="28.326" height="28.3" viewBox="0 0 28.326 28.3">
                    <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M10.081,23.594V19.263L9.192,16.6c-.074-.1-.144-.2-.21-.307-5.928.641-6.82-3.25-6.82-3.25.732-.622,3.978-3.355,7.119-3.711a19.639,19.639,0,0,1,10.588.1l.01.021c2.9.643,5.715,3.014,6.391,3.588,0,0-.833,3.63-6.231,3.3l-.623,2.915v4.332s-.447,4.705-4.78,4.705S10.081,23.594,10.081,23.594ZM14.551,7.7c-9.2,0-13.1,4.539-13.156,4.6C-3.144,6.153,4.382,1.384,9.841.35s12.064.23,16.374,3.677S26.9,12.3,26.9,12.3,23.748,7.7,14.551,7.7Z"
                        transform="translate(0 0)"
                        fill="#949494"
                    />
                </svg>
                <div class="right progress">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Battery Indicator',
};
</script>

<style scoped>
#battery-indicator {
    padding: 30px 0;
    border-bottom: 1px solid #1c1c1c;
}
progress {
    width: 40px;
}
.columns {
    display: flex;
    justify-content: center;
    align-items: center;
}
.column {
    padding: 0 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.progress.centre {
    margin-top: 25px;
}
.progress {
    margin-top: 20px;
    width: 75%;
    height: 5px;
    background-color: #e03636;
}
.bar {
    height: inherit;
    width: 60%;
    background-color: #21bf73;
}

</style>
