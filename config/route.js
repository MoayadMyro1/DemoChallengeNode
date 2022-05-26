const express = require('express');
const route = express.Router()

const titleController = require('../controller/Titles');



route.get('/', titleController.homePage)
route.post('/', titleController.addtitle)
route.post('/EditArticle', titleController.edittitle)
route.post('/AddArticle', titleController.addtitle)
route.get('/ViewAtrical', titleController.viewtitle)
route.post('/delete-article', titleController.deletetitle)
route.get('/*', titleController.notFound)


module.exports = route;