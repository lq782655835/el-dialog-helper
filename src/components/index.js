import OpenDialog from "./dialog";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$openDialog = comp => OpenDialog(Vue, comp);

  Vue.mixin({
    methods: {
      $closeDialog(isDone = false, ...args) {
        this.$emit(isDone ? 'done' : 'cancel', ...args)
      }
    }
  });
}

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use({
    install
  });
}

// export default
export default {
  install
};
