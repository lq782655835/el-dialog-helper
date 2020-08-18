export default (Vue, component) => {
  const div = document.createElement('div');
  const el = document.createElement('div');
  div.appendChild(el);
  document.body.appendChild(div);

  const ComponentConstructor = Vue.extend(component);
  return (propsData = {}, parent = undefined) => {
    let instance = new ComponentConstructor({
      propsData,
      parent,
    }).$mount(el);

    const destroyDialog = () => {
      if (instance && div.parentNode) {
        instance.$destroy();
        instance = null
        div.parentNode && div.parentNode.removeChild(div);
      }
    };

    // visible控制
    if (instance["visible"] !== undefined) {
      // 支持sync/v-model
      instance.$watch("visible", val => {
        !val && destroyDialog()
      });
      Vue.nextTick(() => (instance["visible"] = true));
    }

    return new Promise((resolve, reject) => {
      instance.$once("done", data => {
        destroyDialog();
        resolve(data);
      });
      instance.$once("cancel", data => {
        destroyDialog();
        reject(data);
      });
    });
  };
};
