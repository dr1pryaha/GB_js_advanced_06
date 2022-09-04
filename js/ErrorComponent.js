Vue.component("error-item", {
  props: ["products"],
  template: `
<div class="error-item">
  <p v-if="!products.length">Что-то пошло не так!!!</p>
</div>
`,
});
