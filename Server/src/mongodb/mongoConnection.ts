import mongo from 'mongodb';
import { SignIn, LogIn, ToDo, ToDoEdit } from './interface'

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
      return callBack(false);
    }
    return callBack(res);
  })
};

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
};

export const getLists = (id: string, callBack: any) => {
  const objectId = new ObjectId(id);
  db.collection('users').find({_id: objectId}).toArray((error:any, res: any[]) => {
    //  tslint:disable-next-line:no-console
    if (error) return console.log(error)
    return callBack(res[0].toDoLists)
  });
};

export const addToDo = (data: ToDo, id: string, listId: string) => {
  const objectId = new ObjectId(id);
  db.collection('users').updateOne(
    { _id: objectId, "toDoLists.listId": listId },
    {
      $push: {
        "toDoLists.$.toDos":  data
      }
    }
  )
};

export const getToDos = async (id: string, listId: string, callBack: any ) => {
  const objectId = new ObjectId(id);
  const lists = await db.collection('users').findOne({ _id : objectId })
  lists.toDoLists.map( (list: any) => {
    if (list.listId === listId) {
      callBack(list.toDos)
    };
  });
};

export const deleteToDo = (id: string, listId: string, toDoId: string, callback: any) => {
  const objectId = new ObjectId(id);
  db.collection('users').updateOne(
    { _id: objectId, "toDoLists.listId": listId },
    { $pull: { 'toDoLists.$.toDos': { id: toDoId } } }
  )
  .then(() => callback(true))
  .catch((err: Error) => callback(err));
};

export const checkedToDo = (id: string, listId: string, toDoId: string, complete: boolean) => {
  const objectId = new ObjectId(id);
  db.collection('users').updateOne(
    { _id: objectId, "toDoLists.listId": listId, "toDoLists.toDos.id": toDoId },
    {
      $set: {
        "toDoLists.$.toDos.$[toDo].complete":  complete
      }
    },
    {
      arrayFilters: [
        {
          "toDo.id": {
            $eq: toDoId
          }
        }
      ]
    }
  )
};

export const editToDo = (data: ToDoEdit, callback: any) => {
  const objectId = new ObjectId(data.id);
  db.collection('users').updateOne(
    { _id: objectId, "toDoLists.listId": data.listId, "toDoLists.toDos.id": data.toDoId },
    {
      $set: {
        "toDoLists.$.toDos.$[toDo].text":  data.text,
        "toDoLists.$.toDos.$[toDo].dateDeadLine":  data.deadLine
      }
    },
    {
      arrayFilters: [
        {
          "toDo.id": {
            $eq: data.toDoId
          }
        }
      ]
    }
  )
  .then(() => callback(true))
  .catch((err: Error) => callback(err))
};

export const shareToDos = (data: Array<ToDo>, email: string) => {
  console.log(data, email)
  db.collection('users').updateOne(
    { email: email, },
    {
      $push: {
        "toDoLists":  {name: "test", listId:"123-123-123", toDos: data }
      }
    }
  )

}
