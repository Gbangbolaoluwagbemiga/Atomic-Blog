import {useContext, useEffect, useState} from 'react';
import Results from './Results';
import SearchPosts from './SearchPost';
import {PostContext} from '../App';

function Header() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  const {onClearPosts} = useContext(PostContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="header">
          <span>⚛️</span>The Atomic Blog
        </h1>{' '}
        <button
          className="navbar-toggler hamburger"
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
          <Results />
          <SearchPosts />
          <div className="d-flex justify-content-between ms-md-3">
            <button className=" clear-post " onClick={onClearPosts}>
              Clear posts
            </button>

            <button
              onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
              className="btn-fake-dark-mode ms-md-3"
            >
              {isFakeDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
