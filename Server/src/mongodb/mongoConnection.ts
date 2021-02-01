import mongo from 'mongodb';
import { SignIn, LogIn } from './interface'

const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongo.MongoClient
const dbName = 'todolist';
let db: any;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  }, (err, client) => {
  // tslint:disable-next-line:no-console
  if (err) return console.log(err)
  db =  client.db(dbName);
})

export const signIn = (user: SignIn, callBack: any) => {

    db.collection('users').find({ email: user.email }).toArray((error: any, res: string | any[]) => {
      //  tslint:disable-next-line:no-console
      if (error) return console.log(error)
      if (res.length === 0) {
        db.collection('users').insertOne({
          username: user.username,
          email: user.email,
          password: user.password
        })
        return callBack(true)
      }
      return callBack(false)
    })
}

export const logIn = (user: LogIn, callBack: any) => {
  db.collection('users').find({ email: user.email, password: user.password }).toArray((error: any, res: string | any[]) => {
    //  tslint:disable-next-line:no-console
    if (error) return console.log(error)
    if (res.length === 0) {
      return callBack(false)
    }
    return callBack(true)
  })
}

