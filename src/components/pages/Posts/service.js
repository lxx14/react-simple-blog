import data from '../../../system/data.json';

export const getPosts = () => {
  return fetch(data.getPosts).then((responce) => { return responce.json() })
}