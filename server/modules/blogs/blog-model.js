const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    category: String,
    title: String,
    tagLine: String,
    body: String,
    headerImageURL: String,
    createdAt: { type: Date, default: Date.now }
})

const BlogModel = new mongoose.model('blogs', blogSchema);

module.exports.createNewBlogInDb = (blogDetails) => {
    return new Promise((resolve, reject) => {
        let blogInstance = new BlogModel(blogDetails)
        blogInstance.save((err, doc) => {
            if (err) {
                console.log('Error in creating new blog in db')
                console.log(err)
                return reject(err)
            }
            resolve(doc)
        })
    })
}

module.exports.findMathingBlog = (query) => {
    return BlogModel.findOne(query)
}

module.exports.findAllMatchingBlogs = (query) => {
    return new Promise((resolve, reject) => {

        BlogModel.find((query, (err, documents) => {
            if (err) {
                console.log('Error in finding blog from db')
                console.log(err)
                return reject(err)
            }
            resolve(documents)
        }))

    })
}