<template>
    <div>
        <div class="title">
            <span class="iconfont tag">&#xecdd; {{tagTitle}}</span>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in articleList" :key="index">
                <div class="item-title">{{item.title}}</div>
                <div class="item-con">{{item.summary}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tagTitle: '',
            searchData: {
                pageNum: 1,
                pageSize: 10
            },
            articleList: []
        }
    },
    mounted() {
        this.tagTitle = this.$route.query.key;
        this.searchData.category = this.tagTitle;
        this.request('tagArticleList', this.searchData, true).then(res => {
            this.articleList = res.data.articleInfo;
        })
    }
}
</script>

<style lang="scss" scoped>
    @import './tagArticle';
</style>
