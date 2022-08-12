export default (Vue, component) => {
  const ComponentConstructor = Vue.extend(component);
  return (propsData = {}, parent = undefined) => {
    let instance = new ComponentConstructor({
      propsData,
      parent,
    }).$mount();
    document.body.appendChild(instance.$el);

    const destroyDialog = () => {
      if (instance) {
        instance.$destroy();
        document.body.removeChild(instance.$el);
        instance = null;
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
