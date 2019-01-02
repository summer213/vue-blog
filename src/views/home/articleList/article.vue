<template>
    <div>
        <h2 class="article-title">文章列表</h2>
        <div class="article-container">
            <el-card
                class="box-card"
                shadow="hover"
                v-for="(article, index) in articleList"
                :key="index">
                <!-- <div slot="header" class="clearfix">
                <span>{{article.title}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div> -->
                <p class="title">{{article.title}}</p>
                <div class="taglist">
                    <span 
                        class="iconfont tag"
                        style="color:#39ba5d;"
                        v-for="(item, index) in article.tagList"
                        :key="index"
                        @click="goToTag(item)">&#xecdd;  {{item}}</span>
                </div>
                <div class="text item article-con">
                    {{article.summary}}
                </div>
                <div class="footer">
                    <span class="iconfont">&#xe685; {{article.createDate}}</span>
                    <span>writen by {{article.author}}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import util from '@/utils/util.js'
export default {
    data() {
        return {
            // 文章列表
            articleList: [],
            searchData: {
                pageNum: 1,
                pageSize: 10
            }
        }
    },
    methods: {
      getList() {
        this.request('articleList', this.searchData, true).then(res => {
            res.data.articleInfo.forEach(article => {
                article.tagList = article.tag.split(',');
                article.createDate = util.timeFormat(article.createDate, '-');
            });
            this.articleList = res.data.articleInfo;
        })
      },
      goToTag(name) {
          this.$router.push({path:'tag',query:{key:name}})
      }
    },
    mounted() {
        this.getList();
    }
}
</script>

<style lang="scss" scoped>
    @import './article';
</style>
