import {useEffect, useState} from 'react';
import Results from './Results';
import SearchPosts from './SearchPost';

function Header({posts, onClearPosts, searchQuery, setSearchQuery}) {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    // <header>
    //   <h1>
    //     <span>⚛️</span>The Atomic Blog
    //   </h1>
    //   <div>
    // <Results posts={posts} />
    // <SearchPosts
    //   searchQuery={searchQuery}
    //   setSearchQuery={setSearchQuery}
    // />
    // <button onClick={onClearPosts}>Clear posts</button>
    //   </div>
    // </header>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="header">
          <span>⚛️</span>The Atomic Blog
        </h1>{' '}
        <Results posts={posts} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <SearchPosts
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <button onClick={onClearPosts}>Clear posts</button>

          <button
            onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
            className="btn-fake-dark-mode"
          >
            {isFakeDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
