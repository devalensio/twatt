const OAuth = require('oauth');
require('dotenv').config()

module.exports = {
  trends: function (req, res) {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMERKEY,
      process.env.CONSUMERSECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      process.env.ACCESSTOKEN, //test user token
      process.env.ACCESSSECRET, //test user secret
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
      process.env.CONSUMERKEY,
      process.env.CONSUMERSECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.ACCESSTOKEN, //test user token
      process.env.ACCESSSECRET, //test user secret
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
      process.env.CONSUMERKEY,
      process.env.CONSUMERSECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.tweet}`,
      process.env.ACCESSTOKEN, //test user token
      process.env.ACCESSSECRET, //test user secret
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
      process.env.CONSUMERKEY,
      process.env.CONSUMERSECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
      process.env.ACCESSTOKEN, //test user token
      process.env.ACCESSSECRET, //test user secret
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
