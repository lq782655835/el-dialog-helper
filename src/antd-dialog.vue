<template>
  <a-modal
    title="Antd Dialog"
    v-model="visible"
    :keyboard="false"
    :maskClosable="false"
    okText="确认"
    cancelText="取消"
    @ok="$closeDialog(true)">
    {{ name }}
  </a-modal>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      visible: false
    };
  }
};
</script>
