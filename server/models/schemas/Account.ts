import DataAccess = require("./../../config/DataAccess");
import IAccount = require("./../interfaces/IAccount");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class Account {

  static get schema () {
       var schema =  mongoose.Schema({
           password : {
               type: String,
               required: true
           },
           role: {
               type: String,
               required: true
           },
           profileid: {
               type: String,
               required: true
           },
           status:{
           type: String,
           required: true
           }
       });

       return schema;
   }

}
var schema = mongooseConnection.model<IAccount>("Account", Account.schema);
export = schema;
