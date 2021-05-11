/**
 * 首页路由
 */
 const express = require('express')
 var indexRouter = express.Router();

 const Article = require('../../middleware/articleMid')
 const Category = require('../../middleware/cateMid')

 //加载首页页面
 indexRouter.get('/', [
     Article.getArticle,
    ], (req, res) => {
     let {
        articleList, 
    } = req
    res.send({
        articleList: articleList,
    })
 })

 indexRouter.get('/cate', [
     Category.getCategory
   ], (req, res) => {
    let {
       categoryList
   } = req
   res.send({
        categoryList: categoryList
   })
})

 module.exports = indexRouter;