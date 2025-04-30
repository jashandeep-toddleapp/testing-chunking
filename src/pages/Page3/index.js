export default () => ({
  path: "page3",
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "page3" */ "./Page3Component")
      .then((module) => cb(null, module.default))
      .catch((err) => cb(err));
  },
});
