<template>
    <div id="nav">
        <ul>
            <li class="heading">Home</li>
            <li>
                <router-link to="/">Welcome</router-link>
            </li>
            <li>
                <router-link to="/device">Device</router-link>
            </li>
            <li class="heading">Sideload</li>
            <li>
                <router-link to="/install">Install</router-link>
            </li>
            <li class="heading">Settings</li>
            <li>
                <router-link to="/setup">Setup</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style>
#nav {
  color: #fff;
  width: 340px;
  font-size: 14px;
}

#nav ul li.heading {
  font-weight: 600;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 20px;
}

#nav ul li a {
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 35px;
  font-size: inherit;
}

#nav ul li a.router-link-active {
  background-color: #007cfd;
}

</style>