<template>
  <el-dialog title="ElementUI Dialog" :visible.sync="visible">
    {{ name }}
    <div>
      <el-button type="primary" @click="$closeDialog(true)">确定</el-button>
      <el-button @click="$closeDialog(false)">取消</el-button>
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
