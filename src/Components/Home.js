import Status from './Status';
import Post from './Post';
import Recommendations from './Recommendations';

function Home() {
  return (
      <section className="main">
        <div className="wrapper">
          <div className="left-col">      
            <Status />
            <Post />           
          </div>
          <Recommendations />
        </div>
      </section>
  );
}

export default Home;