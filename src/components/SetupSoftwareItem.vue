<template>
  <div class="setup-software-item">
      <img :src="icon" alt="">
      <div class="details">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
      </div>
      <div class="status">
          <button>Install</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SetupSoftwareItem',
    props: {
        icon: String,
        title: String,
        description: String,
    }
}
</script>

<style>
#setup .setup-software-item {
    display: flex;
    color: #fff;
    height: 115px;
    width:  100%;
    background-color: #000;
    border-radius: 5px;
    margin-bottom: 20px;
}
#setup .setup-software-item img {
    width: 68px;
    margin: 0px 40px;
}
#setup .setup-software-item .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#setup .setup-software-item .details h1 {
    font-size: 16px;
}
#setup .setup-software-item .details p {
    font-size: 14px;
    color: #2f2f2f;
    width: 70%;
}
#setup .setup-software-item .status {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    padding-right: 40px;
}
#setup .setup-software-item .status button {
    background-color: #007cfd;
    border: 0;
    color: #fff;
    padding: 10px 50px;
    border-radius: 5px;
}
</style>