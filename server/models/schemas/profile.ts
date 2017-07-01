import DataAccess = require("./../../config/DataAccess");
import IProfile = require("./../interfaces/IProfile");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class Profile {

  static get schema () {
       var schema =  mongoose.Schema({
           firstName : {
               type: String,
               required: true
           },
           lastName: {
               type: String,
               required: true
           },
           mobile: {
               type: String,
               required: true
           },
           email:{
           type: string,
           required: true
           },
           address:{
           type: string,
           required: true
           },
           city:{
           type: string,
           required: true
           },
           state:{
           type: string,
           required: true
           },
           country:{
           type: string,
           required: true
           },
           pincode:{
           type: string,
           required: true
           }
       });

       return schema;
   }

}
var schema = mongooseConnection.model<IProfile>("Profile", Profile.schema);
export = schema;
