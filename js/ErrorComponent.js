Vue.component("error-item", {
  props: ["error"],

  template: `
    <div v-if="error !== ''" class="error-item">
      <p>{{ error }}</p>
    </div>
  `,
});
