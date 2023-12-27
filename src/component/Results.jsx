import {useContext} from 'react';
import {PostContext} from '../App';

function Results() {
  const {posts} = useContext(PostContext);
  return (
    <p className="ms-auto nav-item mt-3 mt-md-0">
      🚀 {posts.length} atomic posts found
    </p>
  );
}

export default Results;
