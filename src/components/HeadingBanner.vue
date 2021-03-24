<template>
  <div id="heading-banner">
    <div>
      <img :src="icon" alt="Install Icon White" />
      <h1>{{ title }}</h1>
    </div>
    <p>{{ subhead }}</p>
  </div>
</template>

<script>
export default {
  name: "HeadingBanner",
  props: {
    title: String,
    icon: String,
    subhead: String,
  },
};
</script>

<style>
#heading-banner p {
  font-size: 16px;
}
#heading-banner {
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background-color: #007cfd;
}
#heading-banner div img,
#heading-banner div h1 {
  display: inline;
}
#heading-banner div h1 {
  font-size: 32px;
  margin-left: 20px;
}
</style>
