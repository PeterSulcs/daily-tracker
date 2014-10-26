var secrets = require('../config/secrets');
var momenttz = require('moment-timezone');
var moment = require('moment');
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
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  // console.log("Is client time anywhere in here?")
  //console.log(req.res)
  //console.log(req.headers['x-request-start'])
  //console.log(req.headers)
  //console.log(req.headers["x-request-start"])
  // Let's just lock to east coast time because I give up for now.
  var client_date = moment().tz("America/New_York").format("YYYY-MM-DD")

  // console.log(moment().tz("America/New_York"))
  //moment(req.headers['x-request-start']).format("YYYY-MM-DD");
  console.log(client_date)
  // console.log(moment(req.res.req._startTime).format("YYYY-MM-DD"))
  console.log(req.res.locals.user._id + client_date)
  TrackedStuff.findById( req.res.locals.user._id + client_date, function(err, doc) {
      //if (err) return new TrackedStuff({});
      res.render('home', {
        title: 'Home',
        today: client_date,
        trackedStuff: doc || new TrackedStuff({})
      });
    });
};


exports.postTrackedStuff = function(req, res) {
  console.log(req.body)
  // http://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose
  objectToUpdate = new TrackedStuff(req.body);
  objectToUpdate = objectToUpdate.toObject();
  delete objectToUpdate["_id"];
  console.log(objectToUpdate)
  TrackedStuff.update({_id:req.body._id}, objectToUpdate, {upsert:true}, function(err, doc){
    console.log("upserted...")
    console.log(err)
  	res.redirect('/');
  });
  //console.log(trackedStuff)
};

exports.getTrackedStuff = function(req, res) {
  console.log('hey man!')
  TrackedStuff.findOne({"forday": moment().format("YYYY-MM-DD"), "foruser": "unknown"}, function(err, doc) {
    if (err) return next(err);
    console.log(doc)
    return doc;
  })
  //console.log(res)
};