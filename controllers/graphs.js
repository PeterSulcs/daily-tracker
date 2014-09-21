var secrets = require('../config/secrets');
var User = require('../models/User');
var querystring = require('querystring');
var validator = require('validator');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var graph = require('fbgraph');
var LastFmNode = require('lastfm').LastFmNode;
var tumblr = require('tumblr.js');
var foursquare = require('node-foursquare')({ secrets: secrets.foursquare });
var Github = require('github-api');
var Twit = require('twit');
var stripe =  require('stripe')(secrets.stripe.apiKey);
var twilio = require('twilio')(secrets.twilio.sid, secrets.twilio.token);
var Linkedin = require('node-linkedin')(secrets.linkedin.clientID, secrets.linkedin.clientSecret, secrets.linkedin.callbackURL);
var clockwork = require('clockwork')({key: secrets.clockwork.apiKey});
var ig = require('instagram-node').instagram();
var Y = require('yui/yql');
var _ = require('lodash');

var TrackedStuff = require('../models/TrackedStuff')

/**
 * GET /api
 * List of API examples.
 */

exports.getGraphs = function(req, res) {
  //TODO: determine if this is best way of getting user id
  TrackedStuff.find({'userid':req.res.locals.user._id}).lean().exec(function(err, docs){
    if (err) console.log(err);
    console.log(docs)
    res.render('graphs/index', {
      title: 'Graphs',
      stuff: docs
    });
  });
};
