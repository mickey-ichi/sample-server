const Datastore = require('nedb');

class DbDataSource {
    constructor() {
        this.db = new Datastore({ autoload: true });
    }

    getDb() {
        return this.db;
    }
}

module.exports = DbDataSource;
