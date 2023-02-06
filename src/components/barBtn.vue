<template>
  <div id="toggle">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>

</template>

<script>
export default {

}
</script>

<script setup>

</script>

<style>

#toggle {
  width: 28px;
  height: 30px;
}

#toggle div {
  width: 100%;
  height: 5px;
  background: black;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
}

#toggle.on .one {
  transform: rotate(45deg) translate(5px, 5px);
}

#toggle.on .two {
  opacity: 0;
}

#toggle.on .three {
  transform: rotate(-45deg) translate(7px, -8px);
}



</style>