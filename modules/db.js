var Datastore = require('nedb')
var db = new Datastore({ filename: 'mail.db', autoload: true });


module.exports = db;