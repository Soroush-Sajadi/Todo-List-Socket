import mongo from 'mongodb';

const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongo.MongoClient
const dbName = 'todolist';
let db;

const mongodb = async () => {
   MongoClient.connect(url, { useNewUrlParser: true }, async (err, client) => {
    // tslint:disable-next-line:no-console
    if (err) return console.log(err)

    // Storing a reference to the database so you can use it later
    // tslint:disable-next-line:no-console
    db = await client.db(dbName);
    db.collection('characters').find({}).toArray((errr,res) => {
      //  tslint:disable-next-line:no-console
        if (errr) return console.log(errr)
        // tslint:disable-next-line:no-console
        console.log(res);
        client.close()
    })
    // db.collection('characters').findOne({}, (errr, res) => {
    //     // tslint:disable-next-line:no-console
    //     if (errr) return console.log(errr)
    //     // tslint:disable-next-line:no-console
    //     console.log(res);
    //     client.close()
    //   })
    // tslint:disable-next-line:no-console
    // console.log(`Connected MongoDB: ${db}`)
    // // tslint:disable-next-line:no-console
    // console.log(`Database: ${dbName}`)
    // return db
  })
}

export default mongodb;
