<template>
  <div id="app">
    <el-button type="primary" @click="open" size="small">编程式打开dialog</el-button>
  </div>
</template>

<script>
import DemoDialog from "./demo-dialog";
export default {
  name: "app",
  methods: {
    open() {
      this.$openDialog(DemoDialog)({ name: "123" })
        .then(() => this.$message.success('任务成功'))
        .catch(() => this.$message.warning('任务失败'));
    }
  }
};
</script>
