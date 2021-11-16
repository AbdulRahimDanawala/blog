let userDBHelper = require('./user-model')

module.exports.signUpWithDetails = (req, res) => {

    userDBHelper.createNewUser(req.body)
        .then(newCreatedUser => {
            req.session.loggedInUserId = newCreatedUser._id
            req.session.loggedInUser = newCreatedUser
            res.send({ status: true, created: true, signedInUserName: newCreatedUser.namme })

        })
        .catch(err => {
            res.send({ status: false, created: false })
        })
}

module.exports.signinWithEmailAndPassword = (req, res) => {
    userDBHelper.findSingleUserByQuery({ emailId: req.body.emailId })
        .then(user => {
            console.log("user")
            console.log(user)
           


            if (user.password !== req.body.password) {
                res.send({ status: false, errMessage: "The Password didnt match", })
                console.log(req.body.password)
                console.log(user.password)
                return
            }
            console.log("req.session-user")
            console.log(req.session)
            
            req.session.loggedInUserId = user._id
            req.session.loggedInUser = user

            console.log("req.session-user")
            console.log(req.session)
            
            res.send({ status: true, created: true, signedInUserName: user.name })


        })
        .catch(err => {
            console.log("Unable to find user by id..!")
            console.log(err)
            res({ status: false, found: false, pwdMatched: false })
        })
}