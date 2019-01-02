<template>
    <div class="header-con">
        <div class="left">
            <span class="iconfont home" @click="toHome">&#xe612;</span>
            <el-input
                class="search-input"
                placeholder="请输入搜索内容"
                prefix-icon="el-icon-search"
                v-model="search"
                clearable>
            </el-input>
        </div>
        <el-button type="primary" plain size="mini" @click="editArticle">写文章</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
      editArticle() {
          this.$router.push({path:'/editArticle'});
      },
      toHome() {
          this.$router.push({path:'/home/articleList'});
      }
    }
}
</script>
<style lang="scss" scoped>
.header-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        height: 60px;
        display: flex;
        align-items: center;
        .home {
            font-size: 30px;
            margin-right: 20px;
            cursor: pointer;
        }
    }
}
.search-input {
    width: 200px;
}
</style>
