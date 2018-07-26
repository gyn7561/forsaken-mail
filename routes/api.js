/**
 * Created by Hongcai Deng on 2015/12/28.
 */

'use strict';

let express = require('express');
let router = express.Router();

router.get('/GYNMAIN', function(req, res) {
  res.end();
});

router.get('/getMailList', function(req, res) {
  let limit = parseInt( req.query.limit || 5);
  let id = req.query.id;
  let db = require("../modules/db");
  db.find({}).sort({ timestamp: -1 }).skip(0).limit(limit).exec(function (err, docs) {
    res.send(err||docs);
  });
});


module.exports = router;