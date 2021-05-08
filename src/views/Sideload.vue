<template>
    <div id="sideload" class="view">
        <div class="view-banner">
            <h1>Sideload</h1>
        </div>
        <div class="content padding">
            <div class="inner">
                <div class="top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45.091" height="60.121" viewBox="0 0 45.091 60.121">
                        <path
                            id="file-upload-solid"
                            d="M26.3,15.97V0H2.818A2.811,2.811,0,0,0,0,2.818V57.3a2.811,2.811,0,0,0,2.818,2.818H42.273A2.811,2.811,0,0,0,45.091,57.3V18.788H29.121A2.826,2.826,0,0,1,26.3,15.97Zm7.654,25.365H26.3v9.394a1.878,1.878,0,0,1-1.879,1.879H20.667a1.878,1.878,0,0,1-1.879-1.879V41.335H11.134a1.879,1.879,0,0,1-1.323-3.213L21.133,26.884a2,2,0,0,1,2.823,0L35.278,38.122A1.878,1.878,0,0,1,33.957,41.335ZM44.269,12.33,32.773.822a2.816,2.816,0,0,0-2-.822h-.716V15.03h15.03v-.716A2.809,2.809,0,0,0,44.269,12.33Z"
                            fill="#949494"
                        />
                    </svg>
                    <h2>DRAG & DROP</h2>
                    <p>or select files from your computer</p>
                </div>
                <div class="bottom">
                    <h2>The following files are accepted:</h2>
                    <div class="files">
                        <div class="file">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54.01" height="40.508" viewBox="0 0 54.01 40.508">
                                <path id="folder-solid" d="M48.947,70.751H28.693L21.942,64H5.063A5.063,5.063,0,0,0,0,69.063V99.444a5.063,5.063,0,0,0,5.063,5.063H48.947a5.063,5.063,0,0,0,5.063-5.063V75.815A5.063,5.063,0,0,0,48.947,70.751Z" transform="translate(0 -64)" fill="#f79b00" />
                            </svg>
                            <p>/obb</p>
                        </div>
                        <div class="file">
                            <svg xmlns="http://www.w3.org/2000/svg" width="63.123" height="35.631" viewBox="0 0 63.123 35.631">
                                <path
                                    id="Path_49"
                                    data-name="Path 49"
                                    d="M-3950.986-896.149a31.329,31.329,0,0,1,2.473-9.329,30.66,30.66,0,0,1,9.069-11.785,27.693,27.693,0,0,1,3.79-2.565c.509-.278.664-.564.317-1.15-1.557-2.622-3.058-5.275-4.587-7.918-.076-.133-.151-.268-.218-.4a1.059,1.059,0,0,1,.4-1.569,1.084,1.084,0,0,1,1.489.5c.9,1.532,1.793,3.072,2.683,4.614.763,1.321,1.535,2.637,2.262,3.976.255.467.561.451.949.279a30.527,30.527,0,0,1,7.755-2.225,32.967,32.967,0,0,1,11.764.257,28.068,28.068,0,0,1,6.246,1.958.691.691,0,0,0,1.052-.352c1.556-2.74,3.136-5.468,4.705-8.2a3.953,3.953,0,0,1,.24-.393,1.066,1.066,0,0,1,1.523-.361,1.006,1.006,0,0,1,.329,1.466c-.681,1.251-1.4,2.485-2.108,3.718-.908,1.585-1.814,3.173-2.753,4.741-.307.515-.138.769.321,1.023a31.08,31.08,0,0,1,5.411,3.942,29.715,29.715,0,0,1,5.909,7.331,31.751,31.751,0,0,1,4.035,12.154c.128,1.021.092,1.061-.88,1.061h-30.653q-15.4-.013-30.8.009C-3950.865-895.369-3951.058-895.5-3950.986-896.149Z"
                                    transform="translate(3951 931)"
                                    fill="#3bd480"
                                />
                            </svg>
                            <p>.apk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sideload',
};
</script>

<style>
#sideload {
    display: flex;
    flex-flow: column;
}
#sideload .content {
    flex: 1;
}
#sideload .content>div {
    height: 100%;
    display: flex;
    flex-flow: column;
}
#sideload .content .top {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
}
#sideload .content .top h2 {
    font-weight: normal;
    font-size: 20px;
    margin-top: 20px;
}
#sideload .content .bottom {
    display: flex;
    flex: 1;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed #1c1c1c;
    background-color: #060606;
    border-radius: 10px;
}
#sideload .content .bottom h2 {
    font-size: 16px;
    margin-bottom: 40px;
}
#sideload .content .bottom .files {
    display: flex;
}
#sideload .content .bottom .file {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
}
#sideload .content .bottom .file svg {
    margin-bottom: 10px;
}
#sideload .content .bottom .file p {
    font-size: 14px;
}

</style>
