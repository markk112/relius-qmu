<template>
    <div id="nav">
        <ul>
            <li>
                <a :class="{ 'is-active': (currentView === 'dashboard') }" @click="handleView($event)">Dashboard</a>
            </li>
            <li>
                <a :class="{ 'is-active': (currentView === 'sideload') }" @click="handleView($event)">Sideload</a>
            </li>
            <li>
                <a :class="{ 'is-active': (currentView === 'settings') }" @click="handleView($event)">Settings</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
      currentView: String,
    },
    methods: {
      handleView (e) {
        if (!e.srcElement.classList.contains('is-active')) {
          this.$emit('changeCurrentView', e.srcElement.innerHTML.toLowerCase());
        }
      }
    }
}
</script>

<style scoped>
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
  cursor: pointer;
}

#nav ul li a.is-active {
  background-color: #007cfd;
}

</style>