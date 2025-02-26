import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {
      posts.map((postItem) => (
        <PostInfo post={postItem} key={postItem.id} />
      ))
    }

  </div>
);
