import mongoose = require("mongoose");
 
class RepositoryBase<T extends mongoose.Document>{
    
    private _model: mongoose.Model<mongoose.Document>;
    
    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }
    
    create (item: T) {
        return this._model.create(item);
    }
    
    retrieve () {
        return this._model.find({});
    }
    
    update (_id: mongoose.Types.ObjectId, item: T) {
        return this._model.update({_id: _id}, item);
            
    }

    save(item: T) {
        const _id: mongoose.Types.ObjectId = item._id;
        if(_id){
            return this.update(_id, item);
        } else {
            return this.create(item);
        }
        
    }
        
    delete (_id: string) {
        return this._model.remove({_id: this.toObjectId(_id)});
       
    } 
    
    findById (_id: string) {
        return this._model.findById( _id);
    }
    
    
    private toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
    
}

export = RepositoryBase;