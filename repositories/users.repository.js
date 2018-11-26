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
}

module.exports = UsersRepository;
