const OAuth = require('oauth');

module.exports = {
  trends: function (req, res) {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '8vaQNQYgFQmOeIlVOptZhhYCF',
      'FttUkbyXV4bhQkY5gPA9VwKl0B5ShHteoibCBlRdXYoTSUiOdF',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '165776511-9EtyEnrlTfTjcKYRLnAcREkxrIApCyB5BOBwdSup', //test user token
      'aoU7x1MvLfIQ4p3c0KxSZNY7P9id6evJyooFByyw1SW8h', //test user secret
      function (e, data){
        res.status(200).json({
          message: 'success get trends place from twitter',
          data: JSON.parse(data)
        })
      }
    );
  },
  timeline: function (req, res) {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '8vaQNQYgFQmOeIlVOptZhhYCF',
      'FttUkbyXV4bhQkY5gPA9VwKl0B5ShHteoibCBlRdXYoTSUiOdF',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      '165776511-9EtyEnrlTfTjcKYRLnAcREkxrIApCyB5BOBwdSup', //test user token
      'aoU7x1MvLfIQ4p3c0KxSZNY7P9id6evJyooFByyw1SW8h', //test user secret
      function (e, data){
        res.status(200).json({
          message: 'success get timeline from twitter',
          data: JSON.parse(data)
        })
      }
    );
  },
  search: function (req, res) {
    console.log(req.query);
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '8vaQNQYgFQmOeIlVOptZhhYCF',
      'FttUkbyXV4bhQkY5gPA9VwKl0B5ShHteoibCBlRdXYoTSUiOdF',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.tweet}`,
      '165776511-9EtyEnrlTfTjcKYRLnAcREkxrIApCyB5BOBwdSup', //test user token
      'aoU7x1MvLfIQ4p3c0KxSZNY7P9id6evJyooFByyw1SW8h', //test user secret
      function (e, data){
        res.status(200).json({
          message: `success search '${req.query.tweet}' from timeline`,
          data: JSON.parse(data)
        })
      }
    );
  },
  post: function (req, res) {
    console.log(req.body);
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '8vaQNQYgFQmOeIlVOptZhhYCF',
      'FttUkbyXV4bhQkY5gPA9VwKl0B5ShHteoibCBlRdXYoTSUiOdF',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
      '165776511-9EtyEnrlTfTjcKYRLnAcREkxrIApCyB5BOBwdSup', //test user token
      'aoU7x1MvLfIQ4p3c0KxSZNY7P9id6evJyooFByyw1SW8h', //test user secret
      req.body.tweet,
      'tweet',
      function (e, data){
        res.status(200).json({
          message: `success post '${req.body.tweet}' from twitter`,
          data: JSON.parse(data)
        })
      }
    );
  }

}
