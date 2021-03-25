<template>
  <div id="device" class="view">
    <div class="banner">
      <img src="../assets/images/views/device/white-headset-icon.svg" alt="White Headset Icon">
      <div class="device-info">
        <h1>Quest 2</h1>
        <p>1PASH9AA2N0194</p>
      </div>
      <div class="controls">
        <button>Restart</button>
        <button class="right">Shutdown</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Device',
}
</script>

<style>
#device .banner {
  display: flex;
  padding: 0 50px;
  height: 145px;
  background-color: #007cfd;
}
#device img {
  width: 115px;
}
#device .device-info {
  display: flex;
  color: #fff;
  margin-left: 20px;
  justify-content: center;
  flex-direction: column;
}
#device .device-info h1 {
  font-size: 18px;
}
#device .device-info p {
  font-size: 14px;
  text-decoration: underline;
}
#device .controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
}
#device .controls button {
  font-size: 14px;
  padding: 10px 40px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #1c1d1f;
}
#device .controls button:hover {
  cursor: pointer;
}
#device .controls .right {
  margin-left: 30px;
}
</style>
