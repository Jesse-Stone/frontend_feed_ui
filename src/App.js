import './App.css';

import Navbar from './Components/Navbar';
import Status from './Components/Status';
import Post from './Components/Post';
import Recommendations from './Components/Recommendations';

function App() {
  return (
  <div>
    <Navbar />
      <section className="main">
        <div className="wrapper">
          <div className="left-col">      
            <Status />
            <Post />           
          </div>
          <Recommendations />
        </div>
      </section>
</div>
  );
}

export default App;
