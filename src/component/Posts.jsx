import {useContext} from 'react';
import {PostContext} from '../App';
import List from './List';

function Posts() {
  const {posts} = useContext(PostContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
