const methodMap = {

    /** 文章列表接口 **/
    articleList: { url: '/blog/listArticles', method: 'get', code: "" },
    // 通过标签筛选文章
    tagArticleList: { url: '/blog/findArticlesByCategory', method: 'get', code: "" },
};
export default methodMap;