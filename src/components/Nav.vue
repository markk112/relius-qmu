<template>
    <div id="nav">
        <ul>
            <li class="heading">Home</li>
            <li>
                <router-link to="/">Welcome</router-link>
            </li>
            <li>
                <router-link to="/about">Device</router-link>
            </li>
            <li class="heading">Sideload</li>
            <li>
                <router-link to="/here">Install</router-link>
            </li>
            <li class="heading">Settings</li>
            <li>
                <router-link to="/bring">Setup</router-link>
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
  background-color: #000000;
  color: #fff;
  width: 340px;
  font-size: 14px;
}

#nav ul li.heading {
  font-weight: 600;
  padding-left: 20px;
}

#nav ul li a {
  display: block;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 35px;
  font-size: inherit;
}

#nav ul li a.router-link-active {
  background-color: #007cfd;
}

</style>