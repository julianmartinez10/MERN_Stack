//  importing from jokes.model file
const Joke = require('../models/jokes.model')

module.exports.findAllJokes=(req, res)=>{
    Joke.find()
        .then(allJokes =>{
            res.json({results: allJokes})
        })
        .catch(err=>console.log(err))
}

module.exports.createJoke=(req, res)=>{
    // console.log("REQUEST.BODY LOOKS LIKE THIS---->", req.body)
    Joke.create(req.body)       //  create a joke using the request body
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)})
}

module.exports.findJoke=(req, res)=>{
    //  variable from routes available through req.params.id
    //  _id refers to a single joke
    Joke.findOne({_id: req.params.id})
        .then(oneJoke=>{
            res.json({results: oneJoke})
        })
        .catch(err=>res.json(err))
}

module.exports.updateJoke=(req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
    //  returning updated joke
    //  no matchy matchy no worky worky
    .then(updatedJoke=>{
        res.json({results:updatedJoke})
    })
    .catch(err=>res.json(err))
}

module.exports.deleteJoke=(req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke=>{
        res.json({results: deletedJoke})
    })
    .catch(err=>res.json(err))
}