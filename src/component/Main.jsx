import FormAddPost from './AddPost';
import Posts from './Posts';

function Main({posts, onAddPost}) {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

export default Main;
