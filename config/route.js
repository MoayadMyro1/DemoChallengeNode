const express = require('express');
const route = express.Router()

const titleController = require('../controller/Titles');


router.get('/ViewAtrical', function (req, res, next) {
    res.render('ViewAtrical');
});

route.get('/', titleController.homePage)
route.post('/', titleController.addtitle)
route.post('/EditArticle', titleController.edittitle)
route.post('/AddArticle', titleController.addtitle)
route.get('/*', titleController.notFound)


module.exports = route;