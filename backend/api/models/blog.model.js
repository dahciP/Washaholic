const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{type: String, require: true, trim:true },
    text:{type: String, require: true, trim:true},
    // content:{type: String, require: true, trim:true},
    // date:{type: String, require: true, trim:true},
    // name:{type: String, require: true}
})

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;