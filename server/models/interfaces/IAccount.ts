import mongoose = require("mongoose");

interface IAccount extends mongoose.Document {
  password: string;
  role: string;
  profilefield: string;
  status: boolean;
}

export = IAccount;