import BaseDAO = require("./../config/BaseDAO");
import IAppData = require("./../models/interfaces/IAppData");
import AppData = require("./../models/schemas/AppData");

class AppDataDAO  extends BaseDAO<IAppData> {
    constructor () {
        super(AppData);
    }    
} 

Object.seal(AppDataDAO);
export = AppDataDAO;