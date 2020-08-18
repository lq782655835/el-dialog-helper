/**
 * 调用方式
 * const instance = this.$openDialog(DialogComponent)({ xxx: 123 })
 * instance.destory() // 手动关闭
 */
export default (Vue, component) => {
  const div = document.createElement('div');
    const el = document.createElement('div');
    div.appendChild(el);
    document.body.appendChild(div);

    let dialogInstance = null
    // ref: https://github.com/vueComponent/ant-design-vue/blob/master/components/modal/confirm.js
    return (propsData = {}, parent = undefined) => {
      function destroy(...args) {
        if (dialogInstance && div.parentNode) {
          dialogInstance.$destroy();
          dialogInstance = null;
          div.parentNode.removeChild(div);
        }
      }

      // dialogInstance为包装后的Vue实例
      // 使用包装后的dialogInstance实例，无法使用Promise API
      dialogInstance = new Vue({
        el,
        parent,
        data() { return propsData },
        render(h) {
          return h(comp, {
            props: { ...this.propsData, visible: true }
          })
        }
      })
      dialogInstance.destory = destroy

      return dialogInstance
    };
};
