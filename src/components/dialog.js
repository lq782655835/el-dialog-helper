export default (Vue, component) => {
  const componentConstructor = Vue.extend(component);
  return (propsData = {}) => {
    let instance = new componentConstructor({ propsData }).$mount();
    let $el = instance.$el;

    // 手动移除DOM
    const destroyDialog = () => {
      instance.$destroy();
    };
    instance.$once("hook:destroyed", () => {
      $el.parentNode && $el.parentNode.removeChild($el);
    });

    // 手动增加DOM
    document.body.appendChild($el);
    // 设置visible prop，根据该字段可设置动画
    if (instance["visible"] !== undefined) {
      // 支持sync单独修改visible值
      instance.$watch("visible", val => {
        if (!val) {
          destroyDialog();
        }
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
