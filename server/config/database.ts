
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = "mongodb://admin:Test!234@cluster0-shard-00-01-cisi2.mongodb.net:27017,cluster0-shard-00-00-cisi2.mongodb.net:27017,cluster0-shard-00-02-cisi2.mongodb.net:27017/test?ssl=false&replicaSet=Cluster0-shard-0&authSource=admin";
var db = mongoose.createConnection(uri, { replset: { poolSize: 4 }});


export { mongoose };