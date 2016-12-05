var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
    users: ObjectId,
    link: String,
    previewTitle: String,
    previewPicture: String,
    previewText: String,
    detailTitle: String,
    detailPicture: String,
    detailText: String
});

var NewsModel = mongoose.model('News', NewsSchema);

module.exports = NewsModel;