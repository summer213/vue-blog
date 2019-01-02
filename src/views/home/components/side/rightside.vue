<style lang="scss" scoped>
@import './rightside.scss';
</style>
<style lang="scss">
.el-tree-node{
    .el-tree-node__content{
        height: 50px;
    }
}
</style>


<template>
    <div>
        <el-card shadow="hover" class="article-list">
            <div slot="header">
                <span>文章专题</span>
            </div>
            <ul>
                <li v-for="(item, index) in articleList" :key="index">
                    {{item.title}}{{index}}
                </li>
            </ul>
        </el-card>
        <div class="catalog">
            <p class="title">文章目录</p>
            <div>
                <el-tree class="filter-tree" :data="catalogData" ></el-tree>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RightSide',
    data() {
        return{
            articleList: [
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                },
                {
                    title: '专题'
                }
            ],
            catalogData: [{
                label: 'JavaScript',
                class:'sss',
                children: [{
                    label: '实例',
                    children: [{
                        label: '表格拖动'
                    },{
                        label: '计时器'
                    },{
                        label: '模态框拖动'
                    }]
                },{
                    label: '基础',
                    children: [{
                        label: '原型链'
                    },{
                        label: '继承'
                    }]
                }]
            }, {
                label: 'Vue',
                children: []
            }],
        }
    }
}
</script>