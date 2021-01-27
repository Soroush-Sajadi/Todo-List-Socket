// tslint:disable-next-line:no-console
import express from 'express';
const router = express.Router();
import mongodb from './mongodb/mongoConnection'

router.get('/', async (req, res) => {
  const db = await mongodb()
  // tslint:disable-next-line:no-console
  console.log(db)
  res.json('ToDo List');
})

router.get('/api/account/:email/:password', async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  res.json(true)
})

router.post('/api/account', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  res.json(true)

})


export default router;