class UsersRepository {
    constructor(db) {
        this.db = db;
    }

    create(user) {
        return new Promise((resolve, reject) => {
            this.db.insert(user, (err, newDoc) => {
                if(err) {
                    reject(err);
                }
                resolve(newDoc);
            });
        });
    }

    findUser(email) {
        return new Promise((resolve, reject) => {
            this.db.findOne({ email: email }, (err, doc) => {
                if(err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
}

module.exports = UsersRepository;
