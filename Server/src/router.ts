// tslint:disable-next-line:no-console
import express from 'express';
const router = express.Router();
import cors from 'cors';

router.use(cors());

router.get('/', (req, res) => {
  res.json('ToDo List');
})

router.get('/account/:email/password', (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  // tslint:disable-next-line:no-console
  console.log(email, password);
})

router.post('/api/account', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
// tslint:disable-next-line:no-console
})


export default router;