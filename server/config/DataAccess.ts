
    import Mongoose = require("mongoose");
    import Promise = require('bluebird');
    import Constants = require("./Constants");
    
    class DataAccess {
        static mongooseInstance: any;
        static mongooseConnection: Mongoose.Connection;
        
        constructor () {
            DataAccess.connect();
        }
        
        static connect (): Mongoose.Connection {
            if(this.mongooseInstance) return this.mongooseInstance;
             Mongoose.Promise = global.Promise;
            this.mongooseConnection  = Mongoose.connection;
            this.mongooseConnection.once("open", () => {
                console.log("Conectado ao mongodb.");
            });
           this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
           return this.mongooseInstance;
        }
        
    }
    
    DataAccess.connect();
    export = DataAccess;
     