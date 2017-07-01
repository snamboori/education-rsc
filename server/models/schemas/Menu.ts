import DataAccess = require("./../../config/DataAccess");
import IMenu = require("./../interfaces/IMenu");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class Menu {

  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           link: {
               type: String,
               required: true
           },
           icon: {
               type: String,
               required: true
           }
       });

       return schema;
   }

}
var schema = mongooseConnection.model<IMenu>("Menu", Menu.schema);
export = schema;
