export default () => ({
  path: "page2",
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "page2" */ "./Page2Component")
      .then((module) => cb(null, module.default))
      .catch((err) => cb(err));
  },
});
