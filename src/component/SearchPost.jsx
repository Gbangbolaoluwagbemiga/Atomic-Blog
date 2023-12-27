import {useContext} from 'react';
import {PostContext} from '../App';

function SearchPosts() {
  const {searchQuery, setSearchQuery} = useContext(PostContext);
  return (
    <input
      className="ms-auto search-post"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
