function SearchPosts({searchQuery, setSearchQuery}) {
  return (
    <input
      className="ms-auto"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
