# wheel-happyfri

> 这是一个基于Vue2 & Vuex 的在线在线答题“造轮子”项目

## 项目说明

项目根据[vue2-happyfri](https://github.com/bailicangdu/vue2-happyfri)造轮子而来，代码纯手打，为了再次熟悉vue。在有了[wheel-notepad](https://github.com/szy0syz/wheel-notepad)的基础，练习这个项目就简单了。

## 项目总结

> 其实应该叫GET到的知识点更好听点！

- 如果`XMLHttpRequest`不存在可以使用`ActiveXObject`来初始异步请求对象；

- `mapState`辅助函数，一次性生成三个计算属性。

```javascript   
<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
      itemNum: state => state.itemNum,
      level: state => state.level,
      itemDetail: state => state.itemDetail
    })
  }
</script>
```

- 在项目components的`itemcontainer.vue`里，使用`v-if`判断存了两个page。通过父组件传入的`fatherComponent`判断是生成home页面还是item页面。

- 在`itemcontainer.vue`组件中，通过计算属性绑定输入题库数组中的题目和选项，然后通过按钮事件改编题库指针后切换下一题，同时还把所选选项唯一id保存。

- 项目流程图

![flowChart](http://ofx24fene.bkt.clouddn.com//img/blog/wheel-happyfri%20flow%20chart.svg)
