<template>
  <div id="welcome">
    <img src="../assets/images/views/welcome/headset-icon-black.svg" alt="Headset Icon Black">
    <img src="../assets/images/views/welcome/relius-logo-subheading.svg" alt="Relius QMU Logo With Subheading">
    <div>
      <a href="#">support</a>
      <a href="#">guide</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style>
#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1c1d1f;
}
#welcome img[alt="Headset Icon Black"] {
  width: 162px;
} 
#welcome img[alt="Relius QMU Logo With Subheading"] {
  margin-top: 50px;
  width: 373px;
}
#welcome div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}
#welcome div a {
  color: #007cfd;
  font-size: 14px;
}
#welcome div a:hover {
  font-weight: bold;
}
</style>
