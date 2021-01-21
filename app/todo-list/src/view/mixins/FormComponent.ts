import { Vue, Component, Ref } from "vue-property-decorator";

type Form = {
  validate: Function;
  hide: Function;
};

@Component
export default class FormComponent extends Vue {
  @Ref() readonly form!: Form;

  errorMessage: string = null;
  loading = false;

  validate() {
    return this.form.validate();
  }

  async submitForm(save: Function): Promise<any> {
    this.errorMessage = null;
    const valid = await this.validate();
    if (!valid) {
      return false;
    }
    this.loading = true;

    try {
      const result = await save();
      return result || true;
    } catch (error) {
      console.error(error);
      this.errorMessage = error;
      return false;
    } finally {
      this.loading = false;
    }
  }
}
