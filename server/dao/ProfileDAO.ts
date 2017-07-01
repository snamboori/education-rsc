import BaseDAO = require("./../config/BaseDAO");
import IProfile = require("./../models/interfaces/IProfile");
import Profile = require("./../models/schemas/Profile");

class ProfileDAO  extends BaseDAO<IProfile> {
    constructor () {
        super(Profile);
    }
}

Object.seal(ProfileDAO);
export = ProfileDAO;
