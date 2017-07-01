
import AppDataDAO = require("../dao/AppDataDAO");
import IAppData = require("./../models/interfaces/IAppData");


export class AppDataService {
    private _dao: AppDataDAO;
    
    constructor () {
        this._dao = new AppDataDAO();
    }  
        
    retrieve () {
        return this._dao.retrieve();
    }

    save( item: IAppData) {
        return this._dao.save(item);   
    }
}