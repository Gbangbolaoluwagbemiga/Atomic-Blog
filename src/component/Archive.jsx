import {useContext, useState} from 'react';
import {PostContext} from '../App';

function Archive() {
  const {onAddPost, createRandomPost} = useContext(PostContext);

  const [posts] = useState(() =>
    Array.from({length: 10}, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2 className="Archive text-center fw-bolder">Post archive</h2>
      <button onClick={() => setShowArchive(s => !s)}>
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </button>

      {showArchive && (
        <ul className="Archive-list">
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Archive;
