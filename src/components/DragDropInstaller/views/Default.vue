<template>
    <div class="default">
        <img src="@/assets/images/views/install/file-upload-solid.svg" alt="File Upload Icon">
        <h2>DRAG & DROP</h2>
        <p>Or click to select files from your computer</p>
        <h3>The following files are accepted:</h3>
        <div>
            <img class="left" src="@/assets/images/views/install/obb-folder-icon.svg" alt="Obb Folder Icon">
            <img src="@/assets/images/views/install/green-checkmark.svg" alt="Green Check Mark">
        </div>
        <div>
            <img class="left" src="@/assets/images/views/install/apk-file-icon.svg" alt="Apk File Icon">
            <img src="@/assets/images/views/install/green-checkmark.svg" alt="Green Check Mark">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Default',
}
</script>

<style>
#install .default {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#install .default h2 {
    font-size: 28px;
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 10px;
}
#install .default p, #install .default h3 {
    font-size: 16px;
}
#install .default h3 {
    color: #4D4D4D;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
}
#install .default div {
    margin: 10px 0;
}
#install .default div img {
    display: inline;
}
#install .default div .left {
    width: 55px;
}
#install .default div img[alt="Green Check Mark"] {
    margin-left: 50px;
}
</style>