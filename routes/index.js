var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


// Подключение к БД - Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/roocean');


// ------ ПАРСИНГ САЙТОВ ------//
// STMEGI
require('../parse/stmegi');


// ------ МОДЕЛИ ------//
// Новости
var news = require('../models/news');

router.use('/', function(req, res) {
  // Получаем список новостей из бД
  news.find({}).sort({'_id': -1}).limit(100).exec(function (err, docs){
    if(err)
      return console.log(err);

    res.render('index', {
      "title": 'roocean',
      "newslist" : docs
    });
  });
});

module.exports = router;
