// create a file that will act as a data abstraction layer between the front end and the back end
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';    
let db = null;

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!')

    // connect to myproject database
    db = client.db('myproject');
});


function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('customers');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
}

function all() {
    return new Promise((resolve, reject) => {
        const collection = db.collection('customers');
        collection.find({}).toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        });
    });
}

module.exports = {create, all};
