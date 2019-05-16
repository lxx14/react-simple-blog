import data from '../../../system/data.json';

export const getComments = () => {
  return fetch(data.getComments).then((responce) => { return responce.json() })
}