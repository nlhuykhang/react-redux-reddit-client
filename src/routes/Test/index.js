export default (store) => ({
  path: 'test',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Test = require('./containers/TestContainer').default

      cb(null, Test)
    }, 'test')
  }
})
