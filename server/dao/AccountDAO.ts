import BaseDAO = require("./../config/BaseDAO");
import IAccount = require("./../models/interfaces/IAccount");
import Account = require("./../models/schemas/Account");

class AccountDAO  extends BaseDAO<IAccount> {
    constructor () {
        super(Account);
    }    
} 

Object.seal(AccountDAO);
export = AccountDAO;
