import axios from 'axios';
import { useQuery } from 'react-query';
import { Post } from '../types/Post';

export const usePosts = () => {
  return useQuery(
    'posts',
    async (): Promise<Array<Post>> => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      return data;
    },
  );
};
