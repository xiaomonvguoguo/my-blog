<template>
    <div class="show">
        <div>
            文章标题：
            <span>{{title}}</span><br> 文章内容：
            <span>{{text}}</span><br>
            <div v-for="comment in comments" :key="comment.id">
                评论者：<span> {{comment.commenter}}</span><br>
                评论内容：<span> {{comment.body}}</span><br>
                <button @click="deleteComment(comment.id)">删除评论</button>
            </div>
        </div>
        <h1>添加一个评论</h1>
        评论者: <input type="text" name="commenter" v-model="commenter"> 评论内容:
        <textarea name="commentContent" id="" cols="30" rows="10" v-model="commentContent">

        </textarea>
        <button @click="submitComment">创建评论</button>
        <a @click="edit">创建</a> |
        <a @click="back">返回</a>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            commenter: '',
            commentContent: '',
            articles: [],
            title: '',
            text: '',
            comments: []
        }
    },
    computed: {
        articleId() {
            return this.$route.params.article_id
        }
    },
    created() {
        console.log("id:", this.articleId)
        this.getArticles()
        this.getComments()

    },
    methods: {
        deleteComment(commentId){
            axios.get('/comments/destroy?comment_id='+commentId).then(res =>{
                
            })
            this.getComments()
        },
        getComments() {
            axios.get('/comments/index?article_id=' + this.articleId).then(res => {
                this.comments = res.data
                console.log('comment:', res.data)
            })
        },
        getArticles() {
            axios.get('/articles/show?article_id=' + this.articleId).then(res => {
                this.articles = res.data
                this.title = res.data.title
                this.text = res.data.text
            })
        },
        edit() {
            this.$router.push('/editArticles')
        },
        back() {
            this.$router.push('/articles')
        },
        submitComment() {
            console.log('11111')
            axios.post('/comments/create?article_id=' + this.articleId,
                {
                    commenter: this.commenter,
                    body: this.commentContent
                }).then(res => {
                    this.articles = res.data

                    console.log('res:', res.data)
                })
            this.getComments()
            this.getArticles()
        }
    }
}
</script>
<style>

</style>


