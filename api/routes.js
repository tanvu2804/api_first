'use strict';
module.exports = function (app) {
  let homeCtrl = require('./controllers/HomeController');
  let newsCtrl = require('./controllers/NewsController');
  let videoCtrl = require('./controllers/VideoController');

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

  app.route('/video')
    .get(videoCtrl.get)
    .post(videoCtrl.store);

  app.route('/video/:videoId')
    .get(videoCtrl.detail)
    .put(videoCtrl.update)
    .delete(videoCtrl.delete);
};