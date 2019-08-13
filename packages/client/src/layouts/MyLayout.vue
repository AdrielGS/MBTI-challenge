<template lang="pug">

  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-toolbar-title
          router-link.home(to='/') MBTI Test

    q-page-container
      router-view
</template>

<script>

export default {
  name: 'MyLayout'
}
</script>

<style lang='stylus'>
  .home
    text-decoration none
    color white
</style>
