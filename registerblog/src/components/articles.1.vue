<template>
    <div class="index">
        <h1>文章列表展示</h1>
        <table border="1" cellpadding="0" cellspacing="0" style="text-align:center;">
            <tr>
                <td>文章标题</td>
                <td>文章内容</td>
                <td>文章形式</td>
            </tr>
            <tr v-for="article in articles" :key="article.id" :value="article.id">
                <td>{{article.title}}</td>
                <td>{{article.text}}</td>
                <td> <a @click="show(article.id)">展示</a>
        <a @click="edit1">编辑</a>
        <a @click="delete1(article.id)">删除</a></td>
            </tr>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        this.getArticles()
    },
    computed: {
    },
    methods: {
        show(articleId) {
            this.$router.push('/showArticles/'+articleId)
        },
        edit1() {
            this.$router.push('/editArticles')
        },
        delete1(articleId) {
            //   this.$router.push('showArticles')
            alert('你确定要删除吗？')
            axios.get('/articles/destroy?article_id='+articleId).then(res =>{
                       
            })
        },
        getArticles(){
            axios.get('/articles?format=json').then(res =>{
                this.articles = res.data
                console.log(res.data)
            })
        }
    }
}
</script>
<style>
.index {
    text-align: center;
    margin: auto;
}
</style>


