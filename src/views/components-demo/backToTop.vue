<template>
  <div class="components-container">
    <h2 class="article-title">这是文章列表</h2>
    <div class="placeholder-container">
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
            <span>文章标题</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
                文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...文章简介...
            </div>
        </el-card>
        <el-card shadow="hover">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541527305416&di=ca81c5a5932493a7f9e58812a5370ddf&imgtype=0&src=http%3A%2F%2Fwww.3dpxx.com%2Fuploads%2Fallimg%2Fc150521%2F14321YPAHP-12IQ.jpg" class="image">
            
            <div slot="header" class="clearfix">
                <span>文章标题</span>
            </div>
            <div style="padding: 14px;">
                <span>伸个懒腰</span>
            </div>
        </el-card>
        <el-card class="box-card" shadow="hover" v-for="(item, index) in 10" :key="index">
            <div slot="header" class="clearfix">
            <span>文章标题{{index}}</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
                文章简介{{item}}...
            </div>
        </el-card>
    </div>
    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="tooltip">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'

export default {
  name: 'BackToTopDemo',
  components: { BackToTop },
  data() {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .placeholder-container div {
        margin: 10px;
    }
    .article-title{
        margin-bottom: 20px;
        border-bottom: 1px solid #c5c5c5;
        padding-bottom: 20px;
    }
    .placeholder-container{
        .el-card{
            margin: 0 0 20px 0;

            .el-card__body{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>

