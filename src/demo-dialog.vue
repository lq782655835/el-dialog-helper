<template>
  <el-dialog title="demo" :visible.sync="visible">
    {{ name }}
    <div>
      <el-button type="primary" @click="$closeDialog(true)" size="small">确定</el-button>
      <el-button @click="$closeDialog(false)" size="small">取消</el-button>
    </div>
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
  }
};
</script>
