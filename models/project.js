const mongoose = require('mongoose');
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description:{type: String, required: true},
    repo: {type: String, required: true},
    demo: {type: String, required: true},
    image: {type: String, required: true},

})

const Project = mongoose.model('Project', projectSchema);

module.exports=Project