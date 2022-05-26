
const titleModel = require('../models/Titles');

const homePage = async (req, res) => {
    await titleModel.find()
            .then( result => {
                res.render('index', {
                    alltitles: result,
                    result: ''
                });
            })
            .catch( err => {
                console.log(err)
            })
}

const addtitle = (req, res) => {
    let title = new titleModel(req.body);
    title.save()
        .then( () => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

const edittitle = (req, res) => {
    titleModel.findById(req.query.title_id)
        .then(title => {
            res.render('EditArticle', {
                title: title
            })
        })
        .catch(err => {
            console.log(err)
        })
}

const confirmEdit = (req, res) => {
    titleModel.findByIdAndUpdate(req.query.title_id, req.body, function (err, newData) {
        if (err) throw err

        res.redirect('/')
    })
}

const notFound =  (req, res) => {
    res.render('notFound')
}

module.exports = {
    homePage,
    notFound,
    addtitle,
    edittitle,
    confirmEdit
}