<template>
  <span>
    <slot v-bind:data="data"></slot>
  </span>
</template>

<script>
  import events from '../events';

  export default {
    name: 'ui-listener',
    props: {
      event: String
    },
    mounted() {
      const { event } = this.$props;
      events.$on(event, (data) => this.data = data);
    },
    data() {
      return {
        data: {}
      }
    }
  }
</script>
