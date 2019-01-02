<template>
  <div class="container">
        <div class="left">
            <div class="left-side">
                <left-side></left-side>
            </div>
        </div>
        <div class="center">
            <router-view></router-view>
        </div>
        <div class="right">
            <right-side></right-side>
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
import LeftSide from './components/side/leftside'
import RightSide from './components/side/rightside'

export default {
  name: 'home',
  components: { BackToTop, LeftSide, RightSide },
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
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
    @import './index'
</style>

