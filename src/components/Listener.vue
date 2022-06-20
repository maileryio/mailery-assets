<template>
  <span>
    <slot v-bind:data="data"></slot>
  </span>
</template>

<script>
  export default {
    name: 'ui-listener',
    props: {
      event: String
    },
    mounted() {
      const { event } = this.$props;
      this.$root.$on(event, (data) => this.data = data);
    },
    data() {
      return {
        data: {}
      }
    }
  }
</script>
