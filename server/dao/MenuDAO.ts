import BaseDAO = require("./../config/BaseDAO");
import IMenu = require("./../models/interfaces/IMenu");
import Menu = require("./../models/schemas/Menu");

class MenuDAO  extends BaseDAO<IMenu> {
    constructor () {
        super(Menu);
    }
}

Object.seal(MenuDAO);
export = MenuDAO;
