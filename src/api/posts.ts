import axios from 'axios';
import { Post } from '../types/post';

export const fetchPosts = async () => {
  try {
    const { data } = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      throw error.message;
    } else {
      console.log('unexpected error: ', error);
      throw error;
    }
  }
}