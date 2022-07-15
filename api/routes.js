'use strict';
module.exports = function (app) {
  let homeCtrl = require('./controllers/HomeController');
  let newsCtrl = require('./controllers/NewsController');

  // todoList Routes
  app.route('/')
    .get(homeCtrl.get)

  app.route('/news')
    .get(newsCtrl.get)
    .post(newsCtrl.store);

  app.route('/news/:newsId')
    .get(newsCtrl.detail)
    .put(newsCtrl.update)
    .delete(newsCtrl.delete);
};