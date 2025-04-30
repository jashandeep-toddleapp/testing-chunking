export default () => ({
  getComponent(nextState, cb) {
    Promise.all([
      import(/* webpackChunkName: "page1" */ "./Page1Component"),
      import(/* webpackChunkName: "page1" */ "./page1Module"),
    ])
      .then(([page1ComponentModule, page1ModuleData]) => {
        // Extract the default export (the component)
        const Page1Component = page1ComponentModule.default;

        // You could potentially use page1ModuleData here if needed,
        // but Page1Component already imports it.
        // For example: console.log(page1ModuleData.dummyVariable);

        cb(null, Page1Component); // Pass the component to the callback
      })
      .catch((err) => cb(err));
  },
});
