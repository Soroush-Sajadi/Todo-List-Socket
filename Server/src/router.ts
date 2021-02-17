// tslint:disable-next-line:no-console
import express from 'express';
const router = express.Router();
import { signIn, logIn, getLists, addList, addToDo, getToDos } from './mongodb/mongoConnection';

router.get('/', (req, res) => {

  res.json('hi');
})

router.get('/api/account/:email/:password', async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  logIn({email, password}, (result: any) => {
    res.json(result[0])
  })
})

router.post('/api/account', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  signIn({username, email, password}, (result: any) => {
    res.json(result);
  })
})

router.post('/api/list', (req, res) => {
  const list = req.body.list;
  const id = req.body.id
  const listId = req.body.listId
  addList(id, list, listId, (result: any) => {
    res.json(result)
  })
})

router.get('/api/list/:id', (req, res) => {
  const id = req.params.id
  getLists(id, (result: any) => {
    res.json(result)
  })
})

router.post('/api/list/todo', (req, res) => {
  const data = req.body.data;
  const id = req.body.id;
  const listId = req.body.listId
  addToDo(data, id, listId)
})

router.get('/api/list/todos/:id/:listId', (req, res) => {
  const id = req.params.id
  const listId = req.params.listId
  getToDos(id, listId, (result: any) => {
    res.json(result)
  })
})


export default router;