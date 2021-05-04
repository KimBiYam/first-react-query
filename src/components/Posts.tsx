import React from 'react';
import { useQueryClient } from 'react-query';
import { usePosts } from '../hooks/usePosts';

interface Props {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const Posts = ({ setPostId }: Props) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return <div></div>;
};

export default Posts;
