// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import Login from './Login'
import LoginRedirect from './LoginRedirect'
import Test from './Test'
import { exeActionIfNotLoggedIn } from '../helpers'

const requireAuth = (store) => (nextState, replace, callback) => {
  const state = store.getState()

  exeActionIfNotLoggedIn(state)(() => replace('/login'))

  return callback()
}

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  childRoutes : [
    {
      component: CoreLayout,
      onEnter: requireAuth(store),
      childRoutes: [
        Test(store),
      ]
    },
    {
      component: CoreLayout,
      indexRoute: Home,
      childRoutes: [
        CounterRoute(store),
        Login(store),
        LoginRedirect(store),
      ]
    }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
