<template>
  <span>
    <slot v-bind:event="event"></slot>
  </span>
</template>

<script>
  import events from '../events';

  export default {
    name: 'ui-listener',
    props: {
      name: String
    },
    mounted() {
      const { name } = this.$props;
      events.$on(name, (event) => this.event = event);
    },
    data() {
      return {
        event: {}
      }
    }
  }
</script>
