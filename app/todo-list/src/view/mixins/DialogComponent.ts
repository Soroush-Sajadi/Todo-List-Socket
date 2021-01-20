import { Vue, Component, Ref } from "vue-property-decorator";

type Dialog = {
  show: Function;
  hide: Function;
};

@Component
export default class DialogComponent extends Vue {
  @Ref() readonly dialog!: Dialog;
  show() {
    this.dialog.show();
  }

  hide() {
    this.dialog.hide();
  }

  cancel() {
    this.$emit("hide");
  }
  done(val?) {
    this.$emit("ok", val);
    this.hide();
  }
}
