<template>
  <div class="validation">
      <img src="@/assets/images/components/drag-drop-installer/clipboard-check-solid.svg">
      <h1>VALIDATING FILES...</h1>
      <progress value="30" max="100"></progress>
      <p>Please do not unplug or power off the headset</p>
  </div>
</template>

<script>
export default {
    name: 'Validation',
}
</script>
    
<style>
#install .validation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#install .validation h1 {
  font-size: 16px;
  font-weight: normal;
  margin: 20px 0px;
}
#install .validation progress {
  width: 400px;
  height: 10px;
  background: #007cfd;
  border: 1px solid #007cfd;
  border-radius: 5px;
  margin-bottom: 20px;
}
#install .validation progress::-webkit-progress-value {
  background: #007cfd;
}
#install .validation p {
  font-size: 16px;
  color: #4d4d4d;
}

</style>