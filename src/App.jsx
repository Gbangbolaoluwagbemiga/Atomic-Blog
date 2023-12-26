import {useEffect, useState} from 'react';
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

  return (
    <section>
      <Header
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} createRandomPost={createRandomPost} />
      <Footer />
    </section>
  );
}

export default App;
