import  SignIn  from './signInModel';
import { modelHandler, Update } from '../base';

const baseUrl = '/api/account';

const { createModel } = modelHandler(SignIn, baseUrl);


export async function save(instrument: SignIn): Promise<Update<SignIn>> {
  const update = await createModel(instrument);
  // postUpdate(update);
  return update;
}