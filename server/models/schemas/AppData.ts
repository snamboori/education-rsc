import DataAccess = require("./../../config/DataAccess");
import IAppData = require("./../interfaces/IAppData");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AppData {
   
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           key: {
               type: String,
               required: true
           },
           code: {
               type: String,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IAppData>("AppData", AppData.schema);
export = schema;