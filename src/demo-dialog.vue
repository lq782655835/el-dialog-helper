<template>
  <el-dialog title="demo" :visible.sync="visible" :close="close">
    {{ name }}
  </el-dialog>
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
  },
  methods: {
    close(isDone = false, data = {}) {
      this.$emit(isDone ? "done" : "cancel", data);
    }
  }
};
</script>
