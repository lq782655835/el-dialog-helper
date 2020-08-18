<template>
  <div id="app">
    <el-button type="primary" @click="open" size="small">编程式打开ElementUI Dialog</el-button>

    <el-button type="primary" @click="openAntdv" size="small">编程式打开Antdv Dialog</el-button>
  </div>
</template>

<script>
import ElementUIDialog from './elementui-dialog';
import AntdDialog from './antd-dialog'
export default {
  name: 'app',
  methods: {
    open() {
      this.$openDialog(ElementUIDialog)({ name: '123' })
        .then(() => this.$message.success('任务成功'))
        .catch(() => this.$message.warning('任务失败'));
    },
    openAntdv() {
      this.$openDialog(AntdDialog)({ name: '123' })
        .then(() => this.$message.success('任务成功'))
        .catch(() => this.$message.warning('任务失败'));
    }
  }
};
</script>
