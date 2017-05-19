/**
 * Created by jerry on 2017/5/19.
 */
import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    path: 'item',
    component: function (r) {
      return require.ensure([], function () {
        return r(require('../page/item'))
      }, 'item')
    }
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(require('../page/score')), 'score')
  }]
}]
