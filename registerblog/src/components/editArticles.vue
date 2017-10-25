<template>
    <div class="edit">
        <h1>编辑文章</h1>
        文章标题：<input type="text" name="articlesTitle" value="articlesTitle" v-model="articlesTitle"><br> 文章内容：
        <textarea name="text" id="" cols="30" rows="10" v-model="articlesText">aaaaa</textarea>
        <button @click="submitArticles">提交文章</button>
        <a @click="back">返回 </a>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            articlesTitle: '',
            articlesText: ''
        }
    },
    computed:{
        articleId(){
            return this.$route.params.id
        }
    },
    created() {
        console.log("id:",this.articleId)
        
    },
    methods: {
        back() {
            this.$router.push('/articles')
        },
        submitArticles() {
            console.log('11111')
            axios.post('/articles/create',
                {
                    title: this.articlesTitle,
                    text: this.articlesText
                }).then(res => {
                     this.$router.push('/articles')
                })
        }
    }
}
</script>
<style>
.edit {
    margin: auto;
}
</style>


