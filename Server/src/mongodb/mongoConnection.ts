import mongo from 'mongodb';
import { SignIn, LogIn, ToDo } from './interface'

const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongo.MongoClient
const ObjectId = mongo.ObjectID
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
          password: user.password,
          toDoLists: []
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
    return callBack(res)
  })
}

export const addList = (id: string, listName: string, listId: string ,callBack: any) => {
  const objectId = new ObjectId(id);
  db.collection('users').update(
    { _id: objectId },
    {
      $push: {
        toDoLists: {name: listName, listId ,toDos:[]}
      }
    }
  )
}

export const getLists = (id: string, callBack: any) => {
  const objectId = new ObjectId(id);
  db.collection('users').find({_id: objectId}).toArray((error:any, res: any[]) => {
    //  tslint:disable-next-line:no-console
    if (error) return console.log(error)
    return callBack(res[0].toDoLists)
  });
}

export const addToDo = (data: ToDo, id: string, listId: string) => {
  const objectId = new ObjectId(id);
  db.collection('users').update(
    { _id: objectId, "toDoLists.listId": listId },
    {
      $push: {
        "toDoLists.$.toDos":  data 
      }
    }
  )
}

