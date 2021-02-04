// import { mongodb } from '../mongodb/mongoConnection'
// import { SignIn, LogIn } from '../mongodb/interface';
// import db from '../mongodb/mongoConnection'
// export const signIn = (user: SignIn, callBack: any) => {
//     // tslint:disable-next-line:no-console
//   console.log(db)
//   db.collection('users').find({ email: user.email }).toArray((error: any, res: string | any[]) => {
//     //  tslint:disable-next-line:no-console
//     if (error) return console.log(error)
//     if (res.length === 0) {
//       db.collection('users').insertOne({
//         username: user.username,
//         email: user.email,
//         password: user.password
//       })
//       return callBack(true)
//     }
//     return callBack(false)
//   })
// }
//# sourceMappingURL=signin.js.map