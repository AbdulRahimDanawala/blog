const blogModel = require('./blog-model')
const fileUploadHelper = require('../../helpers/file-uploader/file-uploader-demo')


module.exports.getListOfAllBlogs = (req, res) => {
    console.log("req.session-blog")

    console.log(req.session)
    blogModel.findAllMatchingBlogs({})
        .then(foundDocumentList => {
            res.send({ status: true, found: true, list: foundDocumentList })
        })
        .catch(err => {
            res.send({ status: false, found: false })

        })

}

module.exports.findRequestedBlog = (req, res) => {
    blogModel.findMathingBlog({ _id: req.params.id })
        .then(foundDocumentList => {
            res.send({ status: true, found: true, requestedblog: foundDocumentList })
        })
        .catch(err => {
            res.send({ status: false, found: false })

        })

}


module.exports.createNewBlog = (req, res) => {

    let blogDetails = JSON.parse(req.body.blogDetails);
    let image = req.file.buffer.toString('base64')
    fileUploadHelper.uploadImageOnCloudinary(image)
        .then(imageUploadResult => {

            blogDetails.headerImageURL = imageUploadResult.url

            return blogModel.createNewBlogInDb(blogDetails)


        })
        .then(newCreateDocument => {
            res.send({ status: true, created: true, newDocumentid: newCreateDocument._id })
        })
        .catch(err => {
            console.log("Got an error", err);
            res.send({ status: false })
        })
}