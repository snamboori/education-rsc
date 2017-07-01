import mongoose = require("mongoose");

interface IAppData extends mongoose.Document {
  key: string;
  code: string;
  name: string;
}

export = IAppData;