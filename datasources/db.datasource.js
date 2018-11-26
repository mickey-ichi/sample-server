const config = require('./db.datasource.json');
const Datastore = require('nedb');

class DbDataSource {
    constructor() {
        this.config = config;
        this.db = new Datastore({ filename: config.file, autoload: true });
    }

    getConfig() {
        return this.config;
    }

    getDb() {
        return this.db;
    }
}

module.exports = DbDataSource;
