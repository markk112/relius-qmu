<template>
    <div id="settings" class="view">
        <div class="view-banner">
            <h1>Settings</h1>
        </div>
        <div class="content">
            <Sidebar :currentView='currentView' @changeToView='currentView = $event' />
            <div class="subcontent">
                <div class="dependencies">
                    <div class="title">
                        <h1>Dependencies</h1>
                        <p>Manage installation of Oculus Quest dependencies.</p>
                    </div>
                    <div class="items">
                        <div class="dep">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33.906" height="20.486" viewBox="0 0 33.906 20.486">
                                <path
                                    id="Path_47"
                                    data-name="Path 47"
                                    d="M30.155,2.305A10.235,10.235,0,0,0,26.1.326,12.59,12.59,0,0,0,23.52,0c-.641-.028-1.294-.017-1.938-.017H12.4c-.642,0-1.3,0-1.939.014a12.717,12.717,0,0,0-2.58.331A10.168,10.168,0,0,0,7.89,20.121a12.6,12.6,0,0,0,2.58.327c.641.028,1.3.014,1.939.014H21.6c.641,0,1.3,0,1.939-.014a12.709,12.709,0,0,0,2.579-.327A10.164,10.164,0,0,0,30.155,2.305ZM25.664,12.981a3.507,3.507,0,0,1-1.487.587,10.594,10.594,0,0,1-1.611.068H11.44a10.52,10.52,0,0,1-1.611-.068,3.444,3.444,0,0,1-1.492-.587,3.351,3.351,0,0,1,0-5.515,3.511,3.511,0,0,1,1.488-.587,10.593,10.593,0,0,1,1.611-.068h11.13a10.52,10.52,0,0,1,1.611.068,3.44,3.44,0,0,1,1.487.587,3.361,3.361,0,0,1,1.447,2.758A3.289,3.289,0,0,1,25.664,12.981Z"
                                    transform="translate(-0.045 0.02)"
                                    fill="#949494"
                                />
                            </svg>
                            <h2>Oculus Android Debug Bridge Drivers</h2>
                            <p>This download contains the drivers required to use ADB with Android-based Oculus devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Settings/Sidebar.vue";

export default {
    name: 'Settings',
    components: {
        Sidebar,
    },
    data() {
        return {
            currentView: 0,
        }
    }
};
</script>

<style>
#settings {
    display: flex;
    flex-flow: column;
}
#settings .content {
    display: flex;
    flex: 1;
}
#settings .subcontent {
    flex: 1;
    padding: 17px 30px;
}
#settings .subcontent .title h1 {
    font-size: 16px;
}
#settings .subcontent .title p {
    font-size: 16px;
}
#settings .subcontent .items .dep {
    border: 1px solid #1c1c1c;
    border-radius: 5px;
    padding: 20px;
}
</style>
