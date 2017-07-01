import mongoose = require("mongoose");

interface IMenu extends mongoose.Document {
  name: string;
  link: string;
  icon: string;

}

export = IMenu;
