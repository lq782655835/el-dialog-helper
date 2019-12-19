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

use `Vue.prototype.$openDialog` in your page

``` js
<template>
  <el-button type="primary" @click="open" size="small">编程式打开dialog</el-button>
</template>

<script>
import DemoDialog from "./demo-dialog";
export default {
  methods: {
    open() {
      this.$openDialog(DemoDialog)({ name: "123" })
        .then(() => this.$message.success('任务成功'))
        .catch(() => this.$message.warning('任务失败'));
    }
  }
};
</script>
```

## License

MIT
