<template>
  <div>
    <h5>{{ blog[0].title }}</h5>
    <p>{{ blog[0].date }}</p>
  </div>
  <div>
    <h5>{{ blog[1].title }}</h5>
    <p>{{ blog[1].date }}</p>
  </div>
</template>

<script>
export default {
    name: 'BlogList',
    props: {
      blog: Array,
    }
}
</script>

<style>

</style>