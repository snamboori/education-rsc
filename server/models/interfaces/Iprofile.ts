import mongoose = require("mongoose");

interface IProfile extends mongoose.Document {
  firstName: string;
  lastName: string;
  mobile: string;
  email:string;
  address:string;
  city:string;
  state:string;
  country:string;
  pincode :string;
}

export = IProfile;
