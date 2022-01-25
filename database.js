var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        //Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            lastname text UNIQUE,
            wish1 text,
            wish2 text,
            wish3 text,
            wish4 text,
            wish5 text,
            wish6 text,
            wish7 text,
            wish8 text,
            wish9 text,
            wish10 text,
            CONSTRAINT lastname_unique UNIQUE (lastname)
        )`,
        (err) => {
            if (err) {
                // Table already created
            }
        })
    }
})

module.exports = db;