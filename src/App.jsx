import {createContext, useState} from 'react';
import {faker} from '@faker-js/faker';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Archive from './component/Archive';

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({length: 30}, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter(post =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const Props = {
    posts: searchedPosts,
    onClearPosts: handleClearPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
    createRandomPost,
  };

  return (
    <PostContext.Provider value={Props}>
      <section>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}

export default App;
