<template>
  <div>
    <AppHeader />
    <b-container>
      <b-row class="justify-content-center">
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>
<style>
a{
  text-decoration: none !important;
  color: #ffffff !important;
}
.error-message{
  color: crimson;
}
</style>
