# el-dialog-helper ![](https://img.shields.io/badge/license-MIT-F44336.svg)

## Install

``` bash
yarn add @springleo/el-dialog-helper
```

## Online Example

https://lq782655835.github.io/el-dialog-helper

## Quick Start

Import modules and set up settings in main.js:

``` js
import ElDialogHelper from '@springleo/el-dialog-helper'
Vue.use(ElDialogHelper)
```

use `Vue.prototype.$openDialog` in your App.vue

``` js
<template>
  <el-button type="primary" @click="open" size="small">编程式打开dialog</el-button>
</template>

<script>
import ElementUIDialog from "./elementui-dialog";
export default {
  methods: {
    open() {
      this.$openDialog(ElementUIDialog)({ name: "123" })
        .then(() => this.$message.success('任务成功'))
        .catch(() => this.$message.warning('任务失败'));
    }
  }
};
</script>
```

use `Vue.prototype.$closeDialog` in your elementui-dialog.vue:

``` js
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
  props: { name: String },
  data() {
    return { visible: false };
  }
};
</script>
```

## API

### 1. Vue.prototype.$openDialog()

使用方式：`this.$openDialog(DialogComponent)(props = {}, parentContext = undefined)`

* DialogComponent： 自定义的弹窗.vue组件

* props：弹窗组件需要传入的初始化props

* parentContext：弹窗的父级上下文，一般用于获取父级 provider， 如获取 ConfigProvider 的配置、$store、$router

返回等待用户弹窗关闭的Promise，当Dialog弹窗组件`$emit('done')`时，resolve promise；当`$emit('cancel')`时，reject promise。

### 2. Vue.prototype.$closeDialog()

使用方式： this.$closeDialog(isSuccess = false, ...args)

全局注入的快捷方法，`是$emit('done')和$emit('cancel')的快捷键`。当isSuccess = true，执行$emit('done');当isSuccess = false时，执行$emit('cancel')。

## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [@springleo/el-dialog-helper](https://github.com/lq782655835/el-dialog-helper) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | Promisify dialogs in Vue! |
| [@springleo/el-table-plus](https://github.com/lq782655835/el-table-plus) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | 基于el-table的配置化组件|
| [@springleo/el-form-plus](https://github.com/lq782655835/el-form-plus) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | schema form base on element-ui form |

## License

MIT
