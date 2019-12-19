<template>
  <el-dialog title="demo" :visible.sync="visible">
    {{ name }}
    <div>
      <el-button type="primary" @click="close(true)" size="small">确定</el-button>
      <el-button @click="close(false)" size="small">取消</el-button>
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
  },
  methods: {
    close(isDone = false, data = {}) {
      this.$emit(isDone ? "done" : "cancel", data);
    }
  }
};
</script>
