<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
.text-center {
  text-align: center;
}
.spacing {
  margin-top: 30px;
}
.red {
  color: darkred;
}
ul li {
  display: inline-block;
  margin-right: 10px;
}
ul li a {
  display: inherit;
  padding: 5px 10px;
  border: 1px solid #ccc;
}
ul li a:hover {
  cursor: pointer;
  color: #fff;
  background-color: #138bec;
  border: 1px solid #138bec;
}
</style>
