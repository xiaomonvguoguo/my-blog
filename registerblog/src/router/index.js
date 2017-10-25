import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Articles from '@/components/Articles'
import showArticles from '@/components/showArticles'
import editArticles from '@/components/editArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'register',
      component:Register
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },{
      path:'/articles',
      name:'articles',
      component:Articles
    },
    {
      path:'/showArticles/:article_id',
      name:'showArticles',
      component:showArticles
    },
    {
      path:'/editArticles',
      name:'/editArticles',
      component:editArticles
    }
  ]
})
