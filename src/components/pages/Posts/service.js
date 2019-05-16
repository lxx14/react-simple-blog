import data from '../../../system';

export const getSomethingFromServer = () => {
  return fetch(data.getPosts).then((responce) => {return responce.json()})
}